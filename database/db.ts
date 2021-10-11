import { T_Banner } from '../utils/types/banner';
import { T_Category } from '../utils/types/categories';
import { DATAPATHS } from '../utils/types/datapaths';
import utils from '../utils/utils';

export type FileReadType = T_Banner | T_Category;

const db = {
  get: async function (
    folderName: string,
    fileName: string
  ): Promise<FileReadType[] | null> {
    const data = await utils.readFile(folderName, fileName);
    return data;
  },
  getSortedByOrder: async function (
    folderName: string,
    fileName: string
  ): Promise<FileReadType[] | null> {
    const data = await utils.readFile(folderName, fileName);
    if (data) {
      const sortedData = data.sort((a, b) => {
        return a.order - b.order;
      });
      // Discriminated Unions
      const filteredData: FileReadType[] = sortedData.filter((d) => {
        if (d.kind === 'banner') {
          return d.isActive;
        } else {
          return d.enabled;
        }
      });
      return filteredData;
    }
    return data;
  },
};

export default db;

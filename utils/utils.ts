import path from 'path';
import fs from 'fs/promises';

const utils = {
  readFile: async function <T>(
    folderName: string,
    fileName: string
  ): Promise<T[] | null> {
    try {
      const fileLocation = path.join(
        process.cwd(),
        `server/${folderName}`,
        fileName
      );
      const jsonData = await fs.readFile(fileLocation, 'utf8');
      const data = JSON.parse(jsonData);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  sortByOrder: function <DataType, KeyType extends keyof DataType>(
    items: DataType[],
    key: KeyType
  ): DataType[] {
    if (items && Array.isArray(items)) {
      return items.sort((a, b) => {
        if (a[key] < b[key]) {
          return -1;
        }
        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      });
    }
    return items;
  },
  filterByKey: function <DataType, KeyType extends keyof DataType>(
    data: DataType[],
    key: KeyType,
    comparer?: string
  ): DataType[] {
    if (data && Array.isArray(data)) {
      return data.filter((d) => {
        if (comparer) {
          return String(d[key]) === comparer;
        }
        return d[key];
      });
    }
    return data;
  },
};

export default utils;

import path from 'path';
import fs from 'fs/promises';
import { FileReadType } from '../database/db';

const utils = {
  readFile: async function (
    folderName: string,
    fileName: string
  ): Promise<FileReadType[] | null> {
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
};

export default utils;

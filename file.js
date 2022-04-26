/* eslint-disable no-unused-vars */
import RNFS from 'react-native-fs';

export default class File {
  /**
   * Gets the file extension.
   * @param {String} file
   */
  static getFileNameFromPath(file) {
    const index = file.lastIndexOf('/');
    const filename = file.substring(index + 1);
    return filename;
  }

  /**
   * Gets the file extension.
   * @param {String} file
   */
  static getFileExtension(file) {
    const index = file.lastIndexOf('.');
    const extension = file.substring(index + 1);
    return extension;
  }

  /**
   * Saves the base64 file to local storage.
   * @param {String} fileName
   * @param {String} base64
   */
  static async saveBase64FileAsync(fileName, base64) {
    try {
      const path = `${RNFS.TemporaryDirectoryPath}/${fileName}`;
      const base64Splited = base64.split(';');
      const base64String = base64Splited[1].replace('base64,', '');
      const result = await RNFS.writeFile(path, base64String, 'base64');
      return `file://${path}`;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
}

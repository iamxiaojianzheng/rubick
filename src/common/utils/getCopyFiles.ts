import clipboardFiles from 'clipboard-files';
import fs from 'fs';
import path from 'path';
import ofs from 'original-fs';

export default function getCopyFiles(): Array<any> | null {
  const filePaths = clipboardFiles.readFiles();
  if (!Array.isArray(filePaths)) return null;
  const copyFiles: any = filePaths
    .map((p) => {
      if (!fs.existsSync(p)) return false;
      let fileInfo;
      try {
        fileInfo = ofs.lstatSync(p);
      } catch (e) {
        return false;
      }
      return {
        isFile: fileInfo.isFile(),
        isDirectory: fileInfo.isDirectory(),
        name: path.basename(p) || p,
        path: p,
      };
    })
    .filter(Boolean);
  return copyFiles.length ? copyFiles : null;
}

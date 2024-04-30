export const getFileTypeFromName = (fileName: string): string => {
  return fileName.slice(fileName.lastIndexOf('.') + 1);
};

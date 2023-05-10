export const getFileNameFromUrl = (url: string): string => {
    const lastSlashIndex = url.lastIndexOf('/');
    const fileName = url.substring(lastSlashIndex + 1);
  
    return fileName;
  };


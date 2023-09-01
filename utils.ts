// 获取路径的文件的名字（默认无扩展名字）
export function extractFileNameWithoutExtension(
  filePath: string,
  needExt = false
) {
  // 从路径中提取文件名部分
  const lastIndex = filePath.lastIndexOf("/");
  const fileNameWithExtension = filePath.substring(lastIndex + 1);

  // 去除扩展名部分
  const dotIndex = fileNameWithExtension.lastIndexOf(".");
  const fileNameWithoutExtension = fileNameWithExtension.substring(0, dotIndex);

  if (needExt) {
    return fileNameWithExtension;
  } else {
    return fileNameWithoutExtension;
  }
}

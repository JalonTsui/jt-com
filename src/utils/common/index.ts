// 随机获取rgba进制颜色
export function getRandomRGB(opacity = 1) {
  // Generate random values for each component (red, green, blue) in the range 0-255
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Combine the components into an RGB string
  const rgbColor = `rgba(${red}, ${green}, ${blue},${opacity})`;

  return rgbColor;
}

export const recommendClothes = (temp: number): string => {
  if (temp >= 25) return "반팔티";
  if (temp >= 20) return "긴팔티";
  if (temp >= 17) return "니트";
  if (temp >= 12) return "얇은 겉옷";
  if (temp >= 6) return "두툼한 겉옷";
  return "패딩";
};

export const clothImage = (temp: number): string => {
  if (temp >= 25) return "tshirt.png";
  if (temp >= 20) return "long-sleeve-tshirt.png";
  if (temp >= 17) return "knit.png";
  if (temp >= 12) return "jacket.png";
  if (temp >= 6) return "coat.png";
  return "down-jacket.png";
};

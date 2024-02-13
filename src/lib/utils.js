export const breakLongURL = (url) => {
  const maxLength = 40; // Set the maximum length for each line
  const parts = [];
  for (let i = 0; i < url.length; i += maxLength) {
    parts.push(url.substring(i, i + maxLength));
  }
  return parts.join('\n');
};

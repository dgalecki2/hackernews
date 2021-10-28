export const renderUrlDomain = (url = "") => {
  const matches = url && url.match(/^https?:\/\/([^/?#]+)(?:[/?#]|$)/i);
  return matches?.[1];
};

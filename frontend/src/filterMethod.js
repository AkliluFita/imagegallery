export const doFilter = (imgCat, setFilter, imgPosts) => {
  switch (imgCat) {
    case "events":
      setFilter(imgPosts.filter((item) => item.category === "events"));
      break;
    case "gallery":
      setFilter(imgPosts.filter((item) => item.category === "gallery"));
      break;
    case "interview":
      setFilter(imgPosts.filter((item) => item.category === "interview"));
      break;
    case "general":
      setFilter(imgPosts.filter((item) => item.category === "general"));
      break;
    case "well-known":
      setFilter(imgPosts.filter((item) => item.category === "well-known"));
      break;
    default:
      setFilter(imgPosts);
      break;
  }
};

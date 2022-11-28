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
    case "politics":
      setFilter(imgPosts.filter((item) => item.category === "politics"));
      break;
    case "sport":
      setFilter(imgPosts.filter((item) => item.category === "sport"));
      break;
    case "social":
      setFilter(imgPosts.filter((item) => item.category === "social"));
      break;
    case "parliament":
      setFilter(imgPosts.filter((item) => item.category === "parliament"));
      break;
    default:
      setFilter(imgPosts);
      break;
  }
};

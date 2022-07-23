import includes from "lodash/includes";

const Searcher = (obj, word) => {
  const LastList = [];
  const getAllLinks = (obj) => {
    if (Array.isArray(obj)) {
      for (let key of obj) {
        if (Array.isArray(obj[key])) {
          getAllLinks(obj[key]);
        } else if (typeof obj[key] === "object") {
          getAllLinks(obj[key]);
        } else if (includes(obj[key], word)) {
          LastList.push(obj[key]);
        }
      }
    }
    if (typeof obj === "object") {
      for (let key in obj) {
        if (Array.isArray(obj[key])) {
          getAllLinks(obj[key]);
        } else if (typeof obj[key] === "object") {
          getAllLinks(obj[key]);
        } else if (includes(obj[key], word)) {
          LastList.push(obj[key]);
        }
      }
    }
    return LastList;
  };
  return getAllLinks(obj);
};

export default Searcher;

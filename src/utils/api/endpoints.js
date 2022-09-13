const ENDPOINTS = {
  BASEURL: "https://www.themealdb.com/api/json/v1/1/",

  get CATEGORIES() {
    return `${this.BASEURL}categories.php`;
  },
  get FILTER() {
    return `${this.BASEURL}/filter.php?c=`;
  },
};
export default ENDPOINTS;

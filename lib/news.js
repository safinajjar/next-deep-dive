import { DUMMY_NEWS } from "@/dummy-news";

export const getAllNews = () => {
  return DUMMY_NEWS;
};

export const getLatestNews = () => {
  return DUMMY_NEWS.slice(0, 3);
};

export const getAvailableNewsYears = () => {
  // Set is a collection of unique values
  return [
    ...new Set(DUMMY_NEWS.map((news) => new Date(news.date).getFullYear())),
  ].sort((a, b) => b - a);
};

export const getNewsForYear = (year) => {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
};

export const getAvailableNewsMonths = (year) => {
  return getNewsForYear(year)
    .map((news) => new Date(news.date).getMonth())
    .sort((a, b) => b - a);
};

export const getNewsForYearAndMonth = (year, month) => {
  return getNewsForYear(year).filter(
    (news) => new Date(news.date).getMonth() === +month
  );
};

import { ACTION_GET_CATEGORIES } from "../../constatnts/categories";

export const fetchCategories = () => {
  return {
    type: ACTION_GET_CATEGORIES,
  };
};

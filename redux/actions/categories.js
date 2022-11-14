import { ACTION_GET_CATEGORIES } from "../../constants/categories";

export const fetchCategories = () => {
  return {
    type: ACTION_GET_CATEGORIES,
  };
};

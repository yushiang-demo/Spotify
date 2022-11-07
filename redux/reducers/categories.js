import produce from "immer";
import {
  ACTION_GET_CATEGORIES,
  ACTION_GET_CATEGORIES_SUC,
  ACTION_GET_CATEGORIES_FAL,
} from "../../constatnts/categories";

const initialState = {
  categories: [],
  isLoading: true,
  error: null,
};

const categories = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ACTION_GET_CATEGORIES:
        draft.isLoading = true;
        break;
      case ACTION_GET_CATEGORIES_SUC:
        draft.isLoading = false;
        draft.categories = action.payload?.categories;
        draft.error = null;
        break;
      case ACTION_GET_CATEGORIES_FAL:
        draft.isLoading = false;
        draft.error = action.payload?.error;
        break;
      default:
        break;
    }
  });

export default categories;

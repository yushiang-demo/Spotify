import { useTranslation } from "next-i18next";
import {
  Title,
  Wrapper,
  More,
  WrapperCategories,
  KeepRatioWrapper,
} from "./styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/actions/categories";
import { fetchPlaylistsById } from "../../redux/actions/playlists";
import Category from "./item";

const Categories = ({ visibleCount = 12 }) => {
  const { t } = useTranslation("categories");
  const title = t("title");
  const more = t("more");

  const dispatch = useDispatch();
  const { categories, isLoading, error } = useSelector(
    (state) => state.categories,
  );
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const onClick = (categoryId) => {
    return () => {
      dispatch(fetchPlaylistsById(categoryId));
    };
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <KeepRatioWrapper>
        <WrapperCategories isLoading={isLoading} errorMessage={error?.message}>
          {categories?.items &&
            [...Array(visibleCount)].map((_, index) => {
              if (categories?.items[index]) {
                return (
                  <Category
                    key={index}
                    {...categories?.items[index]}
                    onClick={onClick}
                  />
                );
              } else {
                return null;
              }
            })}
        </WrapperCategories>
      </KeepRatioWrapper>
      <More>{more}</More>
    </Wrapper>
  );
};

export default Categories;

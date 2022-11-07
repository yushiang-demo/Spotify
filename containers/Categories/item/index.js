import { Wrapper } from "./styled";

const Category = ({ icons, name, id, onClick }) => {
  //   console.log(icons, name, id);
  return (
    <Wrapper url={icons[0]?.url} onClick={onClick(id)}>
      {name}
    </Wrapper>
  );
};

export default Category;

import { Wrapper, Text } from "./styled";

const Category = ({ icons, name, id, onClick }) => {
  return (
    <Wrapper url={icons[0]?.url} onClick={onClick(id)}>
      <Text>{name}</Text>
    </Wrapper>
  );
};

export default Category;

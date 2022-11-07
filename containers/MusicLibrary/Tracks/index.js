import { Wrapper } from "./styled";
import Track from "./Item";

const Tracks = ({ items }) => {
  return (
    <Wrapper>
      {items?.map((item, index) => (
        <Track key={index} {...item} />
      ))}
    </Wrapper>
  );
};

export default Tracks;

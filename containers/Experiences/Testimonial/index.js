import { Wrapper, Comma, Message, Photo, Name, JobTilte } from "./styled";
const Post = ({ message, name, jobTitle, photo, icon }) => {
  return (
    <Wrapper>
      <Comma {...icon} />
      <Message>{message}</Message>
      <Photo {...photo} />
      <Name>{name}</Name>
      <JobTilte>{jobTitle}</JobTilte>
    </Wrapper>
  );
};

export default Post;

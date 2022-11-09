import { useDispatch, useSelector } from "react-redux";

import { playTrack, stopTrack } from "../../../redux/actions/tracks";
import Track from "./Item";
import { Wrapper } from "./styled";

const Tracks = ({ items, isLoading, error }) => {
  const currentTrackId = useSelector((state) => state.tracks.currentTrackId);
  const dispatch = useDispatch();

  const playFactory = (id) => {
    return () => {
      dispatch(playTrack(id));
    };
  };

  const stop = () => {
    dispatch(stopTrack());
  };

  return (
    <Wrapper isLoading={isLoading} errorMessage={error?.message}>
      {!isLoading &&
        items?.map((item, index) => {
          // track's preview_url from spotify api is not existed
          if (item?.track?.preview_url) {
            return (
              <Track
                key={index}
                {...item}
                isPlaying={item?.track.id === currentTrackId}
                play={playFactory(item?.track.id)}
                stop={stop}
              />
            );
          }
          return null;
        })}
    </Wrapper>
  );
};

export default Tracks;

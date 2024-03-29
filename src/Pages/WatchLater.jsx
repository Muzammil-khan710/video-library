import React from "react";
import { Header, PlaylistModal, Sidebar, WatchLaterVideos } from "../Components";
import { usePLaylist } from "../Context/PlaylistContext";

const WatchLaterPage = () => {
  const { currentModalId } = usePLaylist();

  return (
    <>
      <Header />
      <Sidebar />
      <WatchLaterVideos />
      <PlaylistModal videoId={currentModalId} />
    </>
  );
};

export { WatchLaterPage };

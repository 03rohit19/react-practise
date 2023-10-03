import Video from "./video";
import ProveButton from "./ProveeButton";

function VideoList({ vid, deleteVideo, editVideo }) {
  return (
    <>
      {vid.map((e) => (
        <div key={e.id}>
          <Video
            verified={e.verified}
            title={e.title}
            view={e.view}
            time={e.time}
            channel={e.channel}
            deleteVideo={deleteVideo}
            editVideo={editVideo}
            id={e.id}
          />
          <ProveButton
            onPlay={() => console.log("playing", e.title)}
            onPause={() => console.log("paused", e.title)}
          >
            {" "}
          </ProveButton>
        </div>
      ))}
    </>
  );
}
export default VideoList;

import "./AddVideo.css";
import { useEffect, useState } from "react";

function AddVideos({ combVideos, editableVideo, updateVideo }) {
  const initialState = {
    title: "",
    view: "",
    time: "1 month ago",
    channel: "Good channel",
    verified: true,
  };

  const [vid, setVid] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();

    if (editableVideo) {
      updateVideo(vid);
    } else {
      combVideos(vid);
    }

    setVid(initialState);
  }

  function handleChange(e) {
    setVid({ ...vid, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    console.log("effect");
    if (editableVideo) {
      setVid(editableVideo);
    }
  }, [editableVideo]);

  return (
    <form>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
        value={vid.title}
      />

      <input
        type="text"
        placeholder="views"
        name="view"
        onChange={handleChange}
        value={vid.view}
      />

      <div>
        <button onClick={handleSubmit}>{editableVideo ? "Edit" : "Add"}</button>
      </div>
    </form>
  );
}

export default AddVideos;

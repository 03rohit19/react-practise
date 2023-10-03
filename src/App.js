import React, { useReducer, useState } from "react";

import "./App.css";

import videosDB from "./utils/Data";
import AddVideos from "./Components/AddVideos";
import VideoList from "./Components/VideoList";

function App() {
  function videoReducer(vid, action) {
    switch (action.type) {
      case "ADD":
        return [...vid, { ...action.payload, id: vid.length + 1 }];
      case "DELETE":
        return vid.filter((e) => e.id !== action.payload);

      default:
        return vid;
    }
  }

  const [vid, dispatch] = useReducer(videoReducer, videosDB);

  const [editableVideo, setEditableVideo] = useState(null);

  function combVideos(newVideo) {
    dispatch({ type: "ADD", payload: vid });
  }

  function deleteVideo(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function editVideo(id) {
    console.log(id);
    setEditableVideo(vid.find((e) => e.id === id));
  }

  function updateVideo(updatedVideo, id) {
    const index = vid.findIndex((e) => e.id === id);

    const updatedVideos = [...vid];
    updatedVideos.splice(index, 1, vid);
    // setVid(updatedVideos);
  }

  return (
    <div>
      <div className="App-header">
        <AddVideos
          combVideos={combVideos}
          editableVideo={editableVideo}
          updateVideo={updateVideo}
        />
        <VideoList
          deleteVideo={deleteVideo}
          editVideo={editVideo}
          vid={vid}
        ></VideoList>
      </div>
    </div>
  );
}

export default App;

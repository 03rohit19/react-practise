import React from "react";
import "./Video.css";

const Video = ({
  title,
  channel,
  view,
  time,
  verified,
  deleteVideo,
  id,
  editVideo,
}) => {
  return (
    <>
      <div className="container">
        <button className="close" onClick={() => deleteVideo(id)}>
          X
        </button>
        <button className="close" onClick={() => editVideo(id)}>
          edit
        </button>
        <img
          src="https://loremflickr.com/640/360"
          alt="cat"
          className="pic"
        ></img>
        <div className="title">{title}</div>

        <div className="channel">
          {channel}
          {verified ? "✔️" : null}
        </div>

        <div className="view">
          {view} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
};
export default Video;

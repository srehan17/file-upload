import React, { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import LinearProgress from "@mui/material/LinearProgress";
import ".././App.css";

const fileTypes = ["JPG", "PNG", "GIF"];

const DropZoneComponent = () => {
  const [file, setFile] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [text, setText] = useState(null);

  const handleChange = (file) => {
    setFile(file);
    setShowInput(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowProgressBar(true);
    setText("");
  };

  const [percentage, setPercentage] = React.useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setPercentage((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
      if (percentage > 99) {
        setShowProgressBar(false);
      }
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginTop: "40px" }}>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
      </div>
      <div
        className="custodianInput"
        style={{ display: showInput ? "block" : "none", marginTop: "40px" }}
      >
        <label>
          Custodian
          <input
            type="text"
            value={text}
            style={{
              marginLeft: "7px",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            marginLeft: "30px",
            textTransform: "uppercase",
            marginBottom: "40px",
          }}
        >
          Submit
        </button>
        <div style={{ display: showProgressBar ? "block" : "none" }}>
          <LinearProgress
            variant="determinate"
            value={percentage}
            disabled={setShowProgressBar ? false : true}
          />
        </div>
      </div>
    </form>
  );
};

export default DropZoneComponent;

import "./App.css";
import Form from "./components/Form";
import DropZoneComponent from "./components/DropzoneComponent";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <DropZoneComponent />
    </div>
  );
}

export default App;

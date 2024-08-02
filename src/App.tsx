import React from "react";
import NodeGraph from "./components/NodeGraph";
import data from "./data/Test-nodes-53.json";
import { GeometryNodeFile } from "./types";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import "@xyflow/react/dist/style.css";
import "./App.css";

function App() {
  const [code, setCode] = React.useState(JSON.stringify(data, null, 2));
  const [parsedData, setParsedData] = React.useState(data as GeometryNodeFile);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    try {
      const updatedData = JSON.parse(newCode);
      setParsedData(updatedData);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };

  return (
    <div className="split-screen">
      <div className="left-pane">
        <AceEditor
          mode="json"
          theme="monokai"
          value={code}
          onChange={handleCodeChange}
          name="codeEditor"
          editorProps={{ $blockScrolling: true }}
          setOptions={{ useWorker: false }}
          width="100%"
          height="100%"
        />
      </div>
      <div className="right-pane">
        <NodeGraph data={parsedData} />
      </div>
    </div>
  );
}

export default App;
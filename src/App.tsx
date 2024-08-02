import NodeGraph from "./components/NodeGraph";
import data from "./data/Test-nodes-53.json";
import { GeometryNodeFile } from "./types";
import '@xyflow/react/dist/style.css';


function App() {
  return <NodeGraph data={data as GeometryNodeFile} />;
}

export default App;


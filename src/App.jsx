import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import { initialNodes, initialEdges } from "./configs/flow";
import CustomNode from "./components/CustomNode";

const Flow = () => {
  return (
    <div className="w-screen h-screen">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={{ custom: CustomNode }}
        fitView
        attributionPosition="bottom-left"
      />
    </div>
  );
};

export default Flow;

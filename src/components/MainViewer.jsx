import React, {useState} from "react";
import GraphViewer from "./GraphViewer";
import LabelPanel from "./LabelPanel";

const MainViewer = () => {

  const [label, setLabel] = useState(""); 

  const tappedNodeHandler = (node) => {
    setLabel(node.id())
  };

  return (
    <div className="main-viewer">
      <GraphViewer onTapped={tappedNodeHandler} />
      <LabelPanel label={label}/>
    </div>
  );
};

export default MainViewer;

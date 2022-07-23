// import React, { useEffect,useState } from "react";
// import Cytoscape from "cytoscape";
// import CytoscapeComponent from "react-cytoscapejs";

// const GraphViewer = () => {

//     const [cyto, setCyto] = useState();

//   const initListeners = () => {
//     cyto.on("tap", "node", (evt) => {
//       var node = evt.target;
//       console.log("tapped " + node.id());
//     });
//   };

//   useEffect(() => {
//     console.log("Hello World");
//     return () => {
//       console.log("remove listeners");
//       if (cyto) {
//         cyto.removeAllListeners();
//       }
//     };
//   }, []);

//   const elements = [
//     { data: { id: "cat", label: "cat" } },
//     { data: { id: "bird", label: "bird" } },
//     { data: { id: "ladybug", label: "ladybug" } },
//     { data: { id: "aphid", label: "aphid" } },
//     { data: { id: "rose", label: "rose" } },
//     { data: { id: "grasshopper", label: "grasshopper" } },
//     { data: { id: "plant", label: "plant" } },
//     { data: { id: "wheat", label: "wheat" } },
//     { data: { source: "cat", target: "bird" } },
//     { data: { source: "bird", target: "ladybug" } },
//     { data: { source: "bird", target: "grasshopper" } },
//     { data: { source: "grasshopper", target: "plant" } },
//     { data: { source: "grasshopper", target: "wheat" } },
//     { data: { source: "ladybug", target: "aphid" } },
//     { data: { source: "aphid", target: "rose" } },
//   ];

//   const layout = { name: "breadthfirst" };

//   return (
//     <CytoscapeComponent
//       elements={elements}
//       layout={layout}
//       cy={(cy) => {
//         cy = cyto;
//         initListeners();
//       }}
//       stylesheet={[
//         {
//           selector: "node",
//           style: {
//             "background-color": "#282",
//             // label: "data(label)",
//           },
//         },
//         {
//           selector: 'node[type="comp"]',
//           style: {
//             "background-color": "#822",
//           },
//         },
//         {
//           selector: "edge",
//           style: {
//             width: 2,
//             "line-color": "#ccc",
//             "target-arrow-color": "#ccc",
//             "target-arrow-shape": "triangle",
//             "curve-style": "bezier",
//           },
//         },
//       ]}
//       style={{
//         width: "600px",
//         height: "600px",
//       }}
//     />
//   );
// };

// export default GraphViewer;

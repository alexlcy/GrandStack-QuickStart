import React, {useRef} from 'react'
import {ForceGraph2D} from 'react-force-graph';

export default function Graph(data) {
    const forceRef = useRef();

    const handleNodeClick = (node) => {
          forceRef.current.zoom(3.5, 400);
          forceRef.current.centerAt(node.x, node.y, 400);
      };
    

  return (
      <ForceGraph2D
      ref={forceRef}
      onNodeClick={handleNodeClick}
          
      graphData={data.data}
      nodeAutoColorBy={d => d.label}
      linkAutoColorBy={d => d.name}
      height={800}
          nodeRelSize={3}
          
      linkOpacity={0.4}
          linkWidth={2}
          nodeCanvasObjectMode={() => "after"}
          nodeVisibility={(node) => { return true; }}
          nodeCanvasObject={(node, ctx, globalScale) => {

            const label = node.name;
            const fontSize = 5
            ctx.font = `${fontSize}px Sans-Serif`;
            ctx.textAlign = "end";
              ctx.textBaseline = "middle";
              if (label !== undefined) {
                ctx.fillText(label, node.x, node.y + 2.5);
              } else {
                ctx.fillText("Review", node.x, node.y + 2.5);
              }
              ctx.fillStyle = "white"
              ctx.textBaseline = "middle";
          }}
          
    />
  );
}
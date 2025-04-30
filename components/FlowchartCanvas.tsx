'use client';
import React, { useState } from 'react';

interface Node {
  id: number;
  label: string;
  x: number;
  y: number;
}

export function FlowchartCanvas() {
  const [nodes, setNodes] = useState<Node[]>([
    { id: 1, label: 'Start', x: 100, y: 100 },
  ]);

  return (
    <div className="border rounded w-full h-[400px] bg-white relative overflow-hidden">
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute px-4 py-2 bg-blue-500 text-white rounded shadow"
          style={{ top: node.y, left: node.x }}
        >
          {node.label}
        </div>
      ))}
    </div>
  );
}

// /components/Sidebar.tsx
'use client';

import React from 'react';

const Sidebar = () => {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="w-60 p-4 bg-gray-100 border-r border-gray-300">
      <h3 className="font-bold mb-4 text-lg">Nodes</h3>
      <div
        className="p-2 mb-2 bg-white border border-gray-400 rounded cursor-move"
        onDragStart={(event) => onDragStart(event, 'default')}
        draggable
      >
        Default Node
      </div>
      <div
        className="p-2 mb-2 bg-white border border-gray-400 rounded cursor-move"
        onDragStart={(event) => onDragStart(event, 'input')}
        draggable
      >
        Input Node
      </div>
      <div
        className="p-2 mb-2 bg-white border border-gray-400 rounded cursor-move"
        onDragStart={(event) => onDragStart(event, 'output')}
        draggable
      >
        Output Node
      </div>
    </aside>
  );
};

export default Sidebar;

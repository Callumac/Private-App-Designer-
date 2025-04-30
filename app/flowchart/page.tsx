'use client';
import { FlowchartCanvas } from '@/components/FlowchartCanvas';

export default function FlowchartPage() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Flowchart Designer</h1>
      <FlowchartCanvas />
    </main>
  );
}

// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Welcome to Private App Designer</h2>
      <p>Choose a module to get started:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <Link href="/(modules)/flowchart-builder" className="text-blue-600 hover:underline">
            Flowchart Builder
          </Link>
        </li>
        <li>Prototype Generator (coming soon)</li>
        <li>Full App Builder (coming soon)</li>
      </ul>
    </div>
  );
}

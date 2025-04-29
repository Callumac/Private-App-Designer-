// app/layout.tsx
export const metadata = {
  title: 'Private App Designer',
  description: 'Modular AI-powered web app builder',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <header className="p-4 bg-gray-200 dark:bg-gray-800 shadow">
          <h1 className="text-xl font-bold">Private App Designer</h1>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}

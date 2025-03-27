export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6 bg-gray-100 text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">Silent Return</h1>
        <p className="mb-6 text-lg">An anonymous lost & found return system for boarding schools</p>
        <div className="space-x-4">
          <a href="/return" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Return Item</a>
          <a href="/lost" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Report Lost Item</a>
        </div>
      </div>
    </main>
  );
}

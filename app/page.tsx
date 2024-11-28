export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Brand Listening Tool</h1>
      <p className="text-gray-600 mb-8">
        Monitor brand mentions and analyze sentiment across the web.
      </p>
      <div className="flex gap-4">
        <input 
          type="text"
          placeholder="Enter brand name or keyword"
          className="flex-1 px-4 py-2 border rounded-lg"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Search
        </button>
      </div>
    </main>
  )
}

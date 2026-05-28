export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-blue-700">
        College Discovery Platform
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Find the best colleges easily 🚀
      </p>

      <div className="mt-8">
        <input
          type="text"
          placeholder="Search colleges..."
          className="border p-3 rounded-lg w-full max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-2xl font-semibold">IIT Hyderabad</h2>
          <p>Top Engineering College</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-2xl font-semibold">JNTU Hyderabad</h2>
          <p>Government University</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-2xl font-semibold">VIT Vellore</h2>
          <p>Private Engineering College</p>
        </div>
      </div>
    </main>
  );
}

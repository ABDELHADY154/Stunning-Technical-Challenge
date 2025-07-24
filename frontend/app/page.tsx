"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [idea, setIdea] = useState("");
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await axios.post("http://localhost:3001/sections", { idea });
      const res = await axios.get("http://localhost:3001/sections");
      setSections(res.data);
    } catch (err) {
      setError("Failed to fetch sections");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Website Idea Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={idea}
          onChange={e => setIdea(e.target.value)}
          placeholder="Enter your idea (e.g., Landing page for bakery)"
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 mt-2"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Sections"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Generated Sections</h2>
        {sections.map((item: any) => (
          <div key={item._id} className="border p-2 mt-2">
            <p className="font-bold">{item.idea}</p>
            <ul className="list-disc ml-6">
              {item.sections.map((section: string, idx: number) => (
                <li key={idx}>{section}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

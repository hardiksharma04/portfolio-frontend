import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
      <div className="grid grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="border p-4 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-gray-700">{p.description}</p>
            <a href={p.link} className="text-blue-500 underline">View</a>
          </div>
        ))}
      </div>
    </div>
  );
}

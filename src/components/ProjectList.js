import { useEffect, useState } from "react";
import axios from "axios";

// API_URL points to your Render backend
const API_URL = "https://portfolio-backend-7ine.onrender.com/";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // GET request to /projects endpoint
    axios
      .get(`${API_URL}/projects`)
      .then((res) => setProjects(res.data))
      .catch((err) =>
        console.error("Error fetching projects:", err.response?.data || err.message)
      );
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
      <div className="grid grid-cols-3 gap-6">
        {projects.map((p, index) => (
          // If your backend doesn't provide an 'id', use index as key
          <div
            key={p.id || index}
            className="border p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-gray-700">{p.description}</p>
            <a
              href={p.link}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import axios from "axios";
import AddProject from "./components/AddProject";
import ProjectList from "./components/ProjectList";

export default function App() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await axios.get("http://127.0.0.1:5000/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-600 p-4 shadow-md">
        <h1 className="text-2xl font-bold text-white text-center">My Portfolio</h1>
      </nav>

      <div className="text-center py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
       <h2 className="text-4xl font-bold mb-2">Hi, I'm Hardik Sharma 👋</h2>
        <p className="text-lg">A passionate Full Stack Developer building modern web applications.</p>
      </div>

      <div className="max-w-6xl mx-auto">
        <AddProject onProjectAdded={fetchProjects} />
        <ProjectList projects={projects} />
      </div>

      <footer className="bg-gray-800 text-white text-center p-3 mt-10">
        © {new Date().getFullYear()} Hardik Sharma — All Rights Reserved
      </footer>
    </div>
  );
}

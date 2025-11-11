import { useState } from "react";
import axios from "axios";

// API_URL points to your live Render backend
const API_URL = "https://portfolio-backend-7ine.onrender.com/";

export default function AddProject({ onProjectAdded }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 🔍 Debugging: Log what’s being sent
      console.log("Sending data to:", `${API_URL}/add_project`, formData);

      // POST to the correct endpoint
      await axios.post(`${API_URL}/add_project`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      alert("✅ Project added successfully!");
      setFormData({ title: "", description: "", link: "" });

      if (onProjectAdded) onProjectAdded(); // refresh project list
    } catch (error) {
      console.error("Error adding project:", error.response?.data || error.message);
      alert("❌ Failed to add project. Check console for details.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="url"
          name="link"
          placeholder="Project Link"
          value={formData.link}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Project
        </button>
      </form>
    </div>
  );
}

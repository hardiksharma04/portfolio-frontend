import { useState } from "react";
import axios from "axios";

export default function AddProject({ onProjectAdded }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post("http://127.0.0.1:5000/add_project", formData);
    alert("✅ Project added successfully!");
    setFormData({ title: "", description: "", link: "" });
    if (onProjectAdded) onProjectAdded(); // refresh project list
  } catch (error) {
    console.error(error);
    alert("❌ Failed to add project");
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

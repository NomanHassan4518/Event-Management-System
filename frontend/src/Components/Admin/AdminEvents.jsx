import React from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AdminEvents = ({ events, onDelete }) => {
  const categories = [...new Set(events.map((event) => event.category))];
const navigate = useNavigate()

  const onEdit = (event)=>{
navigate(`/editEvent/${event.id}`,{state:{event}})
  }
  return (
    <div className="p-8 font-alice">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl  font-semibold text-gray-800">Manage Events</h2>
        <Link
         to="/addEvent"
          className="flex items-center gap-2 bg-[#ce1446] text-white px-4 py-2 rounded-lg shadow hover:bg-[#a01034] transition"
        >
          <FaPlus /> Add New Event
        </Link>
      </div>

      {categories.map((category) => (
        <div key={category} className="mb-10">
          <h3 className="text-xl font-bold text-[#ce1446] mb-4 underline">{category}</h3>
          <div className="overflow-x-auto bg-white rounded-xl shadow">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-center">
                  <th className="py-3 px-4">Image</th>
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events
                  .filter((event) => event.category === category)
                  .map((event) => (
                    <tr
                      key={event.id}
                      className="border-t hover:bg-gray-50 transition text-center"
                    >
                      <td className="py-3 px-4">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-20 h-14 rounded-md object-cover"
                        />
                      </td>
                      <td className="py-3 px-4 font-medium text-gray-800">
                        {event.title}
                      </td>
                      <td className="py-3 px-4 text-gray-600">{event.date}</td>
                      <td className="py-3 px-4 text-center flex gap-2 justify-center">
                        <button
                          onClick={() => onEdit(event)}
                          className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
                        >
                          <FaEdit /> Edit
                        </button>
                        <button
                          onClick={() => onDelete(event.id)}
                          className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                        >
                          <FaTrash /> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminEvents;

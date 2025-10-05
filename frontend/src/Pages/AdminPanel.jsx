import React, { useEffect } from "react";
import AdminHeader from "../Components/Admin/AdminHeader";
import AdminEvents from "../Components/Admin/AdminEvents";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const events = JSON.parse(localStorage.getItem("events"));
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate("/");
    }
  }, [navigate,user]);
  return (
    <div>
      <AdminHeader />
      <AdminEvents events={events} />
    </div>
  );
};

export default AdminPanel;

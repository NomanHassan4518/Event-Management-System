import React from 'react'
import AdminHeader from '../Components/Admin/AdminHeader'
import AdminEvents from '../Components/Admin/AdminEvents'

const AdminPanel = () => {
  const events = JSON.parse(localStorage.getItem("events"))
  return (
    <div>
      <AdminHeader/>
      <AdminEvents events={events}/>
    </div>
  )
}

export default AdminPanel

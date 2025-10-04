import React from 'react'
import { events } from '../assets/events'
import AdminHeader from '../Components/Admin/AdminHeader'
import AdminEvents from '../Components/Admin/AdminEvents'

const AdminPanel = () => {
  return (
    <div>
      <AdminHeader/>
      <AdminEvents events={events}/>
    </div>
  )
}

export default AdminPanel

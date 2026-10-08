import { Outlet } from "react-router-dom"
import Sidebar from "../components/dashboard/Sidebar"
import DashboardHeader from "../components/dashboard/DashboardHeader"
import { useState } from "react"

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen]= useState(false)
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen text-white flex">
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      <div className="flex-1">
        <DashboardHeader onMenuClick={()=> setSidebarOpen((prev)=> !prev)} />

        <main className="min-h-[calc(100vh-73px)] p-6 sm:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
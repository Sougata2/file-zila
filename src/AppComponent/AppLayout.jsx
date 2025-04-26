import React from "react";
import { Outlet } from "react-router";
import ErrorComponent from "@/AppComponent/ErrorComponent.jsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSideBar";
import Loader from "./Loader";

function AppLayout() {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "10rem",
        "--sidebar-width-mobile": "10rem",
      }}
    >
      <AppSidebar />
      <main className="w-full">
        <Loader />
        <SidebarTrigger />
        <ErrorComponent />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default AppLayout;

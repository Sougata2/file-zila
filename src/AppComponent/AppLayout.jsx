import React from "react";
import { Outlet } from "react-router";
import ErrorComponent from "@/AppComponent/ErrorComponent.jsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSideBar";
import Loader from "./Loader";
import SuccessComponent from "./SuccessComponent";

function AppLayout() {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "10rem",
        "--sidebar-width-mobile": "5rem",
      }}
    >
      <AppSidebar />
      <main className="w-full">
        <Loader />
        <SidebarTrigger />
        <SuccessComponent />
        <ErrorComponent />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default AppLayout;

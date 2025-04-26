import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { FiUploadCloud } from "react-icons/fi";
import { FiDownloadCloud } from "react-icons/fi";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import gdrive from "../assets/icons8-google-drive.svg";

// Menu items.
const items = [
  {
    title: "Upload",
    url: "/upload-file",
    icon: FiUploadCloud,
  },
  {
    title: "Download",
    url: "/view-files",
    icon: FiDownloadCloud,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className={"flex flex-row items-center-safe gap-2"}>
        <div className="relative w-10 h-10">
          <img
            src={gdrive}
            alt="Google Drive"
            className="absolute w-full h-full"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

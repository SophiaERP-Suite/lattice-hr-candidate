import {
  BellIcon,
  Settings,
  LogOutIcon,
  LayoutDashboard,
  Briefcase,
  BriefcaseBusiness,
  UserRound,
  Calendar,
  Calendar1,
  BookOpen,
  Shield,
} from "lucide-react";
import type { ReactNode } from "react";

export interface SidebarItem {
  label: string;
  path?: string;
  icon: ReactNode;
  children?: SidebarItem[];
}

export const sidebarMenus: SidebarItem[] = [
  {
    label: "Dashboard",
    path: "dashboard",
    icon: <LayoutDashboard size={20} style={{ scale: "1.3" }} />,
  },
  {
    label: "Profile & Resume",
    icon: <UserRound size={20} style={{ scale: "1.3" }} />,
    children: [
      {
        label: "Profile",
        path: "Profile",
        icon: null,
      },
      {
        label: "Resume",
        path: "Resume",
        icon: null,
      },
    ],
  },
  {
    label: "Job Management",
    icon: <BriefcaseBusiness size={20} style={{ scale: "1.3" }} />,
    children: [
      {
        label: "Find Jobs",
        path: "Jobs",
        icon: null,
      },
      {
        label: "My Applications",
        path: "MyApplication",
        icon: null,
      },
      {
        label: "Saved Jobs",
        path: "JobsSaved",
        icon: null,
      },
    ],
  },
  {
    label: "Compliance Manager",
    path: "Compliance",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="sidebar-icon"
        width="20"
        height="20"
        style={{ scale: "1.3" }}
      >
        <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z" />
      </svg>
    ),
  },
  {
    label: "Timesheet & Attendance",
    path: "attendance",
    icon: <Calendar1 size={20} style={{ scale: "1.3" }} />,
  },
  {
    label: "Self Interview",
    path: "SelfInterview",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="sidebar-icon"
        width="20"
        height="20"
        style={{ scale: "1.3" }}
      >
        <path d="M19 7H24V9H19V7ZM17 12H24V14H17V12ZM20 17H24V19H20V17ZM2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11Z" />
      </svg>
    ),
  },
  {
    label: "Payslip",
    path: "Payslip",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="sidebar-icon"
        width="20"
        height="20"
        style={{ scale: "1.3" }}
      >
        <path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM12.0049 20.0027C16.4232 20.0027 20.0049 16.421 20.0049 12.0027C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C7.5866 4.00275 4.00488 7.58447 4.00488 12.0027C4.00488 16.421 7.5866 20.0027 12.0049 20.0027ZM8.50488 14.0027H14.0049C14.281 14.0027 14.5049 13.7789 14.5049 13.5027C14.5049 13.2266 14.281 13.0027 14.0049 13.0027H10.0049C8.62417 13.0027 7.50488 11.8835 7.50488 10.5027C7.50488 9.12203 8.62417 8.00275 10.0049 8.00275H11.0049V6.00275H13.0049V8.00275H15.5049V10.0027H10.0049C9.72874 10.0027 9.50488 10.2266 9.50488 10.5027C9.50488 10.7789 9.72874 11.0027 10.0049 11.0027H14.0049C15.3856 11.0027 16.5049 12.122 16.5049 13.5027C16.5049 14.8835 15.3856 16.0027 14.0049 16.0027H13.0049V18.0027H11.0049V16.0027H8.50488V14.0027Z" />
      </svg>
    ),
  },
  {
    label: "Induction",
    path: "Induction",
    icon: (
       <BookOpen size={20} style={{ scale: "1.3" }}  />
    ),
  },
  {
    label: "Notifications",
    path: "Notifications",
    icon: <BellIcon size={20} style={{ scale: "1.3" }} />,
  },
  {
    label: "Settings",
    path: "Settings",
    icon: <Settings size={20} style={{ scale: "1.3" }} />,
  },
  {
    label: "Security",
    path: "Security",
    icon: (
       <Shield size={20} style={{ scale: "1.3" }}  />
    ),
  },
  {
    label: "Logout",
    path: "logout", 
    icon: <LogOutIcon size={20} style={{ scale: "1.3" }} />,
  },
];

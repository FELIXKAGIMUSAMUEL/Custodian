import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";

export const sidebarData = [
  {
    icon: DashboardIcon,
    heading: "Dashboard",
    to: "/",
  },
  {
    icon: BookIcon,
    heading: "Bookings",
    to: "/bookings",
  },
  {
    icon: AnalyticsIcon,
    heading: "Analytics",
    to: "/analytics",
  },
  {
    icon: SettingsIcon,
    heading: "Edit Page",
    to: "/editpage",
  },
];
 
export const CardsData = [
  {
    title: "Bookings",
    number: 32,
    color: "rgb(186, 240, 155) ",
    boxShadow: "0px 10px 20px 0px #5e5f69",
  },
  {
    title: "Check-Ins",
    number: 19,
    color: "rgb(186, 240, 155) ",
    boxShadow: "0px 10px 20px 0px #5e5f69",
  },
  {
    title: "Check-outs",
    number: 7,
    color: "rgb(186, 240, 155) ",
    boxShadow: "0px 10px 20px 0px #5e5f69",
  },
];

export const NotificationsData = [
  {
    img: <Avatar>JD</Avatar>,
    name: "John Doe",
    noti: "has sent UGX 100,000 for booking",
    time: "2 minutes ago",
  },
  {
    img: <Avatar sx={{ bgcolor: deepOrange[500] }}>JS</Avatar>,
    name: "Jane Smith",
    noti: "has sent UGX 100,000 for booking",
    time: "38 minutes ago",
  },
  {
    img: <Avatar sx={{ bgcolor: deepPurple[500] }}>SB</Avatar>,
    name: "Sam Brown",
    noti: "has sent UGX 100,000 for booking",
    time: "3 hours ago",
  },
  {
    img: <Avatar sx={{ bgcolor: deepPurple[500] }}>SB</Avatar>,
    name: "Sam Brown",
    noti: "has sent UGX 100,000 for booking",
    time: "3 hours ago",
  },
];

export const ReviewsData = [
  {
    icon: <Avatar sx={{ bgcolor: deepPurple[500] }}>JD</Avatar>,
    name: "John Doe",
    rating: 3,
    comment: "Looks good! Better shortlist it",
  },
  {
    icon: <Avatar>JS</Avatar>,
    name: "Jane Smith",
    rating: 4,
    comment: "Nana Hostel is nice! I recommend",
  },
  {
    icon: <Avatar sx={{ bgcolor: deepOrange[500] }}>SB</Avatar>,
    name: "Sam Brown",
    rating: 5,
    comment: "All good!",
  },
  {
    icon: <Avatar sx={{ bgcolor: deepPurple[500] }}>AJ</Avatar>,
    name: "Alex Johnson",
    rating: 2,
    comment: "Could be better.",
  },
  {
    icon: <Avatar sx={{ bgcolor: deepOrange[500] }}>MD</Avatar>,
    name: "Mary Davis",
    rating: 4,
    comment: "Enjoyed my stay!",
  },
  {
    icon: <Avatar sx={{ bgcolor: deepOrange[500] }}>DJ</Avatar>,
    name: "David Johnson",
    rating: 1,
    comment: "Terrible experience.",
  },
  {
    icon: <Avatar sx={{ bgcolor: deepPurple[500] }}>SD</Avatar>,
    name: "Sarah Davis",
    rating: 4,
    comment: "Great amenities!",
  },
  {
    icon: <Avatar sx={{ bgcolor: deepOrange[500] }}>JD</Avatar>,
    name: "James Doe",
    rating: 3,
    comment: "Decent place.",
  },
  {
    icon: <Avatar>GS</Avatar>,
    name: "Grace Smith",
    rating: 4,
    comment: "Good value for money.",
  },
  {
    icon: <Avatar sx={{ bgcolor: deepPurple[500] }}>CB</Avatar>,
    name: "Chris Brown",
    rating: 2,
    comment: "Not impressed.",
  },
  {
    icon: <Avatar sx={{ bgcolor: deepOrange[500] }}>AD</Avatar>,
    name: "Alex Doe",
    rating: 4,
    comment: "Satisfied with my stay.",
  },
  {
    icon: <Avatar sx={{ bgcolor: deepPurple[500] }}>ED</Avatar>,
    name: "Eve Davis",
    rating: 3,
    comment: "Could be cleaner.",
  },
  {
    icon: <Avatar sx={{ bgcolor: deepOrange[500] }}>PJ</Avatar>,
    name: "Paul Johnson",
    rating: 5,
    comment: "Outstanding!",
  },
];


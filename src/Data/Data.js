import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
// import { colors } from '@mui/material';

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { blue, deepOrange, deepPurple } from "@mui/material/colors";
// import {
//     BookIcon,
//     PeopleIcon,
//     AnalyticsIcon,
//     SettingsIcon,
// } from '@mui/icons-material';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';

export const sidebarData = [
  {
    icon: DashboardIcon,
    heading: "Dashboard",
  },
  {
    icon: BookIcon,
    heading: "Bookings",
  },
  {
    icon: AttachMoneyIcon,
    heading: "Clearance",
  },
  {
    icon: AnalyticsIcon,
    heading: "Analytics",
  },
  {
    icon: SettingsIcon,
    heading: "Edit Page",
  },
];

export const CardsData = [
  {
    title: "Pending Bookings",
    color: "linear-gradient(180deg, #8867FF 0%, #C484F3 100%)",
    boxShadow: "0px 10px 20px 0px #5e5f69",
  },
  {
    title: "Cleared Bookings",
    color: "linear-gradient(180deg, #fca61f 0%, #F8D49A 100%)",
    boxShadow: "0px 10px 20px 0px #5e5f69",
  },
  {
    title: "Weather",
    color: "linear-gradient(180deg, #8867FF 0%, #C484F3 100%)",
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

// const Notifications = () => {
//     return (
//         <div>
//             {NotificationsData.map((update, id) => {
//                 return (
//                     <div key={id}>
//                         {update.icon}
//                         <div>
//                             <p>{update.name}</p>
//                             <p>{update.noti}</p>
//                             <p>{update.time}</p>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default Notifications;

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
  // {
  //     icon: <Avatar sx={{ bgcolor: deepOrange[500] }}>SB</Avatar>,
  //     name: 'Sam Brown',
  //     rating: 5,
  //     comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  // },
];

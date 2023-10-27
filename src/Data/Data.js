import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';
import { colors } from '@mui/material';

// import {
//     BookIcon,
//     PeopleIcon,
//     AnalyticsIcon,
//     SettingsIcon,
// } from '@mui/icons-material'; 

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
        color:"linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    {
        title: "Cleared Bookings",
        color:"linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    {
        title: "Weather",
        color:"linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
]
// Pending bookings
// Cleared bookings
// Weather 
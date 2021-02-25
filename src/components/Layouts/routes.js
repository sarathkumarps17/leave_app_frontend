
import Leave from "../Home/Leave";
import Dashboard from "../Home/Dashboard";
import Shos from "../Home/Shos";
import ACDashboard from "../Home/AC/ACDashboard";
import ACLeaveView from "../Home/AC/ACLeaveView";


export const AC_routes = [
    { path: "/", exact: true, name: "Home", component: ACDashboard },
    { path: "/sho", name: "Sho", component: Shos },
    { path: "/leave", name: "Leave", component: Leave },
    { path: "/leaveRequests", name: "Requests", component: ACLeaveView },
];

export const User_routes = [
    { path: "/", exact: true, name: "Home", component: Dashboard },
    { path: "/sho", name: "Sho", component: Shos },
    { path: "/leave", name: "Leave", component: Leave },

];
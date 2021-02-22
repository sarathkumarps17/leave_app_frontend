
import Leave from "../Home/Leave";
import Dashboard from "../Home/Dashboard";
import Homecard from "../Home/Homecard";
import Shos from "../Home/Shos";


const routes = [
    { path: "/", exact: true, name: "Home", component: Dashboard },
    { path: "/sho", name: "Sho", component: Shos },
    { path: "/leave", name: "Leave", component: Leave },
];
export default routes;

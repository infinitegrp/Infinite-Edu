import Dashboard from "pages/Dashboard";
import Courses from "pages/Courses";
import Blogs from "pages/Blogs";
import Settings from "pages/Settings";
import Box from "components/Box";
import Enquiry from "pages/Enquires";

const routes = [
  {
    type: "route",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Box component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  {
    type: "route",
    name: "Courses",
    key: "courses",
    route: "/courses",
    icon: <Box component="i" color="info" fontSize="14px" className="ni ni-single-copy-04" />,
    component: <Courses />,
  },
  {
    type: "route",
    name: "Blogs",
    key: "blogs",
    route: "/blogs",
    icon: <Box component="i" color="primary" fontSize="14px" className="ni ni-album-2" />,
    component: <Blogs />,
  },
  {
    type: "route",
    name: "Enquires",
    key: "Enquires",
    route: "/Enquires",
    icon: <Box component="i" color="warning" fontSize="14px" className="ni ni-book-bookmark" />,
    component: <Enquiry />,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "route",
    name: "Settings",
    key: "settings",
    route: "/settings",
    icon: <Box component="i" color="dark" fontSize="14px" className="ni ni-settings-gear-65" />,
    component: <Settings />,
  },
];

export default routes;

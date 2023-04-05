import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  
  
} from "@heroicons/react/24/solid";
import { Home, Profile, Planner, ModuleInfo, Calendar,Schedule } from "@/pages/dashboard";
import { SignIn,SignOut} from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "planner",
        path: "/planner",
        element: <Planner />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Module Info",
        path: "/ModuleInfo",
        element: <ModuleInfo />,
      },
      {
        icon: <CalendarIcon {...icon} />,
        name: "Calendar",
        path: "/Calendar",
        element: <Calendar />,
      },
      {
       
        path: "/Schedule",
        element: <Schedule />,
      },
      
      
    ],
  },
  
  {
    // title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowTopRightOnSquareIcon {...icon} />,
        name: "sign-out",
        path: "/sign-out",
        element: <SignOut />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
];

export default routes;
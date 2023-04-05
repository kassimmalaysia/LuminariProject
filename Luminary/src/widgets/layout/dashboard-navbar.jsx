import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";

import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "@/context";
import { useState } from 'react';
import BookData from "../../bookdata.json"
import SearchBar from "@/components/SearchBar";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

export function DashboardNavbar() {
  // const [controller, dispatch] = useMaterialTailwindController();
  // const { fixedNavbar, openSidenav } = controller;
  // const { pathname } = useLocation();
  // const [layout, page] = pathname.split("/").filter((el) => el !== "");
 


  return (
    <Navbar>
      <div className="relative mt-8 h-40 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
          <div className="absolute inset-0 h-full w-full bg-blue-500/50">
          </div>
         </div>
      <SearchBar  data={BookData}  placeHolder = "Search Here"/>
    
      
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;

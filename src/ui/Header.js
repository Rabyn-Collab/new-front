import React from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Input,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  PowerIcon,
  ShoppingBagIcon,

} from "@heroicons/react/24/solid";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/auth/userSlice";
import { useFormik } from "formik";

// admin menu component
const adminMenuItems = [
  {
    label: "Admin Profile",
    icon: UserCircleIcon,
    val: 'profile'
  },
  {
    label: "Products",
    icon: ShoppingBagIcon,
    val: 'products'
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    val: 'out'
  },

];

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    val: 'profile'
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    val: 'out'
  },

];

function ProfileMenu({ user }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const dispatch = useDispatch();
  const closeMenu = () => setIsMenuOpen(false);
  const menus = user.isAdmin ? adminMenuItems : profileMenuItems;
  const nav = useNavigate();
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
              }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {menus.map(({ label, icon, val }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => {
                closeMenu();
                switch (val) {
                  case 'out':
                    dispatch(clearUser());
                    break;
                  case 'products':
                    nav('/admin/products');
                    break;
                  case 'profile':
                    if (user.isAdmin) {
                      nav('/admin/profile');
                    } else {
                      nav('/userProfile');
                    }
                }
              }}
              className={`flex items-center gap-2 rounded ${isLastItem
                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                : ""
                }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}








const Header = () => {

  //const [isNavOpen, setIsNavOpen] = React.useState(false);

  //const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  // React.useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => window.innerWidth >= 960 && setIsNavOpen(false),
  //   );
  // }, []);
  const { user } = useSelector((state) => state.userSlice);
  const nav = useNavigate();
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (val, { resetForm }) => {
      nav(`/search/${val.search.trim()}`);
      resetForm();
    }
  })




  return (
    <Navbar className=" w-full p-2 rounded-none ">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Material Tailwind
        </Typography>

        <div className="flex items-center space-x-2">
          <div className="w-72">
            <form onSubmit={handleSubmit} >
              <Input label="Search" name="search" value={values.search} onChange={handleChange} />
            </form>
          </div>
          {!user && <NavLink to='/login'>
            <Button size="sm" variant="text">
              <span>Log In</span>
            </Button>
          </NavLink>}


          {user && !user.isAdmin && <NavLink to='/carts'>
            <Button size="sm" variant="text">
              <ShoppingBagIcon className="h-6 w-6 text-blue-500" />
            </Button>
          </NavLink>}

          {user && <ProfileMenu user={user} />}
        </div>

      </div>

    </Navbar>
  );
}

export default Header
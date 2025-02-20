import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import { User } from "lucide-react";
const AccounDropdown = () => {
  return (
    <Dropdown>
      <MenuButton>
        <User className="h-5 w-5 text-gray-600 cursor-pointer hover:text-purple-600" />
      </MenuButton>
      <Menu>
        <MenuItem>Account Overview</MenuItem>
        <MenuItem>Profile</MenuItem>
        {/* <MenuItem>My account</MenuItem> */}
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Dropdown>
  );
};

export default AccounDropdown;

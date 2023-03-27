import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

import "../Styles/sidebar.css";
import { Dispatch, FC, MouseEvent } from "react";

interface ISidebar {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<React.SetStateAction<boolean>>;
  setCategory: Dispatch<React.SetStateAction<string>>;
}

export const SideBar: FC<ISidebar> = ({
  isDrawerOpen,
  setIsDrawerOpen,
  setCategory,
}) => {
  const nav = useNavigate();

  const handleCategory = (e: MouseEvent<HTMLDivElement>) => {
    setCategory(e.currentTarget.id);
    nav("/category");
    setIsDrawerOpen(false);
  };

  return (
    <Drawer
      open={isDrawerOpen}
      id="sidebar"
      PaperProps={{ sx: { width: "250px" } }}
    >
      <List>
        <ListItemButton
          onClick={() => {
            setIsDrawerOpen(false);
          }}
        >
          <CloseIcon className="closebtn" />
        </ListItemButton>
        <Typography align="center">Categories</Typography>
        <Divider color="blue" />
        <ListItemButton
          onClick={() => {
            nav("");
            setIsDrawerOpen(false);
          }}
          className="sidebtn"
        >
          <ListItemText>All</ListItemText>
        </ListItemButton>
        <ListItemButton
          id="Technology"
          onClick={handleCategory}
          className="sidebtn"
        >
          <ListItemText>Technology</ListItemText>
        </ListItemButton>
        <ListItemButton id="Food" onClick={handleCategory} className="sidebtn">
          <ListItemText>Food</ListItemText>
        </ListItemButton>
        <ListItemButton
          id="Personal"
          onClick={handleCategory}
          className="sidebtn"
        >
          <ListItemText>Personal</ListItemText>
        </ListItemButton>
        <ListItemButton
          id="Others"
          onClick={handleCategory}
          className="sidebtn"
        >
          <ListItemText>Others</ListItemText>
        </ListItemButton>
        <Divider color="blue" />
      </List>
    </Drawer>
  );
};

import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import { ChangeEvent, Dispatch, FC, SetStateAction, MouseEvent } from "react";
import "../Styles/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import BookSharpIcon from "@mui/icons-material/BookSharp";
import { useNavigate } from "react-router-dom";

interface INav {
  setQuery: Dispatch<SetStateAction<string>>;
  query: string;
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar: FC<INav> = ({
  setQuery,
  query,
  isDrawerOpen,
  setIsDrawerOpen,
}) => {
  const nav = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <AppBar sx={{ background: "#4C4CD3" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={() => {
            setIsDrawerOpen(!isDrawerOpen);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          onClick={() => {
            nav("/");
          }}
          variant="h5"
          component="div"
          sx={{
            display: { xs: "none", sm: "block", md: "block" },
            marginRight: "15px",
          }}
        >
          Blog App
        </Typography>
        <TextField
          size="small"
          autoFocus
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="Search Post..."
          sx={{ background: "white", borderRadius: "10px" }}
        />
        <IconButton
          className="writebtn"
          color="inherit"
          sx={{ marginLeft: "auto" }}
          onClick={() => {
            nav("/newpost");
          }}
        >
          <BookSharpIcon />
          Write
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

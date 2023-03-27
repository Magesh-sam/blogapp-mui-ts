import { FC } from "react";
import { Paper, Typography, IconButton } from "@mui/material";
import { Blog } from "./Interfaces";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import "../Styles/detailedblog.css";

interface IDB {
  blogIndex: number;
  blogList: Blog[];
}

export const DetailedBlog: FC<IDB> = ({ blogIndex, blogList }) => {
  const nav = useNavigate();

  return (
    <Paper className="detailedBlog" elevation={5}>
      <IconButton
        className="gotohome"
        onClick={() => {
          nav("/");
        }}
      >
        <HomeIcon />
      </IconButton>
      <Typography sx={{ marginTop: "25px" }} variant="h3">
        {blogList[blogIndex].title.toUpperCase()}
      </Typography>
      <Typography className="detailedBody" variant="body1">
        {blogList[blogIndex].body}
      </Typography>
    </Paper>
  );
};

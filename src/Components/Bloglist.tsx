import {
  ListItem,
  Paper,
  Typography,
  Container,
  Box,
  IconButton,
  Button,
  Divider,
  Checkbox,
} from "@mui/material";
import { FC, Dispatch } from "react";
import "../Styles/bloglist.css";
import CreateIcon from "@mui/icons-material/Create";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Blog } from "./Interfaces";
import { useNavigate } from "react-router-dom";

interface IBlogList {
  blogList: Blog[];
  setBlogList: Dispatch<React.SetStateAction<Blog[]>>;
  setBlogIndex: Dispatch<React.SetStateAction<number>>;
}

export const Bloglist: FC<IBlogList> = ({
  blogList,
  setBlogList,
  setBlogIndex,
}) => {
  const nav = useNavigate();
  const handleDelete = (blogId: string) => {
    const updatedBlog = [...blogList];
    const filteredBlogList = updatedBlog.filter((blog) => blog.id !== blogId);
    setBlogList(filteredBlogList);
  };

  const handleViewmore = (index: number, title: string) => {
    setBlogIndex(index);
    nav(`/blog/${title}`);
  };

  const handleEdit = (blogId: string) => {
    const filteredIndex = blogList.findIndex((blog) => blog.id === blogId);
    setBlogIndex(filteredIndex);
    nav("/edit");
  };

  return (
    <Paper className="bloglistwrapper" elevation={5}>
      <Typography
        align="center"
        variant="h3"
        sx={{ p: 10, textDecoration: "underline", textUnderlineOffset: "12px" }}
      >
        All Blogs
      </Typography>
      {blogList.length <= 0 && (
        <Typography align="center" variant="h3" sx={{ p: 10, color: "tomato" }}>
          No post Found!
        </Typography>
      )}
      {blogList.map((blog, index) => (
        <ListItem key={index}>
          <Container>
            <Box className="blogtitle">
              <Typography
                className="blogheading"
                onClick={() => {
                  handleViewmore(index, blog.title);
                }}
                component="button"
                align="left"
                variant="h3"
                sx={{ m: 2 }}
              >
                {blog.title.toUpperCase()}
              </Typography>
              <span className="likesnumber">
                {Math.floor(Math.random() * (500 - 300 + 1)) + 300}
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </span>
              <IconButton
                className="editbtn"
                title="edit"
                onClick={() => {
                  handleEdit(blog.id);
                }}
              >
                <CreateIcon />
              </IconButton>
              <IconButton
                className="deletebtn"
                title="delete"
                onClick={() => {
                  handleDelete(blog.id);
                }}
              >
                <DeleteSharpIcon />
              </IconButton>
            </Box>
            <Typography align="justify" variant="body1" sx={{ m: 5 }}>
              {blog.shortdescription}
              <Button
                className="viewmorebtn"
                onClick={() => {
                  handleViewmore(index, blog.title);
                }}
              >
                View more...
              </Button>
            </Typography>
            <Divider
              sx={{ background: "#4C4CD3", width: "60%", margin: "auto" }}
            />
          </Container>
        </ListItem>
      ))}
    </Paper>
  );
};

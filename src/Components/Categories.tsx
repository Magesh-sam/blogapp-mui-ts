import React, { FC } from "react";
import { Blog } from "./Interfaces";
import { Box, Button, Checkbox, Container, Divider, IconButton, ListItem, Paper, Typography } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import {useNavigate} from 'react-router-dom'
import CreateIcon from '@mui/icons-material/Create';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

interface ICategory {
  blogList: Blog[];
  category: string;
  setBlogList:React.Dispatch<React.SetStateAction<Blog[]>>
  setBlogIndex:React.Dispatch<React.SetStateAction<number>>
}

export const Categories: FC<ICategory> = ({ blogList, category, setBlogIndex, setBlogList }) => {
  const filteredBlogs = blogList.filter((blog) =>
    blog.category.toLowerCase().includes(category.toLowerCase())
  );

  const nav = useNavigate();

  const handleDelete = (blogId: string) => {
    const updatedBlog = [...blogList];
    const filteredBlogList = updatedBlog.filter((blog) => blog.id !== blogId);
    setBlogList(filteredBlogList);
  };

  const handleViewmore = (blogId: string) => {
    const filteredIndex = blogList.findIndex((blog) => blog.id === blogId);
    setBlogIndex(filteredIndex);
    console.log(filteredIndex);
    nav("/blog");
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
       {category}
      </Typography>
      {filteredBlogs.length <= 0 && (
        <Typography align="center" variant="h3" sx={{ p: 10, color: "tomato" }}>
          No post Found!
        </Typography>
      )}
      {filteredBlogs.map((blog, index) => (
        <ListItem key={index}>
          <Container>
            <Box className="blogtitle">
              <Typography className="blogheading" component='button' onClick={() => {
                  handleViewmore(blog.id);
                }} align="left" variant="h3" sx={{ m: 2 }}>
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
                  handleViewmore(blog.id);
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

import {
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { FC, Dispatch, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Blog } from "./Interfaces";
import "../Styles/newpost.css";

interface IEditBlog {
  blogList: Blog[];
  setBlogList: Dispatch<React.SetStateAction<Blog[]>>;
  blogIndex: number;
}

export const EditBlog: FC<IEditBlog> = ({
  blogIndex,
  blogList,
  setBlogList,
}) => {
  const { title, shortdescription, body, author, category } =
    blogList[blogIndex];
  const [titleValue, setTitleValue] = useState(title);
  const [shortdescriptionValue, setShortdescriptionValue] =
    useState(shortdescription);
  const [bodyValue, setBodyValue] = useState(body);
  const [authorValue, setAuthorValue] = useState(author);
  const [categoryValue, setCategoryValue] = useState(category);

  const nav = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "title":
        setTitleValue(value);
        break;
      case "shortdescription":
        setShortdescriptionValue(value);
        break;
      case "body":
        setBodyValue(value);
        break;
      case "author":
        setAuthorValue(value);
        break;
      case "category":
        setCategoryValue(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedBlog = {
      ...blogList[blogIndex],
      title: titleValue,
      shortdescription: shortdescriptionValue,
      body: bodyValue,
      author: authorValue,
      category: categoryValue,
    };
    const updatedBlogList = [...blogList];
    updatedBlogList.splice(blogIndex, 1, updatedBlog);
    setBlogList(updatedBlogList);
    nav("/");
  };

  return (
    <Paper elevation={5} className="formpaper">
      <form className="newpostform" onSubmit={handleSubmit}>
        <Typography variant="h3" align="center">
          {title.toUpperCase()}
        </Typography>
        <TextField
          name="title"
          value={titleValue}
          placeholder="Blog Title"
          helperText="Blog Title"
          required
          onChange={handleInputChange}
        />
        <TextField
          name="shortdescription"
          value={shortdescriptionValue}
          placeholder="Short Description"
          helperText="Short Description"
          required
          onChange={handleInputChange}
        />
        <TextField
          name="body"
          value={bodyValue}
          placeholder="Blog Body"
          helperText="Blog Content"
          required
          multiline
          rows={10}
          onChange={handleInputChange}
        />
        <TextField
          name="author"
          value={authorValue}
          placeholder="Author Name"
          helperText="Author Name"
          required
          onChange={handleInputChange}
        />
        <TextField
          name="category"
          value={categoryValue}
          select
          label="categories"
          required
          onChange={handleInputChange}
        >
          <MenuItem value="technology">Technology</MenuItem>
          <MenuItem value="food">Food</MenuItem>
          <MenuItem value="personal">Personal</MenuItem>
          <MenuItem value="others">Others</MenuItem>
        </TextField>
        <Box className="btngrp">
          <Button className="submitbtn" variant="outlined" type="submit">
            Update
          </Button>
          <Button
            className="cancelbtn"
            variant="outlined"
            onClick={() => nav("/")}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

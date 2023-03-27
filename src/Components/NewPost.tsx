import { TextField, Button, MenuItem, Paper, Box } from "@mui/material";
import { ChangeEvent, useState, FC, FormEvent, Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as randomid } from "uuid";
import "../Styles/newpost.css";
import { Blog } from "./Interfaces";

interface INewPost {
  blogList: Blog[];
  setBlogList: Dispatch<React.SetStateAction<Blog[]>>;
}

export const NewPost: FC<INewPost> = ({ blogList, setBlogList }) => {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [shortdescription, setShortDescription] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const [post, setPost] = useState({
    title: "",
    shortdescription: "",
    body: "",
    author: "",
    category: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: randomid(),
    };

    setBlogList([...blogList, newPost]);
    nav("/");
  };

  return (
    <Paper className="formpaper" elevation={5}>
      <form onSubmit={handleSubmit} className="newpostform">
        <TextField
          className="forminput"
          name="title"
          value={post.title}
          placeholder="Blog Title"
          helperText="Blog Title"
          onChange={handleChange}
          required
        />
        <TextField
          className="forminput"
          name="shortdescription"
          value={post.shortdescription}
          placeholder="Short Description"
          helperText="Short Description"
          onChange={handleChange}
          required
        />
        <TextField
          className="forminput"
          name="body"
          value={post.body}
          placeholder="Blog Body"
          helperText="Blog Content"
          onChange={handleChange}
          required
          multiline
          rows={10}
        />
        <TextField
          className="forminput"
          name="author"
          value={post.author}
          placeholder="Author Name"
          helperText="Author Name"
          onChange={handleChange}
          required
        />
        <TextField
          className="forminput"
          name="category"
          value={post.category}
          select
          label="categories"
          onChange={handleChange}
          required
        >
          <MenuItem value="technology">Technology</MenuItem>
          <MenuItem value="food">Food</MenuItem>
          <MenuItem value="personal">Personal</MenuItem>
          <MenuItem value="others">Others</MenuItem>
        </TextField>
        <Box className="btngrp">
          <Button variant="outlined" className="submitbtn" type="submit">
            Publish
          </Button>
          <Button
            variant="outlined"
            className="cancelbtn"
            onClick={() => {
              nav("/");
            }}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

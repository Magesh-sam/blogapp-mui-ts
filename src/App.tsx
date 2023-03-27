import "./App.css";

import { useState } from "react";
import { NavBar } from "./Components/NavBar";
import { Bloglist } from "./Components/Bloglist";
import { Blog } from "./Components/Interfaces";
import { SideBar } from "./Components/SideBar";
import { NewPost } from "./Components/NewPost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailedBlog } from "./Components/DetailedBlog";
import { Categories } from "./Components/Categories";
import { EditBlog } from "./Components/EditBlog";
import ScrollToTop from "react-scroll-to-top";


const initialBlogs: Blog[] = [
  {
    id: "1",
    title: "Blog 1",
    shortdescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officia nisi ex fuga repellat fugit inventore, aspernatur temporibus explicabo, corporis incidunt tenetur saepe eos dolorem delectus praesentium voluptatum sit nulla!
    Necessitatibus suscipit doloribus debitis fuga dignissimos consectetur sequi tempora atque eius sunt, voluptatibus tenetur! Cupiditate est enim debitis ratione, provident aliquid maiores cumque sed dolore voluptate esse beatae laborum itaque!`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident vel sunt eligendi aliquam asperiores, facilis, quibusdam quos, hic nobis enim architecto. Inventore quod ad, quisquam at eius eligendi nostrum?
    Commodi recusandae reiciendis ipsum architecto natus, beatae molestias, eius eum odit aliquam tenetur quaerat? Itaque, quod aperiam, obcaecati nesciunt, modi ipsam esse optio asperiores doloremque blanditiis fuga qui cumque? Amet.
    Repudiandae qui perspiciatis molestiae sequi obcaecati officiis neque consequuntur. Repudiandae, ad? Sequi laborum necessitatibus quis sed magni temporibus sint saepe eius ullam. Iste explicabo assumenda similique fugit amet atque porro?
    Similique iste hic praesentium. Sapiente culpa mollitia quo laudantium sed, atque tempore accusamus magnam, doloribus odit molestias suscipit sequi nulla! Omnis doloribus, soluta eligendi corporis neque non cupiditate molestias quasi.
    Architecto reiciendis, corporis omnis laboriosam delectus praesentium quis, doloribus ex natus deleniti provident nobis ipsum qui nisi aspernatur sequi temporibus placeat adipisci doloremque odio, repudiandae officia? Ea tenetur perspiciatis repudiandae.`,
    author: "author1",
    category: "Technology",
  },
  {
    id: "2",
    title: "Blog 2",
    shortdescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officia nisi ex fuga repellat fugit inventore, aspernatur temporibus explicabo, corporis incidunt tenetur saepe eos dolorem delectus praesentium voluptatum sit nulla!
    Necessitatibus suscipit doloribus debitis fuga dignissimos consectetur sequi tempora atque eius sunt, voluptatibus tenetur! Cupiditate est enim debitis ratione, provident aliquid maiores cumque sed dolore voluptate esse beatae laborum itaque!`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident vel sunt eligendi aliquam asperiores, facilis, quibusdam quos, hic nobis enim architecto. Inventore quod ad, quisquam at eius eligendi nostrum?
    Commodi recusandae reiciendis ipsum architecto natus, beatae molestias, eius eum odit aliquam tenetur quaerat? Itaque, quod aperiam, obcaecati nesciunt, modi ipsam esse optio asperiores doloremque blanditiis fuga qui cumque? Amet.
    Repudiandae qui perspiciatis molestiae sequi obcaecati officiis neque consequuntur. Repudiandae, ad? Sequi laborum necessitatibus quis sed magni temporibus sint saepe eius ullam. Iste explicabo assumenda similique fugit amet atque porro?
    Similique iste hic praesentium. Sapiente culpa mollitia quo laudantium sed, atque tempore accusamus magnam, doloribus odit molestias suscipit sequi nulla! Omnis doloribus, soluta eligendi corporis neque non cupiditate molestias quasi.
    Architecto reiciendis, corporis omnis laboriosam delectus praesentium quis, doloribus ex natus deleniti provident nobis ipsum qui nisi aspernatur sequi temporibus placeat adipisci doloremque odio, repudiandae officia? Ea tenetur perspiciatis repudiandae.`,
    author: "author2",
    category: "Food",
  },
  {
    id: "3",
    title: "Blog 3",
    shortdescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officia nisi ex fuga repellat fugit inventore, aspernatur temporibus explicabo, corporis incidunt tenetur saepe eos dolorem delectus praesentium voluptatum sit nulla!
    Necessitatibus suscipit doloribus debitis fuga dignissimos consectetur sequi tempora atque eius sunt, voluptatibus tenetur! Cupiditate est enim debitis ratione, provident aliquid maiores cumque sed dolore voluptate esse beatae laborum itaque!`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident vel sunt eligendi aliquam asperiores, facilis, quibusdam quos, hic nobis enim architecto. Inventore quod ad, quisquam at eius eligendi nostrum?
    Commodi recusandae reiciendis ipsum architecto natus, beatae molestias, eius eum odit aliquam tenetur quaerat? Itaque, quod aperiam, obcaecati nesciunt, modi ipsam esse optio asperiores doloremque blanditiis fuga qui cumque? Amet.
    Repudiandae qui perspiciatis molestiae sequi obcaecati officiis neque consequuntur. Repudiandae, ad? Sequi laborum necessitatibus quis sed magni temporibus sint saepe eius ullam. Iste explicabo assumenda similique fugit amet atque porro?
    Similique iste hic praesentium. Sapiente culpa mollitia quo laudantium sed, atque tempore accusamus magnam, doloribus odit molestias suscipit sequi nulla! Omnis doloribus, soluta eligendi corporis neque non cupiditate molestias quasi.
    Architecto reiciendis, corporis omnis laboriosam delectus praesentium quis, doloribus ex natus deleniti provident nobis ipsum qui nisi aspernatur sequi temporibus placeat adipisci doloremque odio, repudiandae officia? Ea tenetur perspiciatis repudiandae.`,
    author: "author3",
    category: "Personal",
  },
  {
    id: "4",
    title: "Blog 4",
    shortdescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officia nisi ex fuga repellat fugit inventore, aspernatur temporibus explicabo, corporis incidunt tenetur saepe eos dolorem delectus praesentium voluptatum sit nulla!
    Necessitatibus suscipit doloribus debitis fuga dignissimos consectetur sequi tempora atque eius sunt, voluptatibus tenetur! Cupiditate est enim debitis ratione, provident aliquid maiores cumque sed dolore voluptate esse beatae laborum itaque!`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident vel sunt eligendi aliquam asperiores, facilis, quibusdam quos, hic nobis enim architecto. Inventore quod ad, quisquam at eius eligendi nostrum?
    Commodi recusandae reiciendis ipsum architecto natus, beatae molestias, eius eum odit aliquam tenetur quaerat? Itaque, quod aperiam, obcaecati nesciunt, modi ipsam esse optio asperiores doloremque blanditiis fuga qui cumque? Amet.
    Repudiandae qui perspiciatis molestiae sequi obcaecati officiis neque consequuntur. Repudiandae, ad? Sequi laborum necessitatibus quis sed magni temporibus sint saepe eius ullam. Iste explicabo assumenda similique fugit amet atque porro?
    Similique iste hic praesentium. Sapiente culpa mollitia quo laudantium sed, atque tempore accusamus magnam, doloribus odit molestias suscipit sequi nulla! Omnis doloribus, soluta eligendi corporis neque non cupiditate molestias quasi.
    Architecto reiciendis, corporis omnis laboriosam delectus praesentium quis, doloribus ex natus deleniti provident nobis ipsum qui nisi aspernatur sequi temporibus placeat adipisci doloremque odio, repudiandae officia? Ea tenetur perspiciatis repudiandae.`,
    author: "author4",
    category: "Others",
  },
];

function App() {
  const [query, setQuery] = useState<string>("");
  const [blogList, setBlogList] = useState<Blog[]>(initialBlogs);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [blogIndex, setBlogIndex] = useState(-1);
  const [category, setCategory] = useState("");

  const filteredBlogs = blogList.filter(
    (blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase()) ||
      blog.body.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Router>
      <NavBar
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        setQuery={setQuery}
        query={query}
      />
      <SideBar
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        setCategory={setCategory}
      />
      <ScrollToTop title="scroll to top" className="scrolltotop"/>
      <Routes>
        <Route
          path="/"
          element={
            <Bloglist
              setBlogIndex={setBlogIndex}
              blogList={filteredBlogs}
              setBlogList={setBlogList}
            />
          }
        ></Route>
        <Route
          path="/newpost"
          element={<NewPost blogList={blogList} setBlogList={setBlogList} />}
        ></Route>
        <Route
          path="/blog"
          element={
            <DetailedBlog blogList={filteredBlogs} blogIndex={blogIndex} />
          }
        ></Route>
        <Route
          path="/category"
          element={<Categories category={category} blogList={filteredBlogs} setBlogList={setBlogList} setBlogIndex={setBlogIndex} />}
        ></Route>
        <Route
          path="/edit"
          element={
            <EditBlog
              blogIndex={blogIndex}
              blogList={blogList}
              setBlogList={setBlogList}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

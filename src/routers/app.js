import React, { PureComponent } from "react";
import Home from "../components/Home";
import Blog from "./Blog";
import Add from "./AddBlog";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export class app extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="addBlog" element={<Add />} />
            <Route path="viewBlog" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default app;

import React, { Component } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import searchBlog from "../../images/icons8-search.svg";
// import "BlogPage" from "../../routers/Blog/Blog.container";

export class HomeComponent extends Component {
  render() {
    const { blogs, searchValue, handleSearch, filteredBlogs, filteredBlog } =
      this.props;
    return (
      <div className="mainBlock">
        <div className="sideBar">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Profile"
            />
            <h2>
              <Link to="addBlog">Add Blog</Link>
            </h2>
            <h2>
              <Link to="viewBlog">View Blog</Link>
            </h2>
          </div>
        </div>

        <div className="mainPage">
          <div className="homeBlock">
            <span className="input11">
              <input
                type="text"
                name="searchValue"
                id="searchValue"
              />
              <img
                src={searchBlog}
                alt=""
                className="search"
              />
            </span>
            <div className="renderBlock">
              {blogs.map((val, ind) => {
                return (
                  <div className="renderDiv" key={ind}>
                    <h4>{ind + 1}</h4>
                    <h6>{val.blogName}</h6>
                    <h4>{val.bloggerName}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;

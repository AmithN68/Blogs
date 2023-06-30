import React, { PureComponent } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

export class HomeComponent extends PureComponent {
  render() {
    const { blogs, handleChange, searchValue } = this.props;
    const filteredBlogs = blogs.filter(val => {
      if (
        val.blogName.toLowerCase().includes(searchValue.toLowerCase()) ||
        val.bloggerName.toLowerCase().includes(searchValue.toLowerCase()) ||
        val.id.toString() === searchValue
      ) {
        return val;
      }
    });
    return (
      <div className="mainBlock">
        <div className="sideBar">
          <div>
            <h1>Blogs</h1>
            <h2>
              <Link to="addBlog" className="first">
                Add Blog
              </Link>
            </h2>
            <h2>
              <Link to="viewBlog">View Blog</Link>
            </h2>
          </div>
        </div>

        <div className="mainPage">
          <div className="homeBlock">
            <div className="input11">
              <input
                type="text"
                name="searchValue"
                id="searchValue"
                onChange={handleChange}
                placeholder="Search..."
              />
            </div>
            {/* <div className="renderBlock">
              {blogs
                .filter(val => {
                  if (searchValue == "") {
                    return val;
                  } else if (
                    val.blogName
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    val.bloggerName
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    val.id == searchValue
                  ) {
                    return val;
                  }
                })
                .map((val, ind) => {
                  return (
                    <div className="renderDiv" key={ind}>
                      <h4>{val.id}</h4>
                      <h6>{val.blogName}</h6>
                      <h4>{val.bloggerName}</h4>
                    </div>
                  );
                })}
            </div> */}
            <div className="renderBlock">
              {filteredBlogs.length === 0 && searchValue !== "" ? (
                <div className="message">No Data Found</div>
              ) : (
                filteredBlogs.map((val, ind) => (
                  <div className="renderDiv" key={ind}>
                    <h4>{val.id}</h4>
                    <h6>{val.blogName}</h6>
                    <h4>{val.bloggerName}</h4>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;

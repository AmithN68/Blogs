import React, { PureComponent } from "react";
import "./Blog.scss";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import Cancel from "../../images/icons8-close.svg";

export class BlogComponent extends PureComponent {
  render() {
    const {
      display,
      blogDetail,
      blogName,
      bloggerName,
      blogs,
      dis,
      handleDisplay,
      currentPage,
      postPerPage,
      handleClick,
      handleDelete,
      handleUpdate,
      handleEdit,
      handleChange,
      handleExit,
      edit,
      id,
    } = this.props;
    console.log(dis);
    const lastPost = currentPage * postPerPage;
    const firstPost = lastPost - postPerPage;
    const currentPost = blogs.slice(firstPost, lastPost);
    const totalPost = blogs.length;
    return (
      <div>
        <div className="blogBlock">
          <button className="homeBtn">
            <Link to="/">Home</Link>
          </button>
          <div className="blogDiv">
            {currentPost.map((val, ind) => (
              <div key={ind} className="blogDivision">
                <img
                  src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="blogs"
                />
                <h2>{val.blogName}</h2>
                <h3>{val.bloggerName}</h3>
                <p>{val.blogDetail}</p>
                <div>
                  <button
                    className="edit"
                    value={val.id}
                    onClick={() => handleEdit(val.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="viewMore"
                    value={val.id}
                    onClick={() => {
                      handleDisplay(val.id);
                    }}
                  >
                    ViewMore
                    {/* <Link to="/viewMore">View More</Link> */}
                  </button>
                  <button
                    className="delete"
                    value={val.id}
                    onClick={() => {
                      handleDelete(val.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            handleClick={handleClick}
            blogs={blogs}
            currentPage={currentPost}
            blogPerPage={postPerPage}
            totalBlog={totalPost}
          />
        </div>
        <div className={edit ? "UpdateBlock" : "hidden"}>
          <div className="formBlock">
            <button onClick={handleExit} className="cancel">
              <img src={Cancel} alt="" />
            </button>
            <h2>UPDATE BLOG</h2>
            <form onSubmit={handleUpdate}>
              <label htmlFor="blogName">Blog Name</label>
              <input
                type="text"
                id="blogName"
                value={blogName}
                name="blogName"
                onChange={handleChange}
              />
              <label htmlFor="bloggerName">Blogger Name</label>
              <input
                type="text"
                id="bloggerName"
                name="bloggerName"
                value={bloggerName}
                onChange={handleChange}
              />
              <label htmlFor="blogDetail">Blog Details</label>
              <textarea
                name="blogDetail"
                id="blogDetail"
                cols="30"
                rows="4"
                value={blogDetail}
                onChange={handleChange}
              ></textarea>
              <button type="submit">UPDATE</button>
            </form>
          </div>
        </div>
        <div className={display ? "displayBlock" : "hiddenBlock"}>
          <div className="display">
            <button onClick={handleExit} className="cancelBlock">
              <img src={Cancel} alt="" />
            </button>
            <h1>{dis.blogName}</h1>
            <h2>{dis.bloggerName}</h2>
            <h3>{dis.blogDetail}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogComponent;

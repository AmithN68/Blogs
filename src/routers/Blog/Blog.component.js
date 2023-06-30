import React, { PureComponent } from "react";
import "./Blog.scss";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import Cancel from "../../images/icons8-close.svg";
import ToastContainer from "../../components/Toast/Toast.container";

export class BlogComponent extends PureComponent {
  render() {
    const {
      prePage,
      nextPage,
      num,
      display,
      blogDetail,
      blogName,
      bloggerName,
      blogs,
      dis,
      toast,
      handleDisplay,
      currentPage,
      handleDelete,
      handleUpdate,
      handleEdit,
      handleChange,
      handleExit,
      currentPosts,
      edit,
      curPage,
    } = this.props;
    console.log(currentPage);

    return (
      <div>
        {toast && <ToastContainer />}
        <div className="blogBlock">
          <button className="homeBtn">
            <Link to="/">Home</Link>
          </button>
          <div className="blogDiv">
            {currentPosts.map((val, ind) => (
              <div key={ind} className="blogDivision">
                <img
                  src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="blogs"
                />
                <h2>{val.blogName}</h2>
                <h3>{val.bloggerName}</h3>
                <p className="details">{val.blogDetail}</p>
                <div className="btnBlock">
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
          <nav className="paginationBlock">
            <ul className="pagination">
              <li>
                <p onClick={prePage}>Previous</p>
              </li>
              <li><p className="currPage">{currentPage}</p></li>
              <li>
                <p onClick={nextPage}>Next</p>
              </li>
            </ul>
          </nav>
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
                required
                onChange={handleChange}
              />
              <label htmlFor="bloggerName">Blogger Name</label>
              <input
                type="text"
                id="bloggerName"
                name="bloggerName"
                value={bloggerName}
                required
                onChange={handleChange}
              />
              <label htmlFor="blogDetail">Blog Details</label>
              <textarea
                name="blogDetail"
                id="blogDetail"
                cols="30"
                rows="4"
                value={blogDetail}
                required
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

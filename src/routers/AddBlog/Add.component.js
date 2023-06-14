import React, { PureComponent } from "react";
import "./Add.scss";
import { Link } from "react-router-dom";
import HomeSvg from "../../images/icons8-home.svg";

export class AddComponent extends PureComponent {
  render() {
    const { handleSubmit, handleChange, blogName, bloggerName, blogDetail } =
      this.props;
    return (
      <div className="addBlock">
        <div className="formBlock">
          <Link to="/">
            <span className="material-symbols-outlined ">
              <img src={HomeSvg} alt="" className="home" />
            </span>
          </Link>
          <h2>ADD BLOG</h2>
          <form onSubmit={handleSubmit}>
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
            <button>ADD</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddComponent;

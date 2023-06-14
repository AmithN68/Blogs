import React, { PureComponent } from "react";
import BlogComponent from "./Blog.component";
import axios from "axios";

export class BlogContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dis: [],
      blogs: [],
      currentPage: 1,
      postPerPage: 3,
      edit: false,
      blogName: "",
      bloggerName: "",
      blogDetail: "",
      id: "",
      display: false,
    };
  }
  componentDidMount() {
    this.rendering();
  }
  async rendering() {
    fetch("http://localhost:4010/blogs")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw "rejected";
      })
      .then(res => this.setState({ blogs: res }))
      .catch(rej => console.log(rej));
  }

  handleClick = pageNumber => {
    const data = pageNumber.target.id;
    this.setState({ currentPage: JSON.parse(data) });
  };
  handleEdit = id => {
    const dat = JSON.parse(id);
    this.state.blogs.filter(item => {
      if (item.id === dat) {
        this.setState(prev => ({
          edit: !prev.edit,
          id: item.id,
          blogName: item.blogName,
          bloggerName: item.bloggerName,
          blogDetail: item.blogDetail,
        }));
      }
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleUpdate = e => {
    // console.log(this.state.id);
    const id = this.state.id;
    const blogName = this.state.blogName;
    const bloggerName = this.state.bloggerName;
    const blogDetail = this.state.blogDetail;
    if (blogName === "" || bloggerName === "" || blogDetail === "") {
      if (this.state.editData === true) {
        alert("Details cannot be empty");
      }
    } else {
      this.UpdateData(id);
    }
    e.preventDefault();
  };

  UpdateData(id) {
    // console.log(id);
    const data = {
      blogName: this.state.blogName,
      bloggerName: this.state.bloggerName,
      blogDetail: this.state.blogDetail,
    };
    fetch("http://localhost:4010/blogs/" + id, {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => {
        // console.log(res);
        if (res.status === 200) {
          // console.log(res.status === 200);
          this.setState({
            blogName: "",
            bloggerName: "",
            blogDetail: "",
            edit: false,
          });
        }
        this.rendering();
        alert("Blog Updated Successfully");
      })
      .catch(e => {
        console.log(e.msg);
      });
  }
  handleExit = () => {
    this.setState({
      edit: false,
      display: false,
    });
  };
  handleDelete = id => {
    console.log(id);
    fetch("http://localhost:4010/Blogs/" + id, {
      method: "delete",
    })
      .then(res => {
        this.rendering();
        alert("Successfully Deleted");
      })

      .catch(rej => console.log(rej));
  };
  handleDisplay = id => {
    fetch("http://localhost:4010/Blogs/" + id, {
      method: "get",
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ dis: res, display: true });

        // <ViewMoreContainer {...this.state} />;
        // this.rendering();
      })
      .catch(rej => console.log(rej));
  };
  handle = {
    handleClick: this.handleClick.bind(this),
    handleDelete: this.handleDelete.bind(this),
    handleUpdate: this.handleUpdate.bind(this),
    handleEdit: this.handleEdit.bind(this),
    handleChange: this.handleChange.bind(this),
    handleExit: this.handleExit.bind(this),
    handleDisplay: this.handleDisplay.bind(this),
  };
  render() {
    return (
      <div>
        <BlogComponent {...this.state} {...this.handle} />
      </div>
    );
  }
}

export default BlogContainer;

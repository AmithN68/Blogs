import React, { PureComponent } from "react";
import BlogComponent from "./Blog.component";
import axios from "axios";
import data from "../../utils/db.json";
import { isDisabled } from "@testing-library/user-event/dist/utils";

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
      toast: false,
      nPage: [],
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
      .then(res => {
        this.setState({ blogs: res });
        const demo = Math.ceil(res.length / this.state.postPerPage);
        console.log(demo);
        this.setState({
          nPage: demo,
        });
      })
      .catch(rej => console.log(rej));
  }

  handleClick = pageNumber => {
    // const data = pageNumber.target.id;
    // this.setState({ currentPage: JSON.parse(data) });
    this.setState({ currentPage: pageNumber });
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
        this.setState({ toast: true });
        setTimeout(() => {
          this.setState({ toast: false });
        }, 2500);
      }
    } else {
      this.UpdateData(id);
    }
    e.preventDefault();
  };

  UpdateData(id) {
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
        if (res.status === 200) {
          this.setState({
            blogName: "",
            bloggerName: "",
            blogDetail: "",
            edit: false,
          });
        }
        this.rendering();
        this.setState({ toast: true });
        setTimeout(() => {
          this.setState({ toast: false });
        }, 2500);
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
        this.setState({ toast: true });
        setTimeout(() => {
          this.setState({ toast: false });
        }, 2500);
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
      })
      .catch(rej => console.log(rej));
  };

  prePage = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };
  nextPage = () => {
    const { currentPage, nPage } = this.state;
    if (currentPage < nPage) {
      this.setState({ currentPage: currentPage + 1 });
    }
  };
  curPage = id => {
    this.setState({ currentPage: id });
  };

  handle = {
    handleClick: this.handleClick.bind(this),
    handleDelete: this.handleDelete.bind(this),
    handleUpdate: this.handleUpdate.bind(this),
    handleEdit: this.handleEdit.bind(this),
    handleChange: this.handleChange.bind(this),
    handleExit: this.handleExit.bind(this),
    handleDisplay: this.handleDisplay.bind(this),
    prePage: this.prePage.bind(this),
    nextPage: this.nextPage.bind(this),
    curPage: this.curPage.bind(this),
  };
  render() {
    const { blogs, currentPage, postPerPage } = this.state;
    const lastPost = currentPage * postPerPage;
    const firstPost = lastPost - postPerPage;
    console.log(firstPost, lastPost);
    const currentPosts = blogs.slice(firstPost, lastPost);
    //  const nPage = Math.ceil(data.length / this.state.postPerPage);
    const num = [...Array(this.state.nPage + 1).keys()].slice(1);
    console.log(currentPosts);
    return (
      <div>
        <BlogComponent
          {...this.state}
          {...this.handle}
          lastPost={lastPost}
          firstPost={firstPost}
          currentPosts={currentPosts}
          num={num}
          nPage={this.state.nPage}
        />
      </div>
    );
  }
}

export default BlogContainer;

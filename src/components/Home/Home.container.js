import React, { PureComponent } from "react";
import HomeComponent from "./Home.component";

export class HomeContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      value: "",
      blogs: [],
      searchValue: "",
      filteredBlog: [],
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
  // filteredBlogs() {
  //   const { searchValue } = this.state;
  //   const filtered = this.blogs.filter(item => {
  //     if (item.bloggerName == searchValue) {
  //       console.log(item);
  //       this.setState({ filteredBlog: item });
  //     }
  //   });
  //   console.log(filtered);
  // }

  // handleSearch =( e )=> {
  //   console.log(e);
  //   let { name, value } = e.target;
  //   const searchValue = e.target.value;
  //   console.log(searchValue);
  //   this.setState({ searchValue });
  // };
  // handleSearch(event) {
  //   this.setState({ searchValue: event.target.value });
  // }
  handle = () => {
    filteredBlogs: this.filteredBlogs.bind(this);
    handleSearch: this.handleSearch.bind(this);
  };
  render() {
    return (
      <div>
        <HomeComponent {...this.state} {...this.handle} />
      </div>
    );
  }
}

export default HomeContainer;

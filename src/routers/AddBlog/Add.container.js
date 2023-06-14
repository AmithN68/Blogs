import React, { PureComponent } from "react";
import AddComponent from "./Add.component";

export class AddContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      blogName: "",
      bloggerName: "",
      blogDetail: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const { blogName, bloggerName, blogDetail } = this.state;
    fetch("http://localhost:4010/Blogs", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ blogName, bloggerName, blogDetail }),
    })
      .then(res => {
        console.log(res);
        if (res.ok) {
          alert("Blog Added Successfully");
          this.setState({
            blogName: "",
            bloggerName: "",
            blogDetail: ""
          });
        } else {
          throw new Error("unSuccess");
        }
      })
      .catch(error => {
        console.error("Error storing data:", error);
      });
  };

  render() {
    return (
      <div>
        <AddComponent
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default AddContainer;

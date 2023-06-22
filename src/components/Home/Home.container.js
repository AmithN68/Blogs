import React, { PureComponent } from "react";
import HomeComponent from "./Home.component";

export class HomeContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
      searchValue:""
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
  handleChange = (e) => {
    this.setState({searchValue:e.target.value})
  }
  render() {
    return (
      <div>
        <HomeComponent {...this.state}
          handleChange={this.handleChange} />
      </div>
    );
  }
}

export default HomeContainer;

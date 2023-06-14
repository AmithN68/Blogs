import React, { PureComponent } from "react";
import PaginationComponent from "./Pagination.component";

export class PaginationContainer extends PureComponent {
  render() {
      const { totalBlog, blogPerPage, currentPage, handleClick } = this.props;
      // console.log(totalBlog, blogPerPage, currentPage, handleClick);
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalBlog / blogPerPage); i++) {
      pageNumber.push(i);
    }
    return (
      <div>
        <PaginationComponent
          handleClick={handleClick}
          pageNumber={pageNumber}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default PaginationContainer;

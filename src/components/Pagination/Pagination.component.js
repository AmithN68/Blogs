import React, { PureComponent } from "react";
import "./Pagination.scss"

export class PaginationComponent extends PureComponent {
  render() {
    const { handleClick, pageNumber, currentPage } = this.props;
    return (
      <>
        <div className="pagination">
          {pageNumber.map((val, ind) => {
            return (
              <button
                key={ind}
                id={val}
                onClick={handleClick}
                className={currentPage ? "active" : "page"}
              >
                {val}
              </button>
            );
          })}
        </div>
      </>
    );
  }
}

export default PaginationComponent;

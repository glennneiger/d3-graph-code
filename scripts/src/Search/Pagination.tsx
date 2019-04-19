import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state.search
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  
});

function Pagination(props: SearchState) {
  if (!props.results) {
    return null;
  }
  let start = props.results.start;
  let pageSize = props.results.hits.length;
  let end = props.results.start + pageSize;
  let total = props.results.found;
  if (total == 0) {
    start = -1;
    end = 0;
  }
  return (<div>
    Showing {start + 1} to {end} of {total} results.<br />
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <Link to={`?query=${props.boxString}&start=${(start - pageSize + total) % total}&filter=${props.filter}`}
            className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo; Previous</span>
            <span className="sr-only">Previous</span>
          </Link>
        </li>
        {/*<li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        */}
        <li className="page-item">
          <Link to={`?query=${props.boxString}&start=${(start + pageSize + total) % total}&filter=${props.filter}`}
            className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">Next &raquo;</span>
            <span className="sr-only">Next</span>
          </Link>
        </li>
      </ul>
    </nav>
  </div>);
}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
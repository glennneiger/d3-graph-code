import React from 'react';
import {ISearchResultsBoxProps} from "./SearchResultBox.d"
import './SearchResultBox.scss';

const SearchResultBox = ({ renderItem, boxName, data, loadMore }: ISearchResultsBoxProps) => (
  <div className="result_box">
    <div className="result_box_header">
      <div className="result_box_header_container">
        <div className="result_box_header_container_counter">
          {data.length}
        </div>
        <div className="result_box_header_container_info">
          <div className="result_box_header_container_info_name">{boxName}</div>
          <div className="result_box_header_container_info_showResults">Show All Results</div>
        </div>
      </div>
    </div>
    <div>
      {data.map(item => renderItem({result:item}))}
    </div>
    {(data.length > 0) && <div className="result_box-loadMore" onClick={loadMore}>
      <span className="result_box-loadMore-icon">⟩</span>
    </div>}
  </div>
);

export default SearchResultBox;
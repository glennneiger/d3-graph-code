import React from 'react';
import './SearchBoxInfo.scss';

function SearchBoxInfo({ data }) {
  return (
    <div className="search-box-info">
      {data.map((item, i) => (
        <div key={i} className="search-box-info-item">
          <div className="search-box-info-item-key">{item.key}</div>
          <div className={item.value ? 'search-box-info-item-value' : 'grey-text'}>{item.value || 'No Data'}</div>
        </div>
        ))
      }
    </div>
  )
}

export default SearchBoxInfo;
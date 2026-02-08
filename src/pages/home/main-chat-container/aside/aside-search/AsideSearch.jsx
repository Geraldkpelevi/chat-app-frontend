import React from 'react'
import "./AsideSearch.css"

function AsideSearch() {
  return (
    <div className='aside-search'>
      <div className='search-box'>
        <input type="text" placeholder="Search" />
        <i className="bi bi-search"></i>
      </div>
    </div>
  )
}

export default AsideSearch;
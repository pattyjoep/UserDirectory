import React from "react";
import "./style.css";

function searchBar(props) {
  return (
    <div>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" onChange={props.onChange} type="search" placeholder="Search Employees" aria-label="Search" />
      </form>
    </div>
  )}
  
export default searchBar;






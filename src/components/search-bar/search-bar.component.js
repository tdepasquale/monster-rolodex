import React from 'react';

export const SearchBar = (props) => {
    return(
        <div className="container col-md-3 mx-auto py-2">
            <input type="search" placeholder = {props.placeholder} onChange= {props.handleChange} className="form-control"></input>
        </div>
    )
};
import React from 'react';

const Search = (props) => {
    return (
        <div className="col col-sm-4 pt-2">
            <input className='form-control'
                placeholder='Type some name to search here...'
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}></input>
        </div>
    )
};

export default Search;
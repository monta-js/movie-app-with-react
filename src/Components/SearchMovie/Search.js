import React from 'react';

import Rate from '../Rate';

import './Search.css';

const Search = ({ setNameSearch, setRatingSearch, ratingSearch }) => {
  return (
    <div>
  <input type="text" className="form-control" 
  placeholder="Search" 
  aria-label="Username" 
  aria-describedby="basic-addon1"
  onChange={(e) => setNameSearch(e.target.value)}/>
<Rate
          className='star-rating'
          starIndex={setRatingSearch}
          rating={ratingSearch}
        />
    </div>
  );
};

export default Search;

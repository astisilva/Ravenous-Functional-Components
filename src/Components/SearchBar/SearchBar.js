import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  };

  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) {
      return 'active';
    }
    return '';
  };

  const handleSortByChange = (sortByOption) => {
    console.log('handleSortByChange länkar');
    setSortBy(sortByOption);
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
    console.log(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    console.log(event);
  };

  const handleSearch = (event) => {
    console.log('handleSearch');

    const {searchYelp} = props;
    if (!term || !location) {
      return alert('Du måste ange location och place');
    }

    searchYelp(term, location, sortBy);
    event.preventDefault();
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      /*Object.keys(sortByOptions) this returns an array containing the keypropertys, 
      sortByOption is refering each element inside our array that we are changing it to */
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          onClick={() => handleSortByChange(sortByOptionValue)}
          key={sortByOptionValue}
          style={{listStyleType: 'none'}}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Business" onChange={handleTermChange} />
        <input placeholder="Where?" onChange={handleLocationChange} />
      </div>
      <div className="SearchBar-submit" onClick={handleSearch}>
        <a>Let´s go</a>
      </div>
    </div>
  );
};

export default SearchBar;

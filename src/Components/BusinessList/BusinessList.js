import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

const BusinessList = (props) => {
  const {businesses} = props;
  return (
    <div className="BusinessList">
      {businesses.map((business) => {
        return <Business business={business} key={business.id} />;
      })}
    </div>
  );
};

export default BusinessList;

import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumbs = ({ data }) => {
  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
      {data.mao((item, index) => {
        return (
          <div>
            <Link to={item.link}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;

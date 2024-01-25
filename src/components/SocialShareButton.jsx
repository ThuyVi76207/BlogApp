import React from 'react';
import { FaSquareFacebook } from 'react-icons/fa6';

const SocialShareButton = ({ url, title }) => {
  return (
    <div className="w-full flex justify-between">
      <a href="/" target="_blank" ref="no"></a>
      <FaSquareFacebook />
    </div>
  );
};

export default SocialShareButton;

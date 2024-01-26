import React from 'react';
import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareReddit,
  FaSquareWhatsapp,
} from 'react-icons/fa6';

const SocialShareButton = ({ url, title }) => {
  return (
    <div className="w-full flex justify-between">
      <a href="/" target="_blank" rel="noreferrer">
        <FaSquareFacebook className="text-[#3b5998] w-12 h-auto" />
      </a>
      <a href="/" target="_blank" rel="noreferrer">
        <FaSquareTwitter className="text-[#00acee] w-12 h-auto" />
      </a>
      <a href="/" target="_blank" rel="noreferrer">
        <FaSquareReddit className="text-[#ff4500] w-12 h-auto" />
      </a>
      <a href="/" target="_blank" rel="noreferrer">
        <FaSquareWhatsapp className="text-[#25D366] w-12 h-auto" />
      </a>
    </div>
  );
};

export default SocialShareButton;

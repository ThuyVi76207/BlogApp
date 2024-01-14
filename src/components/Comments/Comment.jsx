import React from 'react';
import { images } from '../../constants';

const Comment = ({ comment }) => {
  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg">
      <img
        src={images.PostProfileImage}
        alt="user profile"
        className="w-9 h-9 object-cover rounded-full"
      />
      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-dark-hard text-xs">
          {comment.user.name}
        </h5>
        <span className="text-xs text-dark-light">
          {new Date(comment.createAt).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
          })}
        </span>
        <p className="font-opensans mt-[10px] text-dark-light">
          {comment.desc}
        </p>
        <div className="">
          <button>
            <span>Reply</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;

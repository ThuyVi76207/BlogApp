import React, { useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import { getCommentsData } from '../../data/comment';
import Comment from './Comment';

const CommentsContainer = ({ className, logginedUserId }) => {
  const [comments, setComments] = useState([]);
  const mainComments = comments.filter((comment) => comment.parent === null);
  const [affeactedComment, setAffectedComment] = useState(null);

  console.log('Check comment', comments);

  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })();
  }, []);

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: '10',
      user: { _id: 'a', name: 'Mohammad Rezaill' },
      desc: value,
      post: '1',
      parent: parent,
      replyOnUser: replyOnUser,
      createAt: '2023-12-31T17:22:05.092+0000',
    };
    setComments((curState) => {
      return [newComment, ...curState];
    });
  };

  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel={'Send'}
        formSubmitHandler={(value) => addCommentHandler(value)}
      />
      <div className="space-y-4 mt-8">
        {mainComments.map((comment, item) => (
          <Comment
            key={item}
            comment={comment}
            logginedUserId={logginedUserId}
            affeactedComment={affeactedComment}
            setAffectedComment={setAffectedComment}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;

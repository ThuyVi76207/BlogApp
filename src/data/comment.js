export const getCommentsData = async () => {
  return [
    {
      _id: '10',
      user: { _id: 'a', name: 'Mohammad Rezaill' },
      desc: 'it was s nice post, Thank you!',
      post: '1',
      parent: null,
      replyOnUser: null,
      createAt: '2023-12-31T17:22:05.092+0000',
    },
    {
      _id: '11',
      user: { _id: 'b', name: 'Paul M. Williams' },
      desc: 'a reply for Mohammad',
      post: '1',
      parent: '10',
      replyOnUser: 'a',
      createAt: '2023-12-31T17:22:05.092+0000',
    },
    {
      _id: '12',
      user: { _id: 'b', name: 'Paul M. Williams' },
      desc: 'keep it up bro <3',
      post: '1',
      parent: null,
      replyOnUser: null,
      createAt: '2023-12-31T17:22:05.092+0000',
    },
    {
      _id: '13',
      user: { _id: 'c', name: 'Jessica C. Stephens' },
      desc: 'I am always interested in your content :)',
      post: '1',
      parent: null,
      replyOnUser: null,
      createAt: '2023-12-31T17:22:05.092+0000',
    },
  ];
};

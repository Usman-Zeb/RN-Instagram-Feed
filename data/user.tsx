export const USERS = [
  {
    name: 'Bill Gates',
    url: require('../assets/people/bill.png'),
  },
  {
    name: 'Elon Musk',
    url: require('../assets/people/elon.jpg'),
  },
  {
    name: 'Big Shaq',
    url: require('../assets/people/shaq.png'),
  },
  {
    name: 'Big Shaq2',
    url: require('../assets/people/shaq.png'),
  },
  {
    name: 'Big Shaq3',
    url: require('../assets/people/shaq.png'),
  },
  {
    name: 'Big Shaq4',
    url: require('../assets/people/shaq.png'),
  },
  {
    name: 'Big Shaq5',
    url: require('../assets/people/shaq.png'),
  },
  {
    name: 'Big Shaq6',
    url: require('../assets/people/shaq.png'),
  },
];

export const POSTS = [
  {
    postID: 1,
    imageUrl: require('../assets/postImages/nyc.jpg'),
    likes: 100,
    caption: 'Hello to the city that never sleeps!',
    user: USERS[0],
    comments: [
      {
        user: 'usmanzeb',
        comment: 'Wow! Looks awesome, hope to make there some day :)',
      },
      {
        user: 'hanzla',
        comment: 'Looks beautiful!',
      },
    ],
  },
  {
    postID: 2,
    imageUrl: require('../assets/postImages/paris.jpg'),
    likes: 100,
    caption: 'The city of love!',
    user: USERS[1],
    comments: [
      {
        user: 'javaid.draws',
        comment: 'The ambience is unreal!',
      },
      {
        user: 'trueGeordie',
        comment: 'Wow! Looks so pretty!',
      },
    ],
  },
  {
    postID: 3,
    imageUrl: require('../assets/postImages/rig.jpg'),
    likes: 100,
    caption: 'Just built my gaming rig!',
    user: USERS[2],
    comments: [
      {
        user: 'lebron.james',
        comment: 'Shaq! Ma man, this setup is a beast!',
      },
      {
        user: 'tiger.woods',
        comment: 'What are the specs? Love the rig!',
      },
    ],
  },
  {
    postID: 4,
    imageUrl: require('../assets/postImages/montreal.jpg'),
    likes: 100,
    caption: 'Staying at Montreal today!',
    user: USERS[2],
    comments: [
      {
        user: 'max.millian',
        comment: 'Looks like you are enjoying your stay, Shaq! :)',
      },
      {
        user: 'lara',
        comment: 'Wow, montreal is so pretty!',
      },
    ],
  },
];

module.exports = {
  post: {
    caseStudies: {
      req: { email: 'guythomas721@gmail.com',
        url: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
      },
      res: {
        updated:
        { shortCode: 'd4bba',
          url: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
          email: 'guythomas721@gmail.com',
        },
        isNewEmail: false,
      },
    },
  },
  get: {
    caseStudies: {
      res: [{ id: 1,
        url: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
        shortCode: 'd4bba',
        createdAt: '2017-05-20T11:56:18.476Z',
        updatedAt: '2017-05-20T11:56:18.476Z',
        userId: '2a240442-ec3c-4e48-bd8f-6945e62ffa25' }],
      params: {
        shortCode: {
          req: { params: { shortCode: 'd4bba' } },
          res: { id: 1,
            url: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
            shortCode: '71790',
            createdAt: '2017-05-20T11:53:54.822Z',
            updatedAt: '2017-05-20T11:53:54.822Z',
            userId: 'c25ffdfd-bcf5-4592-a346-38437ec6b570',
          },
        },
      },
    },
    sessions: {
      res: {},
      params: {
        shortCode: {
          req: { params: { shortCode: 'd4bba' } },
          res: [{
            id: 1,
            duration: '8202',
            socketId: 'TqRzdSMZzoAsS1nyAAAA',
            createdAt: '2017-05-20T12:38:57.463Z',
            recording: [{ x: 600, y: 596, time: 47 }, { x: 1307, y: -395, time: 62 }, { x: 645, y: 250, time: 90 }, { x: 193, y: 736, time: 104 }, { x: 579, y: 186, time: 119 }, { x: 478, y: 76, time: 141 }, { x: 687, y: 167, time: 155 }, { x: 935, y: -14, time: 167 }, { x: 329, y: 437, time: 179 }, { x: 230, y: 551, time: 194 }, { x: 174, y: 545, time: 212 }, { x: 241, y: 547, time: 227 }, { x: 267, y: 529, time: 244 }, { x: 280, y: 484, time: 260 }, { x: 424, y: 390, time: 277 }, { x: 322, y: 420, time: 294 }],
          }],
        },
      },
    },
  },
};
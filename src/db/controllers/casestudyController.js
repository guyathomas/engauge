// 'using strict';

// const userRepo = require('../data/usersRepository');
// const crypt = require('../crypt');

// function findShortURL(req, res) {

// }

// //Template code
// function getUser(req, res) {
//   const email = req.query.email;

//   userRepo.findByEmail(email)
//         .then((users) => {
//           if (users.length) {
//             return res.send(user);
//           }
//           return res.send({
//             message: 'Could not find user.',
//           });
//         })
//         .catch(error => res.send({
//           message: 'Error retrieving user.',
//         }));
// }
// //Template code

// module.exports = { get: getUser };
// db.casestudy.find(/*TODO: Update to look for any existing conflicted shortened urls*/).then(results => console.log('database results', results));

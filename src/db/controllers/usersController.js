'using strict';

const userRepo = require('../data/usersRepository');
const crypt = require('../crypt');

function getUser(req, res) {
  const email = req.query.email;

  userRepo.findByEmail(email)
        .then((users) => {
          if (users.length) {
            return res.send(user);
          }
          return res.send({
            message: 'Could not find user.',
          });
        })
        .catch(error => res.send({
          message: 'Error retrieving user.',
        }));
}

module.exports = { get: getUser };

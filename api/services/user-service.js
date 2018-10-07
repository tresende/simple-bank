const crypto = require('crypto'),
  algorithm = 'aes-256-ctr',
  password = 'galo-doido';

const encrypt = (text) => {
  var cipher = crypto.createCipher(algorithm, password)
  var crypted = cipher.update(text, 'utf8', 'hex')
  crypted += cipher.final('hex');
  return crypted;
}

const decrypt = (text) => {
  var decipher = crypto.createDecipher(algorithm, password)
  var dec = decipher.update(text, 'hex', 'utf8')
  dec += decipher.final('utf8');
  return dec;
}

const createUser = (user) => {
  user.password = encrypt(user.password);
  return new Promise((resolve, reject) => {
    User.create(user)
      .then((newUser) => resolve(newUser))
      .catch((err) => reject(err));
  })
}

module.exports = {
  save: (user) => {
    return new Promise((resolve, reject) => {
      createUser(user)
        .then((newUser) => resolve(newUser))
        .catch((err) => reject(err));
    });
  },
};

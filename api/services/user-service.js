const crypto = require('crypto'),
  algorithm = 'aes-256-ctr',
  password = 'galo-doido';

const getAccountNumber = async () => {
  let total = await User.count({});
  return String(total).padStart(6, '0');
}

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

const createUser = async (user) => {
  user.password = encrypt(user.password);
  user.code = await getAccountNumber();
  return new Promise((resolve, reject) => {
    User.create(user).fetch().exec((err, result) => {
      if (err) {
        reject(err);
      } else {
        result.token = '123';
        resolve(result);
      }
    });
  })
}

const searchUser = (user) => {
  user.password = decrypt(user.password);
  return new Promise((resolve, reject) => {
    User.findOne(user)
      .then((newUser) => {
        return 'abc';
      })
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

  search: (user) => {
    return new Promise((resolve, reject) => {
      searchUser(user)
        .then((newUser) => resolve(newUser))
        .catch((err) => reject(err));
    });
  },
};

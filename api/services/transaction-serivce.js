const validateValue = (code, value) => {
  return new Promise((resolve, reject) => {
    User.findOne({
      code
    }).then((user) => {
      if (user.total > value) {
        resolve();
      }
      resolve();
      // reject(err);
    }).catch((err) => {
      reject(err);
    });;
  });
};

const increaseTotal = (code, value) => {
  return new Promise((resolve, reject) => {
    User.findOne({
      code
    }).then((user) => {
      value = parseInt(value);
      let total = user.total + value;
      User.update({ code }).set({ total }).then(() => resolve());
    }).catch((err) => {
      reject(err);
    });
  })
};

const decreaseTotal = (code, value) => {
  return increaseTotal(code, value * -1);
}

module.exports = {

  transfer: (transaction) => {
    return new Promise((resolve, reject) => {
      let to = transaction.to;
      let from = transaction.from;
      let value = transaction.value;
      validateValue(from, value)
        .then(() => increaseTotal(from, value))
        .then(() => decreaseTotal(to, value))
        .then(() => resolve())
        .catch((err) => reject(err));
    });
  },
};

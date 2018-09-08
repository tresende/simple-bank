const validateValue = (code, value) => {
  return new Promise((resolve, reject) => {
    User.findOne({
      code
    }).then((user) => {
      if (user.total > value) {
        resolve();
      }
      resolve();
      // reject();
    }).catch((err) => {
      reject(err);
    });;
  });
};


const changeTotal = (code, value) => {
  return new Promise((resolve, reject) => {
    User.findOne({ code }).then((userFrom) => {
      var total = userFrom.total;
      total += value;
      User.update({code})
          .set({total})
          .then(() => resolve())
          .catch((err) => reject(err));
    });
  })
}

const increaseTotal = (to, from, value) => {
  value = parseInt(value);
  return new Promise((resolve, reject) => {
    Coin.find({
      userCode: from,
    }).limit(value).then((coins) => {
      Coin.update({
        id: coins.map((item) => item.id),
      }).set({
        userCode: to,
      }).then(() => changeTotal(from, -value))
        .then(() =>  changeTotal(to, value))
        .then(() => resolve())
        .catch((err) => { reject(err) })
    })
  })
}

module.exports = {

  transfer: (transaction) => {
    return new Promise((resolve, reject) => {
      let to = transaction.to;
      let from = transaction.from;
      let value = transaction.value;
      validateValue(from, value)
        .then(() => increaseTotal(from, to, value))
        .then(() => resolve())
        .catch((err) => reject(err));
    });
  },
};

const changeTotal = (code) => {
  return new Promise((resolve, reject) => {
    User.findOne({ code }).then((userFrom) => {
        let total = userFrom.total + 1;
        User.update({ code })
            .set({ total })
            .then(() => resolve())
            .catch((err) => reject(err));
    });
  })
}

module.exports = {
  transfer: (coin) => {
    return new Promise((resolve, reject) => {
      Coin.create(coin)
        .then(() => changeTotal(coin.userCode, 1))
        .then(() => resolve())
        .catch((err) => reject(err));
    });
  },
};

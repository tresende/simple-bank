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

const increaseTotal = (to, from, value) => {
  value = parseInt(value);
  return new Promise((resolve, reject) => {
    Coin.find({
      userCode : from,
    }).limit(value).then((coins) =>{
      Coin.update({
        id : coins.map((item) => item.id),
      }).set({
        userCode : to,
      }).then(() => {
        User.findOne({
          code: from
        }).then((userFrom) => {
          var total = userFrom.total;
          total -= value; 
          User.update({ from }).set({ total }).then(() =>{
            User.findOne({
              code: to
            }).then((userFrom) => {
              var total = userFrom.total;
              total += value; 
              User.update({ to }).set({ total }).then(() => resolve());
            }); 
          });
        })
      })
    }).catch((err) => {
        reject(err);
      });


    // User.findOne({
    //   from
    // }).then((user) => {

    //   Coin.update({
    //     userCode : from,
    //   }).set({
    //     userCode : to,
    //   })then((coins) => {
     
        
    //     Coin.update({ from }).set({ total }).then(() => resolve());


    //   });  



    //   value = parseInt(value);
    //   let total = user.total + value;
    //   User.update({ from }).set({ total }).then(() => resolve());
    // }).catch((err) => {
    //   reject(err);
    // });
  })
};

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

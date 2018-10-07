const transactionService = require('../services/transaction-serivce.js');

module.exports = {
  create: (req, res) => {
    var transaction = req.body;
    transactionService.transfer(transaction).then(() => {
      return res.status(200).json({})
    }).catch((err) => {
      return res.status(500).json({})
    });
  },
  update: (req, res) => {
    return res.status(401).json({})
  },
  destroy: (req, res) => {
    return res.status(401).json({})
  },
  destroy: (req, res) => {
    return res.status(401).json({})
  },
};

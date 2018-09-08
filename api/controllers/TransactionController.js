/**
 * TransactionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const transactionService = require('../services/transaction-serivce.js');

module.exports = {
  create: (req, res) => {
    var transaction = req.body;
    transactionService.transfer(transaction).then((data) => {
      return res.status(200).json({})
    }).catch((err) => {
      return res.status(500).json(err)
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

/**
 * coinController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const coinService = require('../services/coin-service.js');

module.exports = {
  create: (req, res) => {
    var coin = req.body;
    coinService.transfer(coin).then(() => {
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

/**
 * Transaction.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


module.exports = {
  attributes: {
    to: {
      type: 'string',
    },
    from: {
      type: 'string',
    },
    value: {
      type: 'number',
      defaultsTo: 0,
      columnType: 'FLOAT'
    },
  }
};

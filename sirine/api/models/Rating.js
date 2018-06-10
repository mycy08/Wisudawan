/**
 * Rating.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user_id:{
      type:'string',
      required:true
    },
    anime_id:{
      type:'string',
      required:'string'
    },
    score:{
      type:'number'
    },
    review:{
      type:'string'
    }
  },
  connection:'database',
};


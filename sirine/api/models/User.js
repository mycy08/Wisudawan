/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    email:{
      type:'string',
      email: true,
      required:true,
      unique:true
    },
    password:{
      type:'string',
      required:true
    },
    nama:{
      type:'string',
      required:true
    },
    
    tgl_lahir:{
      type:'string'

    },
    photo_url:{
      type:'string'

    },
    no_hp:{
      type:'string'

    },
    sukses:{
      type:'integer'
    },
    batal:{
      type:'integer'
    },
  },
  connection:'database'
};


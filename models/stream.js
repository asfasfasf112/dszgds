const { Schema, model } = require("mongoose");

const voicewsx = new Schema (
  {
    id: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    expireIn: {
        type: String,
        required: true,
    }

  }
)
module.exports = model ('strseaming' , voicewsx)
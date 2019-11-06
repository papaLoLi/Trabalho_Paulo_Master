const { Schema, Model } = require("mongoose")
const User = new Schema(
  {
    Nome: String
   
  },
  {
    Email: String
  },
  {
    Senha: String
  },
 { token: String },
  {
    timestamps: true
  }
)
// facd  de exportação
module.exports = Model("User", User)

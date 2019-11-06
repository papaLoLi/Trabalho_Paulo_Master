const User = require("../Model/Users")

module.exports = {
  async store(req, res) {
    const use = await User.create(req.body.User)
    return res.json(use)
  },
  async list(res) {
    const use = await User.find({ })
    return res.json(use)
  },
  async index(req, res) {
    const use = await User.findOne({ _id: req.params.id })
    return res.json(use)
  },
  async destroy(req, res) {
    await User.deleteOne({ _id: req.params.id })
    return res.json(
      {
      message: "Usuario excluido:-)"
    }
    )
  },
  async update(req, res) {
    const use = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    return res.json(
      {
      message: "Usuario atualizado sem problemas chefe!!"
    }
    )
  }

}


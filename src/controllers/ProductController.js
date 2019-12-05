const mongoose = require('mongoose');


const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {

    try {
      const { page = 1 } = req.query;
      const products = await Product.paginate({}, { page, limit: 10 });

      return res.json(products);
    } catch (error) {

    }
  },

  async show(req, res) {

    try {
      const product = await Product.findById(req.params.id);

      return res.json(product);

    } catch (error) {
      return res.json({ error: error });
    }

  },

  async store(req, res) {

    try {
      const product = await Product.create(req.body);

      console.log(product);


      return res.json(product);

    } catch (error) {
      return res.json({ error: error });
    }
  },

  async update(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

      return res.json(product);
    } catch (error) {
      return res.json({ error: error });
    }
  },

  async destroy(req, res) {
    try {
      await Product.findByIdAndRemove(req.params.id);

      return res.json({ info: "Registro excluido com sucesso" });
    } catch (error) {
      return res.json({ error: error });
    }
  }

}
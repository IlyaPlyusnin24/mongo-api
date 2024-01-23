const IPR = require("../models/IPR");

// create an ipr

async function createIpr(req, res) {  
    try {
    console.log({body: req.body}); 
      const savedIPR = await IPR.create(req.body);

      res.status(200).json('IPR created successfully');
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  module.exports = { createIpr };
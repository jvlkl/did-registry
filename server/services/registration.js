const registration = require('../../registry/registry');
const logger = require('../config/logger');


module.exports = {
    registerDID(req, res) {

      var aktdid = req.params.aktdid
      var pid = req.body.pid

      registration.registerDID(pid, aktdid)
      .then( x => {
          return res.send(x);
      })
      .catch(error => {
        logger.error(error);
        res.status(400).send(Object.entries(error.data)[0][1].reason);
      });
      },


}

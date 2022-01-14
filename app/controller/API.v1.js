class APIController {

  /**
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   * @returns Simple JSON response
   */
  async index(req, res, next) {
    return res.send({
      success: false
    });
  }
}

module.exports = new APIController();

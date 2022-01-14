class HomeController {

  /**
   * Default controller method
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   * @returns renders home page
   */
  async index(req, res, next) {
    return res.render("home");
  }
}

module.exports = new HomeController();

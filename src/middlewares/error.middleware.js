class Middleware {
  error = async (err, req, res, next) => {
    res.status(err.status).json({
      status: false,
      message: err.message || err,
      data: null,
    });
  }
}

module.exports = new Middleware();


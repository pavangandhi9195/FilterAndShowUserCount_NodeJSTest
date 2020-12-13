const USER = require('../models/user');
const USER_VIEW = require('../models/userView');

/**
 * Get all posts
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.all = async (req, res, next) => {
  try {
    const queryParams = req.query;
    let _query = {isDeleted: false};
    if(queryParams.type){
      switch(queryParams.type){
        case 'daily':
          _query.viewDate = new Date();
        break;
        case 'weekly':
          _query.viewDate = {
            $gt: new Date(new Date().setDate(new Date().getDate()-7)),
            $lt: new Date(),
          }
        break;
        case 'monthly':
          _query.viewDate = {
            $gt: new Date(new Date().setDate(new Date().getDate()-28)),
            $lt: new Date(),
          }
        break;
        case 'custom':
          const from = queryParams.from;
          let to = new Date();
          if(!queryParams.to) queryParams.to = queryParams.to;
          _query.viewDate = {
            $gt: from,
            $lt: to,
          }
        break;
      }
    }

    const user = await USER.countDocuments({});
    const userViews = await USER_VIEW.distinct('user');
    const numberOfViews = await USER_VIEW.countDocuments(_query);
    let response = {
      totalSystemUser: user,
      userViews: userViews.length,
      numberOfViews
    }
    return res.render('index', {response})
    // return res.sendJson(200, response);
  } catch (error) { next(error); }
}

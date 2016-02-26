var ApiUtil = require('../util/api_util');

var ReviewActions = {
  fetchAllReviews: function () {
    ApiUtil.fetchAllReviews();
  },
  createUtil: function () {
    ApiUtil.createSingleReview();
  },
  fetchSingleReview: function(id) {
    ApiUtil.fetchSingleReview(id);
  },


};

module.exports = ReviewActions;

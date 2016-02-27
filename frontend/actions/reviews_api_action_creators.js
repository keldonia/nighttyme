var ApiUtil = require('../util/api_util');

var ReviewActions = {
  fetchAllReviews: function () {
    ApiUtil.fetchAllReviews();
  },
  createSingleReview: function (review) {
    ApiUtil.createSingleReview(review);
  },
  fetchSingleReview: function(id) {
    ApiUtil.fetchSingleReview(id);
  },
};

module.exports = ReviewActions;

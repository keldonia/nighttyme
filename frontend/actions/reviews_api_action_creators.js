var ApiUtil = require('../util/api_util');

var ReviewActions = {
  fetchAllReviews: function (count) {
    ApiUtil.fetchAllReviews(count);
  },
  createSingleReview: function (review) {
    ApiUtil.createSingleReview(review);
  },
  fetchSingleReview: function(id) {
    ApiUtil.fetchSingleReview(id);
  },
  fetchTopReview: function() {
    ApiUtil.fetchTopReview();
  },
};

module.exports = ReviewActions;

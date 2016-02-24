var AppDispatcher = require('../dispatcher');
var ApiConstants = require('../constants/api_constants');
var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchBusinesses: function(query) {
    $.ajax ({
      method: "GET",
      url: 'api/businesses',
      dataType: 'json',
      data: query,
      success: function (responseText) {
        ApiActions.recieveAllBusinesses(responseText);
      },
      error: function (errorThrown) {
        ApiActions.recieveAllBusinessErrors(errorThrown);
      }
    });
  },

  fetchReviews: function(query) {
    $.ajax ({
      method: "GET",
      url: 'api/businesses',
      dataType: 'json',
      data: query,
      success: function (responseText) {
        ApiActions.recieveAllReviews(responseText);
      },
      error: function (errorThrown) {
        ApiActions.recieveAllReviewErrors(errorThrown);
      }
    });
  }
};

module.exports = ApiUtil;

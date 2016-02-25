var AppDispatcher = require('../dispatcher');
var ApiConstants = require('../constants/api_constants');
var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchAllBusinesses: function() {
    $.ajax ({
      method: "GET",
      url: 'api/businesses',
      dataType: 'json',
      success: function (responseText) {
        ApiActions.recieveAllBusinesses(responseText);
      },
      error: function (errorThrown) {
        ApiActions.recieveAllBusinessErrors(errorThrown);
      }
    });
  },
  fetchAbrigedBusinesses: function() {
    $.ajax ({
      methid: "GET",
      url: "api/businesses?abridged=true",
      dataType: 'json',
      success: function (responseText) {
        ApiActions.recieveAbridgedBusinesses(responseText);
      },
      error: function (errorThrown) {
        ApiActions.recieveAllBusinessErrors(errorThrown);
      }

    });
  },
  fetchAllReviews: function() {
    $.ajax ({
      method: "GET",
      url: 'api/reviews',
      dataType: 'json',
      success: function (responseText) {
        ApiActions.recieveAllReviews(responseText);
      },
      error: function (errorThrown) {
        ApiActions.recieveAllReviewErrors(errorThrown);
      }
    });
  },
  fetchSingleReview: function(id) {
    $.ajax ({
      method: "GET",
      url: 'api/reviews/' + id,
      dataType: 'json',
      success: function (responseText) {
        ApiActions.recieveSingleReview(responseText);
      },
      error: function (errorThrown) {
        ApiActions.recieveAllReviewErrors(errorThrown);
      }
    });
  }
};

module.exports = ApiUtil;

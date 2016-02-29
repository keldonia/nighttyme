var ApiConstants = require('../constants/api_constants');
var ApiActions = require('../actions/api_actions');
var ReviewApiDispatchs = require('../actions/reviews_api_dispatchs');
var BusinessApiDispatchs = require('../actions/business_api_dispatchs');
var FilterParamsStore = require('../stores/filter');

var ApiUtil = {
  fetchAllBusinesses: function() {
    $.ajax ({
      method: "GET",
      url: 'api/businesses',
      dataType: 'json',
      success: function (responseText) {
        BusinessApiDispatchs.recieveAllBusinesses(responseText);
      },
      error: function (errorThrown) {
        ApiActions.recieveAllBusinessErrors(errorThrown);
      }
    });
  },
  fetchBusinesses: function (searchCriteria) {
    var filter = FilterParamsStore.params();
    $.get('api/businesses', filter);
  },
  fetchAbrigedBusinesses: function() {
    $.ajax ({
      method: "GET",
      url: "api/businesses?abridged=true",
      dataType: 'json',
      success: function (responseText) {
        BusinessApiDispatchs.recieveAbridgedBusinesses(responseText);
      },
      error: function (errorThrown) {
        ApiActions.recieveAllBusinessErrors(errorThrown);
      }

    });
  },
  fetchSingleBusiness: function(id) {
    $.ajax ({
      method: "GET",
      url: 'api/businesses/' + id,
      dataType: 'json',
      success: function (responseText) {
        BusinessApiDispatchs.recieveSingleBusiness(responseText);
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
        ReviewApiDispatchs.recieveAllReviews(responseText);
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
        ReviewApiDispatchs.recieveSingleReview(responseText);
      },
      error: function (errorThrown) {
        ApiActions.recieveAllReviewErrors(errorThrown);
      }
    });
  },
  createSingleReview: function(review) {
    $.ajax ({
      method: "POST",
      url: 'api/reviews/',
      dataType: 'json',
      data: review,
      success: function (responseText) {
        ReviewApiDispatchs.recieveSingleReview(responseText);
      },
      error: function (errorThrown) {
        ApiActions.recieveAllReviewErrors(errorThrown);
      }
    });
  },
  signOut: function () {
    $.ajax ({
      method: "DELETE",
      url: 'session',
      dataType: 'json',
      success: function () {
        window.location.href = "/";
      }
    });
  }
};

module.exports = ApiUtil;

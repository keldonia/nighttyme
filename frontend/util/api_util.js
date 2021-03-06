var ApiConstants = require('../constants/api_constants');
var ApiActions = require('../actions/api_actions');
var ReviewApiDispatchs = require('../actions/reviews_api_dispatchs');
var BusinessApiDispatchs = require('../actions/business_api_dispatchs');
var FilterParamsStore = require('../stores/filter');
var SearchApiDispatches = require('../actions/search_api_dispatches');

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
  fetchBusinesses: function () {
    var filter = FilterParamsStore.params();
    $.get('api/businesses', filter, function(businesses) {
      BusinessApiDispatchs.recieveAllBusinesses(businesses);
    });
  },
  searchBusinesses: function (searchCriteria) {
    $.get('api/searchsuggestions', searchCriteria, function(business) {
      SearchApiDispatches.recieveBusinesses(business);
    });
  },
  fetchAbrigedBusinesses: function() {
    $.ajax ({
      method: "GET",
      url: "api/businesses?abridged=true",
      dataType: 'json',
      success: function (business) {
        BusinessApiDispatchs.recieveAbridgedBusinesses(business);
      },
      error: function (errorThrown) {
        ApiActions.recieveAllBusinessErrors(errorThrown);
      }

    });
  },
  fetchTopFiveBusinesses: function() {
    $.get('api/businesses', {Top5: true}, function(businesses) {
      BusinessApiDispatchs.recieveTopFiveBusinesses(businesses);
    });
  },
  fetchSingleBusiness: function(id) {
    $.ajax ({
      method: "GET",
      url: 'api/businesses/' + id,
      dataType: 'json',
      success: function (responseText) {
        BusinessApiDispatchs.recieveSingleBusiness(responseText);
        BusinessApiDispatchs.recieveAllBusinesses([responseText]);
      },
      error: function (errorThrown) {
        ApiActions.recieveAllBusinessErrors(errorThrown);
      }
    });
  },
  fetchAllReviews: function(count) {
    $.ajax ({
      method: "GET",
      url: 'api/reviews',
      dataType: 'json',
      data: { count: count},
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
  fetchTopReview: function(id) {
    $.get('api/reviews', {Top: true}, function(review) {
      ReviewApiDispatchs.recieveTopReview(review);
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
  fetchAllTags: function() {
    $.ajax ({
      method: "GET",
      url: 'api/tags',
      dataType: 'json',
      success: function (responseText) {
        ApiActions.recieveAllTags(responseText);
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
        window.location = "/session/new";
      }
    });
  }
};

module.exports = ApiUtil;

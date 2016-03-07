var Store = require('flux/utils').Store;
var ApiConstants = require('../constants/api_constants');
var AppDispatcher = require('../dispatcher');

var _businesses = {};
var _businessesCount = 100;
var _businessesShort = {};
var _business = {};

var BusinessStore = new Store(AppDispatcher);

BusinessStore.all = function () {
  return Object.keys(_businesses).map( function(key) {
    return _businesses[key];
  });
};

BusinessStore.allAbridged = function () {
  return Object.keys(_businessesShort).map( function(key) {
    return _businessesShort[key];
  });
};

BusinessStore.count = function () {
  return _businessesCount;
}

BusinessStore.allReviews = function () {
  return _business.reviews;
}

BusinessStore.singleBusiness = function (id) {
  return _business;
};

BusinessStore.findReview = function (id) {
  var review;
  var reviews = _business.reviews;
  if (reviews) {
    Object.keys(reviews).forEach( function (currentReviewId) {
      var currentReview = reviews[currentReviewId];
      if (currentReview.id === id) {
        review = currentReview;
      }
    });
  }

  return review;
};

BusinessStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ApiConstants.ALL_BUSINESSES:
      BusinessStore.resetBusinesses(payload.businesses);
      BusinessStore.__emitChange();
      break;
    case ApiConstants.ABRIDGED_BUSINESSES:
      BusinessStore.resetAbridgedBusinesses(payload.businesses);
      BusinessStore.__emitChange();
      break;
    case ApiConstants.SINGLE_BUSINESS:
      BusinessStore.resetBusiness(payload.business);
      BusinessStore.__emitChange();
      break;
    default:

  }
};

BusinessStore.resetBusinesses = function (businesses) {
  _businesses = {};
  businesses.forEach( function(business) {
    _businesses[business.id] = business;
  });
};
BusinessStore.resetBusiness = function (business) {
  _business = {};
  _business = business;
};

BusinessStore.resetAbridgedBusinesses = function (businesses) {
  _businessesShort = {};
  businesses.forEach( function(business) {
    _businessesShort[business.id] = business;
  });
};

module.exports = BusinessStore;

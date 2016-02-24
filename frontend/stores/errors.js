var Store = require('flux/utils').Store;
var ApiConstants = require('../constants/api_constants');
var AppDispatcher = require('../dispatcher');

var _errors = [];

var ErrorStore = new Store(AppDispatcher);

ErrorStore.all = function () {
  return _errors.slice();
};

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ApiConstants.ALL_BUSINESS_ERRORS:
      ErrorStore.resetError(payload.errors);
      ErrorStore.__emitChange();
      break;
    case ApiConstants.ALL_REVIEW_ERRORS:
      ErrorStore.resetError(payload.errors);
      ErrorStore.__emitChange();
      break;
    default:

  }
};

ErrorStore.resetError = function(errors) {
  _errors = {};
  _errors = errors;
};

module.exports = ErrorStore;

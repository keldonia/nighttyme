var AppDispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;
var FilterConstants = require('../constants/filter_constants');

var _params = {
  q: "", bounds: [], tags: [], attributes: [], price: [1,4], rating: [1,5]
};

var FilterParamsStore = new Store(AppDispatcher);

FilterParamsStore.params = function () {
  return Object.assign({}, _params);
};

FilterParamsStore.resetParams = function () {
  _params = {
    q:"", bounds: [], tags: [], attributes: [], price: [1,4], rating: [1,5]
  };
};

FilterParamsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case FilterConstants.UPDATE_BOUNDS:
      _params.bounds = payload.bounds;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_TAGS:
      _params.tags = payload.tags;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_ATTRIBUTES:
      _params.attributes = payload.attributes;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_PRICE:
      _params.price = payload.price;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_RATING:
      _params.rating = payload.rating;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.QUERY_STRING:
      _params.q = payload.str;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.RESET_SEARCH:
      FilterParamsStore.resetParams();
      FilterParamsStore.__emitChange();
      break;
    default:
  }
};

module.exports = FilterParamsStore;

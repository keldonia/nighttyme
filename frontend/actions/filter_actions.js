var AppDispatcher = require('../dispatcher');
var FilterConstants = require('../constants/filter_constants');

var FilterActions = {
  updateBounds: function (bounds) {
      AppDispatcher.dispatch({
        actionType: FilterConstants.UPDATE_BOUNDS,
        bounds: bounds
      });
  },
  updateTags: function (tags) {
    AppDispatcher.dispatch ({
      actionType: FilterConstants.UPDATE_TAGS,
      tags: tags
    });
  },
  updateAttributes: function (attributes) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_ATTRIBUTES,
      attributes: attributes
    });
  },
  updatePrice: function (price) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_PRICE,
      price: price
    });
  },
  updateRating: function (rating) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_RATING,
      price: price
    });
  }
};

module.exports = FilterActions;

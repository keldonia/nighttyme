var AppDispatcher = require('../dispatcher');
var ApiConstants = require('../constants/api_constants');

var SearchApiDispatches = {
  recieveBusinesses: function(suggestions) {
    AppDispatcher.dispatch({
      actionType: ApiConstants.SEARCH_SUGGESTIONS,
      suggestions: suggestions
    });
  },

};

module.exports = SearchApiDispatches;

var Store = require('flux/utils').Store;
var ApiConstants = require('../constants/api_constants');
var AppDispatcher = require('../dispatcher');

var _searchsuggestions = {};

var SearchSuggestionsStore = new Store(AppDispatcher);

SearchSuggestionsStore.all = function () {
  return Object.keys(_searchsuggestions).map( function(key) {
    return _searchsuggestions[key];
  });
};

SearchSuggestionsStore.resetSuggestions = function (searchSuggestions) {
  _searchsuggestions = {};
  Object.keys(searchSuggestions).forEach( function(searchSuggestion, idx) {
    _searchsuggestions[idx] = searchSuggestions[idx];
  });
};


SearchSuggestionsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ApiConstants.SEARCH_SUGGESTIONS:
      SearchSuggestionsStore.resetSuggestions(payload.suggestions);
      SearchSuggestionsStore.__emitChange();
      break;
    default:
  }
};

module.exports = SearchSuggestionsStore;

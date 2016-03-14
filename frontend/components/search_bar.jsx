var React = require('react');
var SearchSuggestionsStore = require('../stores/searchsuggestions');
var BusinessActions = require('../actions/business_api_action_creators');
var ApiActions = require('../actions/api_create_actions');
var FilterParamsStore = require('../stores/filter');
var FilterActions = require('../actions/filter_actions');
var OnClickOutside = require('react-onclickoutside');
var History = require('react-router').History;

var SearchBar = React.createClass({
  mixins: [History, OnClickOutside],

  getInitialState: function() {
    return ({
      items: this.getItems(),
      search: "",
      blurred: true
    });
  },

  getItems: function() {
    return SearchSuggestionsStore.all()
  },

  _suggestionsChanged: function() {
    var items = this.getItems();
    this.setState({ items: this.getItems() });
  },

  _filtersChanged: function () {
    this.setState({ search: FilterParamsStore.params().q })
  },

  componentDidMount: function () {
    this.searchListener = SearchSuggestionsStore.addListener(this._suggestionsChanged);
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    ApiActions.fetchSearchSuggestions();
  },

  componentWillUnmount: function () {
    this.searchListener.remove();
  },
  clearSuggestions: function () {
    this.setState({ blurred: true })
  },

  handleClickOutside: function (e) {
    e.preventDefault();
    this.clearSuggestions();
  },

  search: function (e) {
    e.preventDefault();
    this.setState({ blurred: false })
    var search = { q: e.currentTarget.value };
    ApiActions.fetchSearchSuggestions(search);
    this.setState({ search: e.currentTarget.value });
  },
  find: function(e) {
    e.preventDefault();
    var search = this.state.search;
    FilterActions.updateString(search);
    BusinessActions.fetchBusinesses();
    this.history.push('/businesses');
  },

  clickHandler: function (itemId, itemType , e) {
    e.preventDefault();
    if (itemType = 'business') {
      this.history.push('/businesses/' + itemId);
      this.clearSuggestions();
      this.setState({ search: "" });
    } else {
      console.log(itemId);
      console.log(itemType);
    }
  },

  searchItems: function () {
    var items = this.state.items;
    if (items && this.state.blurred === false) {
      return items.map (function (item, idx) {
        return <li
          className="search-suggestion"
          onClick={this.clickHandler.bind(this, item.id, item.type)}
          key={idx}
          id={this.id}
          data-type={this.type}>
          {item.name}</li>;
      }, this);
    }
  },

  render: function() {
    if (this.state.search) {
      var searchSuggestions = this.searchItems();
    }

    return (
      <div className="search-bar-top">
        <form onFocus={this.search} className='search-bar'  >
          <div className="search-box">
            <label htmlFor='main-search'></label>
            <input
              type="text"
              id='main-search'
              placeholder="Search SF Night Life!"
              value={this.state.search}
              onChange={this.search}
              autoComplete='off'
              />
            <button className="group" onClick={this.find}></button>
          </div>
          <ul className="search-suggestions" >
            {searchSuggestions}
          </ul>
        </form>
      </div>
    );
  },

});

module.exports = SearchBar;


var ATTRIBUTES = [
  'reservations',
  'credit cards',
  'parking',
  'bike parking',
  'good for groups',
  'dancing',
  'live music',
  'best nights',
  'coat check',
  'happy hour',
  'smoking',
  'outdoor seating',
  'tv',
  'pool table'
];

AMBIENCE = [
  'casual',
  'hipster',
  'sports',
  'redneck'
];

NOISE = [
  'average noise',
  'loud',
  'quiet'
];

ALCOHOL = [
  'full bar',
  'beer & wine only',
  'wine only',
  'beer only',
];

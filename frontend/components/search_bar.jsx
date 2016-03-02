var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
// var FuzzySearch = require('react-fuzzy-search');
var BusinessStore = require('../stores/business');
var BusinessActions = require('../actions/business_api_action_creators');
var FilterParamsStore = require('../stores/filter');
var FilterActions = require('../actions/filter_actions');
var ApiActions = require('../actions/api_create_actions');
var TagStore = require('../stores/tags');

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

var SearchBar = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({ items: this.getItems(), filterParams: FilterParamsStore.params() });
  },

  getBusinessNames: function() {
      return BusinessStore.allAbridged().map( function (business) {
        return business.name;
      });
  },

  getItems:function () {
    var businesses = this.getBusinessNames();
    this.tags = TagStore.all();
    var items = businesses.concat(this.tags);
    var items = items.concat(ATTRIBUTES).concat(NOISE)
      .concat(ALCOHOL).concat(AMBIENCE);
    var objItems = items.map( function(item) {
      return { name: item }
    });
    return objItems;
  },

  _businessesChanged: function() {
    this.setState({ items: this.getItems() });
  },

  _filtersChanged: function() {
    return FilterParamsStore.params();
  },

  componentDidMount: function () {
    this.businessListener = BusinessStore.addListener(this._businessesChanged);
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    BusinessActions.fetchAbrigedBusinesses();
    ApiActions.fetchAllTags();
  },

  componentWillUnmount: function () {
    this.businessListener.remove();
    this.filterListener.remove();
  },

  search: function (e) {
    e.preventDefault();
    console.log(e);
  },

  render: function() {
    return (
      <div className="search-bar-top">

      </div>
    );
  }

});

module.exports = SearchBar;


{/*<form className='search-bar' onSubmit={this.search}>
  <label htmlFor='main-search'></label>
  <input
    type="text"
    id='main-search'
    placeholder="What are you looking for?"
    valueLink={this.linkState("search")}
  />
<button className="group"></button>
</form>*/}

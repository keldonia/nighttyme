var React = require('react');
var BusinessStore = require('../stores/business');
var FilterParamsStore = require('../stores/filter');
var BusinessActions = require('../actions/business_api_action_creators');
var FilterActions = require('../actions/filter_actions');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

function _getAllBusinesses() {
  return BusinessStore.all();
}

function _getFilterParams() {
  return FilterParamsStore.params();
}

var Search = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      businesses: _getAllBusinesses(),
      filterParams: _getFilterParams()
    });
  },

  _businessesChanged: function () {
    this.setState({ businesses: _getAllBusinesses() });
  },

  _filtersChanged: function () {
    this.setState({ filterParams: _getFilterParams() });
    BusinessActions.fetchBusinesses(this.state.filterParams);
  },

  resetFilters: function () {
    FilterActions.resetFilters();
  },

  componentDidMount: function () {
    this.businessListener = BusinessStore.addListener(this._businessesChanged);
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    this.resetFilters();
    BusinessActions.fetchBusinesses();
  },

  componentWillUnmount: function () {
    this.resetFilters();
    this.businessListener.remove();
    this.filterListener.remove();
  },
  searchMinStars: function (e) {
    e.preventDefault();
    var val = e.target.value;
    FilterActions.updateRating([val,5]);
  },
  searchMaxPrice: function (e) {
    e.preventDefault();
    var val = e.target.value;
    FilterActions.updatePrice([1,val]);
  },
  priceIndicator: function () {
    if (this.state.filterParams) {
      var pricingInfo = this.state.filterParams.price[1]
      var pricingIndicator = "";

      for (var i = 0; i < pricingInfo; i++) {
        pricingIndicator += "$";
      }

      return pricingIndicator;
    }
  },
  starSelect: function (id, e) {
    e.preventDefault();
    FilterActions.updateRating([e.target.id,5]);
  },

  render: function() {
    var maxPrice = this.priceIndicator();
    var minRating = this.state.filterParams.rating[0];

    return (
      <div className="search">
        <section className="search-input-collection">
          <div className="reset-search-wrapper">
            <button className="reset-search" onClick={this.resetFilters}>Reset Filter</button>
          </div>
          <div className="rating-wrapper">
            <h4>Currently Searching:</h4>
            <p>{this.state.filterParams.tags}</p>
          </div>
          <div className="search-range-wrapper">
            <div className="rating-wrapper">
              <h4>Minimum Rating</h4>
                <div className="rating" data-rating={minRating}>
                  <i onClick={this.starSelect.bind(this, this.id)} id="1" className="star-1">★</i>
                  <i onClick={this.starSelect.bind(this, this.id)} id="2" className="star-2">★</i>
                  <i onClick={this.starSelect.bind(this, this.id)} id="3" className="star-3">★</i>
                  <i onClick={this.starSelect.bind(this, this.id)} id="4" className="star-4">★</i>
                  <i onClick={this.starSelect.bind(this, this.id)} id="5" className="star-5">★</i>
                </div>
              <input
                type="range"
                id='stars'
                max='5'
                min='1'
                step="0.5"
                className="stars"
                onChange={this.searchMinStars}
                value={minRating}
              />
            </div>
          </div>
          <div className="search-range-wrapper">
            <div className="rating-wrapper">
              <h4>Maximum Price</h4>
              <h5 className="priceIndicator">{maxPrice}</h5>
              <input
                type="range"
                id='stars'
                max='4'
                min='1'
                step="1"
                className="price"
                defaultValue="4"
                onChange={this.searchMaxPrice}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }

});

module.exports = Search;

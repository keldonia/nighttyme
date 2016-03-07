var BusinessStore = require('../stores/business');
var ReviewsStore = require('../stores/reviews');
var SearchStore = require('../stores/filter');
var ErrorStore = require('../stores/errors');
var BusinessIndexItem = require('./business_index_item');
var BusinessActions = require('../actions/business_api_action_creators');
var ApiUtil = require('../util/api_util');
var GMap = require('./gmap');
var Search = require('./search');
var React = require('react');

var Businesses = React.createClass({
  getInitialState: function () {
    return({
      businesses: BusinessStore.all(),
      searchTerms: SearchStore.params(),
     });
  },
  componentDidMount: function() {
    this.businessListener = BusinessStore.addListener(this._onChange);
    this.searchListener = SearchStore.addListener(this._searchChange);
  },
  componentWillUnmount: function () {
    this.businessListener.remove();
    this.searchListener.remove();
  },
  _onChange: function () {
    this.setState({ businesses: BusinessStore.all() });
  },
  _searchChange: function () {
    this.setState({ searchTerms: SearchStore.params() });
  },
  searchTerms: function () {
    var searchItems = this.state.searchTerms;
    var filterOutput = "";
    if (searchItems) {
      if (searchItems.q !== "") {
        filterOutput += searchItems.q + "   ";
      }
      if (searchItems.tags.length > 0) {
        filterOutput += "\nTags: " + searchItems.tags + "   ";
      }
      if (searchItems.price[1] !== 4) {
        filterOutput += "\nMaximum Price: " + searchItems.price[1] + "   ";
      }
      if (searchItems.rating[0] !== 1) {
        filterOutput += "\nMinimum Rating: " + searchItems.rating[0] + "   ";
      }
    }
    if (filterOutput) {
      filterOutput = "Searching: " + filterOutput;
    }

    return filterOutput;
  },

  render: function() {
    var businesses = this.orderBusinesses();
    var searchTerms = this.searchTerms();

    return (
      <section className='businesses-component'>
        <div className="search-terms">
          <p>{searchTerms}</p>
        </div>
        <div className="map-search">
          <GMap />
          <Search />
        </div>
        <div className="business-index">
          <ul>
            {businesses}
          </ul>
        </div>
        <div className="group"></div>
      </section>
    );
  },

  orderBusinesses: function() {
    return this.state.businesses.map( function(business) {
      return <BusinessIndexItem key={business.id} business={business} />;
    }, this);
  }
});

module.exports = Businesses;

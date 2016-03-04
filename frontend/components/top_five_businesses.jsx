var React = require('react');
var Rating = require('./rating');
var PriceTags = require('./price_tags');
var History = require('react-router').History;

var TopFiveBusinesses = React.createClass({
  mixins: [History],

  showDetail: function() {
    this.history.push('/businesses/' + this.props.business.id)
  },

  topFiveItem: function () {
    var businesses = this.props.businesses;
    if (businesses) {
      return businesses.map( function (business) {
        var rating = business.average_rating;
        var num_reviews = business.num_reviews + " Reviews";

        return (
          <li key={business.id} className="top-five-item">
            <h4 onClick={this.showDetail} className="top-five-name">{business.name}</h4>
            <Rating stars={rating} />
            <h5 className="top-five-aggregate-reviews">{num_reviews}</h5>
            <PriceTags price={business.price} tags={business.tags} />
            <div className="group"></div>
          </li>
        );
      });
    }
  },


  render: function() {
    var TopFiveItems = this.topFiveItem();

    return (
      <section className="top-five-business-sidebar">
        <h3 className="top-five-businesses-header">Top Five Bars</h3>
        <ul className="top-five-businesses">
          {TopFiveItems}
        </ul>
      </section>
    );
  }

});

module.exports = TopFiveBusinesses;

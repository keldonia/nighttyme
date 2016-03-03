var React = require('react');
var FilterActions = require('../actions/filter_actions');
var History = require('react-router').History;
var Rating = require('./rating');
var PriceTags = require('./price_tags');


var BusinessIndexItem = React.createClass({
  mixins: [History],

  showDetail: function() {
    this.history.push('/businesses/' + this.props.business.id)
  },

  render: function() {
    var business = this.props.business;
    var neighborhoods = business.neighborhoods.replace(/\[|\]|"/g, "");
    var rating = business.average_rating
    var num_reviews = business.num_reviews + " Reviews"

    return (
      <li className="business-index-item">
        <article className="business">
          <div className="business-quick-info">
            <h4 onClick={this.showDetail} className="business-index-name">{business.name}</h4>
            <div className="ratings-wrapper">
              <Rating stars={rating} />
              <h5 className="aggregate-reviews">{num_reviews}</h5>
            </div>
            <PriceTags price={this.props.business.price} tags={this.props.business.tags} />
          </div>
          <div className="right">
            <div className="location-group">
              <h5 className="neighborhood">{neighborhoods}</h5>
              <h5 className="location">{business.location}</h5>
              <h5 className="telephone">{business.telephone_number}</h5>
            </div>
          </div>
        </article>

      </li>
    );
  }

});

module.exports = BusinessIndexItem;

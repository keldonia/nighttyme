var React = require('react');
var History = require('react-router').History;

var BusinessIndexItem = React.createClass({
  mixins: [History],

  showDetail: function() {
    this.history.push('/businesses/' + this.props.business.id)
  },
  priceIndicator: function () {
    if (this.props.business) {
      var pricingInfo = this.props.business.price
      var pricingIndicator = "";

      for (var i = 0; i < pricingInfo; i++) {
        pricingIndicator += "$";
      }
      pricingIndicator += " · "

      return pricingIndicator;
    }
  },
  tags: function () {
    if (this.props.business) {
      var tags = this.props.business.tags
      return Object.keys(tags).map( function (tag, idx) {
        var name = tags[tag].name.replace(/(\b[a-z](?!\s))/g,
          function(x) {return x.toUpperCase();});
        return <a href="#" key={idx}>{name}</a>;
      });
    }
  },

  render: function() {
    var business = this.props.business;
    var neighborhoods = business.neighborhoods.replace(/\[|\]|"/g, "");
    var price = this.priceIndicator();
    var tags = this.tags();

    return (
      <li className="business-index-item">
        <article className="business">
          <div className="business-quick-info">
            <h4 onClick={this.showDetail} className="business-index-name">{business.name}</h4>
            <div className="ratings-wrapper">
              <div className="rating" data-rating="2">
                <i className="star-1">★</i>
                <i className="star-2">★</i>
                <i className="star-3">★</i>
                <i className="star-4">★</i>
                <i className="star-5">★</i>
              </div>
              <h5 className="aggregate-reviews">infinity billion reviews</h5>
            </div>
            <div className="price-tags">
              <h5 className="price">{price}</h5>
              <h5 className="tags">{tags}</h5>
            </div>
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

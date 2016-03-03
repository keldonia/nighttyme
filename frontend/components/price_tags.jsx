var React = require('react');
var PropTypes = React.PropTypes;
var FilterActions = require('../actions/filter_actions');
var History = require('react-router').History;

var PriceTags = React.createClass({
  mixins: [History],

  priceIndicator: function () {
    var pricingInfo = this.props.price
    var pricingIndicator = "";

    for (var i = 0; i < pricingInfo; i++) {
      pricingIndicator += "$";
    }
    pricingIndicator += "  · "

    return pricingIndicator;
  },
  searchOnTag: function(e) {
    e.preventDefault();
    var tag = e.target.id;
    FilterActions.updateTags(tag);
    this.history.push('/businesses');
  },
  tags: function () {
    var tags = this.props.tags
    var that = this;
    if (tags) {
      return Object.keys(tags).map( function (tag, idx) {
        var name = tags[tag].name.replace(/(\b[a-z](?!\s))/g,
          function(x) {return x.toUpperCase();});
        return <div className="tag" id={tags[tag].name} onClick={that.searchOnTag} key={idx}>{name}</div>;
      });
    }
  },
  render: function() {
    var tags = this.tags();
    var price = this.priceIndicator();

    return (
      <div className="price-tags">
        <h4 className="price">{price}</h4>
        <div className="tags">{tags}</div>
      </div>
    );
  }

});

module.exports = PriceTags;

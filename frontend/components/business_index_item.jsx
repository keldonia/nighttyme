var React = require('react');
var History = require('react-router').History;

var BusinessIndexItem = React.createClass({
  mixins: [History],

  showDetail: function() {
    this.history.push('/businesses/' + this.props.business.id)
  },

  render: function() {
    var business = this.props.business;

    return (
      <li className="business-index-item">
        <article className="business">
          <div className="left">
            <h4 onClick={this.showDetail} className="business-index-name">{business.name}</h4>
            <div className="rating" data-rating="2">
              <i className="star-1">★</i>
              <i className="star-2">★</i>
              <i className="star-3">★</i>
              <i className="star-4">★</i>
              <i className="star-5">★</i>
            </div>
            <h5 className="aggregate-reviews">infinity billion reviews</h5>
            <h5 className="price">{business.price}</h5>
            <section className="tags">Something</section>
          </div>
          <div className="right">
            <h5 className="location">{business.location}</h5>
            <h5 className="neighborhood">{business.neighborhoods}</h5>
            <h5 className="telephone">{business.telephone_number}</h5>
          </div>
        </article>

      </li>
    );
  }

});

module.exports = BusinessIndexItem;

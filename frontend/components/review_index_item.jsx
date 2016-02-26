var React = require('react');
var History = require('react-router').History;

var ReviewIndexItem = React.createClass({
  mixins: [History],

  showDetail: function() {
    this.history.push('/reviews/' + this.props.review.id)
  },

  render: function() {
    var review = this.props.review;
    
    return (
      <li onClick={this.showDetail} className="review_index_item">
        <article className="review">
          <h4 className="review-index-title"> {review.title} </h4>
          <div className="review-stars">Stars: {review.stars}</div>
          <h5 className="review-index-business"> {review.business} </h5>
          <h5 className="review-index-author"> {review.author} </h5>
          <p className="review-index-body"> {review.body.substring(0,140)}</p>
        </article>
      </li>
    );
  }

});

module.exports = ReviewIndexItem;

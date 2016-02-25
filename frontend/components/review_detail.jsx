var React = require('react');
var ReviewsStore = require('../stores/reviews');

var ReviewDetail = React.createClass({
  getInitialState: function () {
    return this.getStateFromStore();
  },
  getStateFromStore: function () {
    return { review: ReviewsStore.find(parseInt(this.props.review.id))}
  },
  _onChange: function () {
    this.setState(this.getStateFromStore);
  },
  componentDidMount: function () {
    this.reviewsListener = ReviewsStore.addListener(this._onChange);
    ApiUtil.fetchSingleReview(parseInt(this.props.review.id));
  },
  componentWillUnmount: function () {
    this.reviewsListener.remove();
  },
  render: function() {
    if (this.state.review === undefined) {
      return <article className="ReviewDetail"></article>;
    }

    var review = this.state.review;

    return (
      <article className="ReviewDetail">
        <h3 className="review-title"> {review.title} </h3>
        <div className="review-stars">Stars: {review.stars}</div>
        <h4 className="review-index-business"> {review.business} </h4>
        <h4 className="review-index-author"> {review.author} </h4>
        <article className="review-body">{review.body}</article>
      </article>
    );
  }

});

module.exports = ReviewDetail;

var React = require('react');
var ReviewsStore = require('../stores/reviews');
var ReviewActions = require('../actions/reviews_api_action_creators');

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
  },
  componentWillReceiveProps: function () {
    var review = this.props.review;
    if (review) {
      this.setState({ review: review })
    }
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
      <article className="review-detail">
        <h3 className="review-title"> {review.title} </h3>
          <div className="rating" data-rating={review.stars}>
            <i className="star-1">★</i>
            <i className="star-2">★</i>
            <i className="star-3">★</i>
            <i className="star-4">★</i>
            <i className="star-5">★</i>
          </div>
        <h4 className="review-index-author"> {review.author} wrote about:</h4>
        <h4 className="review-index-business"> {review.business} </h4>
        <article className="review-body">{review.body}</article>
      </article>
    );
  }

});

module.exports = ReviewDetail;

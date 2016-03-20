var React = require('react');
var Rating = require('./rating');
var History = require('react-router').History;

var TopReview = React.createClass({
  mixins: [History],

  body: function () {
    var reviewBody = this.props.review;
    if (reviewBody && reviewBody[0]) {
      return reviewBody[0].body;
    }
  },
  showDetail: function(business_id, e) {
    this.history.push('/businesses/' + business_id)
  },
  render: function() {
    var topReview = this.props.review[0];

    if (topReview === undefined) {
      return <div></div>
    }

    var body = this.body();

    return (
      <article className="top-review">
        <div className="margin-left">
          <h5 className="top-review-header">Review of the Day</h5>
          <h4 className="top-review-title"> {topReview.title} </h4>
          <Rating stars={topReview.stars} />
          <h5 className="top-review-author"> {topReview.author} wrote about:</h5>
          <h5 onClick={this.showDetail.bind(this, topReview.business_id)} className="top-review-business"> {topReview.business} </h5>
          <p className="top-review-body"> {body}</p>
        </div>
      </article>
    );
  }

});

module.exports = TopReview;

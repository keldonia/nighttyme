json.id           review.id
json.author       review.user.username
json.business     review.business.name
json.business_id  review.business_id
json.title        review.title
json.stars        review.stars
json.body         review.body
json.archieved    review.archieved

if params[:review_id] || params[:id]
  # json.authorDetails review.user
end

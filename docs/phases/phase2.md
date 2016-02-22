# Phase 2: Flux Architecture and Review CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* BusinessesIndex
  - BusinessesIndexItem
* BusinessesForm

### Stores
* Business
* Review

### Actions
* ApiActions.reveiveTopTenBusinesses -> triggered by ApiUtil
* ApiActions.receiveSingleBusiness -> triggered by ApiUtil
* BusinessActions.fetchAllReviews
* BusinessActions.fetchSingleReview
* BusinessActions.createBusiness
* BusinessActions.editBusiness
* BusinessActions.destroyBusiness
* ApiActions.receiveAllReviews -> triggered by ApiUtil
* ApiActions.receiveSingleReview
* ApiActions.deleteReview
* ReviewActions.fetchAllReviews -> triggers ApiUtil
* ReviewActions.fetchSingleReview
* ReviewActions.createReview
* ReviewActions.editReview
* ReviewActions.destroyReview

### ApiUtil
* ApiUtil.fetchTopTenBusinesses
* ApiUtil.fetchSingleBusiness
* ApiUtil.createBusiness
* ApiUtil.editBusiness
* ApiUtil.destroyBusiness
* ApiUtil.fetchAllReviews
* ApiUtil.fetchSingleReview
* ApiUtil.createReview
* ApiUtil.editReview
* ApiUtil.destroyReview

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap

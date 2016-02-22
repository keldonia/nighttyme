# Phase 3: Businesss and Tags (2 days)

## Rails
### Models
* Business
* Review
* Tag
* Tagging

### Controllers
* Api::BusinessesController (create, destroy, index, show, update)
* Api::ReviewsController (create, destroy, index, show, update)

### Views
* businesses/index.json.jbuilder
* businesses/show.json.jbuilder
* reviews/index.json.jbuilder
* reviews/show.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* BusinessesIndex
  - BusinessIndexItem
* BusinessForm
* ReviewsIndex
  - ReviewIndexItem
* ReviewForm
* SearchIndex

### Stores
* Business
* Reviews

### Actions
* ApiActions.receiveAllBusinesses -> triggered by ApiUtil
* ApiActions.receiveSingleBusiness
* ApiActions.deleteBusiness
* BusinessActions.fetchAllBusinesses -> triggers ApiUtil
* BusinessActions.fetchSingleBusiness
* BusinessActions.createBusiness
* BusinessActions.editBusiness
* BusinessActions.destroyBusiness

### ApiUtil
* ApiUtil.fetchAllBusinesses
* ApiUtil.fetchSingleBusiness
* ApiUtil.createBusiness
* ApiUtil.editBusiness
* ApiUtil.destroyBusiness

## Gems/Libraries

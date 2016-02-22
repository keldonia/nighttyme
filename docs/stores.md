# Flux Stores

### ReviewStore

Holds all persisted review data.

##### Actions:
- `receiveAllReviews`
- `receiveSingleReview`
- `removeReview`

##### Listeners:
- `ReviewssIndex` (passes to `ReviewIndexItem` via props)
- `ReviewDetail`

### ReviewFormStore

Holds un-persisted review data to send to the API.

##### Actions:
- `receiveReviewFormParams`

##### Listeners:
- `ReviewForm`

### BusinessStore

Holds all persisted business data.

##### Actions:
- `receiveAllBusinesses`
- `receiveSingleBusiness`
- `removeBusiness`

##### Listeners:
- `NotebookIndex`

### BusinessFormStore

Holds un-persisted business data to send to the API.

##### Actions:
- `receiveBusinessFormParams`

##### Listeners:
- `BusinessForm`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`

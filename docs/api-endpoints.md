# API Endpoints

## HTML API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Reviews

- `GET /api/reviews`
- `POST /api/reviews`
- `GET /api/reviews/:id`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`
- `GET /api/businesses/:id/reviews`
- index of all reviews for a business
- accepts pagination params (if I get there)

### Businesses

- `GET /api/businesses`
  - Businesses index/search
  - accepts `tag_name` query param to list businesses by tag
  - accepts pagination params (if I get there)
- `POST /api/businesses`
- `GET /api/businesses/:id`
- `PATCH /api/businesses/:id`
- `DELETE /api/businesses/:id`


### Tags

- A note's tags will be included in the note show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/businesses/:business_id/tags`: add tag to note by name
  - if note doesn't already exist, it will be created
- `DELETE /api/businesses/:business_id/tags:tag_name`: remove tag from note by
  name

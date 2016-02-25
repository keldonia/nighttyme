# Nighttyme

[Heroku link][heroku]

[heroku]: http://www.nighttyme.com

## Minimum Viable Product

Nighttyme is a web application inspired by Yelp built using Ruby on Rails
and React.js. Nighttyme allows users to review the nightlife in their area.

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [x] Create an account
- [x] Log in / Log out
- [ ] Create, and read businesses
- [ ] Create, read, edit, and delete reviews
- [ ] Allow users to search reviews, based on several criteria and geographic range, moving map
- [ ] A feed of recent activity based upon location
- [ ] Tag reviews with useful, cool, funny, compliment

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [x] blank landing page after signin

### Phase 2: Businesses Model, Reviews Model, API, and basic APIUtil (1.5 days)

**Objectives:**  Reviews can be created, read, edited and destroyed through
the API.

- [x] create 'Buiness' model
- [x] create `Review` model
- [x] seed the database with a small amount of test data -
- [x] CRUD API for Businesses (`BusinesssController`)
- [x] CRUD API for Reviews (`ReviewsController`)
- [x] jBuilder views for Businesses & Reviews
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Reviews can be created, read, edited and destroyed with the
user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- [x] App (navbar) component created
- implement each review component, building out the flux loop as needed.
  - [x] `ReviewIndex`
  - [x] `ReviewItem`
  - [x] `ReviewDetail`
  - [x] `ReviewForm`


### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Business (1 day)

**Objective:** Reviews belong to Business, and can be viewed by business.

- [ ] create `Business` model
- build out API, Flux loop, and components for:
  - [ ] `BusinessesIndex`
  - [ ] `BusinessIndexItem`
  - [ ] `BusinessForm`
  - [ ] Business CRUD
  - [ ] adding reviews requires a business
  - [ ] viewing reviews by business
- Use CSS to style new views

Phase 3 adds organization to the Reviews. Reviews belong to a Business, which has its own `Index` view.

### Phase 6: Tags (1.5 days)

**Objective:** Businesses can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for business
  - [ ] adding tags to business
  - [ ] creating tags while adding to businesses
  - [ ] searching businesses by tag
- [ ] Style new elements

**Objective:** Reviews can liked.
- [ ] create `ReviewTag` model and join table
- build out API, Flux loop, and components for:
- [ ] fetching tags for review
- [ ] adding tags to review
- [ ] creating tags while adding to reviews
- [ ] searching reviews by tag
- [ ] Style new elements


### Phase 7: Allow Complex Styling in Businesses (0.5 days)

**objective:** Enable complex styling of Businesses.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Review of the day
- [ ] New businesses section
- [ ] Friend other users
- [ ] Forum Section?
- [ ] Message friends
- [ ] Track average review rating over time

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md

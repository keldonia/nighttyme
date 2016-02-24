# Schema Information

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
stars       | integer   | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
business_id | integer   | not null, foreign key (references businesses), indexed
archived    | boolean   | not null, default: false

## businesses
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
name        | string    | not null
latitude    | float     |
longitude   | float     |
description | string    |
location    | string    | not null
price       | integer   |
email       | url       |
website     | url       |

##Atributtes
column name | data type | details
------------|-----------|-----------------------
business_id | integer   | not null, foreign key (references businesses)
telephone   | string    |
reservations| boolean   |
credit_cards| boolean   |
parking     | string    |
bike_parking| boolean   |
groups      | boolean   |
ambience    | string    |
noise_level | string    |
dancing     | boolean   |
live_music  | boolean   |
alcohol     | string    |
best_nights | string    |
coat_check  | boolean   |
happy_hour  | boolean   |
smoking     | boolean   |
outdoors    | boolean   |
tv          | boolean   |
pool_table  | boolean   |

## hours
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
business_id | integer   | not null, foreign key (references businesses), indexed
monday_st   | time      |
monday_ed   | time      |
tuesday_st  | time      |
tuesday_ed  | time      |
wednesday_st| time      |
wednesday_ed| time      |
thursday_st | time      |
thursday_ed | time      |
friday_st   | time      |
friday_ed   | time      |
saturday_st | time      |
saturday_ed | time      |
sunday_st   | time      |
sunday_ed   | time      |


## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings, polymorphic (businesses, reviews)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
tagable_id  | integer   | not null, foreign key (references tagged object), indexed
tagable_type| string    | not null, foreign key
tag_id      | integer   | not null, foreign key (references tags), indexed

## photos, polymorphic (users, businesses, reviews)
column name | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
photoable_type | string    | not null
photoable_id   | integer   | not null, foreign key (references tagged object), indexed
photo          | url       |

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
location        | string    | not null, indexed
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

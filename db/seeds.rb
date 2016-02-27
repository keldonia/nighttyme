# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


usersgen = 20.times.map { |i|
  {username: Faker::Name.name.to_s,
  email: Faker::Internet.email.to_s,
  location: Faker::Address.city.to_s,
  password: Faker::Internet.password.to_s}
}

User.create!(usersgen)

Business.create!(
  owner_id: 1,
  name: "The Black Horse London Pub",
  description: "I was out with my dog in SF and wanted to find a dog-friendly place to have a beer...",
  location: "San Francisco",
  neighborhoods: ["Marina/Cow Hollow"],
  latitude: 37.79865,
  longitude: -122.42441,
  price: 2,
  email: Faker::Internet.email.to_s,
  telephone_number: Faker::PhoneNumber.phone_number.to_s,
  website: "http://www.yelp.com/biz/the-black-horse-london-pub-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=ZCuFUmyfgOasecjUGcNeIQ",
  hour_attributes: {
    monday: "5:00 pm - 12:00 am",
    tuesday: "5:00 pm - 12:00 am",
    wednesday: "5:00 pm - 12:00 am",
    thursday: "5:00 pm - 12:00 am",
    friday: "2:00 pm - 12:00 am",
    saturday: "11:00 am - 12:00 am",
    sunday: "11:00 am - 12:00 am"
  },
  bussinessattribute_attributes: {
    reservations: 0,
    credit_cards: 0,
    parking: 'street',
    bike_parking: 1,
    good_for_groups: 0,
    ambience: 'Casual',
    noise_level: 'average',
    dancing: 0,
    live_music: 0,
    alcohol: 'Beer & Wine Only',
    best_nights: 'Tue, Thu, Fri',
    coat_check: 0,
    happy_hour: 0,
    smoking: 0,
    outdoor_seating: 0,
    tv: 1,
    pool_table: 1
  }
)

Business.create(
  owner_id: 2,
  name: "The Social Study",
  description: "Dimly lit spot that is hidden from main view and I love the charm that this mini bar with seating exudes.",
  location: "San Francisco",
  neighborhoods: ["Fillmore",
                    "Western Addition",
                    "Lower Pacific Heights"],
  latitude: 37.7843447,
  longitude: -122.4325223,
  price: 3,
  email: Faker::Internet.email.to_s,
  telephone_number: Faker::PhoneNumber.phone_number.to_s,
  website: "http://www.yelp.com/biz/the-social-study-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=ZCuFUmyfgOasecjUGcNeIQ",
  hour_attributes: {
    monday: "5:00 pm - 12:00 am",
    tuesday: "5:00 pm - 12:00 am",
    wednesday: "5:00 pm - 12:00 am",
    thursday: "5:00 pm - 12:00 am",
    friday: "2:00 pm - 12:00 am",
    saturday: "11:00 am - 12:00 am",
    sunday: "11:00 am - 12:00 am"
  },
  bussinessattribute_attributes: {
    reservations: 0,
    credit_cards: 1,
    parking: 'street',
    bike_parking: 1,
    good_for_groups: 1,
    ambience: 'Casual',
    noise_level: 'average',
    dancing: 0,
    live_music: 0,
    alcohol: 'Wine Only',
    best_nights: 'Tue, Thu, Fri',
    coat_check: 0,
    happy_hour: 1,
    smoking: 0,
    outdoor_seating: 0,
    tv: 1,
    pool_table: 1
  }
)

Business.create(
  owner_id: 3,
  name: "Smuggler's Cove",
  description: "Heard about this place from my new and absolutely fabulous stylist. Her husband had done designed the whole inside of Smuggler's Cove...",
  location: "San Francisco",
  neighborhoods: ["Fillmore"],
  latitude: 37.7794494628906,
  longitude: -122.423278808594,
  price: 2,
  email: Faker::Internet.email.to_s,
  telephone_number: Faker::PhoneNumber.phone_number.to_s,
  website: "http://www.yelp.com/biz/smugglers-cove-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=ZCuFUmyfgOasecjUGcNeIQ",
  hour_attributes: {
    monday: "5:00 pm - 12:00 am",
    tuesday: "5:00 pm - 12:00 am",
    wednesday: "5:00 pm - 12:00 am",
    thursday: "5:00 pm - 12:00 am",
    friday: "2:00 pm - 12:00 am",
    saturday: "11:00 am - 12:00 am",
    sunday: "11:00 am - 12:00 am"
  },
  bussinessattribute_attributes: {
    reservations: 0,
    credit_cards: 0,
    parking: 'street',
    bike_parking: 1,
    good_for_groups: 1,
    ambience: 'Casual',
    noise_level: 'average',
    dancing: 0,
    live_music: 0,
    alcohol: 'Full Bar',
    best_nights: 'Fri, Sat, Sun',
    coat_check: 0,
    happy_hour: 1,
    smoking: 0,
    outdoor_seating: 1,
    tv: 1,
    pool_table: 1
  }
)

Business.create(
  owner_id: 4,
  name: "Benjamin Cooper",
  description: "These folks know what they are doing. They take great pride in their work and know their business. I had an excellent Manhattan while I sat at the bar....",
  location: "San Francisco",
  neighborhoods: ["Union Square"],
  latitude: 37.7873489077678,
  longitude: -122.409739555912,
  price: 2,
  email: Faker::Internet.email.to_s,
  telephone_number: Faker::PhoneNumber.phone_number.to_s,
  website: "http://www.yelp.com/biz/smugglers-cove-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=ZCuFUmyfgOasecjUGcNeIQ",
  hour_attributes: {
    monday: "5:00 pm - 12:00 am",
    tuesday: "5:00 pm - 12:00 am",
    wednesday: "5:00 pm - 12:00 am",
    thursday: "5:00 pm - 12:00 am",
    friday: "2:00 pm - 12:00 am",
    saturday: "11:00 am - 12:00 am",
    sunday: "11:00 am - 12:00 am"
  },
  bussinessattribute_attributes: {
    reservations: 0,
    credit_cards: 0,
    parking: 'street',
    bike_parking: 1,
    good_for_groups: 1,
    ambience: 'Casual',
    noise_level: 'average',
    dancing: 0,
    live_music: 0,
    alcohol: 'Full Bar',
    best_nights: 'Fri, Sat, Sun',
    coat_check: 0,
    happy_hour: 1,
    smoking: 0,
    outdoor_seating: 1,
    tv: 1,
    pool_table: 1
  }
)

Business.create(
  owner_id: 5,
  name: "Third Rail",
  description: "Met some friends here to catch up over drinks, and we were pleasantly surprised to discover the Rail Shot",
  location: "San Francisco",
  neighborhoods: ["Union Square"],
  latitude: 37.7606207,
  longitude: -122.3881324,
  price: 2,
  email: Faker::Internet.email.to_s,
  telephone_number: Faker::PhoneNumber.phone_number.to_s,
  website: "http://www.yelp.com/biz/smugglers-cove-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=ZCuFUmyfgOasecjUGcNeIQ",
  hour_attributes: {
    monday: "5:00 pm - 12:00 am",
    tuesday: "5:00 pm - 12:00 am",
    wednesday: "5:00 pm - 12:00 am",
    thursday: "5:00 pm - 12:00 am",
    friday: "2:00 pm - 12:00 am",
    saturday: "11:00 am - 12:00 am",
    sunday: "11:00 am - 12:00 am"
  },
  bussinessattribute_attributes: {
    reservations: 0,
    credit_cards: 1,
    parking: 'street',
    bike_parking: 1,
    good_for_groups: 1,
    ambience: 'Casual',
    noise_level: 'loud',
    dancing: 0,
    live_music: 0,
    alcohol: 'Full Bar',
    best_nights: 'Fri, Sat, Sun',
    coat_check: 0,
    happy_hour: 1,
    smoking: 0,
    outdoor_seating: 1,
    tv: 1,
    pool_table: 1
  }
)

reviewsgen = 60.times.map { |i| {
  author_id: rand(1..21).to_i,
  business_id: rand(1..6).to_i,
  title: Faker::Hipster.sentence(4, false, 6).to_s,
  stars: rand(0..5),
  body: Faker::Hipster.paragraphs(rand(1..4).to_i).join(" "),
  archieved: 1
}
}

Review.create!(reviewsgen)

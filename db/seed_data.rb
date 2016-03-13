require 'yelp'

OPEN_TIMES = ['5:00 pm', '4:00 pm', '3:00pm', '6:00 pm', '7:00 pm',
              '8:00 pm', '9:00 pm']

CLOSE_TIMES = ['2:00 am', '1:00 am', '12:00 am', '11:00 pm', '10:00 pm']

NOISE = ['quiet', 'average', 'loud']

ALCOHOL = [
  'full bar',
  'beer & wine only',
  'wine only',
  'beer only',
]

AMBIENCE = [
  'casual',
  'hipster',
  'sports',
  'biker'
]

BEST_DAYS = [
  'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
]

def best_days
  num_days = rand(1..3).round

  days = BEST_DAYS.sample(num_days).join(", ")
end

neighborhoods = ["Alamo Square",
" Anza Vista",
" Ashbury Heights",
" Balboa Terrace",
" Bayview-Hunters Point",
" Bernal Heights",
" Castro",
" Chinatown",
" Civic Center",
" Cole Valley",
" Corona Heights",
" Crocker-Amazon",
" Diamond Heights",
" Dogpatch",
" Duboce Triangle",
" Embarcadero",
" Excelsior",
" Fillmore",
" Financial District",
" Fisherman's Wharf",
" Forest Hill",
" Glen Park",
" Hayes Valley",
" Ingleside",
" Ingleside Heights",
" Ingleside Terraces",
" Inner Richmond",
" Inner Sunset",
" Japantown",
" Lakeshore",
" Lakeside",
" Laurel Heights",
" Lower Haight",
" Lower Nob Hill",
" Lower Pacific Heights",
" Marina/Cow Hollow",
" Merced Heights",
" Merced Manor",
" Miraloma Park",
" Mission",
" Mission Bay",
" Mission Terrace",
" Monterey Heights",
" Mount Davidson Manor",
" NoPa",
" Nob Hill",
" Noe Valley",
" North Beach/Telegraph Hill",
" Oceanview",
" Outer Mission",
" Outer Richmond",
" Outer Sunset",
" Pacific Heights",
" Parkmerced",
" Parkside",
" Portola",
" Potrero Hill",
" Presidio",
" Presidio Heights",
" Russian Hill",
" Sea Cliff",
" Sherwood Forest",
" SoMa",
" South Beach",
" St Francis Wood",
" Stonestown",
" Sunnyside",
" Tenderloin",
" The Haight",
" Twin Peaks",
" Union Square",
" Visitacion Valley",
" West Portal",
" Western Addition",
" Westwood Highlands",
" Westwood Park"]


client = Yelp::Client.new({ consumer_key: "ZCuFUmyfgOasecjUGcNeIQ",
                            consumer_secret: "ZmTbazD45j9BDUsmxY-EvZxayyA",
                            token: "Bg2TWuqO-1X9TplrEQt1FzyKzaTW1ioA",
                            token_secret: "G7R5JWARvFi8vxu15F4QKnjZGLI"
                          })

params = { limit: 20,
         category_filter: 'bars',
         restaurants_price_range: '1.4'
       }
stores = []

neighborhoods.each do |neighborhood|
  response = client.search( neighborhood, params)
  response.businesses.each do |business|
    new_store = false
    if(
      !!business.name &&
      !!business.location.coordinate.latitude &&
      !!business.location.coordinate.longitude &&
      !!business.image_url &&
      !!business.location.display_address[0] &&
      !!business.location.display_address[1] &&
      !!business.location.display_address[2] &&
      !!business.display_phone
      )
      new_store = true
      if stores.length > 0
        stores.each do |store|
          new_store = false if store[:location][0] == business.location.display_address[0]
        end
      end
    end
    if new_store
      location = [business.location.display_address[0], business.location.display_address[2]]
      stores.push({
        name: business.name,
        description: business.snippet_text,
        location: location,
        neighborhoods: business.location.display_address[1],
        latitude: business.location.coordinate.latitude,
        longitude: business.location.coordinate.longitude,
        price: rand(1..4).to_i,
        telephone_number: business.display_phone,
        image_url: business.image_url,
        tags_attributes:  business.categories.map { |category| {name: category[0]}},
        hour_attributes: {
          monday: "#{OPEN_TIMES.sample} - #{CLOSE_TIMES.sample}",
          tuesday: "#{OPEN_TIMES.sample} - #{CLOSE_TIMES.sample}",
          wednesday: "#{OPEN_TIMES.sample} - #{CLOSE_TIMES.sample}",
          thursday: "#{OPEN_TIMES.sample} - #{CLOSE_TIMES.sample}",
          friday: "#{OPEN_TIMES.sample} - #{CLOSE_TIMES.sample}",
          saturday: "#{OPEN_TIMES.sample} - #{CLOSE_TIMES.sample}",
          sunday: "#{OPEN_TIMES.sample} - #{CLOSE_TIMES.sample}"
        },
        bussinessattribute_attributes: {
          reservations: rand().round,
          credit_cards: rand().round,
          parking: 'street',
          bike_parking: rand().round,
          good_for_groups: rand().round,
          ambience: AMBIENCE.sample,
          noise_level: NOISE.sample,
          dancing: rand().round,
          live_music: rand().round,
          alcohol: ALCOHOL.sample,
          best_nights: best_days,
          coat_check: rand().round,
          happy_hour: rand().round,
          smoking: rand().round,
          outdoor_seating: rand().round,
          tv: rand().round,
          pool_table: rand().round
        }
      })
    end
  end
end

File.open("bars2.txt", 'w') { |file| file.write(stores) }

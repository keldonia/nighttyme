require 'yelp'


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
         category_filter: 'bar',
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
      !!business.display_phone &&
      !!business.rating &&
      !!business.review_count
      )
      new_store = true
      if stores.length > 0
        stores.each do |store|
          new_store = false if store[:street] == business.location.display_address[0]
        end
      end
    end
    if new_store
      stores.push({
        name: business.name,
        lat: business.location.coordinate.latitude,
        lon: business.location.coordinate.longitude,
        image_url: business.image_url,
        street: business.location.display_address[0],
        neighborhood: business.location.display_address[1],
        city: business.location.display_address[2],
        phone: business.display_phone,
        rating: business.rating,
        review_count: business.review_count,
      })
    end
  end
end

File.open("stores.txt", 'w') { |file| file.write(stores) }

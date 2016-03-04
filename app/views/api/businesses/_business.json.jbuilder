@days = [
  :monday,
  :tuesday,
  :wednesday,
  :thursday,
  :friday,
  :saturday,
  :sunday
]

@attributes = [
  :reservations,
  :credit_cards,
  :parking,
  :bike_parking,
  :good_for_groups,
  :ambience,
  :noise_level,
  :dancing,
  :live_music,
  :alcohol,
  :best_nights,
  :coat_check,
  :happy_hour,
  :smoking,
  :outdoor_seating,
  :tv,
  :pool_table
]

json.id                 business.id
json.name               business.name
json.location           business.location
json.neighborhoods      business.neighborhoods
json.latitude           business.latitude
json.longitude          business.longitude
json.price              business.price
json.telephone_number   business.telephone_number
json.average_rating     (business.avg_stars.to_f * 2).round / 2
json.num_reviews        business.num_stars
json.image_url          business.image_url

json.tags do
  business.tags.each do |tag|
    json.set! tag.id, tag
  end
end

if params[:business_id] || params[:id]
  json.description        business.description

  json.reviews do
    reviews.each_with_index do |review, idx|
      json.set! idx do
        json.partial! 'api/reviews/review', review: review
      end
    end
  end


  json.hour_attributes do
    @days.each do |day|
      json.set! day.to_s, business.hour.send(day)
    end
  end


  json.bussinessattribute_attributes do
    @attributes.each do |attribute|
      json.set! attribute.to_s, business.bussinessattribute.send(attribute)
    end
  end
end

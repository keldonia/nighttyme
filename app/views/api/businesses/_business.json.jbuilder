json.name               business.name
json.description        business.description
json.location           business.location
json.neighborhoods      business.neighborhoods
json.latitude           business.latitude
json.longitude          business.longitude
json.price              business.price
json.email              business.email
json.telephone_number   business.telephone_number
json.website            business.website

if (defined? params[:business_id])
  business.hour_attributes.each do |day|
    json.set! day do
      json.(day, business.hour_attributes.day) unless day.to_s.includes("time")
    end
  end

  business.bussinessattributes_attributes.each do |attribute|
    json.set! attribute do
      json.(attribute, business.bussinessattributes_attributes.attribute) unless attribute.to_s.includes("time")
    end
  end
end

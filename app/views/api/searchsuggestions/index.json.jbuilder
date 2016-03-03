@searchsuggestions.each_with_index do |suggestion, idx|
  json.set! idx do
    if suggestion.is_a?(Business)
      json.id suggestion.id
      json.name suggestion.name
      json.type 'business'
    end
  end
end

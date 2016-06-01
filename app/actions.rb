# Homepage (Root path)
get '/' do
  erb :index
end

# list all
get '/contacts' do
  contacts = Contact.search(params[:search])  
  contacts.to_json
end

# view one
get '/contacts/:id' do
  contact = Contact.find(params[:id])
  return status 404 if contact.nil?
  contact.to_json
end

# create
post '/contacts' do
  contact = Contact.new(
    email: params[:email],
    name: params[:name])
  contact.save
  status 201
end

# update
put '/contacts/:id' do
  contact = Contact.find(params[:id])
  return status 404 if contact.nil?
  contact.update(params[:contact])
  contact.save
  status 202
end

delete '/contacts/:id' do
  contact = Contact.find(params[:id])
  return status 404 if contact.nil?
  contact.delete
  status 202
end
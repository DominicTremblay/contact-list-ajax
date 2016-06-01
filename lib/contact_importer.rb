class ContactImporter

  def self.populate
    Contact.create( email: "allan@gmail.com", name: "Allan Parker")
    Contact.create( email: "billy@gmail.com", name: "Billy Bob Thornton")
    Contact.create( email: "christian@gmail.com", name: "Christian Bale")
    Contact.create( email: "dominic@gmail.com", name: "Dominic Purcell")
    Contact.create( email: "ellen@gmail.com", name: "Ellen Page")
    Contact.create( email: "fiona@gmail.com", name: "Fiona Gallagher")
    Contact.create( email: "jessica@gmail.com", name: "Jessica Alba")
  end

end
class Contact < ActiveRecord::Base

  def self.search(search)
    contacts = Contact.all
    if search
      contacts = contacts.where('name LIKE ? OR email LIKE ?', "%#{search}%", "%#{search}%")
    end
    contacts
  end

end
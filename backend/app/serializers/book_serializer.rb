class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :user
end

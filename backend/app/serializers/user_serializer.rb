class UserSerializer < ActiveModel::Serializer
  attributes :name, :description, :email, :id, :books
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :books
end

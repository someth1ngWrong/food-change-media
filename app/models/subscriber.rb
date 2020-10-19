class Subscriber < ApplicationRecord
  validates :email, presence: true
end

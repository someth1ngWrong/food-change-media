class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
   # has_many :likesdef, dependent: :destroy
   has_many :yummies, dependent: :destroy
   has_many :tasties, dependent: :destroy
   has_many :favorites, dependent: :destroy
   has_many :favorited_posts, :through => :favorites, :source => :post
end

class Post < ApplicationRecord
		validates :name, :presence => true
		validates :title, :presence => true,
											:length => { :minimum => 5 }

mount_uploader :image, ImageUploader
belongs_to :user

end

class Post < ApplicationRecord
		validates :name, :presence => true
		validates :title, :presence => true,
											:length => { :minimum => 5 }

		# has_many :dependent => :destroy
end

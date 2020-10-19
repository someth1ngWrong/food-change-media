# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all

puts "Destroyed everything you touch"

posts = [
{
	name: "Назавание",
	title: "Описание",
	content: "Рецепт",
  image: File.open(Rails.root.join('public', 'images', 'pic-1.jpeg')),
	time: "15 min",
	ingredients: "meat, tomato, peanuts"
},
{
	name: "Old Album",
	title: "The Bad Seeds Old",
	content: "Some Old Tracklist",
  image:File.open(Rails.root.join('public', 'images', 'pic-2.png')),
	time: "15 min",
	ingredients: "meat, tomato, peanuts"
}
]
posts.each do |post|
	postik = Post.create(post)
	puts "Some magic just create a #{ postik.name } with id #{ postik.id }!"
end

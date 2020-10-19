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
	name: "Овощной салат с фетой",
	title: "Легкий и быстрый рецепт",
	content: "Разрезать помидоры пополам, нарезать сыр «Фета» на небольшие кубики. Салат помыть и обсушить, добавить сливочное масло и специи. Перемешать все ингредиенты, приятного аппетита!",
  image: File.open(Rails.root.join('public', 'images', 'dsh-salad-vegetables.png')),
	time: "15 мин",
	ingredients: "
	Помидоры-черри — 150 г;
	Сыр «Фета» — 60 г;
	Салат Микс — 200 г;
	Масло оливковое — 20 г;
	Специи — 10 г"
},
{
	name: "Брускетта с редисом и авокадо",
	title: "Легкая закуска",
	content: "Порезать хлеб на куски толщиной 1-2 см и выложить в любую форму для выпечки или на противень, застеленный бумагой для выпечки. Каждый кусок совсем чуть-чуть помазать сливочным маслом. Убрать хлеб в духовку, разогретую на 180 градусов Цельсия на минут 5-10 минут до появления корочки. Во время выпекания можно порезать авокадо на небольшие полукруги и нарезать редис на круги толщиной в 3-5 мм. Достать из духовки и оставить до полного остывания. Намазать оставшееся сливочное масло на хлеб. Добавить авокадо, редис и посыпать сверху шпинатом",
  image:File.open(Rails.root.join('public', 'images', 'dsh-snack-bruschetta.png')),
	time: "15 мин",
	ingredients: "5 крупных редисок;
	3 больших куска черного хлеба с семечками;
	Сливочное маслом — 100 г;
	Авокадо — 200 г;
	Шпинат — 100 г"
}
]
posts.each do |post|
	postik = Post.create(post)
	puts "Some magic just create a #{ postik.name } with id #{ postik.id }!"
end

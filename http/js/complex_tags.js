var categories = [
	{ count: 2, countDuplicates: true, hidden: false, name: "люди", tags: ["человек"] },
	{ count: 5, countDuplicates: true, hidden: false, name: "толпа", tags: ["человек"] },
	{ count: 2, countDuplicates: true, hidden: false, name: "сумки", tags: ["рюкзак", "сумка", "чемодан"] },
	{ count: 1, countDuplicates: true, hidden: false, name: "транспорт", tags: ["велосипед", "машина", "мотоцикл", "самолёт", "автобус", "поезд", "грузовик", "лодка"] },
	{ count: 1, countDuplicates: true, hidden: false, name: "общественный транспорт", tags: ["поезд", "автобус"] },
	{ count: 2, countDuplicates: true, hidden: false, name: "автомобили", tags: ["машина", "мотоцикл", "автобус", "грузовик"] },
	{ count: 1, countDuplicates: true, hidden: false, name: "улица", tags: ["светофор", "пожарный гидрант", "дорожный знак", "паркомат"] },
	{ count: 1, countDuplicates: false, hidden: false, name: "животные", tags: ["птица", "кошка", "собака", "лошадь", "овца", "корова", "слон", "медведь", "зебра", "жираф"] },
	{ count: 3, countDuplicates: true, hidden: false, name: "природа", tags: ["животные", "фрисби", "лыжи", "воздушный змей", "сноуборд"] },
	{ count: 2, countDuplicates: true, hidden: false, name: "звери", tags: ["птица", "лошадь", "овца", "корова", "слон", "медведь", "зебра", "жираф"] },
	{ count: 3, countDuplicates: true, hidden: false, name: "ферма", tags: ["лошадь", "овца", "корова"] },
	{ count: 1, countDuplicates: false, hidden: false, name: "спорт", tags: ["фрисби", "лыжи", "сноуборд", "мяч", "бейсбольная бита", "бейсбольная перчатка", "скейт", "доска для серфинга", "теннисная ракетка"] },
	{ count: 1, countDuplicates: false, hidden: false, name: "развлечения", tags: ["фрисби", "воздушный змей", "скейт"] },
	{ count: 2, countDuplicates: false, hidden: false, name: "развлечения", tags: ["развлечения", "собака", "велосипед", "пицца"] },
	{ count: 2, countDuplicates: false, hidden: false, name: "стол", tags: ["бокал", "вилка", "ложка", "нож", "кружка", "тарелка"] },
	{ count: 2, countDuplicates: false, hidden: false, name: "ужин", tags: ["бокал", "человек", "бутылка"] },
	{ count: 1, countDuplicates: false, hidden: false, name: "продукты", tags: ["банан", "яблоко", "бутерброд", "апельсин", "брокколи", "морковь", "хот дог", "пицца", "пончик", "пирожное"] },
	{ count: 2, countDuplicates: false, hidden: false, name: "еда", tags: ["человек", "продукты", "ложка", "вилка", "бутылка"] },
	{ count: 1, countDuplicates: false, hidden: false, name: "мебель", tags: ["стул", "кушетка", "растение", "кровать", "стол", "туалет"] },
	{ count: 1, countDuplicates: false, hidden: false, name: "кухня", tags: ["микроволновка", "духовка", "тостер", "умывальник", "холодильник"] },
	{ count: 1, countDuplicates: false, hidden: false, name: "красота и здоровье", tags: ["ножницы", "фен", "зубная щётка"] },
	{ count: 2, countDuplicates: true, hidden: false, name: "интерьер", tags: ["мебель", "кухня", "часы", "ваза"] },
	{ count: 2, countDuplicates: true, hidden: false, name: "книги", tags: ["книга"] },
	{ count: 6, countDuplicates: true, hidden: false, name: "библиотека", tags: ["книга"] },
	{ count: 1, countDuplicates: true, hidden: false, name: "компьютеры", tags: ["ноутбук", "мышь", "клавиатура"] },
	{ count: 1, countDuplicates: true, hidden: false, name: "техника", tags: ["компьютеры", "телевизор", "пульт", "телефон", "фен", "микроволновка", "духовка", "тостер", "холодильник"] },
	{ count: 3, countDuplicates: true, hidden: false, name: "цивилизация", tags: ["техника"] },
	{ count: 1, countDuplicates: false, hidden: true, name: "толпа или улица", tags: ["толпа", "улица"] },
	{ count: 2, countDuplicates: false, hidden: false, name: "дорожное движение", tags: ["толпа или улица", "транспорт"] },
	{ count: 3, countDuplicates: true, hidden: false, name: "багаж", tags: ["чемодан"] },
	{ count: 2, countDuplicates: false, hidden: false, name: "пассажиры", tags: ["автобус", "люди"] },
	{ count: 2, countDuplicates: false, hidden: false, name: "веселье", tags: ["человек", "пицца"] },
	{ count: 10, countDuplicates: true, hidden: true, name: "дохрена машин", tags: ["машина"] },
	{ count: 2, countDuplicates: false, hidden: false, name: "пробка", tags: ["дохрена машин", "светофор"] },
]

function getCategories(tags) {
	var weights = [categories.length];
	for (var i = 0; i < categories.length; i++) {
		weights[i] = 0;
	}

	for (var j = 0; j < categories.length; j++) {
		var used = [];
		for (var i = 0; i < tags.length; i++) {
			for (var k = 0; k < categories[j].tags.length; k++) {
				if (tags[i] == categories[j].tags[k]) {
					if (categories[j].countDuplicates) {
						weights[j]++;	
					} else {
						if (used.length <= 0) {
							weights[j]++;	
						} else {
							var alreadyUsed = false;
							for (var l = 0; l < used.length; l++) {
								if (used[l] == k) {
									alreadyUsed = true;
								}
							}
							if (!alreadyUsed) {
								weights[j]++;
							}
						}
						used.push(k);
					}
				}
			}
		}
	}

	var result = [];

	for (var i = 0; i < weights.length; i++) {
		if (weights[i] >= categories[i].count) {
			for (var j = 0; j < Math.floor(weights[i] / categories[i].count); j++) {
				result.push(categories[i].name);
			}
		}
	}

	return result;
}
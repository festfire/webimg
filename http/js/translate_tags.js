function translateTag(tag, lines = false) {
	if (lines) {
		var source = ["person", "backpack", "dog", "car"];
		var translation = ["человек", "рюкзак", "собака", "машина"];
		for (var i = 0; i < source.length; i++) {
			if (tag == source[i]) {
				return translation[i];
			}
		}
	} else {
		switch (tag) {
			case "person":
				return "человек";
			case "umbrella":
				return "зонт";
			case "tie":
				return "галстук";
			case "backpack":
				return "рюкзак";
			case "handbag":
				return "сумка";
			case "suitcase":
				return "чемодан";

			case "bicycle":
				return "велосипед";
			case "car":
				return "машина";
			case "motorcycle":
				return "мотоцикл";
			case "airplane":
				return "самолёт";
			case "bus":
				return "автобус";
			case "train":
				return "поезд";
			case "truck":
				return "грузовик";
			case "boat":
				return "лодка";

			case "traffic light":
				return "светофор";
			case "fire hydrant":
				return "пожарный гидрант";
			case "stop sign":
				return "дорожный знак";
			case "parking meter":
				return "паркомат";
			case "bench":
				return "скамья";

			case "bird":
				return "птица";
			case "cat":
				return "кошка";
			case "dog":
				return "собака";
			case "horse":
				return "лошадь";
			case "sheep":
				return "овца";
			case "cow":
				return "корова";
			case "elephant":
				return "слон";
			case "bear":
				return "медведь";
			case "zebra":
				return "зебра";
			case "giraffe":
				return "жираф";

			case "frisbee":
				return "фрисби";
			case "skis":
				return "лыжи";
			case "snowboard":
				return "сноуборд";
			case "sports ball":
				return "мяч";
			case "kite":
				return "воздушный змей";
			case "baseball bat":
				return "бейсбольная бита";
			case "baseball glove":
				return "бейсбольная перчатка";
			case "skateboard":
				return "скейт";
			case "surfboard":
				return "доска для серфинга";
			case "tennis racket":
				return "теннисная ракетка";

			case "bottle":
				return "бутылка";
			case "wine glass":
				return "бокал";
			case "cup":
				return "кружка";
			case "fork":
				return "вилка";
			case "knife":
				return "нож";
			case "spoon":
				return "ложка";
			case "bowl":
				return "тарелка";
			
			case "banana":
				return "банан";
			case "apple":
				return "яблоко";
			case "sandwich":
				return "бутерброд";
			case "orange":
				return "апельсин";
			case "broccoli":
				return "брокколи";
			case "carrot":
				return "морковь";
			case "hot dog":
				return "хот дог";
			case "pizza":
				return "пицца";
			case "donut":
				return "пончик";
			case "cake":
				return "пирожное";

			case "chair":
				return "стул";
			case "couch":
				return "кушетка";
			case "potted plant":
				return "растение";
			case "bed":
				return "кровать";
			case "dining table":
				return "стол";
			case "toilet":
				return "туалет";

			case "tv":
				return "телевизор";
			case "laptop":
				return "ноутбук";
			case "mouse":
				return "мышь";
			case "remote":
				return "пульт";
			case "keyboard":
				return "клавиатура";
			case "cell phone":
				return "телефон";

			case "microwave":
				return "микроволновка";
			case "oven":
				return "духовка";
			case "toaster":
				return "тостер";
			case "sink":
				return "умывальник";
			case "refrigerator":
				return "холодильник";
			
			case "book":
				return "книга";
			case "clock":
				return "часы";
			case "vase":
				return "ваза";
			case "scissors":
				return "ножницы";
			case "teddy bear":
				return "плюшевый медведь";
			case "hair drier":
				return "фен";
			case "toothbrush":
				return "зубная щётка";

			default:
				return tag;
		}
	}

	return tag;
}
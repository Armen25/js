let array = []
function order(good, price, sale, name, amount) {
	let sum = amount*price-sale;
	let str = "Уважаемый " + name + ", Вы заказали " + good + " в количестве " + amount + " со скидкой " + sale + ", с Вас " + sum + " рублей";
	array[name] = sum;
	return str;
};

let str = order("Гейнер", 5000, 1500, "Petya", 2);
alert (str);

alert (order("Протейн", 1000, 500, "Stepa", 3));


for(let i in array){
	alert(i+" " + array[i] + " rubley ");
}


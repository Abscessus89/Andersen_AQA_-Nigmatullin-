//написано Нигматуллиным Айдаром Азатовичем. по вопросам звоните 89655923382

function sayHiIfValueUpper7 (event) {
	const value = event.target.value;
	const rezult = (Number.isSafeInteger(+value) && value >7)? "Привет" : "";
	const objectiveName = UI.getObjectiveName(event.target.className);
	UI.setAnswer(objectiveName, rezult)
}

function sayHiToVitek (event){
	const value = event.target.value;
	const rezult = value === "Вячеслав"? "Привет, Вячеслав" : "Нет такого имени";
	const objectiveName = UI.getObjectiveName(event.target.className);
	UI.setAnswer(objectiveName, rezult)
}

function multipleOfThree (event){
	const value = event.target.value;
	const array = value.trim().split(",")

	let rezultArray = array.filter((number)=>{
		const typecastingOfVariable = +number;
		if (Number.isSafeInteger(typecastingOfVariable) && typecastingOfVariable !=0){
			return (typecastingOfVariable%3==0);
		}
		else {
			return false
		}
	})
	const objectiveName = UI.getObjectiveName(event.target.className);
	UI.setAnswer(objectiveName, rezultArray.toString());
}

class ui {
	constructor(){
		this.setInput = (objectiveName) => {
			let input = document.createElement("input");
			input.className = "input_"+objectiveName;
			return input;
		}
		this.setButton = (customFunction, objectiveName) => {
			let button = document.createElement("button");
			button.onClick = () =>{
				let answer = customFunction(document.getElementByClassName("input_"+objectiveName).value);
				document.getElementByClassName("answer_"+objectiveName).value = answer;
			}
		}
		this.setP = (objectiveName) => {
			let p = document.createElement("p");
			p.className = "p_"+objectiveName;
			return p
		}
		this.getTitle = (objectiveName)=>{
			let rezult = "";
			switch (objectiveName){
				case "sayHiIfValueUpper7":
				rezult = "Введите число";
				break
				case "sayHiToVitek":
				rezult = "Введите имя";
				break
				case "multipleOfThree":
				rezult = "Введите числа через запятую";
				break
			} 
			return rezult;
		}
		this.getObjectiveName = (objectiveNameWith_) => {
			return objectiveNameWith_.split("_")[1];
		}
		this.setAnswer = (objectiveName, value) => {
			document.getElementsByClassName("p_"+objectiveName)[0].innerText = value;
		}
		
	}
}

let UI = new ui;

const elemNameArray = ["sayHiIfValueUpper7","sayHiToVitek","multipleOfThree"];
elemNameArray.map(element=>{
	let objective = document.createElement("div");
	let header = objective.appendChild(document.createElement("h2"))
	header.innerHTML = UI.getTitle(element);
	let input = objective.appendChild(UI.setInput(element));
	input.setAttribute("onchange", element+'(event)');
	objective.appendChild(UI.setP(element));
	document.body.insertBefore(objective, document.getElementById("main"))
})

/*
let objective1 = document.createElement("div");
let header1 = objective1.appendChild(document.createElement("h2"))
header1.innerHTML = "Введите число"
let input1 = objective1.appendChild(UI.setInput("sayHiIfValueUpper7"));
input1.setAttribute("onchange", 'sayHiIfValueUpper7(event)');
let p1 = objective1.appendChild(UI.setP("sayHiIfValueUpper7"));

let objective2 = document.createElement("div");
let header2 = objective2.appendChild(document.createElement("h2"))
header2.innerHTML = "Введите имя";
let input2 = objective2.appendChild(UI.setInput("sayHiToVitek"));
input2.setAttribute("onchange", 'sayHiToVitek(event)');
let p2 = objective2.appendChild(UI.setP("sayHiToVitek"));

let objective3 = document.createElement("div");
let header3 = objective3.appendChild(document.createElement("h2"))
header3.innerHTML = "Введите числа через запятую"
let input3 = objective3.appendChild(UI.setInput("multipleOfThree"));
input3.setAttribute("onchange", 'multipleOfThree(event)');
let p3 = objective3.appendChild(UI.setP("multipleOfThree"));

// document.body.insertBefore(objective1, document.getElementById("main"));
document.body.insertBefore(objective2, document.getElementById("main"));
document.body.insertBefore(objective3, document.getElementById("main"));
*/

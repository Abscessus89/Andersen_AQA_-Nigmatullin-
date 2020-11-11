//написано Нигматуллиным Айдаром Азатовичем. по вопросам звоните указано в анкете

function sayHiIfValueUpper7 (event) {
	const value = event.target.value;
	const rezult = (Number.isSafeInteger(+value) && value >7)? "Привет" : "";
	const objectiveName = UI.getObjectiveName(event.target.className);
	UI.setAnswer(objectiveName, rezult);
}

function sayHiToVitek (event){
	const value = event.target.value;
	const rezult = (value === "Вячеслав")? "Привет, Вячеслав" : "Нет такого имени";
	const objectiveName = UI.getObjectiveName(event.target.className);
	UI.setAnswer(objectiveName, rezult);
}

function multipleOfThree (event){
	const value = event.target.value;
	const array = value.trim().split(",");

	let rezultArray = array.filter((number)=>{
		const typecastingOfVariable = +number;
		if (Number.isSafeInteger(typecastingOfVariable) && typecastingOfVariable !=0){
			return (typecastingOfVariable%3==0);
		}
		else {
			return false
		}
	});
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
	objective.className = element;
	let header = objective.appendChild(document.createElement("h2"));
	header.innerHTML = UI.getTitle(element);
	let input = objective.appendChild(UI.setInput(element));
	input.setAttribute("onchange", element+'(event)');
	objective.appendChild(UI.setP(element));
	document.body.insertBefore(objective, document.getElementById("main"));
});
let questions = [
	{ id: 'Q-101', title: 'What is India\'s capital', type: 'radiogroup', options: ['Delhi', 'Mumbai', 'Kolkatta', 'Pune'] },
	{ id: 'Q-102', title: "Grand Central Terminal, Park Avenue, New York is the world's", type: 'radiogroup', options: ['largest railway station', 'highest railway station', 'longest railway station', 'None of the above'] },
	{ id: 'Q-103', title: 'Entomology is the science that studies', type: 'dropdown', options: ['Behavior of human beings', 'Insects', 'The origin and history of technical and scientific terms', 'The formation of rocks'] },
	// { id: 'Q-104', title: 'Entomology is the science that studies', type: 'radiogroup', options: ['Behavior of human beings', 'Insects', 'The origin and history of technical and scientific terms', 'The formation of rocks'] }
];
let questionNumber = 0;
let answersGiven = [];
let answerCount = 0;
let ans = {};
// ans={'questionNo': 0 ,'id' : null, 'value' :null, 'checked' : a.checked , 'index' : null ,'questionType':null};
// answersGiven.push(ans);
function check() {
	if (questionNumber == 0) {
		x = document.getElementById('pre');
		x.disabled = true;
		x.setAttribute('style', 'cursor : not-allowed');
	}
	else {
		x = document.getElementById('pre');
		x.disabled = false;
		x.setAttribute('style', 'cursor : pointer');
	}
	if (questionNumber == questions.length - 1) {
		x = document.getElementById('next');
		x.disabled = true;
		x.setAttribute('style', 'cursor : not-allowed');
	}
	else {
		x = document.getElementById('next');
		x.disabled = false;
		x.setAttribute('style', 'cursor : pointer');
	}
	// if (answersGiven.length != questions.length) {

	// 	x = document.getElementById('sub');
	// 	x.disabled = true;
	// 	x.setAttribute('style', 'cursor : not-allowed');
	// }
	// else {
	// 	x = document.getElementById('sub');
	// 	x.disabled = false;
	// 	x.setAttribute('style', 'cursor : pointer');
	// }
	if (answersGiven.filter((a)=> a!=null).length != questions.length) {

		x = document.getElementById('sub');
		x.disabled = true;
		x.setAttribute('style', 'cursor : not-allowed');
	}
	else {
		x = document.getElementById('sub');
		x.disabled = false;
		x.setAttribute('style', 'cursor : pointer');
	}
	
	produceAnswer();
}


function NextQuestion() {
	document.querySelector('.quesNo').innerHTML = questions[questionNumber].id;
	document.querySelector('.title').innerHTML = questions[questionNumber].title;
	let selector, selector2, newElement, newInnerElement;
	if (questions[questionNumber].type == 'dropdown') {
		document.querySelector('.SelectAnswer').setAttribute('style', 'display : block');
		document.querySelector('.answer').setAttribute('style', 'display : none');
		document.querySelector('.Select').setAttribute('style', 'display : block');

		selector = document.querySelector('.Select');
		selector.removeChild(document.querySelector('#op'));
		selector = document.createElement('select');
		selector.setAttribute('id', 'op');
		// selector.setAttribute('class', questionNumber);
		selector.setAttribute('class', questions[questionNumber].id);
		selector.setAttribute('onchange', 'f2(this)');

		questions[questionNumber].options.forEach((a, ind) => {
			newElement = document.createElement('option');
			newElement.value = a;
			newElement.innerHTML = a;
			newElement.setAttribute('id', ind + "");
			selector.appendChild(newElement);
			document.querySelector('.Select').appendChild(selector);

		});
	}
	else if (questions[questionNumber].type == 'radiogroup') {
		document.querySelector('.SelectAnswer').setAttribute('style', 'display : none');
		document.querySelector('.Select').setAttribute('style', 'display : none');
		document.querySelector('.answer').setAttribute('style', 'display : block');
		selector = document.querySelector('.answer');
		selector.removeChild(document.querySelector('.grid'));
		selector = document.createElement('div');
		selector.setAttribute('class', 'grid');

		questions[questionNumber].options.forEach((a, ind) => {


			newElement = document.createElement('input');
			newElement.setAttribute('type', 'radio');
			newElement.setAttribute('name', 'optn');
			newElement.setAttribute('id', ind + "");
			// newElement.setAttribute('class', questionNumber);
			newElement.setAttribute('class', questions[questionNumber].id);
			newElement.setAttribute('placeholder', a);
			newElement.setAttribute('onclick', 'f1(this)');

			newInnerElement = document.createElement('label');
			newInnerElement.setAttribute('class', 'font option');
			newInnerElement.setAttribute('for', ind + "");
			newInnerElement.innerText = a;

			// newElement.appendChild(newInnerElement);
			selector.appendChild(newElement);
			selector.appendChild(newInnerElement)
			document.querySelector('.answer').appendChild(selector);



		});
		// selector.setAttribute('style','display : grid');

	}
	check();

}
function prev() {
	questionNumber--;
	NextQuestion();
	check();
}
function next() {
	// if(questionNumber<questions.length-1){
	questionNumber++;
	// }

	NextQuestion();
	check();
}
// function sub() {
// 	check();

// }
function f1(a) {
	console.log(a.id);
	console.log(a.value);
	console.log(a.checked);
	console.log(a.className);
	console.dir(a);
	ans = { 'questionNo': a.className, 'id': a.id, 'value': a.value, 'checked': a.checked, 'index': a.selectedIndex, 'questionType': 'radio' };
	answersGiven[questionNumber] = ans;
	check();

}
function f2(a) {
	console.log(a.id);
	console.log(a.value);
	console.log(a.checked);
	console.log(a.selectedIndex);
	console.dir(a);
	ans = { 'questionNo': a.className, 'id': a.id, 'value': a.value, 'checked': a.checked, 'index': a.selectedIndex, 'questionType': 'select' };
	answersGiven[questionNumber] = ans
	check();

}

function produceAnswer() {
	x = answersGiven[questionNumber]
	if (x.questionType == 'radio') {
		document.getElementById(x.id).value = x.value;
		document.getElementById(x.id).checked = x.checked;
	}
	else if (x.questionType == 'select') {
		document.getElementById(x.id).selectedIndex = x.index;

	}
}
NextQuestion();


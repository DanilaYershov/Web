const input = document.getElementById('todoInput');
function addTodo() {
	const ul = document.getElementById('todoList');
	const li = document.createElement('li');
	const hint = document.getElementByld('hint');
    if (input.value.trim() === '')
    {
    	hint.textContent = 'Введите текст';
    	return;
    }
    let str = input.value;
    str=str.charAt(0).ToUpperCase()+str.slice(1).toLowerCase();
	li.textContent= str;
	const deleteButton = document.createElement('button');
	deleteButton.textContent='x';
	deleteButton.onclick= function(){
		ul.removeChild(li);
	}
	li.appendChild(deleteButton);
	input.value='';
	ul.appendChild(li);
	hint.textContent='';
}
input.addEventListener(

'keydown',

function(event) {
	if(event.key === 'Enter')
		addTodo();
}
);
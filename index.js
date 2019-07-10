let x,y,z;
x = prompt("Введите 1 значение");
y = prompt("Выберите действие");
z = prompt("Введите 2 значение");

if(y== "+") {
alert(Number(x)+Number(z));
}

else if(y=="-") {
	alert(x-z);
}
else if(y=="*") {
	alert(x*z);
}
else if(y=="/") {
	alert(x/z);
}
else alert("Неправильно ввели")
//elements stored in variables:
const grandparent = document.getElementById('grandparent');
const parent1 = document.querySelector('.parent1');
const parent2 = document.querySelector('.parent2');
const child1 = document.querySelector('.child1');
const child2 = document.querySelector('.child2');
const child3 = document.querySelector('.child3');
const child4 = document.querySelector('.child4');


const colorArray = ['pink', 'blue', 'grey', 'orange', 'yellow', 'green', 'gold', 'silver', 'red', 'maroon', 'rgb(63, 198, 153)', 'rgb(144, 163, 86)']

//function:
const changeColor = (element) => {
    element.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)]
};
//function call:
child1.addEventListener('click', function(){
    changeColor(parent1);
    changeColor(parent2);
    changeColor(grandparent);
    changeColor(child1);
    changeColor(child2);
    changeColor(child3);
    changeColor(child4);
});

//Events:
child2.addEventListener('click', function(){
    child3.style.display ='none';
});

child4.addEventListener('click', function(){
    child3.style.display ='';
    parent1.style.display ='';
});

child3.addEventListener('click', function(){
    parent1.style.display ='none';
});







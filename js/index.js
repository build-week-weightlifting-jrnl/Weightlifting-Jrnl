let remember2 = document.querySelector(".forgot");

remember2.addEventListener('click', (event) => {
	alert('Try to remember you Log in Info please!');
});

let newContact = document.querySelector('.contact');

newContact.addEventListener('mouseenter', (event) => {
	event.currentTarget.style.backgroundColor = 'orange';
}); 

let newContact2 = document.querySelector('.contact');
newContact2.addEventListener('mouseleave', (event) => {
	event.currentTarget.style.backgroundColor = 'red';
}); 

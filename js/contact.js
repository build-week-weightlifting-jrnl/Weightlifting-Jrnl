let newContact = document.querySelector('.contact');

newContact.addEventListener('mouseenter', (event) => {
	event.currentTarget.style.backgroundColor = 'orange';
}); 

let newContact2 = document.querySelector('.contact');
newContact2.addEventListener('mouseleave', (event) => {
	event.currentTarget.style.backgroundColor = 'red';
}); 
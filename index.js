const selectedItem = document.getElementById('selectedItem');
const numberInput = document.getElementById('numberInput');
const factText = document.getElementById('factText')
const factHeading= document.getElementById('factHeading');

// Adding eventlistner to input box for the number entered
 selectedItem.addEventListener('change', e => {
    getFactFetch();
 });

// Adding eventlistner to the select box for the selected category
 numberInput.addEventListener('input', e =>{
   getFactFetch();
 });

 // Fetch with Fetch API
 function getFactFetch () {
   let number = numberInput.value;
   let category = selectedItem.value;
   if(number != ''){
     fetch('http://numbersapi.com/'+number+'/'+category).
     then(response => response.text())
     .then(data => {
       factHeading.innerText = category+ ' fact about '+number;
       factText.innerText = data;
     })
     .catch(err => console.log(err));
   }
   else{
     factText.innerText = '';
     factHeading.innerText ='';
   }
 }

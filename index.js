const selectedItem = document.getElementById('selectedItem');
const numberInput = document.getElementById('numberInput');
const factText = document.getElementById('factText')
const factHeading= document.getElementById('factHeading');


 numberInput.addEventListener('input', getFactFetch);

 selectedItem.addEventListener('change', e => {
   let number = numberInput.value;
   if(number!=''){
     getFactFetch();
   }
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

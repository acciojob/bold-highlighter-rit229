function highlight() {
    //Write your code here
const strongElements = document.querySelectorAll('strong');
        strongElements.forEach(function(element) {
            element.style.color = 'rgb(0, 128, 0)'; // Change to green
        });

}


function return_normal() {
    //Write your code here
const strongElements = document.querySelectorAll('strong');
        strongElements.forEach(function(element) {
            element.style.color = 'rgb(0, 0, 0)'; // Change back to black
        });
    
}

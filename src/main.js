import { Entry } from './journal.js';
import './styles.css';



$(document).ready(function(){
  $('#user-input').submit(function(event){
    event.preventDefault();
    var userInput = $('#input').val();
    console.log(userInput);
    var output = new Entry(userInput);
    console.log(output);
    console.log(output.counter());

    output.inputArray.forEach(function(element){
      $('#user-output').append("<li>" + element + "</li>");
    });
  });
});

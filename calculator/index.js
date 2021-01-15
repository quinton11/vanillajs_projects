
elements = document.getElementsByClassName('calculator-button');
var list = [];
for(var j=0;j<elements.length;j++){
    list.push(elements[j]);
}
backspace = document.getElementById('backspace');
list.push(backspace);

console.log(elements.length);


var expression = [];
for (var i=0; i<list.length; i++){
    (function(index,expression){
        var result ='';
        list[i].onclick = function(){
            //Checking what element is clicked

            if (index == (list.length-1)){
                expression.pop();
                equation = expression.join('');
            }
            else if (index == (list.length-2)){
                alert('Finding result')
                equation = expression.join('');
                result = eval(equation);
            }
            else if(index == 0){
                expression.length = 0
                equation = expression.join('')
            }
            else {
                expression.push(list[index].textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim());
                equation = expression.join("");
            }
            
            screen = document.getElementById('text-box');
            
            screen.innerHTML =equation + '<br/>' + result;
        }
    })(i,expression)
}

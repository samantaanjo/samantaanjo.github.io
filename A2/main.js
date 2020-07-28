// ITEM 3 - A1
let button = document.querySelector('button');
let text = document.querySelector('input');
button.onclick = addItem;

let ol = document.querySelector('ol');
let li = document.createElement('li');


// ITEM 4 - A1
function addItem() {

    let ol = document.querySelector('ol');
    let li = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.value = "value";
    checkbox.id = "ck";
  
    let Delete = document.createElement('button');
    Delete.type = "button";
    Delete.textContent = "Delete";
    Delete.id = "del";
    
  
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(text.value));
    li.appendChild(Delete);
    ol.appendChild(li);

   
    // ITEM 5 A1
    
        // on change event =  changes the color of the li element and move the item 
        checkbox.onchange = ChangeColor_MoveItem;

        // on double click event = changes the color back to what it was and uncheked the li element
        checkbox.ondblclick = rollBackColor;

        //change the color of the selected li element according to the checkbox selection
        //and move the the last item
         function ChangeColor_MoveItem() {
 
          
          if(checkbox.checked = true){
            li.style.color = '#DF691A';
            li.style.textDecoration = 'line-through';
          }
          else {
                li.style.color = 'black';
          }
           
           //Add li element to the list
           ol.appendChild(li);

        }

        //get the color back if unchecked
        function rollBackColor() {

            checkbox.checked = false;
            li.style.color = 'black';
            li.style.textDecoration = 'none';
        }
  
      Delete.onclick = deleteLine;
   
}

 // -------------- Assignment 02 ---------------- //

 // ITEM 1B 
 //Delete funtion created individually, not inside my Additem function as I have done for the A1.
    function deleteLine(e) {
        
            let delItem = e.target.closest("li");
            delItem.remove();

          
    }

    // ITEM 2 - WebBrowser API 

          function dragstart_handler(ev) {
            // Add the target element's id to the data transfer object
            ev.dataTransfer.setData("text/plain", ev.target.id);
          }
        
          window.addEventListener('DOMContentLoaded', () => {
            // Get the element by id
            const element = document.getElementById("p1");
            // Add the ondragstart event listener
            element.addEventListener("dragstart", dragstart_handler);
          });

 






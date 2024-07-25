const cigarettes = document.getElementById('cigarettes');
const trash = document.getElementById('trash');
const lung = document.getElementById('lung');



var counter=184;

cigarettes.addEventListener('dragstart', dragStart);
//cigarettes.addEventListener('touchstart', dragStart);
trash.addEventListener('dragover', dragOver);
//trash.addEventListener('touchmove', dragOver);
trash.addEventListener('dragenter', dragEnter);
//trash.addEventListener('touchend', dragEnter);
trash.addEventListener('dragleave', dragLeave);
//trash.addEventListener('dragleave', dragLeave);
trash.addEventListener('drop', dragDrop);
//trash.addEventListener('touchend', dragDrop);


function dragStart() {
    cigarettes.classList.add('dragging');
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter() {
    trash.classList.add('hovered');
}

function dragLeave() {
    trash.classList.remove('hovered');
}

function dragDrop() {

    cigarettes.classList.remove('dragging');
    trash.classList.remove('hovered'); 



    //myFunction();
   // const image_x = document.getElementById('cigarette_box.png');
   // image_x.remove();

    var count_value=forloop(); 
    if(count_value==154){ move(10);}
    if(count_value==124){ move(30);}
    if(count_value==94){ move(50);}
    if(count_value==64){ move(60);}
    if(count_value==34){ move(80);}
    if(count_value==4){ move(100);}
   
    

    //setTimeout(forloop, 500);
    
    //console.log("counter: "+counter)
   

    // if(counter>0){lung.style.backgroundImage = "url('good lungs "+counter+".jpeg')";}
    // document.getElementById("countervalue").innerHTML  = counter;
    // counter--;
    //lung.style.background = `linear-gradient(to bottom, #eaeaea ${width}%, transparent ${width}%)`;
    //if(counter==2){lung.style.backgroundImage = "url('"+filenamelist[counter]+"')";}
    // Additional code to celebrate the restoration of the lung
    //myMove();
    // }
}

function forloop(){
    // for(i=0;i<19;i++){
        if(counter>0){
            lung.style.backgroundImage = "url('good lungs "+(counter)+".jpeg')";
           // document.getElementById("countervalue").innerHTML  = counter;
            counter=counter-30;
            return counter;
             console.log(counter);
       // }
    }
}


var i = 0;
var width = 1;
function move(value) {
  console.log(value);  
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= value) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        document.getElementById("myBar").innerHTML  = value+'%';
      }
    }
  }
}


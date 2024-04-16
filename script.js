// buttons
let resetBtn=document.querySelector("#reset-btn");
let resetAll=document.querySelector("#Reset-All");
let arrSubmitBtn1=document.querySelector("#array-button1");
let arrSubmitBtn2=document.querySelector("#array-button2");
let strSubmitBtn=document.querySelector("#string-button");
let number_btn=document.querySelector("#numb");
// container
let msgContainer1 = document.querySelector(".container1");
let msgContainer2 = document.querySelector(".container2");
let msgContainer3 = document.querySelector(".container3");


//string
let string1;
let string2;

const pushString=()=>{
    let text=document.getElementById("stringy").value;
    console.log(text);
    if(text.length===0){
        strSubmitBtn.disabled=true;
        alert("Enter a String");
    }
    else{
        string1=text;
        document.getElementById("demo1").innerHTML=string1;
        document.getElementById("stringy").value="";
        arrSubmitBtn1.disabled=true;
        arrSubmitBtn2.disabled=true;
        msgContainer1.classList.add("hide");
        msgContainer2.classList.remove("hide");
        msgContainer3.classList.add("hide");
    }
    strSubmitBtn.disabled=false;
}

// string methods
        //charAt method
            const charAt_fn=()=>{
                
                if(string1.length<=3){
                    alert("Enter a String of minimum length of 4");
                }
                else{
                    string2 = string1.charAt(3);
                    console.log(string2);
                    document.getElementById("demo3").innerHTML = string2;
                }
            }

        //split method
            const split_fn=()=>{
                if(string1.length<=3){
                    alert("Enter Strings with commas")
                }
                else{
                    string2 = string1.split(",");
                    document.getElementById("demo3").innerHTML = `[${string2}] <br><br> <i>Type=> ${typeof(string2)}</i> ` ;
                }
            }

        //lowercase method
            const lowercase_fn=()=>{
                string2 = string1.toLowerCase();
                document.getElementById("demo3").innerHTML = string2;
            }

        //uppercase method
            const uppercase_fn=()=>{
                string2 = string1.toUpperCase();
                document.getElementById("demo3").innerHTML = string2;
            }

        //indexOf method
            const indexOf_fn=()=>{
                string2 = string1.indexOf("a");
                 document.getElementById("demo3").innerHTML = string2+1;
            }

        //lastIndexOf method
            const lastIndexOf_fn=()=>{
                string2 = string1.lastIndexOf("a");
                document.getElementById("demo3").innerHTML = string2+1;
            }
            
        //slice mehtod
        const slice_fn=()=>{
            if(string1.length<=5){
                alert("Enter a String of minimum length of 6")  
            }
            else{
                string2 = string1.slice(2,5);
                document.getElementById("demo3").innerHTML = `${string2} <br><br> <i>Type=> ${typeof(string2)}</i> `;
            }
        }
        string2 +" <br> <i>Type =></i>"+ typeof(string2)


//array
let sampleArray1 = [];
let sampleArray2 = [];

document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('flexSwitchCheckDefault');
    const inputField = document.getElementById('numb');

    toggleSwitch.addEventListener('change', function() {
      if (this.checked) {
        inputField.type = 'number';
    } else {
        inputField.type = 'text';
      }
    });
  });


// array1
function showArray1() {
    document.getElementById("demo1").innerHTML = "["+sampleArray1+"]";

}

function pushToArray1() {
    const toggleSwitch = document.getElementById('flexSwitchCheckDefault');
    let x;
    if (toggleSwitch.checked) {
        x = document.getElementById("numb").valueAsNumber;
    } else {
        x = document.getElementById("numb").value;
    }

    if (toggleSwitch.checked && isNaN(x)) {
        alert("Enter a valid number");
        number_btn.disabled = true;
    } else if (!toggleSwitch.checked && (x === "" || x === null)) {
        alert("Enter a valid value");
        number_btn.disabled = true;
    }
    else{
        sampleArray1.push(x);
        showArray1();
        msgContainer1.classList.remove("hide");
        msgContainer2.classList.add("hide");
        msgContainer3.classList.add("hide");
    }
    number_btn.disabled=false;
    
    
     document.getElementById("numb").value="";

     strSubmitBtn.disabled=true;
     
}

// array 2
function showArray2() {
    document.getElementById("demo2").innerHTML = "["+sampleArray2+"]";

}

function pushToArray2() {
    let x = document.getElementById("numb").value;
    if(x===""||x===null || isNaN(x)){
        alert("Enter an Array Element")
        number_btn.disabled=true;
    }
    else{
        sampleArray2.push(x);
        showArray2();
        msgContainer1.classList.remove("hide");
        msgContainer2.classList.add("hide");
        msgContainer3.classList.add("hide");
    }
    number_btn.disabled=false;
    
     document.getElementById("numb").value="";

     

}

// array methods
            //map-method
                const map_fn=()=>{
                    if(sampleArray1.length===0 && sampleArray2.length===0){
                        alert("Enter an Array");
                    }
                    else{
                        let map1 = sampleArray1.map((x) => x * 2);
                        sampleArray1=map1;
                        document.getElementById("demo3").innerHTML = "["+sampleArray1+"]";
                    }
                }

            //filter-method
                const filter_fn=()=>{
                    if(sampleArray1.length===0 && sampleArray2.length===0){
                        alert("Enter an Array")
                    }
                    else{
                        let map1 = sampleArray1.filter((x) => x > 30);
                        sampleArray1=map1;
                        document.getElementById("demo3").innerHTML = "["+sampleArray1+"]";  
                    }
                }

            //concat-method
                const concat_fn=()=>{
                    if(sampleArray1.length===0 && sampleArray2.length===0){
                        alert("Enter an Array")
                    }
                    else{
                        let map1 = sampleArray1.concat(sampleArray2);
                        sampleArray1=map1;
                        document.getElementById("demo3").innerHTML = "["+sampleArray1+"]";
                    }
                }

            //sort-method
            const sort_fn=()=>{
                
                if(sampleArray1.length===0 && sampleArray2.length===0){
                    alert("Enter an Array")
                }
                else if(typeof(sampleArray1[0])==="string"){
                    let map2 = sampleArray1.sort();
                    sampleArray1=map2;
                    document.getElementById("demo3").innerHTML = "["+sampleArray1+"]";
                }
                else{
                    let map1 = sampleArray1.sort(function(a, b){return a - b});
                    sampleArray1=map1;
                    document.getElementById("demo3").innerHTML = "["+sampleArray1+"]";
                }
            }

            //sort-reverese-method
            const sortrev_fn=()=>{
                
                if(sampleArray1.length===0 && sampleArray2.length===0){
                    alert("Enter an Array")
                }
                else if(typeof(sampleArray1[0])==="string"){
                    let map2 = sampleArray1.reverse();
                    sampleArray1=map2;
                    document.getElementById("demo3").innerHTML = "["+sampleArray1+"]";
                }
                else{
                    let map1 = sampleArray1.sort(function(a, b){return b - a});
                    sampleArray1=map1;
                    document.getElementById("demo3").innerHTML = "["+sampleArray1+"]";
                }
            }

// let poliyade=3;
// console.log(typeof(poliyade));

//end-array method

// date
const resetDate= ()=>{
    var today=new Date();  
    document.getElementById('txt').innerHTML=`<i>${today}</i>`;
};
//end date function


//resetAll
const reset=()=>{
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo2").innerHTML = "";
    document.getElementById("demo3").innerHTML = "";
    document.getElementById('txt').innerHTML   = "";

    strSubmitBtn .disabled=false;
    arrSubmitBtn1.disabled=false;
    arrSubmitBtn2.disabled=false;

    sampleArray1=[];
    sampleArray2=[];
    string1="";
    string2="";


    msgContainer1.classList.add("hide");    //array
    msgContainer2.classList.add("hide");    //string
    msgContainer3.classList.remove("hide"); //initial
}



//event listener
resetBtn.addEventListener("click",resetDate);
resetAll.addEventListener("click",reset);



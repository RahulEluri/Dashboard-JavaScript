let resetBtn=document.querySelector("#reset-btn");
let resetAll=document.querySelector("#Reset-All");
let arrSubmitBtn1=document.querySelector("#array-button1");
let arrSubmitBtn2=document.querySelector("#array-button2");
let strSubmitBtn=document.querySelector("#string-button");
let number_btn=document.querySelector("#numb");

let msgContainer1 = document.querySelector(".container1");
let msgContainer2 = document.querySelector(".container2");
let msgContainer3 = document.querySelector(".container3");

// let text = "";
// // let length = text.length;
// if(text.length===0){
//     console.log("sorry")
// }
// else{
//     console.log(text);
// }

let string1;
let string2;

const pushString=()=>{
    let text=document.getElementById("stringy").value;
    console.log(text);
    if(text.length===0){
        strSubmitBtn.disabled=true;
        alert("Enter a String");
        // console.log('sorry');
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
        // console.log("hi");
    }
    // console.log(string1);
    strSubmitBtn.disabled=false;
}

// string methods
        //charAt method
            const charAt_fn=()=>{
                // console.log(string1)
                if(string1.length<=3){
                    alert("Enter a String of minimum length of 4")
                    // console.log("aythundi")
                }
                else{
                    string2 = string1.charAt(3);
                    console.log(string2);
                    document.getElementById("demo3").innerHTML = string2;
                    // console.log("layipoyindi")
                }
                // console.log("ayipoyindi")
            }

        //split mehtod
            const split_fn=()=>{
                if(string1.length<=3){
                    alert("Enter Strings with commas")
                    // console.log("aythundi")
                }
                else{
                    string2 = string1.split(",");
                    // console.log(string2);
                    document.getElementById("demo3").innerHTML = "["+string2 +"] <br> <i>Type =></i>"+ typeof(string2) ;
                    // console.log("layipoyindi")
                }
            }

        //lowercase method
            const lowercase_fn=()=>{
                string2 = string1.toLowerCase();
                // console.log(string2);
                document.getElementById("demo3").innerHTML = string2;
            }

        //uppercase method
            const uppercase_fn=()=>{
                string2 = string1.toUpperCase();
                // console.log(string2);
                document.getElementById("demo3").innerHTML = string2;
            }

        //indexOf method
            const indexOf_fn=()=>{
                string2 = string1.indexOf("a");
                // console.log(string2);
                document.getElementById("demo3").innerHTML = string2+1;
            }

        //lastIndexOf method
            const lastIndexOf_fn=()=>{
                string2 = string1.lastIndexOf("a");
                // console.log(string2);
                document.getElementById("demo3").innerHTML = string2+1;
            }
            
        //slice mehtod
        const slice_fn=()=>{
            if(string1.length<=5){
                alert("Enter a String of minimum length of 5")
                // console.log("aythundi")
            }
            else{
                string2 = string1.slice(2,5);
                // console.log(string2);
                document.getElementById("demo3").innerHTML = string2 +" <br> <i>Type =></i>"+ typeof(string2) ;
                // console.log("layipoyindi")
            }
        }

            








//array
let sampleArray1 = [];
let sampleArray2 = [];
let x = document.getElementById("numb").valueAsNumber;


// array1
function showArray1() {
    document.getElementById("demo1").innerHTML = "["+sampleArray1+"]";

}

function pushToArray1() {
    let x = document.getElementById("numb").value;
    // console.log('X ==>', x);

    if(x===""){
        number_btn.disabled=true;
    }
    else{
        sampleArray1.push(x);
        showArray1();
        msgContainer1.classList.remove("hide");
        msgContainer2.classList.add("hide");
        msgContainer3.classList.add("hide");
    }
    number_btn.disabled=false;
    // console.log('Array ==>',sampleArray1);
    
     document.getElementById("numb").value="";

     strSubmitBtn.disabled=true;
     
}

// array 2
function showArray2() {
    document.getElementById("demo2").innerHTML = "["+sampleArray2+"]";

}

function pushToArray2() {
    let x = document.getElementById("numb").value;
    if(x===""){
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
    console.log('Array ==>',sampleArray2);
    
     document.getElementById("numb").value="";

     

}

// array methods
            //map-method
                const map_fn=()=>{
                    if(sampleArray1.length===0 && sampleArray2.length===0){
                        alert("Enter an Array")
                    }
                    else{
                        let map1 = sampleArray1.map((x) => x * 2);
                        sampleArray1=map1;
                        document.getElementById("demo3").innerHTML = "["+sampleArray1+"]";
                        // console.log(map1);
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
                        // console.log(map1);
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
                        // console.log(map1);
                    }
                }


//end-array methods

// date
const resetDate= ()=>{
    var today=new Date();  
    document.getElementById('txt').innerHTML=today;
};
//end date function


//resetAll
const reset=()=>{
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo2").innerHTML = "";
    document.getElementById("demo3").innerHTML = "";

    strSubmitBtn .disabled=false;
    arrSubmitBtn1.disabled=false;
    arrSubmitBtn2.disabled=false;

    sampleArray1=[];
    sampleArray2=[];
    string1="";
    string2="";

    msgContainer1.classList.add("hide");//array
    msgContainer2.classList.add("hide");//string
    msgContainer3.classList.remove("hide");//initial
}



//event listener
resetBtn.addEventListener("click",resetDate);

resetAll.addEventListener("click",reset);



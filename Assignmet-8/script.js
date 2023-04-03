const Name =  document.querySelector("#Name")
const Gender =  document.querySelector("#Gender")
const Submit =  document.querySelector("#BtnSubmit")

const DisplayError =  document.querySelector("#DisplayError") 

const Male = document.querySelector("#male") 
const Female = document.querySelector("#female")

Start()
function Start()
  {
    RenderData()
  }
let blank = "";
function RenderData()
{
     Submit.addEventListener("click",()=>{
        if(!Name.value && !Gender.value ){
            DisplayError.style.visibility = "visible"
        }
        else{
            blank += `<div id="result_div">
            Name:- <div class="name">${Name.value.toUpperCase()}</div>
            Gender:- <div class="gender">${Gender.value}</div>
            <button id="delete"><i class="fa-regular fa-trash-can"></i></button></div>`
            document.getElementById("output").innerHTML = blank;
            Data()
            DeleteData()
        }
    })
}

let Data=()=>{
    const ele = document.querySelectorAll("#output #result_div")
    for(let i=0; i<ele.length; i++){
        Male.addEventListener('click',()=>{
            if(ele[i].style.display == "none"){
                ele[i].style.display = "flex"
            }
           else if(Female.value == ele[i].children[1].innerHTML){
            ele[i].style.display = "none"
           }
        })
        Female.addEventListener('click',()=>{
            console.log(ele)
            if(Male.value == ele[i].children[1].innerHTML){
                ele[i].style.display = "none"
            }
            else if(ele[i].style.display == "none"){
                ele[i].style.display = "flex"
            }
        })
    }
}

function DeleteData(){
    const ele = document.querySelectorAll("#output #result_div")
    const del_button =  document.querySelectorAll("#delete")
    ele.forEach((elem,index)=>{
        del_button[index].addEventListener("click",()=>{
            ele[index].remove()
            console.log(document.querySelectorAll("#output #result_div").length)
            if(document.querySelectorAll("#output #result_div").length === 0){
                blank = ""
            }
        })
    })
}
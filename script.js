const clickButt=(content)=>
{
    document.getElementById("display").value+=content
}
const equalOP=()=>
{
   try{
    document.getElementById("display").value=eval(document.getElementById("display").value)
   }
   catch{
    document.getElementById("display").value="Invalid expression"
   }
}
const Allclear=()=>
{
    document.getElementById("display").value=""
}
const clearOne=()=>
{
    document.getElementById("display").value= document.getElementById("display").value.slice(0,-1)
}
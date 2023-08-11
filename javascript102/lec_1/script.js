var alertMsg = () =>{
    alert("Hello World!!!")
}

var sayMsg = () =>{
    do{
        var name = prompt("What's your name?")
        if(name){
            alert("Hello, "+name)
        }
    }while(!name)
}
function hideSubtitle(){
    document.getElementsByTagName('h2')[0].style.display="none"
}
function showSubtitle(){
    document.getElementsByTagName('h2')[0].style.display="block"
}
function changeColor(color){
    document.getElementsByTagName('h1')[0].style.color=color
}
function changeColor2(){
    let color = document.getElementById("color").value.trim()
    if(color){
    document.getElementsByTagName('h1')[0].style.color=color
    }
}
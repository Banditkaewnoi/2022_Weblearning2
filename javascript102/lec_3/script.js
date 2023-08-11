var goto = () =>{
    let iframeId = document.getElementById("iframeId")
    let sourceURL = document.getElementById("sourceURL")
    iframeId.src = "https://"+sourceURL.value 
}
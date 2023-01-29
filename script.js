
let error = document.getElementById('error')
let pattern = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g // Gmail Regular Expression


function validate(){
    let email = document.getElementById('email')

    if(email.value.match(pattern) || email.value === ''){
        error.classList.remove('error')
        error.style.color = "#04ac28"
        error.innerHTML = ""
    }else{
        error.classList.add('error')
        error.innerHTML = "Please Enter Valid Email Address"
        error.style.color = "#fa0606"
    } 
}








const textInput = document.getElementById ("text-input");
const CheckButton = document.getElementById ("check-btn");
constresult = document.getElementById ("result");
CheckButton.addEventListener("click", () =>{
    const Lowerreplaced =textInput.value.toLowerCase.replace(/[^a-z0-9]/g, "")
    if (textInput.value === ""){
        alert("please input a value")
    }
    else if (textInput.value.length === 1){
        result.innerText = '${textInput.value} is a palindrome'
    }
    else if (replaced === [...replaced].reverse().join("")){
        Result.innerText = '${textInput.value} is a palindrome'
    }
    else{
         Result.innerText = '${textInput.value} is not a palindrome'
    }
    
});


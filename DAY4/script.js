// var x=12;
// function display(){
//     var x=14;
   
//     console.log("Hello",x);
// }
// display();
function validate(){
    let username=document.getElementById("un").value;
    // alert(username)
    let pass=document.getElementById("pass").value;
    let p1=document.getElementById("result");
    // alert(pass)
//     if(username=="admin"){
//         // alert(" username validate")
        
//         if(pass=="admin"){
//             // alert("validate")
//             p1.innerText="validated";
//         }
//         else{
//             // alert("invalid Password")
//             p1.innerText="Invalid Password"
//         }
//     }
//     else{
//         // alert("invalid username")
//         p1.innerText="Invalid username";
//     }

if (username.length<10){
    return false;
}

}
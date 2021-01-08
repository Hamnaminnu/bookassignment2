// let email = document.getElementById("email");
//     let psw = document.getElementById("password");
//     let num = document.getElementById("num");
    
//     function Validate() 
//     {
//      let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
//      let format = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.-]+).([a-z]{2,3}).([a-z]{2,3})?$/;
//      let phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//      let phoneno = /^\d{10}$/;
    
//      if (format.test(email.value)){
//         if(passw.test(psw.value)){ 
//             if(phone.test(num.value))
//             {
//              return true; 
//             }
//             else
//             {
//                alert("Not a valid Phone Number");
//                return false;
//             }
//         }
//         else
//         { 
//         alert('Wrong Password...!')
//         return false;
//         }
//      }
//      else{
//         alert("You have entered an invalid email address!")
//         return (false)
//       }
//     }
    
//     function ValidatePassword(){
//         var strength = document.getElementById('strength');
//         var strong = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
//         var medium = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
//         if (strong.test(psw.value)) {
//             strength.innerHTML = '<span style="color:green">Strong!</span>';
//         } else if (medium.test(psw.value)) {
//             strength.innerHTML = '<span style="color:orange">Medium!</span>';
//         } else {
//             strength.innerHTML = '<span style="color:red">Weak!</span>';
//         }
//     }

function Validate2(){
    let name1 = document.getElementById("a2").value;
    let psw1 = document.getElementById("password").value;
    let name2 = document.getElementById("uname").value;
    let pass2 = document.getElementById("pswW").value;
    if (name1==name2 && psw1==pass2){
        return true;
    }
}
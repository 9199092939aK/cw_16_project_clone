// var form = document.getElementById("#form");
// form.addEventListener("submit", submitData);

// //var userdata = JSON.parse(localStorage.getItem)
// var userdata = [];
// function submitData(e) 
// {
//   e.preventDefault();
//   var user = {
//     email: email.value,
//     cemail: cemail.value,
// };
// if(email.value==cemail.value)
// {
//   alert("Check your Gmail for offer!!!");
// }

// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// var regdUsers=JSON.parse(localStorage.getItem("signUpDetails"));
// console.log(regdUsers);

// document.querySelector("#form").addEventListener("submit",formSubmit);

// var form=document.querySelector("#form");
// function formSubmit(event)
// {
//     event.preventDefault();

//     var email=form.email.value;
//     var cemail=form.cemail.value;
    
//     console.log(email,cemail);
    
//     for(var i=0;i<regdUsers.length;i++)
//     {
//         if(regdUsers[i].email==email && regdUsers[i].cemail==cemail)
//         {
//             alert("Check your Email for offer!!!");
//         }
//         // else
//         // {
//         //     alert("Not a registered user to get the offer!!!");
//         // }
//     }
// }

// .............................................................................................
// var regdUsers=JSON.parse(localStorage.getItem("signUpDetails"));
// // console.log(regdUsers);

//  document.querySelector("#form").addEventListener("submit",formSubmit);

// // var form=document.querySelector("#form");
// var form = document.getElementById("#form");
// form.addEventListener("submit", formSubmit);

// //var userdata = JSON.parse(localStorage.getItem)
// function formSubmit(event)
// {
//     event.preventDefault();

//     var email=form.email.value;
//     var cemail=form.cemail.value;
//     console.log(email,cemail);
// }
// if(email.value==cemail.value)
// {
//   alert("Check your Gmail for offer!!!");
// }
// ..............................................................................................................

function myfun()
{
    
    var x1=document.getElementById("email").value;
    var x2=document.getElementById("cemail").value;
    console.log(x1,x2);
    if(x1==x2)
    {
        alert("Check your Gmail for offer!!!");
    }
    else
    {
        alert("Not a registered user to get the offer!!!");
    }
}
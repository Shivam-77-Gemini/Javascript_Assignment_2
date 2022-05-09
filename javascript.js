
// let name1=document.getElementById("user-name").value;
// let mail=document.getElementById("email").value;
// let phone=document.getElementById("mobile").value;

// // var d=[name1,mail,phone];
// // console.log(d);

// function validateMail(){
//                     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//                     if(re.test(mail)) {
//                         return true;
//                     }
//                     else if(mail===""){
                        
//                         alert("Please Enter your mail")
//                         return false;
//                     }
//                     else{  
//                         return false;
//                     }
//                 }
                
// let validateName=()=>{

//                     var re1 = /^[A-Za-z]+$/;;
//                     if(re1.test(name1) && name.length<=20) {
//                         return true;
//                     }
//                     else if(name1===""){
//                         alert("Pleasse fill your Name");
//                         return false;
//                     }
                   
//                     else{
//                         alert("Please enter write name");
//                        return false;
//                     }
//                 };
// let validatePhone=(phone)=>{
//                     var re2=/^\\d{10}$/;
//                     if(re2.test(phone)) {
//                           return true;
//                     }
//                     else{
//                         return false;
//                     }
//                 };
// let loStore=()=>{
// localStorage.setItem("Name",name1);
// localStorage.setItem("Mail",mail);
// localStorage.setItem("Phone",phone);
// };


// let validation=()=>{
//     if(validateMail()&&(validateName(name1)&&validatePhone(phone))){
//         loStore();
//         return true;
//     }


// //         function addRow(){

// //         const table=document.getElementById("tab");
     
// //         const row=document.createElement("tr");
// //         table.append(row);
// //         const data1=document.createElement("td");
// //         const dataNode1=document.createTextNode(d[0]);
// //         data1.append(dataNode1);
// //         row.append(data1);
       
// //         const data2=document.createElement("td");
// //         const dataNode2=document.createTextNode(d[1]);
// //         data2.append(dataNode2);
// //         row.append(data2);
      
// //         const data3=document.createElement("td");
// //         const dataNode3=document.createTextNode(d[2]);
// //         data3.append(dataNode3);
// //         row.append(data3);
// //         }

// //     // }
    
// // // };

// // // let userName = document.getElementById("user-name");
// // // function pyaara(){
// // // console.log(userName.value);
// // // 
// }
const userName=document.getElementById("user-name");
const userMail=document.getElementById("user-mail");
const userPhone=document.getElementById("user-mobile");
// Name validation function
function validateName(){
    const reg=/^[A-Za-z]+$/;
    if(userName.value===""){
        alert("please fill your name");
        return false;
    }
    else if(reg.test(userName.value) && userName.value.length<=20){
        
        return true;
    }
    else if(userName.value.length>20){
        alert("Please enter value less than 20");
        return false;
    }
   
    else {
        alert("Please write your name in correct format and should be less than 20");
        return false;
    }
}

// Validation Mail

function validateMail(){
    const rege=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(userMail.value===""){
        alert("please fill your email");
        return false;
    }
    else if(rege.test(userMail.value)){
        
        return true;
    }
    
   
    else{
        alert("Please write your mail in correct formate");
        return false;
    }
}

//Validation phone

function validatePhone(){
    const rege=/^(\+\d{1,3}[- ]?)?\d{10}$/;
   
    if((rege.test(userPhone.value)&& userPhone.value.length<=10)||userPhone.value===""){
        
        return true;
    }
    else if(userPhone.value.length>10){
        alert("please enter value in 10 digit formate");
        return false;
    }
    
   
    else{
        alert("Please write your phone in correct formate");
        return false;
    }
}
function addData(){
    const table=document.getElementById("tab");
     
            const row=document.createElement("tr");
          
            const data1=document.createElement("td");
            
            const dataNode1=document.createTextNode(localStorage.getItem("Name"));
            
            data1.append(dataNode1);
            row.append(data1);
            table.append(row);
           
            const data2=document.createElement("td");
            const dataNode2=document.createTextNode(localStorage.getItem("Mail"));
            data2.append(dataNode2);
            row.append(data2);
          
            const data3=document.createElement("td");
            const dataNode3=document.createTextNode(localStorage.getItem("Phone"));
            data3.append(dataNode3);
            row.append(data3);
            document.getElementById("form1").reset();
            
    
}

function storeItem(){
    localStorage.setItem("Name",userName.value);
    localStorage.setItem("Mail",userMail.value);
    if(userPhone.value!=""){
    localStorage.setItem("Phone",userPhone.value);
    
    }
    else{
        localStorage.setItem("Phone","");
    }
    addData();

    
    
}

function validation(){
    if(validateName()&&(validateMail()&&validatePhone())){
        storeItem();
        return true;
    
}
else{
    alert("You have done Something wrong!!\nPlease input correct entries")
    return false;
}

}

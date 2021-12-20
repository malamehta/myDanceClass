$(document).ready(function(){
    $(".play1").click(function(){
      $(".play1").toggle();
    });
  });
  $(document).ready(function(){
    $(".play2").click(function(){
      $(".play2").toggle();
    });
  });
  $(document).ready(function(){
    $(".play3").click(function(){
      $(".play3").toggle();
    });
  });
  $(document).ready(function(){
    $(".play4").click(function(){
      $(".play4").toggle();
    });
  });
  $(document).ready(function(){
    $(".play5").click(function(){
      $(".play5").toggle();
    });
  });
  $(document).ready(function(){
    $(".play6").click(function(){
      $(".play6").toggle();
    });
  });

 // ========================form validation=================
 function validation(){
  var fname=document.getElementById('fname').value;
  var lname=document.getElementById('lname').value;
  var email=document.getElementById('email').value;
  var mb=document.getElementById('mb').value;
  var age=document.getElementById('age').value;
  var dob=document.getElementById('dob').value;
  var addr=document.getElementById('addr').value;
  
  //========================first name===========================

  if(fname==""){
      document.getElementById('firstname').innerHTML="**please fill the first name field";
      return false;
  }
  if(fname.length<2 || fname.length>12){
      document.getElementById('firstname').innerHTML="**there should be minimum 2 character and not more than 12 ";
      return false;

  }
  if(!isNaN(fname)){
      document.getElementById('firstname').innerHTML="**first name should not be number ";
      return false;
  }

  //==============================last name=======================

  if(lname==""){
      document.getElementById('lastname').innerHTML="**please fill the lastname field";
      return false;
  }
  if(lname.length<2 || lname.length>12){
      document.getElementById('lastname').innerHTML="**there should be minimum 2 character and not more than 12 ";
      return false;

  }
  if(!isNaN(lname)){
      document.getElementById('lastname').innerHTML="**last name should not be number ";
      return false;
  }

    //===========================email================================

  if(email==""){
      document.getElementById('mail').innerHTML="**please fill the email field";
      return false;
  }
  //============================mobile number=========================
  if(mb==""){
      document.getElementById('mobile').innerHTML="**please fill the lastname field";
      return false;
  }
  if(mb.length<10 || mb.length>10){
      document.getElementById('mobile').innerHTML="**there should be 10 digits ";
      return false;

  }
  if(isNaN(mb)){
      document.getElementById('mobile').innerHTML="**it should be digits only ";
      return false;
  }

  
  //===================age=========================================
  if(age==""){
      document.getElementById('ag').innerHTML="**please fill the age field";
      return false;
  }
  //==============dob=============================================
  if(dob==""){
      document.getElementById('birth').innerHTML="**please fill the date of birth field";
      return false;
  }
  //========================address=====================================
  if(addr==""){
      document.getElementById('address').innerHTML="**please fill the address field";
      return false;
  }

}
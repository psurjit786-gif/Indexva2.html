function validate(){

     document.getElementById('fnameError').innerHTML="";
     document.getElementById('lnameError').innerHTML="";
     document.getElementById('emailError').innerHTML="";
     document.getElementById('passError').innerHTML="";
      document.getElementById('genderError').innerHTML="";
      document.getElementById('skillsError').innerHTML="";
      document.getElementById('cityError').innerHTML="";
      document.getElementById('massage').innerHTML="";

    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var email=document.getElementById('email').value;
    var pass=document.getElementById('pass').value;
    var gender=document.querySelector('input[name="gen"]:checked');
    var skills=document.querySelectorAll('input[name="skills"]:checked');
    var city=document.getElementById('city').value;
    var massage=document.getElementById('massage').value;

    if(fname==''){
        document.getElementById('fnameError').innerHTML='firstname is required';
        return false;
    }
    
    if(lname==''){
        document.getElementById('lnameError').innerHTML='lastname is required';
        return false;
    }
    
    if(email==''){
        document.getElementById('emailError').innerHTML='email is required';
        return false;
    }
    
    if(pass==''){
        document.getElementById('passError').innerHTML='password is required';
        return false;
    }
    
    if(!gender){
        document.getElementById('genderError').innerHTML='select your gender';
        return false;
    }    
    if(skills.length==0){
       document.getElementById('skillsError').innerHTML='select at least one skills';
       return false; 
    }
    if(city==''){
        document.getElementById('cityError').innerHTML='select your city';
       return false; 
    }
    if(SubmitEvent==''){
    document.getElementById('massage').innerHTML="signup succesfuly";
    return true;
    }
}
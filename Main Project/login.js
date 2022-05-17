// document.parentElement

//set cookie
function SetCookie (key,value,_date)
{
    var date = new Date()
    if(key&&value&&_date)
    {
        var date = new Date(_date)
        //the valedation that is everything are okay
         document.cookie = key+"="+value +";expires ="+date;
    }
}
function GetCookie(key)
{
    var data = document.cookie
    var arr = data.split("; ")
    var res ="not found";
    arr.forEach(function(el){
        var keyAndValue = el.split("=");
        if(keyAndValue[0]===key)
        {
            res = keyAndValue[1];
        }
    })
    return res;
}

//delete cookie
function DeleteCookie (key)
{   var oldDate = new Date( 1995,1,1 )
    if(GetCookie(key)!=="not found")
    {
        SetCookie(key,"Delete",oldDate)
    }
}
function DeleteALLCookies()
{   var all = document.cookie
    allcookie = all.split("; ")
    allcookie.forEach(function(el){
        keyAndValue = el.split("=")
        DeleteCookie(keyAndValue[0]);
        
    })
}

//////////////////////////////////////////////////////////////////////////////////
//new functions
function allCookieList(keyValOBJ){
    var all = document.cookie
    allcookie = all.split("; ")
    
    
    allcookie.forEach(function(el){
       var keyAndValue = el.split("=");
       keyValOBJ.key.push(keyAndValue[0]) ;
       keyValOBJ.val.push(keyAndValue[1])  ; 
    })
    return allcookie;
}

function hasCookie(key){
    var all = document.cookie;
    var alldata = all.split("; ");
    var res = false
    alldata.forEach(function(el){
        data = alldata.split("=");
        if(data[0] === key)
        {
            res = true;
        }
    })
    
    return res;
}

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
function checkEmail(t){
    var parent = t.parentElement;
    var textmsg = parent.lastElementChild;
    var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	if(!t.value.match(mailformat))
	{
		textmsg.innerHTML ="This is not a valid email address";
		return false;
		}
        else{

            textmsg.innerHTML ='';
            return true;
        }


}

function checkPassword(t){
    var parent = t.parentElement;
    var textmsg = parent.lastElementChild;
    // var passwords = document.getElementsByClassName("password");
    var res = false;
    if(t.value.length<3){
        
        textmsg.innerHTML ="password must be more the 2 character";
        
    }
    else{
        textmsg.innerHTML ='';
        res =  true;
    }
    
    return res;
 }

 function formSubmit(){
     ///first will catch the html elemnt
     var email = document.getElementById("email");
     var password = document.getElementById("password");
     
    var passValid = false;
    var emailValid = false;
     ///then will catch the password and email from cookies
     
    var keyVal ={
        key : [],
        val : []
    }
      var allCookies = allCookieList(keyVal);
    /// now will see what to do

    if(checkEmail(email)&&checkPassword(password))
      {
          for(var i = 0 ; i < keyVal.key.length ; i++)
          {
            if(keyVal.key[i]==='password'){
              if(password.value === keyVal.val[i] )
              {
                  passValid= true
              }
            }
            
            if(keyVal.key[i]==='email'){
                if(email.value === keyVal.val[i] )
                {
                    emailValid = true
                }
              }
          }
      }
      if(passValid&&emailValid)
      {
          window.location.replace("exam.html")
      }
      else{
          alert("wrong email or password");
          window.location.reload();
      }
    }

    
















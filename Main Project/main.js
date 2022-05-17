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
function allCookieList(key,val){
    var all = document.cookie
    allcookie = all.split("; ")
    
    key = [];
    val = [];
    allcookie.forEach(function(el){
       var keyAndValue = el.split("=");
     key.push(keyAndValue[0]) ;
     val.push(keyAndValue[1])  ; 
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













// document.lastElementChild
// console.log('ddddddddddd');
function checkName(t){
    var parent = t.parentElement;
    var textmsg = parent.lastElementChild;
    console.log(typeof (t.value));
    if(isFinite(t.value)||t.value==='')
    {
        textmsg.innerHTML ='pleas Enter a valid name';
        console.log(textmsg);
        return false;
    }
    else{

        textmsg.innerHTML ='';
        return true;
    }
}


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
function checkPassword1(t){
    var parent = t.parentElement;
    var textmsg = parent.lastElementChild;
    var passwords = document.getElementsByClassName("password");
    var res = false;
    if(passwords[0].value.length<3){
        
        textmsg.innerHTML ="password must be more the 2 character";
        
    }
    else{
        textmsg.innerHTML ='';
        res =  true;
    }
    if(passwords[1].value!==''){
        checkPassword(passwords[1])
    }
    return res;
 }

 function checkPassword(t){
    var parent = t.parentElement;
    var textmsg = parent.lastElementChild;
    var passwords = document.getElementsByClassName("password");
    var res = false;
    if(passwords[0].value!==passwords[1].value||passwords[1].value ===''||passwords[1].value.length<3){
          textmsg.innerHTML ="Wrong password";
          
      }
      else{
        textmsg.innerHTML ='';
        res = true;
    }
    return res;
 }
 function formSubmit(){
    var fname = document.getElementById("fname")
    var lname = document.getElementById("lname")
    var email = document.getElementById("email")
    var password1 = document.getElementById("password1")
    var password = document.getElementById("password")
    var date = new Date( "03/25/2023" )

    if(checkPassword1(password1)&&checkPassword(password)&&checkEmail(email)&&checkName(fname)&&checkName(lname))
    {
        SetCookie('fname',fname.value,date );
        SetCookie('lname',lname.value,date );
        SetCookie('email',email.value,date );
        SetCookie('password',password.value,date );

        window.location.replace("login.html")
        // window.open("login.html","_self")

    }
 }










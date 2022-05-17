
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


var divContainer = document.getElementsByClassName("container")[0];

var Name = document.createElement("div");
var course_name = document.createElement('div');
var grade = document.createElement("div");

var nameValue = `${GetCookie('fname')} ${GetCookie('lname')}`
var scoreValue = GetCookie('score')

Name.innerHTML=`<span> Student Name :\t  <i>${nameValue}</i></span>`

course_name.innerHTML=`<span> Cours  :\t  <i>JavaScript</i></span>`

grade.innerHTML=`<span> Grade :\t  <i>${scoreValue}/100</i></span>`

divContainer.append(Name);
divContainer.append(course_name);
divContainer.append(grade);
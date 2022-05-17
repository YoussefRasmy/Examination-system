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
function SetCookie (key,value,_date)
{
    var date = new Date()
    if(key&&isFinite(value)&&_date)
    {
        var date = new Date(_date)
        //the valedation that is everything are okay
         document.cookie = key+"="+value +";expires ="+date;
    }
}
function DeleteCookie (key)
{   var oldDate = new Date( 1995,1,1 )
    if(GetCookie(key)!=="not found")
    {
        SetCookie(key,"Delete",oldDate)
    }
}

// var progressbar = setInterval(function(){
//     var prog = document.getElementsByTagName("progress")[0];
//     prog.value++;
//     console.log(prog.value);
//     if(prog.value===10)
//     {
//         clearInterval(progressbar)
//     }
   
// },1000)



//what do we need here 
// all what we need is 3 function and 2 function constructor 2 arrays or 3 arrays
/** 3 Functios:
 * 1 for the previous button 
 * 2 for the next button
 * 3 for the mark button
 */
/**2 function constructor 
 * 1 for the qustions
 * 2 for the answer
 * 
 */
/** arrays
= * 1 will name it Exam to store the qustions and answers
 * 2 will name it book mark will store the qustion and the answer whin press mark 
 * and will show it in the side par
 */
//https://www.javatpoint.com/javascript-mcq
//1st the qustion function constructor 
//must have (Qustion body, model answer , choises , grade)
function Qustion( id,body , modelAnswerIndex,choices){
    this.id = id;
    this.qustionBody= body;
    this.answerIndex = modelAnswerIndex;
   this.numberOfAnswers = 1 ; //if i want this to be dinamic i need to store the modelAnswer in array and the nuber of answer will be the lingth of that array then to chek the answers of the student i need to store them in sorted array with and the model andwers then cheick if length = lenght then if each elment equal each elmint
    this.choises = choices;
    this.studentAnswer=[];
    
}
function Answer(id,value){
    this.choiceId = id;
    this.choiceValue = value;    
}


// function runExam(){
//1
    var chois1=new Answer(1,'Object-Oriented');
    var chois2=new Answer(2,'Object-Based');
    var chois3=new Answer(3,'Assembly-language');
    var chois4=new Answer(4,'High-level');
    var ch1 = [chois1,chois2,chois3,chois4];
    var qustion1 = new Qustion(1,' Which type of JavaScript language is ___',2,ch1);

    //3
    var chois5=new Answer(5,'Alternative to if-else');
    var chois6=new Answer(6,'Switch statement');
    var chois7=new Answer(7,'If-then-else statement');
    var chois8=new Answer(8,'immediate if');
    ch2=[chois5,chois6,chois7,chois8];
    var qustion2 = new Qustion(2,'Which one of the following also known as Conditional Expression:',3,ch2);
    //5
    var chois9=new Answer(9,'Conditional block');
    var chois10=new Answer(10,'block that combines a number of statements into a single compound statement');
    var chois11=new Answer(11,'both conditional block and a single statement');
    var chois12=new Answer(12,'block that contains a single statement');
    var ch3 = [chois9,chois10,chois11,chois12];
    var qustion3 = new Qustion(3,'In JavaScript, what is a block of statement?',1,ch3);

    //6
    var chois13=new Answer(13,'Shows a warning');
    var chois14=new Answer(14,'Prompts to complete the statement');
    var chois15=new Answer(15,'Throws an error');
    var chois16=new Answer(16,'Ignores the statements');
    var ch4 = [chois13,chois14,chois15,chois16];
    var qustion4 = new Qustion(4,' When interpreter encounters an empty statements, what it will do:',3,ch4);

    //7
    var chois17=new Answer(17,'Keywords');
    var chois18=new Answer(18,'Data types');
    var chois19=new Answer(19,'Declaration statements');
    var chois20=new Answer(20,'Prototypes');
    var ch5 = [chois17,chois18,chois19,chois20];
    var qustion5 = new Qustion(5,'The "function" and " var" are known as:',2,ch5);

    //16
    var chois21=new Answer(21,'Preprocessor');
    var chois22=new Answer(22,'Triggering Event');
    var chois23=new Answer(23,'RMI');
    var chois24=new Answer(24,'Function/Method');
    var ch6=[chois21,chois22,chois23,chois24];
    var qustion6 = new Qustion(6,'Which one of the following is the correct way for calling the JavaScript code?',3,ch6);
    //17
    var chois25=new Answer(25,'Mutable variable');
    var chois26=new Answer(26,'Dynamic variable');
    var chois27=new Answer(27,'Volatile variable');
    var chois28=new Answer(28,'Immutable variable');
    var ch7=[chois25,chois26,chois27,chois28]
    var qustion7 = new Qustion(7,'Which of the following type of a variable is volatile?',0,ch7);
    //20
    var chois29=new Answer(29,'Syntax error');
    var chois30=new Answer(30,'Missing of semicolons');
    var chois31=new Answer(31,'Division by zero');
    var chois32=new Answer(32,'Missing of Bracket');
    var ch8=[chois29,chois30,chois31,chois32];
    var qustion8 = new Qustion(8,' In the JavaScript, which one of the following is not considered as an error:',2,ch8);
    //21
    var chois33=new Answer(33,'toExponential()');
    var chois34=new Answer(34,'toFixed()');
    var chois35=new Answer(35,'toPrecision()');
    var chois36=new Answer(36,'toPrecision()');
    var ch9=[chois33,chois34,chois35,chois36];
    var qustion9 = new Qustion(9,'Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?',1,ch9);
    //31
    var chois37=new Answer(37,'Function prototype');
    var chois38=new Answer(38,'Function literal');
    var chois39=new Answer(39,'Function calling');
    var chois40=new Answer(40,'Function declaration');
    var ch10=[chois37,chois38,chois39,chois40];
    var qustion10 = new Qustion(10,'In JavaScript, what will be used for calling the function definition expression:',1,ch10);
    
    //////////////////
    
    /** arrays
     * 1 will name it Exam to store the qustions and answers
     * 2 will name it book mark will store the qustion and the answer whin press mark 
     * and will show it in the side par
     */
    //catch html Elemnts
    //do not forget the set time out after 10 m 
    // sideBar , progressCounter
    var sideBar = document.getElementById("sideBar");
    var qustionBlock = document.getElementById('qustion');
    var choiceGroup = document.getElementById('choice_group');
    var markBTN = document.getElementById("mark_btn");
    var buttons_container = document.getElementById("buttons_container");
    var progressCounter = document.getElementById("currntQustionNum");
    var choisesBlocks = document.getElementsByClassName("text");
    var checkBoxes = document.getElementsByClassName("checkbox");

    var prevBTN= document.getElementById("backword");
    var nextBTN= document.getElementById("forword");

    /////////////////////////
    var qustionCounter = 0;
    var SCORE_POINT = 10;
    var availableQustions = [qustion1,qustion2,qustion3,qustion4,qustion5,qustion6,qustion7,qustion8,qustion9,qustion10];
    var numberOfQustion = availableQustions.length;
    /////////////////////////
    
    var creatMarkButton = function(){
        var button = document.createElement("button");
        button.setAttribute('id','mark_btn');
        button.setAttribute('class','btn');
        button.setAttribute('onclick','markQustion()');
        button.innerText='Mark';
    }

    ///let's make the exam array
    var exam=[];

    function getNewExam(){
        // progressCounter.innerText = qustionCounter;
        for(var i = 0 ; i < availableQustions.length ; i++)
        {
            var questionIndex = Math.floor(Math.random()*availableQustions.length);
            exam.push(availableQustions[questionIndex])
            availableQustions.splice(questionIndex,1)
        }

    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // function getNewQuestion(){
    //     qustionCounter++;
    //     progressCounter.innerText = qustionCounter;
    //     var questionIndex = Math.floor(Math.random()*availableQustions.length);// this one i need to learn it Math.floor
    //     var currntQustion = availableQustions[questionIndex];
    //     var qustion = currntQustion.qustionBody;
    //     qustionBlock.innerText=qustion;
    //     choises.forEach(function(el){
    //         var index = el.dataset['index'];
    //         el.innerText=qustion.choices[index];
    //     });
    //     availableQustions.splice(questionIndex,1)
    // }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/** 3 Functios:
 * 1 for the previous button 
 * 2 for the next button
 * 3 for the mark button
 */








// }




var exam=[];

function getNewExam(){
    // progressCounter.innerText = qustionCounter;
    var counter = availableQustions.length;
    for(var i = 0 ; i < counter; i++)
    {
        var questionIndex = Math.floor(Math.random()*availableQustions.length);
        exam.push(availableQustions[questionIndex])
        availableQustions.splice(questionIndex,1)
    }
    
}
getNewExam();
var current_qustion = 'obj';
function getNewQustionByIndex(index){

        for(var i = 0 ; i < checkBoxes.length ; i++)
        {
            checkBoxes[i].checked=false;
        }

        var answersNumber = exam[index].studentAnswer.length;
        if(answersNumber > 0)
        {
            for(var i = 0 ; i < checkBoxes.length ; i++)
            {
                for(var j = 0 ; j < checkBoxes.length ; j++ )
                if(checkBoxes[i].id === exam[index].studentAnswer[j])
                {
                     checkBoxes[i].checked=true;

                }
            }
        }

    var sideBarElments =  sideBar.children;
    markBTN.innerHTML=' Mark';

        if(sideBarElments.length>0)
        {
            var marked = false
            for(var i = 0 ; i < sideBarElments.length ; i++)
            {
                console.log(Number(sideBarElments[i].id) , index+1);
                // console.log(i);
                if(Number(sideBarElments[i].id) === index+1) 
                {
                    markBTN.innerHTML=' Un Mark';
                    // console.log('new qust');
                    // console.log(sideBarElments[i].id,Number(progressCounter.innerHTML));

                }  

             
            }
        }

    current_qustion =  exam[index];
    qustionBlock.innerHTML=exam[index].qustionBody;
    for(var i = 0; i < choisesBlocks.length ; i++ )
    {
        choisesBlocks[i].innerHTML=exam[index].choises[i].choiceValue;

    }
    progressCounter.innerHTML=index+1
    

    if(progressCounter.innerHTML === '10')
    {
        nextBTN.setAttribute('disabled','')

    }
    else{
        nextBTN.removeAttribute('disabled');
    }
    if(progressCounter.innerHTML === '1')
    {
        prevBTN.setAttribute('disabled','')

    }
    else{
        prevBTN.removeAttribute('disabled');
    }
}
function getAnswer(t){
    // if(t.value === 1){
    //     t.value = 0;
    // }
    // else if(t.value === 0){
    //     t.value = 1;
    // }
    var student_answers=[];
    // checkBoxes.forEach(function(el){
    //     if(el.checked){
    //         student_answers.push(el.id);
    //     }

        
    // })
    for(var i = 0 ; i < checkBoxes.length ; i++)
    {
        if(checkBoxes[i].checked)
        {

            student_answers.push(checkBoxes[i].id);
        }
    }
    current_qustion.studentAnswer=student_answers;
    // console.log(current_qustion.studentAnswer);

}
//the mark btn
function markQustion(){
        // sideBar , progressCounter
        var sideBarElments =  sideBar.children;
        if(sideBarElments.length>0)
        {
            // console.log( progressCounter.innerHTML);
            var marked = false
            for(var i = 0 ; i < sideBarElments.length; i++)
            {
                if(sideBarElments[i].id === progressCounter.innerHTML) 
                {
                    console.log(i);
                    markBTN.innerHTML='Mark';
                    sideBar.removeChild(sideBarElments[i])
                    return;

                }  
             
            }
        }
            var currentQst = exam[Number(progressCounter.innerHTML)]
            var Marked_qustion = document.createElement("div");
            Marked_qustion.setAttribute("class",'marked_qustion');
            Marked_qustion.setAttribute("onclick",`returnQustion(${progressCounter.innerHTML})`);
            Marked_qustion.setAttribute("id",`${progressCounter.innerHTML}`);
            var spanText =  document.createElement("span");
            spanText.innerHTML = `Qustion Number ${progressCounter.innerHTML}`;
            markBTN.innerHTML='Un Mark'
            Marked_qustion.append(spanText);
            sideBar.append(Marked_qustion)  ;
        
        console.log('hhh');
        
}


function returnQustion(t){
    // console.log(t);

getNewQustionByIndex(Number(t)-1)

}

getNewQustionByIndex(0);

console.log(exam[1].choises[1].choiceValue);

function nextQustion(){
    getNewQustionByIndex(Number(progressCounter.innerHTML))
}

function prevQustion(){
    getNewQustionByIndex(Number(progressCounter.innerHTML)-2)
}

function endExam(){
    var studentScore = 0;
    exam.forEach(function(el){
        if(el.studentAnswer.length === el.numberOfAnswers)
        {
            // if(el.numberOfAnswers > 1 )
            // {
            //     //it must be an array
            //     var sorted_AnswerModel=el.answerIndex.sort();
            //     var sorted_studentAnswer = el.studentAnswer.sort();
            //     var answer = true;
            //     for(var i = 0 ; i < el.studentAnswer.length; i++)
            //     {
            //         if(Number(sorted_AnswerModel[i]) !== Number(sorted_studentAnswer[i]) )
            //         {
            //             answer = false
            //         }
            //     }
            //     if(answer)
            //     {
            //         studentScore += SCORE_POINT
            //     }
            // }
            if(el.numberOfAnswers===1)
            {
                if( Number(el.studentAnswer[0]) === Number(el.answerIndex))
                {
                    studentScore += SCORE_POINT;
                }
            }
        }
        console.log(el);

    });

    // DeleteCookie('score');
    var coky= GetCookie('score');
    console.log(studentScore , coky);
    var date = new Date( "03/25/2023" );
    SetCookie('score',studentScore,date);
    window.location.replace("end.html");

}

setTimeout(function(){
alert('Time Out !');
endExam();
},600000);








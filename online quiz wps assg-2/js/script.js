Let index=0;
Let attempt=0;
Let score=0;
Let wrong=0;

Let questions=quiz.sort(function(){
    return 0.5-Math.random();
});

Let totalQuestion=questions.length;
$(function (){

    Let totalTime=200;
    Let min=0;
    Let sec=0;
    Let counter=0;

    Let timer=setInterval(function(){
        counter++;
        min=Math.floor((totalTime-counter)/60);
        sec=totalTime-(min*60)-counter;

        $(".timerBox span").text(min + ":" + sec);
        if(counter==totalTime)
        {
            clearInterval(timer);
        }

      //console.log("min = "+min);
      //console.log("sec = "+sec);
    },1000);


    printQuestion(index);

});

function printQuestion(i){
    console.log(questions[0]);

    $(".questionBox").text(questions[i].question);
    $(".optionBox span").eq(0).text(questions[i].option[0]);
    $(".optionBox span").eq(1).text(questions[i].option[0]);
    $(".optionBox span").eq(2).text(questions[i].option[0]);
    $(".optionBox span").eq(3).text(questions[i].option[0]);

}

function checkAnswer(option){
    attempt++;

    Let optionClicked=$(option).data("opt");
    console.log(questions[index]);
    if(optionClicked==questions[index].answer)
    {
        $(option).addClass("right");
        score++;

    }
    else{
        $(option).addClass("wrong");
        wrong++;

    }
    $(".scoreBox span").text(score);
    $(".optionBox span").attr("onclick","")

}
function showNext(){
    if(index>=questions.length-1){
            showResult();
            return;
    }
    index++;
    $(".optionBox span").removeClass();
    $(".optionBox span").attr("onclick","checkAnswer(this)");
    printQuestion(index);

}
function showResult(){
    $("#questionScreen").hide();
    $("#resultScreen").show();

    $("#totalQuestion").text(totalQuestion);
    $("#attemptQuestion").text(attempt);
    $("#correctAnswers").text(score);
    $("#wrongAnswers").text(wrong);
}
let counter = 0;
let marks = 0;
let ans1;
let  questions = [
    {
        id: 1,
        question: "WHAT IS MANGO?",
        answer: "fruit",
    },
    {
        id: 2,
        question: "WHAT IS INDIA?",
        answer: "country",
    },
    {
        id: 3,
        question: "WHAT IS UP?",
        answer: "state"
    },
    {
        id: 4,
        question: "WHAT IS ZEBRA?",
        answer: "animal"
    },
    {
        id: 5,
        question: "WHAT IS ODISHA?",
        answer: "None of these"
    },
    {
        id: 6,
        question: "WHO IS FAVOURITE BROWSER?",
        answer: "None of these"
    },
    {
        id: 7,
        question: "IN WHICH YEAR DID GANDHIJI IS BORN?",
        answer: "None of these"
    },
    {
        id: 8,
        question: "WHO IS ASHOKA?",
        answer: "None of these"
    },
    {
        id: 9,
        question: "WHAT IS MANGO?",
        answer: "Fruit"
    }
];
document.getElementById("class").innerHTML = questions[counter].question;
document.getElementById("next").addEventListener("click", next );
function next(){
    var ans = document.getElementById("answer").value;
    // if(ans == questions[counter].answer) {
    //     marks ++ ;
    // }
    ans1[counter] = ans;
    counter ++;
    document.getElementById("class").innerHTML = questions[counter].question;
    document.getElementById("test").innerHTML = questions[counter].answer;
    console.log(counter);
}
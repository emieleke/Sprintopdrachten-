
//Opdracht 52
doorgaan = confirm("Opgave 52: doorgaan?");

if (doorgaan == true){
    alert("Welkom bij de if opdrachten!");
} else{
    alert("if opdrachten onderbroken!");
}

//Opdracht 53
if (doorgaan == true){
    leeftijd = prompt("Wat is je leeftijd?");
    if (leeftijd == null){
        alert("if opdrachten onderbroken! AJUS!!");
    }
    if (leeftijd <= 17){
        leerplichtig = true;
    }
    else{
        leerplichtig = false;
    }
} 

//Opdracht 54
if (doorgaan && leerplichtig){
    alert("Je bent leerplichtig! De Baln!");
}else{
    alert("je bent niet leerplichtig! Aju!");
}
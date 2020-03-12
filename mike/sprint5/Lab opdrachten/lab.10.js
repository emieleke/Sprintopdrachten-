function euro_naar_dollar()
{
    return(1.36);
}
function dollar_naar_euro()
{
    return(0.74);
}
function euro_naar_roebel()
{
    return(48.40);
}
function roebel_naar_euro()
{
    return(0.02);
}

// wissel
function wissel() {
    var select = document.getElementById("select").value;
    var bedrag = document.getElementById("bedrag").value;
    var wisselKoers;
    if (select === "1"){
        wisselKoers = bedrag * dollar_naar_euro();
    }
    if (select === "2"){
        wisselKoers = bedrag * euro_naar_dollar();
    }
    if (select === "3"){
        wisselKoers = bedrag * roebel_naar_euro();
    }
    if (select === "4"){
        wisselKoers = bedrag * euro_naar_roebel();
    }
    document.getElementById("berekening").innerHTML = wisselKoers;
}
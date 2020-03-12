var rol = prompt('wat is je rol?');
var inlog = prompt('wat is je inlogcode?')

    switch(rol)
    {
    case "admin":
    if(inlog =='admin')
    {
        alert('welkom admin')
    }
    else
    {
        alert('code ongeldig')
    }
        break;

    case "student":
    if(inlog =='student')
    {
        alert('welkom student')
    }
    else
    {
        alert('code ongeldig')
    }
        break;

        default:
        alert('code ongeldig')

function askTvSerie() 
{

    let arr = [];
    nom_serie = prompt("Nom de la serie");
    année_serie = prompt("Année de la serie");
    candidat = prompt("nom des candidat");
    arr.push(candidat)


    while (candidat != "") 
    {

        candidat = prompt("nom des candidat");
        arr.push(candidat);
    }
    arr.pop()

    let myObject = {
        nom : nom_serie,
        année : année_serie,
        candidat : arr,
    }
    return myObject

    }
    console.log(askTvSerie())

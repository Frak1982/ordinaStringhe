function ordinaStringhe(strings) {

    strings.sort();
    let uniqueArray = [...new Set(strings)];
    console.log(uniqueArray) ;

}

ordinaStringhe(["pippo", "gianni", "pippo", "gianni", "leopoldo","leopoldo"]);


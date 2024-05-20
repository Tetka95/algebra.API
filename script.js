var request = new XMLHttpRequest();
//endpoint data: https://xsmilex007.github.io/JS-API-example/mydata.json


//otvaramo konekciju prema endpointu, koristimo GET metodu izvršavanja jer želimo dohvatiti podatke
request.open("GET", "https://xsmilex007.github.io/JS-API-example/mydata.json", true);

//ovdje implementiramo događaj nakon što mo dohvatili podatke
//isparsat ćemo JSON, pretvorit ga u objekt te ga prikazati na stranici
request.onload = function(result){
    console.log(result.currentTarget.response);
};

//iniciramo GET request prema endpointu
request.send();
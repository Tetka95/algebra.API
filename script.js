var request = new XMLHttpRequest();
//endpoint data: https://xsmilex007.github.io/JS-API-example/mydata.json


//otvaramo konekciju prema endpointu, koristimo GET metodu izvršavanja jer želimo dohvatiti podatke
request.open("GET", "https://xsmilex007.github.io/JS-API-example/mydata.json", true);

//ovdje implementiramo događaj nakon što mo dohvatili podatke
//isparsat ćemo JSON, pretvorit ga u objekt te ga prikazati na stranici
request.onload = function(result){
    console.log(result.currentTarget.response);

    const obj = JSON.parse(result.currentTarget.response);
    let grad = obj.request.query;
    console.log("isparsani grad: " + grad);
    let country = obj.location.country;
    let regija = obj.location.region
    
    let temperatura = obj.current.temparature;
    let uvIndex = obj.current.uv_index;

    console.log(
        `Country: ${country}|Regija: ${regija}|Temperatura: ${temperatura}|UV index: ${uvIndex}`
        );
};

//iniciramo GET request prema endpointu
request.send();

document.getElementById("grad").value = grad;
document.getElementById("country").textContent = country;
document.getElementById("regija").textContent = regija;
document.getElementById("temperatura").textContent = temperatura;
document.getElementById("uvIndex").textContent = uvIndex;
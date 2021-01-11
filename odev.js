import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/
createTableElements([], "singlecity")
/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */

document.querySelector("#populationBigger").addEventListener("click",() => {
    const higher = data.filter((city) => {
            return city.population > 500000 ;
    });
    createTableElements(higher, "allcities")
});

document.querySelector("#landAreaLess").addEventListener("click",() => {
    const less = data.filter((city) => {
        return city.landArea < 1000 ;
    });
    createTableElements(less, "allcities")
});

/* NÜFUSUN 100.000'DEN AZ OLDUGUNU SOME FUNCTİONI İLE KONTROL ETME */

document.querySelector("#isPopulationLess").addEventListener("click",() => {
    const over = data.some((city) => {
        return city.population < 100000;
    })
    if(over){
        alert("YES");
    }else{
        alert("NO");
    }
})


/* NÜFUSUN 100.000'DEN AZ OLDUĞUNU FOREACH İLE DÖNEREK ALERTE ŞEHİR İSMİNİDE YAZDIRARAK KONTROL ETME */
/*
document.querySelector("#isPopulationLess").addEventListener("click",() => {
    data.forEach(function(city) {
        if (city.population < 100000) {
            alert(` YES ${city.name} has population over than 100.000`);
        }
    })
});
*/

document.querySelector("#isLandBigger").addEventListener("click",() => {
    const bigger = data.every((city) => {
        return city.landArea > 100;
    })
    if(bigger){
        alert("YES");
    }else{
        alert("NO");
    }
})

let opsiyonlar = document.getElementById('inputGroupSelect01');
let result = data.map(({ name }) => name);
for(let i=0; i<result.length;i++) {
    let option = document.createElement("OPTION");
    option.innerHTML = result[i];
    option.value = result[i];
    opsiyonlar.options.add(option);
}

document.querySelector(".custom-select").addEventListener('change', (e) =>{
    const selectedCity = data.filter(city => e.target.value === city.name);
    createTableElements(selectedCity,"singlecity")
})









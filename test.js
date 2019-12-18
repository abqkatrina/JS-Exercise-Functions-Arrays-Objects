// Closures give you the ability to put functions together
// A closure is code that's been identified elsewhere that we can use for later
// THIS DOES NOT WORK
function country(countryName){
  return countryName;

 function province(ProvName){
   return ProvName;

    function city(cityName){
      return cityName;

    }//this closes city
    console.log(city('Ottawa'));
  //}//this closes province
  console.log(province('Ontario'));
}// this closes the country
console.log(country('Canada'));


// Closures give you the ability to put functions together
// A closure is code that's been identified elsewhere that we can use for later
// THIS DOES WORK
function country(countryName){
   console.log(countryName);

  function prov(provName){
    console.log(provName);

    function city(cityName){
      console.log(cityName);
    }// this closes city
    city('Ottawa');
  }// this closes province
    prov('Ontario');
}// this closes country
  country('Canada');

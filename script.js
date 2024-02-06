var req = new XMLHttpRequest();
req.open("Get","https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
    var res = JSON.parse(req.response)

 //countries from Asia continent /region 

  var result_asia = res.filter((ele)=>ele.region == "Asia");
   var country_names = result_asia.map((ele)=>ele.name);
  console.log(country_names);

 //countries with a population of less than 2 lakhs 
  var pop = res.filter((ele)=>ele.population<200000);
  console.log(pop);

  var pop_res = pop.map((ele)=>ele.capital)
  console.log(pop_res);


//name, capital and flag of the countries
  var countries_details = res.forEach((country) => 
  console.log(`${"Names ;",country.name.common},
   ${country.capital}, 
   ${country.flag}`))
 

//  total population of countries             
 var total_pop = res.reduce((pop_res, country) => pop_res +country.population, 0)
 console.log("total population : "+total_pop)


//countries that uses US dollars as currency 
 var USD_countries = res.filter((ele) => ele.currencies && ele.currencies.USD) ;
 var USDusing_countries = USD_countries.forEach((country) => console.log(`${country.name.common}`))
  }

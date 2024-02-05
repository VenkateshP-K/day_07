var req = new XMLHttpRequest();
req.open("Get","https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
    var res = JSON.parse(req.response)
    console.log(res)
  
  var result_asia = res.filter((ele)=>ele.region == "Asia");
  
  var country_names = result_asia.map((ele)=>ele.name);
  console.log(country_names);

  var pop = res.filter((ele)=>ele.population<200000);
  console.log(pop);

  var pop_res = pop.map((ele)=>ele.capital)
  console.log(pop_res);
  
}
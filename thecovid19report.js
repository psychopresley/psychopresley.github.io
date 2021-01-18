var confirmed_cases_menu = document.querySelector("#confirmed_cases_tab");
var active_cases_menu = document.querySelector("#active_cases_tab");
var death_rate_menu = document.querySelector("#death_cases_tab");

active_cases_menu.addEventListener('click',function(){
  var tab_content = document.querySelector("#tab_content");
  tab_content.src = "tab_active_cases.html";

})

death_rate_menu.addEventListener('click',function(){
  var tab_content = document.querySelector("#tab_content");
  tab_content.src = "tab_death_rate.html";

})

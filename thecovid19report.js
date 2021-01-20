var world_data_menu = document.querySelector("#world_data_tab");
var confirmed_cases_menu = document.querySelector("#confirmed_cases_tab");
var active_cases_menu = document.querySelector("#active_cases_tab");
var death_rate_menu = document.querySelector("#death_cases_tab");
var read_me_page_menu = document.querySelector("#read_me_page_tab");

world_data_menu.addEventListener('click',function(){
  var tab_content = document.querySelector("#tab_content");
  tab_content.src = "world_data_page.html";

})

confirmed_cases_menu.addEventListener('click',function(){
  var tab_content = document.querySelector("#tab_content");
  tab_content.src = "confirmed_cases_page.html";

})

active_cases_menu.addEventListener('click',function(){
  var tab_content = document.querySelector("#tab_content");
  tab_content.src = "active_cases_page.html";

})

death_rate_menu.addEventListener('click',function(){
  var tab_content = document.querySelector("#tab_content");
  tab_content.src = "death_cases_page.html";

})

read_me_page_menu.addEventListener('click',function(){
  var tab_content = document.querySelector("#tab_content");
  tab_content.src = "read_me_page.html";

})

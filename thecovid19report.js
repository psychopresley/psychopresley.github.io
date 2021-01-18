var general_info_menu = document.querySelector("#world_data_tab");
var active_cases_menu = document.querySelector("#active_cases_tab");
var death_rate_menu = document.querySelector("#death_cases_tab");

general_info_menu.addEventListener('click',function(){
  var tab_content = document.querySelector("#tab_content");
  tab_content.src = "tab_world_data.html";

})

active_cases_menu.addEventListener('click',function(){
  var tab_content = document.querySelector("#tab_content");
  tab_content.src = "tab_active_cases.html";

})

death_rate_menu.addEventListener('click',function(){
  var tab_content = document.querySelector("#tab_content");
  tab_content.src = "death_cases_page.html";

})

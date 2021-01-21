$('#world_data_tab').click(function(){
  $('#tab_content').attr('src','world_data_page.html')
})

$('#confirmed_cases_tab').click(function(){
  $('#tab_content').attr('src','confirmed_cases_page.html')
})

$('#active_cases_tab').click(function(){
  $('#tab_content').attr('src','active_cases_page.html')
})

$('#death_cases_tab').click(function(){
  $('[id=tab_content]').attr('src','death_cases_page.html')
})

$('#read_me_page_tab').click(function(){
  $('[id=tab_content]').attr('src','read_me_page.html')
})

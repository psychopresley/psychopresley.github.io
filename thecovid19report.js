$('p').css('text-align','justify')

// This function is used to highlight the tab whose content
// is being displayd in the iframe object

function navSelect() {
  $('.nav-item').css('font-weight','normal');

  if (  $('#tab_content').attr('src').startsWith('world')) {
    tab_str = '#world_data_tab';

  } else if ($('#tab_content').attr('src').startsWith('confirmed')) {
    tab_str = '#confirmed_cases_tab';

  } else if ($('#tab_content').attr('src').startsWith('active')) {
    tab_str = '#active_cases_tab';

  } else if ($('#tab_content').attr('src').startsWith('death')) {
    tab_str = '#death_cases_tab';

  } else if ($('#tab_content').attr('src').startsWith('read')) {
      tab_str = '#read_me_page_tab';
  }

  $(tab_str).css('font-weight','bold');

}

// Tab select event:

$('#world_data_tab').click(function(){
  $('#tab_content').attr('src','world_data_page.html');
  navSelect()
})

$('#confirmed_cases_tab').click(function(){
  $('#tab_content').attr('src','confirmed_cases_page.html');
  navSelect()
})

$('#active_cases_tab').click(function(){
  $('#tab_content').attr('src','active_cases_page.html');
  navSelect()
})

$('#death_cases_tab').click(function(){
  $('[id=tab_content]').attr('src','death_cases_page.html');
  navSelect()
})

$('#read_me_page_tab').click(function(){
  $('[id=tab_content]').attr('src','read_me_page.html');
  navSelect()
})

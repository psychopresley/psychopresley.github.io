// Justify all paragraphs

$('p').css('text-align','justify')


// The two functions below will auxiliate tab navigation by highlighting the
// current tab and referencing the source content in the iframe object


const refTable = {'active_cases_page.html':'active_cases_class',
                'confirmed_cases_page.html':'confirmed_cases_class',
                'death_cases_page.html':'death_cases_class',
                'read_me_page.html':'read_me_page_class',
                'world_data_page.html':'world_data_class',
}

function navSelect(refTable) {
  const x = $('#tab_content').attr('src');

  $('.nav-link').removeClass('active');
  $('#' + refTable[x]).addClass('active');
}


function getKeyByValue(refTable, value) {
  for (key of Object.keys(refTable)) {
    if (refTable[key]===value) {
      return key;
    }
  }
}

// Tab select event:

$('.nav-link').click(function(){
  const classId = $(this).attr('id')
  const newSrc = getKeyByValue(refTable, classId)

  $('#tab_content').attr('src',newSrc);
  navSelect(refTable)
  console.log('someone clicked on the ' + newSrc + ' tab')
})

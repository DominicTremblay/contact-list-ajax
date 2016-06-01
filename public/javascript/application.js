$(document).ready(function() {

  request('/contacts','GET',allContactsSuccess);
  
  $('#search-btn').on('click', function(){
    var searchInput = $('#search-input').val();
    var searchUrl = "contacts?search="+searchInput;
    request(searchUrl,'GET',searchContactSuccess);
    
  });

  $('#detail-lnk').on('click', function(e){
    e.preventDefault();
    alert("link");

  });

  $('#create-btn').on('click', function(){
    var emailInput = $('#email-field').val();
    var nameInput = $('#name-field').val();    
    var userData = {
      email: emailInput,
      name: nameInput
    };

    postRequest('/contacts','POST',userData,createContactSuccess);

  });

});

var postRequest = function (url, type, data, successFn) {
  $.ajax({

    url: url,
    type: type,
    data: data,
    dataType: "json"

  })
  .done(successFn)
  .fail(errorFn)
  .always(function (data, textStatus, jqXHR) {
    console.log("The request is complete!");
  });  
}

var request = function (url, type, successFn) {
  $.ajax({

    url: url,
    type: type,
    dataType: "json"

  })
  .done(successFn)
  .fail(errorFn)
  .always(function (data, textStatus, jqXHR) {
    console.log("The request is complete!");
  });

};

function allContactsSuccess(data, textStatus, jqXHR) {

  makeContactTable($('#content'),data);

}

function searchContactSuccess(data, textStatus, jqXHR) {

  makeContactTable($('#content'),data);

}

function createContactSuccess(data, textStatus, jqXHR) {

  makeContactTable($('#content'),data);

}

function errorFn(){
  console.log("There was an error");
}

function makeContactTable(container, data) {
  var table = $("<table>").addClass('contact-table');
    $.each(data, function(rowIndex, r) {
      //console.log(rowIndex, r);
        var row = $("<tr/>");
        $.each(r, function(colIndex, c) {
          if (colIndex === 'id' || colIndex==='name' || colIndex==='email') {
            if (colIndex === 'id')
              c = "<a href='" + "#" + "' id='detail-lnk'>"+c+"</a";
            row.append($("<t"+(rowIndex === 0 ?  "d" : "d")+"/>").html(c));
          }
        });
        table.append(row);
    });
    return container.html(table);
}



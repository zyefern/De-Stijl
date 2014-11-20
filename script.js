
// used the open and close the menu
var menuToggle=function()
          {
            $('.menu-inside').toggle(200);
          }

//the following are used to create colored boxes inside the ".append" class in the html file

var whiteBox=function()
            {
              $('.append').append('<div class="white rd" style="height:100px;width:100px"></div>');
              $('.rd').resizable();
              $('.rd').draggable();
            }

var blueBox=function()
            {
              $('.append').append('<div class="blue rd" style="height:100px;width:100px"></div>');
              $('.rd').resizable();
              $('.rd').draggable();
            }

var redBox=function()
            {
              $('.append').append('<div class="red rd" style="height:100px;width:100px"></div>');
              $('.rd').resizable();
              $('.rd').draggable();
            }

var yellowBox=function()
            {
              $('.append').append('<div class="yellow rd" style="height:100px;width:100px"></div>');
              $('.rd').resizable();
              $('.rd').draggable();
            }

var clearBox=function()
            {
              var c = confirm('Clear All The Boxes?');
              if (c == true)
              {
                $('.rd').remove();
              }
            }

  
$(document).ready
      (
        function()
        {
          // used the open and close the menu
          $('.menu-box').click(
          function()
          {
            $('.menu-inside').toggle(200);
          }
          );
          
          //the following are used to create colored boxes inside the ".append" class in the html file
          
          $('.menu-button.white').click(
            function()
            {
              $('.append').append('<div class="white rd" style="height:100px;width:100px"></div>');
              $('.rd').resizable();
              $('.rd').draggable();
            }
          );
          $('.menu-button.blue').click(
            function()
            {
              $('.append').append('<div class="blue rd" style="height:100px;width:100px"></div>');
              $('.rd').resizable();
              $('.rd').draggable();
            }
          );
          $('.menu-button.red').click(
            function()
            {
              $('.append').append('<div class="red rd" style="height:100px;width:100px"></div>');
              $('.rd').resizable();
              $('.rd').draggable();
            }
          );
          
          $('.menu-button.yellow').click(
            function()
            {
              $('.append').append('<div class="yellow rd" style="height:100px;width:100px"></div>');
              $('.rd').resizable();
              $('.rd').draggable();
            }
          );
          
          //clear all option without having to refresh the page
          $('.menu-button.clear').click(
            function()
            {
              var c = confirm('Clear All The Boxes?');
              if (c == true)
              {
                $('.rd').remove();
              }
            }
          );
          
        }// end anonymous function
      );// end (document).ready
  
  
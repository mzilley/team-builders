jQuery(document).ready(function($) {
      var display = function(remodel_type, title) {
        // Toogle Block
        $('#' + remodel_type + '').css('display', 'flex');
      
        // Change Title Color
        $('.menu').removeClass('active');
        $(title).addClass('active');
      }
      
      $('#select-interior').on('click', function() {
        display('main-content-service-cards-interior', $(this));
        $('#main-content-service-cards-exterior').hide();
        $('#main-content-service-cards-shed-homes').hide();
      });
      
      $('#select-exterior').on('click', function() {
        display('main-content-service-cards-exterior', $(this));
        $('#main-content-service-cards-interior').hide();
        $('#main-content-service-cards-shed-homes').hide();
      });
      
      $('#select-shed-homes').on('click', function() {
        display('main-content-service-cards-shed-homes', $(this));
        $('#main-content-service-cards-exterior').hide();
        $('#main-content-service-cards-interior').hide();
      });

      // Main Menu Collapse
      $('#collapse-toggle-interior').on('click', function() {
        $('#collapsed-menu-interior').toggle('fast');
      });

      $('#collapse-toggle-exterior').on('click', function() {
        $('#collapsed-menu-exterior').toggle('fast');
      });

      $('#collapse-toggle-shed').on('click', function() {
        $('#collapsed-menu-shed').toggle('fast');
      });

    //   // Open Main Menu   
    //   $('.closebtn').on('click', function() {
    //     $('#main-menu').css('width', '375px');
    //     $('#main').css('margin-left', '375px');
    //   });

    // // Open Main Menu   
    //   $('.openbtn').on('click', function() {
    //     $('#main-menu').css('width', '0');
    //     $('#main').css('margin-left', '0');
    //   });   
});


function openNav() {
document.getElementById("main-menu").style.width = "375px";
document.getElementById("main").style.marginLeft = "375px";
}
  
function closeNav() {
document.getElementById("main-menu").style.width = "0";
document.getElementById("main").style.marginLeft= "0";
}




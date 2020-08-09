jQuery(document).ready(function($) {
      var display = function(remodel_type, title) {
        // Toogle Block
        $('#' + remodel_type + '').css('display', 'flex');

      
        // Add Active Class
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
        $('#collapsed-menu-interior').slideToggle();
        $(this).children().toggleClass("rotate"); 
      });

      $('#collapse-toggle-exterior').on('click', function() {
        $('#collapsed-menu-exterior').slideToggle();
        $(this).children().toggleClass("rotate"); 
      });

      $('#collapse-toggle-shed').on('click', function() {
        $('#collapsed-menu-shed').slideToggle();
        $(this).children().toggleClass("rotate"); 
      });
});


function openNav() {
document.getElementById("main-menu").style.width = "375px";
document.getElementById("main").style.marginLeft = "375px";
// If width is below 525, width = 100% and add padding to close button
}
  
function closeNav() {
document.getElementById("main-menu").style.width = "0";
document.getElementById("main").style.marginLeft= "0";
}




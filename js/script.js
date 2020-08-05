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
        $('#main-content-service-cards-interior').fadeIn();
        $('#main-content-service-cards-exterior').hide();
        $('#main-content-service-cards-shed-homes').hide();
      });
      
      $('#select-exterior').on('click', function() {
        display('main-content-service-cards-exterior', $(this));
        $('#main-content-service-cards-exterior').fadeIn();
        $('#main-content-service-cards-interior').hide();
        $('#main-content-service-cards-shed-homes').hide();
      });
      
      $('#select-shed-homes').on('click', function() {
        display('main-content-service-cards-shed-homes', $(this));
        $('#main-content-service-cards-shed-homes').fadeIn();
        $('#main-content-service-cards-exterior').hide();
        $('#main-content-service-cards-interior').hide();
      });
});




function openNav() {
document.getElementById("main-menu").style.width = "375px";
document.getElementById("main").style.marginLeft = "375px";
}
  
function closeNav() {
document.getElementById("main-menu").style.width = "0";
document.getElementById("main").style.marginLeft= "0";
}


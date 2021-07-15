jQuery(document).ready(function ($) {
    // Load Templates
    const templates = ["footer", "navbar", "contactus"];
    
    templates.forEach((template) => {
    $(`#${template}`).load(`templates/${template}.html`);
    });

    //Service Selector
    $('#select-interior').on('click', function() {
      $('#main-content-service-cards-interior').fadeIn("3250").css('display', 'flex');
      $('#main-content-service-cards-exterior').hide();
      $('#main-content-service-cards-new-construction').hide();
      $('#select-interior').addClass('active');
      $(':not("#select-interior")').removeClass('active');
    });

    $('#select-exterior').on('click', function() {
      $('#select-exterior').addClass('active');
      $('#main-content-service-cards-exterior').fadeIn("3250").css('display', 'flex');
      $('#main-content-service-cards-interior').hide();
      $('#main-content-service-cards-new-construction').hide();
      $('#select-exterior').addClass('active');
      $(':not("#select-exterior")').removeClass('active');
    });

    $('#select-new-construction').on('click', function() {
      $('#main-content-service-cards-new-construction').fadeIn("3250").css('display', 'flex');
      $('#main-content-service-cards-exterior').hide();
      $('#main-content-service-cards-interior').hide();
      $('#select-new-construction').addClass('active');
      $(':not("#select-new-construction")').removeClass('active');        
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
  
  // Set correct nav bg color on load
  if (scroll > 50) {
      $("nav").css("background-color", "rgba(255,255,255)");
  } else {
      $("nav").css("background-color", "rgba(255,255,255, 0.75)");  
  }

  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 50) {
          $("nav").css("background-color", "rgba(255,255,255)");
          $("#feature-menu a").css("color", "#666");
          $("#feature-menu-2 a").css("color" , "#666");
      }

      else{
          $("nav").css("background-color", "rgba(255,255,255, 0.75)");  
          $("#feature-menu a").css("color", "#333");
          $("#feature-menu-2 a").css("color" , "#333");
      }
  });

    
});

// Menu Toggle
$('.openbtn').on('click', function() {
    $('.sidebar').css('display', 'block');
  //   $('body').css('position', 'fixed');
});

$('.closebtn').on('click', function() {
    $('.sidebar').css('display', 'none');
  //   $('body').css('position', 'unset');
});

(function ( $, window, document, undefined ) {

  var pluginName = 'accordion',
      defaults = {
          transitionSpeed: 300,
          transitionEasing: 'ease',
          controlElement: '[data-control]',
          contentElement: '[data-content]',
          groupElement: '[data-accordion-group]',
          singleOpen: true
      };

  function Accordion(element, options) {
      this.element = element;
      this.options = $.extend({}, defaults, options);
      this._defaults = defaults;
      this._name = pluginName;
      this.init();
  }

  Accordion.prototype.init = function () {
      var self = this,
          opts = self.options;

      var $accordion = $(self.element),
          $controls = $accordion.find('> ' + opts.controlElement),
          $content =  $accordion.find('> ' + opts.contentElement);

      var accordionParentsQty = $accordion.parents('[data-accordion]').length,
          accordionHasParent = accordionParentsQty > 0;

      var closedCSS = { 'max-height': 0, 'overflow': 'hidden' };

      var CSStransitions = supportsTransitions();

      function debounce(func, threshold, execAsap) {
          var timeout;

          return function debounced() {
              var obj = this,
                  args = arguments;

              function delayed() {
                  if (!execAsap) func.apply(obj, args);
                  timeout = null;
              };

              if (timeout) clearTimeout(timeout);
              else if (execAsap) func.apply(obj, args);

              timeout = setTimeout(delayed, threshold || 100);
          };
      }

      function supportsTransitions() {
          var b = document.body || document.documentElement,
              s = b.style,
              p = 'transition';

          if (typeof s[p] == 'string') {
              return true;
          }

          var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];

          p = 'Transition';

          for (var i=0; i<v.length; i++) {
              if (typeof s[v[i] + p] == 'string') {
                  return true;
              }
          }

          return false;
      }

      function requestAnimFrame(cb) {
          if(window.requestAnimationFrame){
              requestAnimationFrame(cb);
          } else if (window.webkitRequestAnimationFrame) {
              webkitRequestAnimationFrame(cb);
          } else if (window.mozRequestAnimationFrame) {
              mozRequestAnimationFrame(cb);
          } else {
              setTimeout(cb, 1000 / 60);
          }
      }

      function toggleTransition($el, remove) {
          if(!remove) {
              $content.css({
                  '-webkit-transition': 'max-height ' + opts.transitionSpeed + 'ms ' + opts.transitionEasing,
                  'transition': 'max-height ' + opts.transitionSpeed + 'ms ' + opts.transitionEasing
              });
          } else {
              $content.css({
                  '-webkit-transition': '',
                  'transition': ''
              });
          }
      }

      function calculateHeight($el) {
          var height = 0;

          $el.children().each(function() {
              height = height + $(this).outerHeight(true);
          });

          $el.data('oHeight', height);
      }

      function updateParentHeight($parentAccordion, $currentAccordion, qty, operation) {
          var $content = $parentAccordion.filter('.open').find('> [data-content]'),
              $childs = $content.find('[data-accordion].open > [data-content]'),
              $matched;

          if(!opts.singleOpen) {
              $childs = $childs.not($currentAccordion.siblings('[data-accordion].open').find('> [data-content]'));
          }

          $matched = $content.add($childs);

          if($parentAccordion.hasClass('open')) {
              $matched.each(function() {
                  var currentHeight = $(this).data('oHeight');

                  switch (operation) {
                      case '+':
                          $(this).data('oHeight', currentHeight + qty);
                          break;
                      case '-':
                          $(this).data('oHeight', currentHeight - qty);
                          break;
                      default:
                          throw 'updateParentHeight method needs an operation';
                  }

                  $(this).css('max-height', $(this).data('oHeight'));
              });
          }
      }

      function refreshHeight($accordion) {
          if($accordion.hasClass('open')) {
              var $content = $accordion.find('> [data-content]'),
                  $childs = $content.find('[data-accordion].open > [data-content]'),
                  $matched = $content.add($childs);

              calculateHeight($matched);

              $matched.css('max-height', $matched.data('oHeight'));
          }
      }

      function closeAccordion($accordion, $content) {
          $accordion.trigger('accordion.close');
          
          if(CSStransitions) {
              if(accordionHasParent) {
                  var $parentAccordions = $accordion.parents('[data-accordion]');

                  updateParentHeight($parentAccordions, $accordion, $content.data('oHeight'), '-');
              }

              $content.css(closedCSS);

              $accordion.removeClass('open');
          } else {
              $content.css('max-height', $content.data('oHeight'));

              $content.animate(closedCSS, opts.transitionSpeed);

              $accordion.removeClass('open');
          }
      }

      function openAccordion($accordion, $content) {
          $accordion.trigger('accordion.open');
          if(CSStransitions) {
              toggleTransition($content);

              if(accordionHasParent) {
                  var $parentAccordions = $accordion.parents('[data-accordion]');

                  updateParentHeight($parentAccordions, $accordion, $content.data('oHeight'), '+');
              }

              requestAnimFrame(function() {
                  $content.css('max-height', $content.data('oHeight'));
              });

              $accordion.addClass('open');
          } else {
              $content.animate({
                  'max-height': $content.data('oHeight')
              }, opts.transitionSpeed, function() {
                  $content.css({'max-height': 'none'});
              });

              $accordion.addClass('open');
          }
      }

      function closeSiblingAccordions($accordion) {
          var $accordionGroup = $accordion.closest(opts.groupElement);

          var $siblings = $accordion.siblings('[data-accordion]').filter('.open'),
              $siblingsChildren = $siblings.find('[data-accordion]').filter('.open');

          var $otherAccordions = $siblings.add($siblingsChildren);

          $otherAccordions.each(function() {
              var $accordion = $(this),
                  $content = $accordion.find(opts.contentElement);

              closeAccordion($accordion, $content);
          });

          $otherAccordions.removeClass('open');
      }

      function toggleAccordion() {
          var isAccordionGroup = (opts.singleOpen) ? $accordion.parents(opts.groupElement).length > 0 : false;

          calculateHeight($content);

          if(isAccordionGroup) {
              closeSiblingAccordions($accordion);
          }

          if($accordion.hasClass('open')) {
              closeAccordion($accordion, $content);
          } else {
              openAccordion($accordion, $content);
          }
      }

      function addEventListeners() {
          $controls.on('click', toggleAccordion);
          
          $controls.on('accordion.toggle', function() {
              if(opts.singleOpen && $controls.length > 1) {
                  return false;
              }
              
              toggleAccordion();
          });
          
          $controls.on('accordion.refresh', function() {
              refreshHeight($accordion);
          });

          $(window).on('resize', debounce(function() {
              refreshHeight($accordion);
          }));
      }

      function setup() {
          $content.each(function() {
              var $curr = $(this);

              if($curr.css('max-height') != 0) {
                  if(!$curr.closest('[data-accordion]').hasClass('open')) {
                      $curr.css({ 'max-height': 0, 'overflow': 'hidden' });
                  } else {
                      toggleTransition($curr);
                      calculateHeight($curr);

                      $curr.css('max-height', $curr.data('oHeight'));
                  }
              }
          });


          if(!$accordion.attr('data-accordion')) {
              $accordion.attr('data-accordion', '');
              $accordion.find(opts.controlElement).attr('data-control', '');
              $accordion.find(opts.contentElement).attr('data-content', '');
          }
      }

      setup();
      addEventListeners();
  };

  $.fn[pluginName] = function ( options ) {
      return this.each(function () {
          if (!$.data(this, 'plugin_' + pluginName)) {
              $.data(this, 'plugin_' + pluginName,
              new Accordion( this, options ));
          }
      });
  }

})( jQuery, window, document );

// Call Accordions
$('.our-work-accordion').accordion({
  "transitionSpeed": 400
});

$('.roofing-accordion').accordion({
  "transitionSpeed": 400
});

$('.covid-accordion').accordion({
  "transitionSpeed": 400
});
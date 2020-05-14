// IMPORT JQUERY
import $ from 'jquery';

$(document).ready(function () {
  // VARIABLES
  var hamburger = $('.nav__hamburger');
  var hamubergerMenu = $('.hamburger--mobile');

  // HAMBURGER
  hamburger.click( () => {
    $('.nav__hamburger--icon').toggleClass('fa-bars fa-times');
    hamubergerMenu.toggle();
  });

});



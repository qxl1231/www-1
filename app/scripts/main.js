'use strict';

/*global $:true*/
/*eslint no-undef: 2*/

window.onload = function () {
  var sites = window.sites;
  var source = $('#section').html();
  var template = window.Handlebars.compile(source);
  for (var i = 0; i < sites.length; i++) {
    var item = sites[i];

    for (var j = 0; j < item.items.length; j++) {
      item.items[j].favicon = item.items[j].favicon || item.items[j].url + '/favicon.ico';
    }
    $('.links').append(template(item));
  }

  $('img').each(function () {
    this.setAttribute('src', this.getAttribute('ng-src'));
  });
  $('img').on('error', function () {
    this.src = 'https://assets-cdn.github.com/favicon.ico';
  });
};

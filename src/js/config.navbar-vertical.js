"use strict";

/* -------------------------------------------------------------------------- */

/*                           Navbar vertical config                           */

/* -------------------------------------------------------------------------- */
var NAVBAR_VERTICAL_CONFIG = {
  isNavbarVerticalCollapsed: false
};

var isNull = function isNull(key) {
  return JSON.parse(localStorage.getItem(key)) === null;
};

isNull('isNavbarVerticalCollapsed') && localStorage.setItem('isNavbarVerticalCollapsed', NAVBAR_VERTICAL_CONFIG.isNavbarVerticalCollapsed);
var isNavbarVerticalCollapsed = JSON.parse(localStorage.getItem('isNavbarVerticalCollapsed'));

if (isNavbarVerticalCollapsed) {
  document.documentElement.classList.add('navbar-vertical-collapsed');
}
//# sourceMappingURL=config.navbar-vertical.js.map

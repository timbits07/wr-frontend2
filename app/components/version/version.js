'use strict';

angular.module('twrApp.version', [
  'twrApp.version.interpolate-filter',
  'twrApp.version.version-directive'
])

.value('version', '0.1');

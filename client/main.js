cc.game.onStart = function () {
  'use strict';

  var gameCanvas = cc.$('#gameCanvas');

  var WIDTH = gameCanvas.width;
  var HEIGHT = gameCanvas.height;

  cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS);
  cc.view.setDesignResolutionSize(WIDTH, HEIGHT, cc.ResolutionPolicy.SHOW_ALL);
  cc.view.resizeWithBrowserSize(true);
  cc.view.adjustViewPort(false);

};
cc.game.run();
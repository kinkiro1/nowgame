//=============================================================================
// InfoWindow.js
//=============================================================================

/*:
 * @plugindesc 情報表示ウィンドウをメニュー画面に追加するプラグイン
 * @author Me
 *
 * @help 情報表示ウィンドウをメニュー画面上に追加します。
 *
 */

(function() {
    
    var Scene_map_start = Scene_Map.prototype.AllWindows;
    Scene_Map.prototype.AllWindows = function() {
        Scene_map_start.call(this);
        this.createGetWindow();
    };

Scene_Map.prototype.createGetWindow = function() {
        this._GetWindow = new Window_Get();
        this.addWindow(this._GetWindow);
    };

    function Window_Get() {
        this.initialize.apply(this, arguments);
        }
        Window_Get.prototype = Object.create(Window_Base.prototype);
        Window_Get.prototype.constructor = Window_Get;

        Window_Get.prototype.initialize = function() {
            var width = this.windowWidth();
            var height = this.windowHeight();
            Window_Base.prototype.initialize.call(this, 0, 0, width, height);
            this.opacity = 0;
            this.refresh();
        };

        Window_Get.prototype.windowWidth = function() {
            return 500;
        };

        Window_Get.prototype.windowHeight = function() {
    return this.fittingHeight(1);
};

Window_Get.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};

Window_Get.prototype.refresh = function() {
    this.contents.clear();
    var width = this.contentsWidth();
    this.drawBackground(0, 0, width, this.lineHeight());
    this.changeTextColor(this.textColor(17));
        this.drawText("称号『ニワトリハンター』", 0, 0, width, 'center');
};

Window_Get.prototype.drawBackground = function(x, y, width, height) {
    var color1 = this.dimColor1();
    var color2 = this.dimColor2();
    this.contents.gradientFillRect(x, y, width / 2, height, color2, color1);
    this.contents.gradientFillRect(x + width / 2, y, width / 2, height, color1, color2);
};

})();
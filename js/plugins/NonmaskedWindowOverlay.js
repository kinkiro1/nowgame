//=============================================================================
// NonmaskedWindowOverlay.js
//=============================================================================

/*:
 * @plugindesc ウィンドウをマスクせずに重ね合わせられるようにします。
 * @author aoitaku
 * @version 0.0.1 2015/11/15
 *
 * @param nonmaskedScene
 * @desc ウィンドウのマスク処理を無効化するシーン名（Scene_に続く文字列）をスペース区切りで列挙します。例：Menu Item
 *
 * @help ウィンドウをマスクせずに重ね合わせられるようにします。
 * ツクールMVのウィンドウ表示は下のウィンドウを上のウィンドウでマスクするため
 * 半透明のウィンドウを重ね合わせても下のウィンドウを透過して表示できません。
 * 
 * このプラグインは、半透明のウィンドウを重ねられるようにシーン単位でマスク処理
 * をカットできるようにします。
 * 半透明のウィンドウを重ねたいシーンでenableOverlayWithoutMaskを呼び出すと、
 * マスク処理がカットされるようになります。
 *
 * プラグイン管理メニューで、nonmaskedSceneパラメータにシーン名を列挙することで、
 * シーン毎にウィンドウのマスク処理を無効化することができます。
 * 例えばメニュー画面や戦闘シーンでウィンドウのマスク処理を無効化したい場合は、
 * Menu Battle
 * のように指定すれば、メニュー画面と戦闘シーンでウィンドウを重ねることができる
 * ようになります。
 *
 * このプラグインには、プラグインコマンドはありません。
 *
 * --------------------------------------------------------------------------------------
 * zlib/libpng ライセンス
 * http://opensource.org/licenses/Zlib
 *
 * Copyright (c) 2015 aoitaku<twitter:aoitaku>
 * This software is provided 'as-is', without any express or implied warranty.
 * In no event will the authors be held liable for any damages arising from
 * the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it freely,
 * subject to the following restrictions:
 *
 * 1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 * 2. Altered source versions must be plainly marked as such, and must not be
 *    misrepresented as being the original software.
 * 3. This notice may not be removed or altered from any source distribution.
 *
 * 邦訳は下記を参照してください。
 * https://osdn.jp/projects/opensource/wiki/licenses%2Fzlib_libpng_license
 */

(function() {
    var parameters = PluginManager.parameters('NonmaskWindowOverlay');

    var _WindowLayer_initialize = WindowLayer.prototype.initialize;
    WindowLayer.prototype.initialize = function() {
        _WindowLayer_initialize.call(this);
        this._overlayWithoutMask = false;
    };

    WindowLayer.prototype._renderWebGL = function(renderSession) {
        if (!this.visible) {
            return;
        }

        var gl = renderSession.gl;

        if (!this._vertexBuffer) {
            this._vertexBuffer = gl.createBuffer();
        }

        this._dummySprite._renderWebGL(renderSession);

        renderSession.spriteBatch.stop();
        gl.enable(gl.STENCIL_TEST);
        gl.clear(gl.STENCIL_BUFFER_BIT);
        this._webglMaskOutside(renderSession);
        renderSession.spriteBatch.start();

        if (this._overlayWithoutMask) {
            for (var i = 0; i < this.children.length; i++) {
                var child = this.children[i];
                if (child._isWindow && child.visible && child.openness > 0) {
                    child._renderWebGL(renderSession);
                }
            }
        } else {
            for (var i = this.children.length - 1; i >= 0; i--) {
                var child = this.children[i];
                if (child._isWindow && child.visible && child.openness > 0) {
                    gl.stencilFunc(gl.EQUAL, 0, 0xFF);
                    child._renderWebGL(renderSession);
                    renderSession.spriteBatch.stop();
                    this._webglMaskWindow(renderSession, child);
                    renderSession.spriteBatch.start();
                }
            }
        }

        gl.disable(gl.STENCIL_TEST);

        for (var j = 0; j < this.children.length; j++) {
            if (!this.children[j]._isWindow) {
                this.children[j]._renderWebGL(renderSession);
            }
        }
    };

    Scene_Base.prototype.enableOverlayWithoutMask = function() {
        this._windowLayer._overlayWithoutMask = true;
    }

    Scene_Base.prototype.disableOverlayWithoutMask = function() {
        this._windowLayer._overlayWithoutMask = false;
    }

    var _scenes = (parameters['nonmaskedScene'] || "").split(" ");
    for (i = 0; i < _scenes.length; i++) {
        var _scene = "Scene_" + _scenes[i]
        if (_scene in window) {
            var _sceneObject = (new Function("return " + _scene))();
            (function(){
                var _scene_create = _sceneObject.prototype.create;
                _sceneObject.prototype.create = function () {
                    _scene_create.call(this);
                    this.enableOverlayWithoutMask();
                };
            })();
        }
    }
})();
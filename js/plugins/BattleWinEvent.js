//=============================================================================
// BattleWinEvent.js
//=============================================================================
/*:
 * @plugindesc キンキロ専用プラグイン
 * @author kinkiro
 *
 * @param Switch ID
 * @desc 使用するスイッチのIDを指定してください。
 * @default 0
 *
 * @help このプラグインには、プラグインコマンドはありません。
 */

(function() {
    
    var parameters = PluginManager.parameters('BattleWinEvent');
    var switchId = Number(parameters['Switch ID'] || 0);

    Scene_Map.prototype.create = function() {
        $gameSwitches.setValue(switchId,false)
    Scene_Base.prototype.create.call(this);
    this._transfer = $gamePlayer.isTransferring();
    var mapId = this._transfer ? $gamePlayer.newMapId() : $gameMap.mapId();
    DataManager.loadMapData(mapId);
};
    
    Scene_Map.prototype.callMenu = function() {
    SoundManager.playOk();
    SceneManager.push(Scene_Menu);
    $gameSwitches.setValue(switchId,true)
    Window_MenuCommand.initCommandPosition();
    $gameTemp.clearDestination();
    this._mapNameWindow.hide();
    this._waitCount = 2;
};
})();

//=============================================================================
// SpeedAfterVehicle.js
//=============================================================================

/*:
 * @plugindesc Set player's speed after getting off the vehicle
 * @author Sasuke KANNAZUKI
 *
 * @param playerSpeed
 * @desc players speed to set when getting off the vehicle.(ex. 4=normal 5=x2)
 * @default 5
 *
 * @help This plugin does not provide plugin commands.
 *
 * At default, player's speed is force set 4 when getting off the vehicle.
 * this plugin can change the default speed of the case.
 *
 */
/*:ja
 * @plugindesc 乗り物を降りた後のプレイヤーの速度を設定します
 * @author 神無月サスケ
 * 
 * @param playerSpeed
 * @desc 乗り物を降りたときのプレイヤーの速度(例: 4=通常 5=2倍速)
 * @default 5
 * 
 * @help このプラグインには、プラグインコマンドはありません。
 *
 * デフォルトでは乗り物を降りたときの速度は強制的に4になります。
 * このプラグインはそのデフォルトの速度を変更します。
 */

(function() {
    // set parameters
  var parameters = PluginManager.parameters('SpeedAfterVehicle');
  var playerSpeed = Number(parameters['playerSpeed'] || 5);

  var _Game_Player_getOffVehicle = Game_Player.prototype.getOffVehicle;
  Game_Player.prototype.getOffVehicle = function() {
    var isSuccess = _Game_Player_getOffVehicle.call(this);
    this.setMoveSpeed(playerSpeed);
    return isSuccess;
    };

  var _Game_Vehicle_initMoveSpeed = Game_Vehicle.prototype.initMoveSpeed;
  Game_Vehicle.prototype.initMoveSpeed = function() {
    _Game_Vehicle_initMoveSpeed.call(this);
    if (this.isBoat()) {
      this.setMoveSpeed(playerSpeed);
    }
  };

})();

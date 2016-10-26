//=============================================================================
// DisplayOnlyAddedSkillType.js
//=============================================================================

/*:
 * @plugindesc At level up, display skill only its added sTypeId.
 * @author Sasuke KANNAZUKI
 *
 * @help This plugin does not provide plugin commands.
 *
 * It displays even if the skill's sTypeId is sealed.
 */
/*:ja
 * @plugindesc レベルアップの際、スキルタイプで追加されたスキルのみ表示します。
 * @author 神無月サスケ
 *
 * @help このプラグインにはプラグインコマンドはありません。
 *
 * スキルタイプで追加されていれば、封印されているスキルでも表示されます。
 */

(function() {

  Game_Actor.prototype.displayLevelUp = function(newSkills) {
    var text = TextManager.levelUp.format(this._name, TextManager.level,
     this._level);
    var addedSkillTypes = this.addedSkillTypes();
    $gameMessage.newPage();
    $gameMessage.add(text);
    newSkills.forEach(function(skill) {
      // display only current added skill type
      if (addedSkillTypes.indexOf(skill.stypeId) !== -1){
        $gameMessage.add(TextManager.obtainSkill.format(skill.name));
      }
    });
  };

})();

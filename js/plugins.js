// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":true,"description":"Yanfly Engine Scriptsの大元となる機能です。\r\nRPGツクールMVのバグを修正したり、様々なカスタムを行います。","parameters":{"---スクリーン---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Open Console":"false","Reposition Battlers":"true","---ゴールド---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"0","Gold Overlap":"a lotta","---アイテム---":"","Default Max":"99","Quantity Text Size":"20","---ステータス---":"","Max Level":"100","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---バトル---":"","Animation Rate":"4","Flash Target":"false","---フォント---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---ウィンドウ---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---ウィンドウカラー---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_BattleAICore","status":true,"description":"バトルAIを、より管理されたものにすることができます。","parameters":{"Dynamic Actions":"true","Element Testing":"true","Default AI Level":"80"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"戦闘システムをカスタムし、様々な要素を変更することができます","parameters":{"---一般---":"","Action Speed":"agi","Immortal State ID":"3","Default System":"dtb","---アニメーション---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"120","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---フロントビュー---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","---サイドビュー---":"","Home Position X":"Graphics.boxWidth - 216 + index * 32","Home Position Y":"Graphics.boxHeight - 344 + index * 48","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","---ダメージポップアップ---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---ウィンドウセッティング---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"false","---選択ヘルプ---":"","Select Help Window":"true","User Help Text":"ユーザー","Ally Help Text":"味方","Allies Help Text":"味方","Enemy Help Text":"敵","Enemies Help Text":"敵","All Help Text":"全ての %1","Random Help Text":"%2 ランダムな %1","---エネミーセレクト---":"","Visual Enemy Select":"true","Show Enemy Name":"false","Enemy Font Size":"28","Enemy Auto Select":"this.furthestRight()","---アクターセレクト---":"","Visual Actor Select":"true","---バトルログ---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"true","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"true","Show Evasion Text":"false","Show HP Text":"true","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_MainMenuManager","status":true,"description":"メインメニューに様々な変更を加えます。","parameters":{"---コマンド---":"","Command Alignment":"left","Command Position":"left","Command Columns":"1","Command Rows":"Math.min(10, Math.ceil(this.maxItems() / this.maxCols()))","Command Width":"240","---Menu 1---":"","Menu 1 Name":"","Menu 1 Symbol":"","Menu 1 Show":"","Menu 1 Enabled":"","Menu 1 Ext":"","Menu 1 Main Bind":"","Menu 1 Actor Bind":"","---Menu 2---":"","Menu 2 Name":"","Menu 2 Symbol":"","Menu 2 Show":"","Menu 2 Enabled":"","Menu 2 Ext":"","Menu 2 Main Bind":"","Menu 2 Actor Bind":"","---Menu 3---":"","Menu 3 Name":"","Menu 3 Symbol":"","Menu 3 Show":"","Menu 3 Enabled":"","Menu 3 Ext":"","Menu 3 Main Bind":"","Menu 3 Actor Bind":"","---Menu 4---":"","Menu 4 Name":"","Menu 4 Symbol":"","Menu 4 Show":"","Menu 4 Enabled":"","Menu 4 Ext":"","Menu 4 Main Bind":"","Menu 4 Actor Bind":"","---Menu 5---":"","Menu 5 Name":"","Menu 5 Symbol":"","Menu 5 Show":"","Menu 5 Enabled":"","Menu 5 Ext":"","Menu 5 Main Bind":"","Menu 5 Actor Bind":"","---Menu 6---":"","Menu 6 Name":"","Menu 6 Symbol":"","Menu 6 Show":"","Menu 6 Enabled":"","Menu 6 Ext":"","Menu 6 Main Bind":"","Menu 6 Actor Bind":"","---Menu 7---":"","Menu 7 Name":"","Menu 7 Symbol":"","Menu 7 Show":"","Menu 7 Enabled":"","Menu 7 Ext":"","Menu 7 Main Bind":"","Menu 7 Actor Bind":"","---Menu 8---":"","Menu 8 Name":"","Menu 8 Symbol":"","Menu 8 Show":"","Menu 8 Enabled":"","Menu 8 Ext":"","Menu 8 Main Bind":"","Menu 8 Actor Bind":"","---Menu 9---":"","Menu 9 Name":"","Menu 9 Symbol":"","Menu 9 Show":"","Menu 9 Enabled":"","Menu 9 Ext":"","Menu 9 Main Bind":"","Menu 9 Actor Bind":"","---Menu 10---":"","Menu 10 Name":"TextManager.status","Menu 10 Symbol":"status","Menu 10 Show":"this.needsCommand('status')","Menu 10 Enabled":"this.areMainCommandsEnabled()","Menu 10 Ext":"","Menu 10 Main Bind":"this.commandPersonal.bind(this)","Menu 10 Actor Bind":"SceneManager.push(Scene_Status)","---Menu 11---":"","Menu 11 Name":"","Menu 11 Symbol":"","Menu 11 Show":"","Menu 11 Enabled":"","Menu 11 Ext":"","Menu 11 Main Bind":"","Menu 11 Actor Bind":"","---Menu 12---":"","Menu 12 Name":"","Menu 12 Symbol":"","Menu 12 Show":"","Menu 12 Enabled":"","Menu 12 Ext":"","Menu 12 Main Bind":"","Menu 12 Actor Bind":"","---Menu 13---":"","Menu 13 Name":"","Menu 13 Symbol":"","Menu 13 Show":"","Menu 13 Enabled":"","Menu 13 Ext":"","Menu 13 Main Bind":"","Menu 13 Actor Bind":"","---Menu 14---":"","Menu 14 Name":"","Menu 14 Symbol":"","Menu 14 Show":"","Menu 14 Enabled":"","Menu 14 Ext":"","Menu 14 Main Bind":"","Menu 14 Actor Bind":"","---Menu 15---":"","Menu 15 Name":"TextManager.skill","Menu 15 Symbol":"skill","Menu 15 Show":"this.needsCommand('skill')","Menu 15 Enabled":"this.areMainCommandsEnabled()","Menu 15 Ext":"","Menu 15 Main Bind":"this.commandPersonal.bind(this)","Menu 15 Actor Bind":"SceneManager.push(Scene_Skill)","---Menu 16---":"","Menu 16 Name":"","Menu 16 Symbol":"","Menu 16 Show":"","Menu 16 Enabled":"","Menu 16 Ext":"","Menu 16 Main Bind":"","Menu 16 Actor Bind":"","---Menu 17---":"","Menu 17 Name":"","Menu 17 Symbol":"","Menu 17 Show":"","Menu 17 Enabled":"","Menu 17 Ext":"","Menu 17 Main Bind":"","Menu 17 Actor Bind":"","---Menu 18---":"","Menu 18 Name":"","Menu 18 Symbol":"","Menu 18 Show":"","Menu 18 Enabled":"","Menu 18 Ext":"","Menu 18 Main Bind":"","Menu 18 Actor Bind":"","---Menu 19---":"","Menu 19 Name":"","Menu 19 Symbol":"","Menu 19 Show":"","Menu 19 Enabled":"","Menu 19 Ext":"","Menu 19 Main Bind":"","Menu 19 Actor Bind":"","---Menu 20---":"","Menu 20 Name":"TextManager.equip","Menu 20 Symbol":"equip","Menu 20 Show":"this.needsCommand('equip')","Menu 20 Enabled":"this.areMainCommandsEnabled()","Menu 20 Ext":"","Menu 20 Main Bind":"this.commandPersonal.bind(this)","Menu 20 Actor Bind":"SceneManager.push(Scene_Equip)","---Menu 21---":"","Menu 21 Name":"","Menu 21 Symbol":"","Menu 21 Show":"","Menu 21 Enabled":"","Menu 21 Ext":"","Menu 21 Main Bind":"","Menu 21 Actor Bind":"","---Menu 22---":"","Menu 22 Name":"","Menu 22 Symbol":"","Menu 22 Show":"","Menu 22 Enabled":"","Menu 22 Ext":"","Menu 22 Main Bind":"","Menu 22 Actor Bind":"","---Menu 23---":"","Menu 23 Name":"","Menu 23 Symbol":"","Menu 23 Show":"","Menu 23 Enabled":"","Menu 23 Ext":"","Menu 23 Main Bind":"","Menu 23 Actor Bind":"","---Menu 24---":"","Menu 24 Name":"","Menu 24 Symbol":"","Menu 24 Show":"","Menu 24 Enabled":"","Menu 24 Ext":"","Menu 24 Main Bind":"","Menu 24 Actor Bind":"","---Menu 25---":"","Menu 25 Name":"Yanfly.Param.CCCCmdName","Menu 25 Symbol":"class","Menu 25 Show":"Imported.YEP_ClassChangeCore && $gameSystem.isShowClass()","Menu 25 Enabled":"$gameSystem.isEnableClass() && this.areMainCommandsEnabled()","Menu 25 Ext":"","Menu 25 Main Bind":"this.commandPersonal.bind(this)","Menu 25 Actor Bind":"SceneManager.push(Scene_Class)","---Menu 26---":"","Menu 26 Name":"","Menu 26 Symbol":"","Menu 26 Show":"","Menu 26 Enabled":"","Menu 26 Ext":"","Menu 26 Main Bind":"","Menu 26 Actor Bind":"","---Menu 27---":"","Menu 27 Name":"","Menu 27 Symbol":"","Menu 27 Show":"","Menu 27 Enabled":"","Menu 27 Ext":"","Menu 27 Main Bind":"","Menu 27 Actor Bind":"","---Menu 28---":"","Menu 28 Name":"","Menu 28 Symbol":"","Menu 28 Show":"","Menu 28 Enabled":"","Menu 28 Ext":"","Menu 28 Main Bind":"","Menu 28 Actor Bind":"","---Menu 29---":"","Menu 29 Name":"","Menu 29 Symbol":"","Menu 29 Show":"","Menu 29 Enabled":"","Menu 29 Ext":"","Menu 29 Main Bind":"","Menu 29 Actor Bind":"","---Menu 30---":"","Menu 30 Name":"","Menu 30 Symbol":"","Menu 30 Show":"","Menu 30 Enabled":"","Menu 30 Ext":"","Menu 30 Main Bind":"","Menu 30 Actor Bind":"","---Menu 31---":"","Menu 31 Name":"","Menu 31 Symbol":"","Menu 31 Show":"","Menu 31 Enabled":"","Menu 31 Ext":"","Menu 31 Main Bind":"","Menu 31 Actor Bind":"","---Menu 32---":"","Menu 32 Name":"","Menu 32 Symbol":"","Menu 32 Show":"","Menu 32 Enabled":"","Menu 32 Ext":"","Menu 32 Main Bind":"","Menu 32 Actor Bind":"","---Menu 33---":"","Menu 33 Name":"","Menu 33 Symbol":"","Menu 33 Show":"","Menu 33 Enabled":"","Menu 33 Ext":"","Menu 33 Main Bind":"","Menu 33 Actor Bind":"","---Menu 34---":"","Menu 34 Name":"","Menu 34 Symbol":"","Menu 34 Show":"","Menu 34 Enabled":"","Menu 34 Ext":"","Menu 34 Main Bind":"","Menu 34 Actor Bind":"","---Menu 35---":"","Menu 35 Name":"","Menu 35 Symbol":"","Menu 35 Show":"","Menu 35 Enabled":"","Menu 35 Ext":"","Menu 35 Main Bind":"","Menu 35 Actor Bind":"","---Menu 36---":"","Menu 36 Name":"","Menu 36 Symbol":"","Menu 36 Show":"","Menu 36 Enabled":"","Menu 36 Ext":"","Menu 36 Main Bind":"","Menu 36 Actor Bind":"","---Menu 37---":"","Menu 37 Name":"","Menu 37 Symbol":"","Menu 37 Show":"","Menu 37 Enabled":"","Menu 37 Ext":"","Menu 37 Main Bind":"","Menu 37 Actor Bind":"","---Menu 38---":"","Menu 38 Name":"","Menu 38 Symbol":"","Menu 38 Show":"","Menu 38 Enabled":"","Menu 38 Ext":"","Menu 38 Main Bind":"","Menu 38 Actor Bind":"","---Menu 39---":"","Menu 39 Name":"","Menu 39 Symbol":"","Menu 39 Show":"","Menu 39 Enabled":"","Menu 39 Ext":"","Menu 39 Main Bind":"","Menu 39 Actor Bind":"","---Menu 40---":"","Menu 40 Name":"","Menu 40 Symbol":"","Menu 40 Show":"","Menu 40 Enabled":"","Menu 40 Ext":"","Menu 40 Main Bind":"","Menu 40 Actor Bind":"","---Menu 41---":"","Menu 41 Name":"","Menu 41 Symbol":"","Menu 41 Show":"","Menu 41 Enabled":"","Menu 41 Ext":"","Menu 41 Main Bind":"","Menu 41 Actor Bind":"","---Menu 42---":"","Menu 42 Name":"","Menu 42 Symbol":"","Menu 42 Show":"","Menu 42 Enabled":"","Menu 42 Ext":"","Menu 42 Main Bind":"","Menu 42 Actor Bind":"","---Menu 43---":"","Menu 43 Name":"","Menu 43 Symbol":"","Menu 43 Show":"","Menu 43 Enabled":"","Menu 43 Ext":"","Menu 43 Main Bind":"","Menu 43 Actor Bind":"","---Menu 44---":"","Menu 44 Name":"","Menu 44 Symbol":"","Menu 44 Show":"","Menu 44 Enabled":"","Menu 44 Ext":"","Menu 44 Main Bind":"","Menu 44 Actor Bind":"","---Menu 45---":"","Menu 45 Name":"","Menu 45 Symbol":"","Menu 45 Show":"","Menu 45 Enabled":"","Menu 45 Ext":"","Menu 45 Main Bind":"","Menu 45 Actor Bind":"","---Menu 46---":"","Menu 46 Name":"","Menu 46 Symbol":"","Menu 46 Show":"","Menu 46 Enabled":"","Menu 46 Ext":"","Menu 46 Main Bind":"","Menu 46 Actor Bind":"","---Menu 47---":"","Menu 47 Name":"","Menu 47 Symbol":"","Menu 47 Show":"","Menu 47 Enabled":"","Menu 47 Ext":"","Menu 47 Main Bind":"","Menu 47 Actor Bind":"","---Menu 48---":"","Menu 48 Name":"","Menu 48 Symbol":"","Menu 48 Show":"","Menu 48 Enabled":"","Menu 48 Ext":"","Menu 48 Main Bind":"","Menu 48 Actor Bind":"","---Menu 49---":"","Menu 49 Name":"","Menu 49 Symbol":"","Menu 49 Show":"","Menu 49 Enabled":"","Menu 49 Ext":"","Menu 49 Main Bind":"","Menu 49 Actor Bind":"","---Menu 50---":"","Menu 50 Name":"TextManager.item","Menu 50 Symbol":"item","Menu 50 Show":"this.needsCommand('item')","Menu 50 Enabled":"this.areMainCommandsEnabled()","Menu 50 Ext":"","Menu 50 Main Bind":"this.commandItem.bind(this)","Menu 50 Actor Bind":"","---Menu 51---":"","Menu 51 Name":"","Menu 51 Symbol":"","Menu 51 Show":"","Menu 51 Enabled":"","Menu 51 Ext":"","Menu 51 Main Bind":"","Menu 51 Actor Bind":"","---Menu 52---":"","Menu 52 Name":"","Menu 52 Symbol":"","Menu 52 Show":"","Menu 52 Enabled":"","Menu 52 Ext":"","Menu 52 Main Bind":"","Menu 52 Actor Bind":"","---Menu 53---":"","Menu 53 Name":"","Menu 53 Symbol":"","Menu 53 Show":"","Menu 53 Enabled":"","Menu 53 Ext":"","Menu 53 Main Bind":"","Menu 53 Actor Bind":"","---Menu 54---":"","Menu 54 Name":"","Menu 54 Symbol":"","Menu 54 Show":"","Menu 54 Enabled":"","Menu 54 Ext":"","Menu 54 Main Bind":"","Menu 54 Actor Bind":"","---Menu 55---":"","Menu 55 Name":"","Menu 55 Symbol":"","Menu 55 Show":"","Menu 55 Enabled":"","Menu 55 Ext":"","Menu 55 Main Bind":"","Menu 55 Actor Bind":"","---Menu 56---":"","Menu 56 Name":"","Menu 56 Symbol":"","Menu 56 Show":"","Menu 56 Enabled":"","Menu 56 Ext":"","Menu 56 Main Bind":"","Menu 56 Actor Bind":"","---Menu 57---":"","Menu 57 Name":"","Menu 57 Symbol":"","Menu 57 Show":"","Menu 57 Enabled":"","Menu 57 Ext":"","Menu 57 Main Bind":"","Menu 57 Actor Bind":"","---Menu 58---":"","Menu 58 Name":"","Menu 58 Symbol":"","Menu 58 Show":"","Menu 58 Enabled":"","Menu 58 Ext":"","Menu 58 Main Bind":"","Menu 58 Actor Bind":"","---Menu 59---":"","Menu 59 Name":"","Menu 59 Symbol":"","Menu 59 Show":"","Menu 59 Enabled":"","Menu 59 Ext":"","Menu 59 Main Bind":"","Menu 59 Actor Bind":"","---Menu 60---":"","Menu 60 Name":"","Menu 60 Symbol":"","Menu 60 Show":"","Menu 60 Enabled":"","Menu 60 Ext":"","Menu 60 Main Bind":"","Menu 60 Actor Bind":"","---Menu 61---":"","Menu 61 Name":"","Menu 61 Symbol":"","Menu 61 Show":"","Menu 61 Enabled":"","Menu 61 Ext":"","Menu 61 Main Bind":"","Menu 61 Actor Bind":"","---Menu 62---":"","Menu 62 Name":"","Menu 62 Symbol":"","Menu 62 Show":"","Menu 62 Enabled":"","Menu 62 Ext":"","Menu 62 Main Bind":"","Menu 62 Actor Bind":"","---Menu 63---":"","Menu 63 Name":"","Menu 63 Symbol":"","Menu 63 Show":"","Menu 63 Enabled":"","Menu 63 Ext":"","Menu 63 Main Bind":"","Menu 63 Actor Bind":"","---Menu 64---":"","Menu 64 Name":"","Menu 64 Symbol":"","Menu 64 Show":"","Menu 64 Enabled":"","Menu 64 Ext":"","Menu 64 Main Bind":"","Menu 64 Actor Bind":"","---Menu 65---":"","Menu 65 Name":"","Menu 65 Symbol":"","Menu 65 Show":"","Menu 65 Enabled":"","Menu 65 Ext":"","Menu 65 Main Bind":"","Menu 65 Actor Bind":"","---Menu 66---":"","Menu 66 Name":"","Menu 66 Symbol":"","Menu 66 Show":"","Menu 66 Enabled":"","Menu 66 Ext":"","Menu 66 Main Bind":"","Menu 66 Actor Bind":"","---Menu 67---":"","Menu 67 Name":"","Menu 67 Symbol":"","Menu 67 Show":"","Menu 67 Enabled":"","Menu 67 Ext":"","Menu 67 Main Bind":"","Menu 67 Actor Bind":"","---Menu 68---":"","Menu 68 Name":"","Menu 68 Symbol":"","Menu 68 Show":"","Menu 68 Enabled":"","Menu 68 Ext":"","Menu 68 Main Bind":"","Menu 68 Actor Bind":"","---Menu 69---":"","Menu 69 Name":"","Menu 69 Symbol":"","Menu 69 Show":"","Menu 69 Enabled":"","Menu 69 Ext":"","Menu 69 Main Bind":"","Menu 69 Actor Bind":"","---Menu 70---":"","Menu 70 Name":"","Menu 70 Symbol":"","Menu 70 Show":"","Menu 70 Enabled":"","Menu 70 Ext":"","Menu 70 Main Bind":"","Menu 70 Actor Bind":"","---Menu 71---":"","Menu 71 Name":"","Menu 71 Symbol":"","Menu 71 Show":"","Menu 71 Enabled":"","Menu 71 Ext":"","Menu 71 Main Bind":"","Menu 71 Actor Bind":"","---Menu 72---":"","Menu 72 Name":"","Menu 72 Symbol":"","Menu 72 Show":"","Menu 72 Enabled":"","Menu 72 Ext":"","Menu 72 Main Bind":"","Menu 72 Actor Bind":"","---Menu 73---":"","Menu 73 Name":"","Menu 73 Symbol":"","Menu 73 Show":"","Menu 73 Enabled":"","Menu 73 Ext":"","Menu 73 Main Bind":"","Menu 73 Actor Bind":"","---Menu 74---":"","Menu 74 Name":"","Menu 74 Symbol":"","Menu 74 Show":"","Menu 74 Enabled":"","Menu 74 Ext":"","Menu 74 Main Bind":"","Menu 74 Actor Bind":"","---Menu 75---":"","Menu 75 Name":"","Menu 75 Symbol":"","Menu 75 Show":"","Menu 75 Enabled":"","Menu 75 Ext":"","Menu 75 Main Bind":"","Menu 75 Actor Bind":"","---Menu 76---":"","Menu 76 Name":"","Menu 76 Symbol":"","Menu 76 Show":"","Menu 76 Enabled":"","Menu 76 Ext":"","Menu 76 Main Bind":"","Menu 76 Actor Bind":"","---Menu 77---":"","Menu 77 Name":"","Menu 77 Symbol":"","Menu 77 Show":"","Menu 77 Enabled":"","Menu 77 Ext":"","Menu 77 Main Bind":"","Menu 77 Actor Bind":"","---Menu 78---":"","Menu 78 Name":"","Menu 78 Symbol":"","Menu 78 Show":"","Menu 78 Enabled":"","Menu 78 Ext":"","Menu 78 Main Bind":"","Menu 78 Actor Bind":"","---Menu 79---":"","Menu 79 Name":"","Menu 79 Symbol":"","Menu 79 Show":"","Menu 79 Enabled":"","Menu 79 Ext":"","Menu 79 Main Bind":"","Menu 79 Actor Bind":"","---Menu 80---":"","Menu 80 Name":"","Menu 80 Symbol":"","Menu 80 Show":"","Menu 80 Enabled":"","Menu 80 Ext":"","Menu 80 Main Bind":"","Menu 80 Actor Bind":"","---Menu 81---":"","Menu 81 Name":"'モンスター図鑑'","Menu 81 Symbol":"common event","Menu 81 Show":"true","Menu 81 Enabled":"true","Menu 81 Ext":"10","Menu 81 Main Bind":"this.callCommonEvent.bind(this)","Menu 81 Actor Bind":"","---Menu 82---":"","Menu 82 Name":"'Common Event 2'","Menu 82 Symbol":"common event","Menu 82 Show":"false","Menu 82 Enabled":"true","Menu 82 Ext":"2","Menu 82 Main Bind":"this.callCommonEvent.bind(this)","Menu 82 Actor Bind":"","---Menu 83---":"","Menu 83 Name":"'Common Event 3'","Menu 83 Symbol":"common event","Menu 83 Show":"false","Menu 83 Enabled":"true","Menu 83 Ext":"3","Menu 83 Main Bind":"this.callCommonEvent.bind(this)","Menu 83 Actor Bind":"","---Menu 84---":"","Menu 84 Name":"TextManager.formation","Menu 84 Symbol":"formation","Menu 84 Show":"this.needsCommand('formation')","Menu 84 Enabled":"this.isFormationEnabled()","Menu 84 Ext":"","Menu 84 Main Bind":"this.commandFormation.bind(this)","Menu 84 Actor Bind":"","---Menu 85---":"","Menu 85 Name":"","Menu 85 Symbol":"","Menu 85 Show":"","Menu 85 Enabled":"","Menu 85 Ext":"","Menu 85 Main Bind":"","Menu 85 Actor Bind":"","---Menu 86---":"","Menu 86 Name":"","Menu 86 Symbol":"","Menu 86 Show":"","Menu 86 Enabled":"","Menu 86 Ext":"","Menu 86 Main Bind":"","Menu 86 Actor Bind":"","---Menu 87---":"","Menu 87 Name":"","Menu 87 Symbol":"","Menu 87 Show":"","Menu 87 Enabled":"","Menu 87 Ext":"","Menu 87 Main Bind":"","Menu 87 Actor Bind":"","---Menu 88---":"","Menu 88 Name":"","Menu 88 Symbol":"","Menu 88 Show":"","Menu 88 Enabled":"","Menu 88 Ext":"","Menu 88 Main Bind":"","Menu 88 Actor Bind":"","---Menu 89---":"","Menu 89 Name":"","Menu 89 Symbol":"","Menu 89 Show":"","Menu 89 Enabled":"","Menu 89 Ext":"","Menu 89 Main Bind":"","Menu 89 Actor Bind":"","---Menu 90---":"","Menu 90 Name":"TextManager.options","Menu 90 Symbol":"options","Menu 90 Show":"this.needsCommand('options')","Menu 90 Enabled":"this.isOptionsEnabled()","Menu 90 Ext":"","Menu 90 Main Bind":"this.commandOptions.bind(this)","Menu 90 Actor Bind":"","---Menu 91---":"","Menu 91 Name":"","Menu 91 Symbol":"","Menu 91 Show":"","Menu 91 Enabled":"","Menu 91 Ext":"","Menu 91 Main Bind":"","Menu 91 Actor Bind":"","---Menu 92---":"","Menu 92 Name":"","Menu 92 Symbol":"","Menu 92 Show":"","Menu 92 Enabled":"","Menu 92 Ext":"","Menu 92 Main Bind":"","Menu 92 Actor Bind":"","---Menu 93---":"","Menu 93 Name":"","Menu 93 Symbol":"","Menu 93 Show":"","Menu 93 Enabled":"","Menu 93 Ext":"","Menu 93 Main Bind":"","Menu 93 Actor Bind":"","---Menu 94---":"","Menu 94 Name":"","Menu 94 Symbol":"","Menu 94 Show":"","Menu 94 Enabled":"","Menu 94 Ext":"","Menu 94 Main Bind":"","Menu 94 Actor Bind":"","---Menu 95---":"","Menu 95 Name":"TextManager.save","Menu 95 Symbol":"save","Menu 95 Show":"this.needsCommand('save')","Menu 95 Enabled":"this.isSaveEnabled()","Menu 95 Ext":"","Menu 95 Main Bind":"this.commandSave.bind(this)","Menu 95 Actor Bind":"","---Menu 96---":"","Menu 96 Name":"","Menu 96 Symbol":"","Menu 96 Show":"","Menu 96 Enabled":"","Menu 96 Ext":"","Menu 96 Main Bind":"","Menu 96 Actor Bind":"","---Menu 97---":"","Menu 97 Name":"","Menu 97 Symbol":"","Menu 97 Show":"","Menu 97 Enabled":"","Menu 97 Ext":"","Menu 97 Main Bind":"","Menu 97 Actor Bind":"","---Menu 98---":"","Menu 98 Name":"","Menu 98 Symbol":"","Menu 98 Show":"","Menu 98 Enabled":"","Menu 98 Ext":"","Menu 98 Main Bind":"","Menu 98 Actor Bind":"","---Menu 99---":"","Menu 99 Name":"","Menu 99 Symbol":"","Menu 99 Show":"","Menu 99 Enabled":"","Menu 99 Ext":"","Menu 99 Main Bind":"","Menu 99 Actor Bind":"","---Menu 100---":"","Menu 100 Name":"TextManager.gameEnd","Menu 100 Symbol":"gameEnd","Menu 100 Show":"true","Menu 100 Enabled":"this.isGameEndEnabled()","Menu 100 Ext":"","Menu 100 Main Bind":"this.commandGameEnd.bind(this)","Menu 100 Actor Bind":""}},
{"name":"AltMenuScreen2","status":true,"description":"レイアウトの異なるメニュー画面","parameters":{"backGroundBitmap":"","maxColsMenu":"4","commandRows":"3","isDisplayStatus":"1"}},
{"name":"CustomizeConfigDefault","status":true,"description":"オプションデフォルト値設定プラグイン","parameters":{"常時ダッシュ":"OFF","コマンド記憶":"ON","BGM音量":"100","BGS音量":"100","ME音量":"100","SE音量":"100","常時ダッシュ消去":"ON","コマンド記憶消去":"OFF","BGM音量消去":"OFF","BGS音量消去":"OFF","ME音量消去":"OFF","SE音量消去":"OFF"}},
{"name":"CustomizeConfigItem","status":true,"description":"オプション任意項目作成プラグイン","parameters":{"スイッチ項目1":"足音:ON:4:OFF","数値項目1":"","音量項目1":"","文字項目1":"メッセージ速度:1:12:OFF:遅い,普通,速い","スイッチ項目2":"ダッシュボタン:ON:18:OFF","数値項目2":"","音量項目2":"","文字項目2":"画面タッチ移動:1:11:OFF:OFF,ON"}},
{"name":"UCHU_MobileOperation","status":true,"description":"スマホ操作用プラグイン。横持ち/縦持ちに対応した仮想ボタン、\r\nタッチ操作の方法を追加拡張し、スマホプレイを快適にします。","parameters":{"---PC Option---":"","PC BtnDisplay":"false","PC TouchExtend":"true","---File Path---":"","DPad Image":"./img/system/DirPad.png","ActionBtn Image":"./img/system/ActionButton.png","CancelBtn Image":"./img/system/CancelButton.png","---Button Customize---":"","Button Opacity":"0.7","Vertical BtnZoom":"1.7","Tablet BtnZoom":"0.8","TabVertical BtnZoom":"1.1","HideButton OnMessage":"true","DPad Visible":"true","DPad Size":"200","DPad Margin":"10; 10","DPad Orientation":"left; bottom","DPad OpelationRange":"1.3","DPad DiagonalRange":"0.2","ActionBtn Visible":"true","ActionBtn Size":"100","ActionBtn Margin":"10; 100","ActionBtn Orientation":"right; bottom","CancelBtn Visible":"true","CancelBtn Size":"100","CancelBtn Margin":"60; 10","CancelBtn Orientation":"right; bottom","---TouchInput Extend---":"","Flick PageUp-PageDown":"true","HoldCanvas ActionBtn":"true","OutCanvas CancelBtn":"false","OutCanvas ActionBtn":"false","--!need AnalogMove.js!--":"","Analog Move":"false","Analog Sensitivity":"1.8"}},
{"name":"BootOpeningDemo","status":true,"description":"タイトル画面を出す前にオープニングデモから開始します","parameters":{"firstMapId":"10","startX":"0","startY":"0"}},
{"name":"Gamefocus","status":true,"description":"ゲームがアクティブウィンドウでなくなった際に、\r\nオーディオかビデオ、もしくはその両方を一時停止します。","parameters":{"Pause Audio":"true","Pause Graphics":"true"}},
{"name":"PictureCallCommon","status":true,"description":"ピクチャのボタン化プラグイン","parameters":{"透明色を考慮":"OFF","ピクチャ番号の変数番号":"40","ポインタX座標の変数番号":"41","ポインタY座標の変数番号":"42","タッチ操作抑制":"ON"}},
{"name":"AdjustPictureGraphical","status":true,"description":"ピクチャのグラフィカルな位置調整プラグイン。\nパラメータを変更したら「プロジェクトの保存」（Ctrl+S）","parameters":{"グリッドサイズ":"48","テストマップID":"-1"}},
{"name":"AB_EnemyBook","status":true,"description":"戦闘中も確認できるモンスター図鑑です。属性、ステートの耐性の確認もできます。","parameters":{"ShowCommandInBattle":"1","ResisterTiming":"2","ShowCurrentStatus":"ON","---用語、アイコン---":"","EnemyBookCommandName":"エネミー","Achievement":"達成率","UnknownEnemy":"？？？？？？","UnknownData":"？？？","WeakElementName":"弱点属性","ResistElementName":"耐性属性","WeakStateName":"弱点ステート","ResistStateName":"耐性ステート","NoEffectStateName":"無効ステート","UnknownDropItemIcon":"16","AddEnemySkillMessage":"%1を図鑑に登録した！","FailToAddEnemySkillMessage":"%1は図鑑には載せられない！","FailToCheckEnemySkillMessage":"%1の情報はわからなかった！","---表示項目---":"","DispNo":"1","DispHP":"1","DispMP":"1","DispATK":"1","DispDEF":"1","DispMAT":"1","DispMDF":"1","DispAGI":"1","DispLUK":"0","DispDropItems":"1","DispWeakElement":"1","DispResistElement":"1","DispWeakState":"1","DispResistState":"1","DispNoEffectState":"0","DispDescribe":"1"}},
{"name":"NovelMessage","status":true,"description":"全画面型のメッセージウィンドウです。","parameters":{"Switch ID":"11"}},
{"name":"messagespeed","status":true,"description":"メッセージ速度調整プラグイン","parameters":{"表示速度変数":"1","瞬間表示":"OFF"}},
{"name":"UTA_MessageSkip","status":true,"description":"特定キーを押す事でメッセージをスキップできるようにします。","parameters":{"Skip Key":"escape","Show Trace":"false"}},
{"name":"OuterSelfSwitch","status":true,"description":"他のイベントのセルフスイッチを操作します。","parameters":{}},
{"name":"SymbolEncountLib","status":true,"description":"シンボルエンカウントを実装するためのライブラリです。","parameters":{}},
{"name":"TYA_SymbolEncount","status":true,"description":"シンボルエンカウント作成の補助を行います。\r\n詳しい使い方はヘルプを参照してください。","parameters":{"situationVariables":"20"}},
{"name":"drawSkillMpAndTp","status":true,"description":"スキルのMPコストとTPコストを両方表示することができます","parameters":{}},
{"name":"SwitchOnLoad","status":true,"description":"ゲームをロードしたときに指定のスイッチをONにします。","parameters":{"Switch ID":"5"}},
{"name":"TitleCommandPosition","status":true,"description":"タイトルコマンドウィンドウの位置を変更します。","parameters":{"Offset X":"0","Offset Y":"0","Width":"240","Background":"1"}},
{"name":"SceneGlossary","status":true,"description":"ゲーム内用語辞典プラグイン","parameters":{"カテゴリ分類":"ON","コマンド名称":"ヘルプ","コマンド名称2":"","コマンド名称3":"","コマンド名称4":"","アイテムタイプ":"A","自動登録":"ON","フォントサイズ":"22","用語集リスト横幅":"240","ヘルプテキスト":"","ヘルプテキスト2":"カテゴリを選択してください","アイテム使用":"OFF","画像の自動縮小":"ON","画像の表示位置":"top","画像の揃え":"center","背景ピクチャ":"","背景ピクチャ透過":"OFF","確認メッセージ":"OFF","自動登録IDスイッチ":"0","自動登録ID変数":"0","確認_使う":"使う","確認_使わない":"やめる","収集率表示":"OFF","収集率メッセージ":"収集率 \\c[2]%1\\c[0] ％","新着用語カラー":"2"}}
];

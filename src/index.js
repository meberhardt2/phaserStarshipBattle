import Phaser from "phaser";

import { Config } from './configs/game_config';
import { SceneMainMenu } from './scenes/main_menu';
import { SceneMain } from './scenes/main';
import { SceneGameOver } from './scenes/game_over';


/**************************************************************************************/
Config.scene.push(SceneMainMenu, SceneMain, SceneGameOver)
const game = new Phaser.Game(Config);
/**************************************************************************************/


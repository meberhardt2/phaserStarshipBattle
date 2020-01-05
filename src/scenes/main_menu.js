/**************************************************************************************/
export class SceneMainMenu extends Phaser.Scene {

	/************************************************/
	constructor(){
		super({
			key: "SceneMainMenu"
		});
	}
	/************************************************/


	/************************************************/
	preload(){
		this.load.image("sprBtnPlay", "src/assets/buttons/sprBtnPlay.png");
		this.load.image("sprBtnPlayHover", "src/assets/buttons/sprBtnPlayHover.png");
		this.load.image("sprBtnPlayDown", "src/assets/buttons/sprBtnPlayDown.png");
		this.load.image("sprBtnRestart", "src/assets/buttons/sprBtnRestart.png");
		this.load.image("sprBtnRestartHover", "src/assets/buttons/sprBtnRestartHover.png");
		this.load.image("sprBtnRestartDown", "src/assets/buttons/sprBtnRestartDown.png");

		this.load.audio("sndBtnOver", "src/assets/sounds/sndBtnOver.wav");
		this.load.audio("sndBtnDown", "src/assets/sounds/sndBtnDown.wav");
	}
	/************************************************/


	/************************************************/
	create(){
		this.scene.start("SceneMain");
	}
	/************************************************/
};
/**************************************************************************************/

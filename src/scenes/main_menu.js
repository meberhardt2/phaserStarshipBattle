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

		/*
		this.sfx = {
			btnOver: this.sound.add("sndBtnOver"),
			btnDown: this.sound.add("sndBtnDown")
		};

		this.btnPlay = this.add.sprite(
			this.game.config.width * 0.5,
			this.game.config.height * 0.5,
			"sprBtnPlay"
		);

		this.btnPlay.setInteractive();

		this.btnPlay.on("pointerover", function() {
			this.btnPlay.setTexture("sprBtnPlayHover"); // set the button texture to sprBtnPlayHover
			this.sfx.btnOver.play(); // play the button over sound
		}, this);

		this.btnPlay.on("pointerout", function() {
			this.setTexture("sprBtnPlay");
		});

		this.btnPlay.on("pointerdown", function() {
			this.btnPlay.setTexture("sprBtnPlayDown");
			this.sfx.btnDown.play();
		}, this);

		this.btnPlay.on("pointerup", function() {
			this.btnPlay.setTexture("sprBtnPlay");
			this.scene.start("SceneMain");
		}, this);


		this.title = this.add.text(this.game.config.width * 0.5, 128, "SPACE SHOOTER", {
			fontFamily: 'monospace',
			fontSize: 48,
			fontStyle: 'bold',
			color: '#ffffff',
			align: 'center'
		});
		this.title.setOrigin(0.5);
		*/
	}
	/************************************************/
};
/**************************************************************************************/

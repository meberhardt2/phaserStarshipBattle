import { Player } from '../entities/player';

/**************************************************************************************/
export class SceneMain extends Phaser.Scene {

	/************************************************/
	constructor(){
		super({
			key: "SceneMain"
		});
	}
	/************************************************/


	/************************************************/
	preload(){
		this.load.image("sprBg0", "src/assets/backgrounds/sprBg0.png");
		this.load.image("sprBg1", "src/assets/backgrounds/sprBg1.png");
		this.load.spritesheet("sprExplosion", "src/assets/effects/sprExplosion.png", {
			frameWidth: 32,
			frameHeight: 32
		});
		this.load.spritesheet("sprEnemy0", "src/assets/enemies/sprEnemy0.png", {
			frameWidth: 16,
			frameHeight: 16
		});
		this.load.image("sprEnemy1", "src/assets/enemies/sprEnemy1.png");
		this.load.spritesheet("sprEnemy2", "src/assets/enemies/sprEnemy2.png", {
			frameWidth: 16,
			frameHeight: 16
		});
		this.load.image("sprLaserEnemy0", "src/assets/effects/sprLaserEnemy0.png");
		this.load.image("sprLaserPlayer", "src/assets/effects/sprLaserPlayer.png");
		this.load.spritesheet("sprPlayer", "src/assets/players/sprPlayer.png", {
			frameWidth: 16,
			frameHeight: 16
		});

		this.load.audio("sndExplode0", "src/assets/sounds/sndExplode0.wav");
		this.load.audio("sndExplode1", "src/assets/sounds/sndExplode1.wav");
		this.load.audio("sndLaser", "src/assets/sounds/sndLaser.wav");
	}
	/************************************************/


	/************************************************/
	create(){
		this.animations();
		this.soundEffects();

		this.player = new Player(
			this,
			this.game.config.width * 0.5,
			this.game.config.height * 0.5,
			"sprPlayer"
		);

		this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
	}
	/************************************************/


	/************************************************/
	update(){
		this.player.update();
		
		if (this.keyW.isDown) {
			this.player.moveUp();
		}
		else if (this.keyS.isDown) {
			this.player.moveDown();
		}

		if (this.keyA.isDown) {
			this.player.moveLeft();
		}
		else if (this.keyD.isDown) {
			this.player.moveRight();
		}
	}
	/************************************************/


	/************************************************/
	animations(){
		this.anims.create({
			key: "sprEnemy0",
			frames: this.anims.generateFrameNumbers("sprEnemy0"),
			frameRate: 20,
			repeat: -1
		});
		this.anims.create({
			key: "sprEnemy2",
			frames: this.anims.generateFrameNumbers("sprEnemy2"),
			frameRate: 20,
			repeat: -1
		});
		this.anims.create({
			key: "sprExplosion",
			frames: this.anims.generateFrameNumbers("sprExplosion"),
			frameRate: 20,
			repeat: 0
		});
		this.anims.create({
			key: "sprPlayer",
			frames: this.anims.generateFrameNumbers("sprPlayer"),
			frameRate: 20,
			repeat: -1
		});
	}
	/************************************************/


	/************************************************/
	soundEffects(){
		this.sfx = {
			explosions: [
				this.sound.add("sndExplode0"),
				this.sound.add("sndExplode1")
			],
			laser: this.sound.add("sndLaser")
		};
	}
	/************************************************/

};
/**************************************************************************************/

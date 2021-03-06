import { Player } from '../entities/player';
import { GunShip1 } from '../entities/gunship1';
import { ChaserShip1 } from '../entities/chasership1';
import { CarrierShip1 } from '../entities/carriership1';

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
console.log(this.game.config.height * 0.5 - 150);
		this.cameras.main.setViewport((this.game.config.width * 0.5) - 200, (this.game.config.height * 0.5) - 150, 400, 300);
		this.cameras.main.setBackgroundColor(0xbababa);
		
		this.player = new Player(
			this,
			this.game.config.width * 0.5 - 300,
			this.game.config.height * 0.5 - 250,
			"sprPlayer"
		);

		this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
		this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
		this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
		this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
		this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		this.enemies = this.add.group();
		this.enemyLasers = this.add.group();
		this.playerLasers = this.add.group();


		this.physics.add.collider(this.playerLasers, this.enemies, function(playerLaser, enemy) {
			if (enemy) {
				if (enemy.onDestroy !== undefined) {
					enemy.onDestroy();
				}
				enemy.explode(true);
				playerLaser.destroy();
			}
		});


		this.physics.add.overlap(this.player, this.enemies, function(player, enemy) {
			if (!player.getData("isDead") &&
				!enemy.getData("isDead")) {
				player.explode(false);
				player.onDestroy();
				enemy.explode(true);
			}
		});


		this.physics.add.overlap(this.player, this.enemyLasers, function(player, laser) {
			if (!player.getData("isDead") && !laser.getData("isDead")) {
				player.explode(false);
				player.onDestroy();
				laser.destroy();
			}
		});

		/*
		this.time.addEvent({
			delay: 1000,
			callback: function() {
				var enemy = null;

				if (Phaser.Math.Between(0, 10) >= 3) {
					enemy = new GunShip1(
						this,
						Phaser.Math.Between(0, this.game.config.width),
						0
					);
				}
				else if (Phaser.Math.Between(0, 10) >= 5) {
					//checking how many chaser ships there are
					if (this.getEnemiesByType("ChaserShip").length < 5) {
						enemy = new ChaserShip1(
							this,
							Phaser.Math.Between(0, this.game.config.width),
							0
						);
					}
				}
				else {
					enemy = new CarrierShip1(
						this,
						Phaser.Math.Between(0, this.game.config.width),
						0
					);
				}

				if (enemy !== null) {
					enemy.setScale(Phaser.Math.Between(10, 20) * 0.1);
					this.enemies.add(enemy);
				}
			},
			callbackScope: this,
			loop: false,
			repeat: 20
		});
		*/
	}
	/************************************************/


	/************************************************/
	update(){
		this.cameras.main.setPosition(150,150);
		if (!this.player.getData("isDead")) {
			this.player.update();
			
			if(this.keyW.isDown || this.keyUp.isDown){
				this.player.moveUp();
			}
			else if(this.keyS.isDown || this.keyDown.isDown){
				this.player.moveDown();
			}

			if(this.keyA.isDown || this.keyLeft.isDown){
				this.player.moveLeft();
			}
			else if(this.keyD.isDown || this.keyRight.isDown){
				this.player.moveRight();
			}

			if(this.keySpace.isDown){
				this.player.setData("isShooting", true);
			}
			else{
				this.player.setData("timerShootTick", this.player.getData("timerShootDelay") - 1);
				this.player.setData("isShooting", false);
			}
		}

		for(var i = 0; i < this.enemies.getChildren().length; i++){
			var enemy = this.enemies.getChildren()[i];
			enemy.update();

			//frustum culling
			//this will remove enemies that have gone off screen
			if(enemy.x < -enemy.displayWidth || enemy.x > this.game.config.width + enemy.displayWidth || enemy.y < -enemy.displayHeight * 4 || enemy.y > this.game.config.height + enemy.displayHeight){
				if(enemy){
					if(enemy.onDestroy !== undefined){
						enemy.onDestroy();
					}
					enemy.destroy();
				}
			}
		}

		//frustum culling
		//remove laser bolts that have gone off screen
		for(var i = 0; i < this.enemyLasers.getChildren().length; i++){
			var laser = this.enemyLasers.getChildren()[i];
			laser.update();

			if (laser.x < -laser.displayWidth || laser.x > this.game.config.width + laser.displayWidth || laser.y < -laser.displayHeight * 4 || laser.y > this.game.config.height + laser.displayHeight){
				if(laser){
					laser.destroy();
				}
			}
		}

		for(var i = 0; i < this.playerLasers.getChildren().length; i++){
			var laser = this.playerLasers.getChildren()[i];
			laser.update();

			if(laser.x < -laser.displayWidth || laser.x > this.game.config.width + laser.displayWidth || laser.y < -laser.displayHeight * 4 || laser.y > this.game.config.height + laser.displayHeight) {
				if(laser){
					laser.destroy();
				}
			}
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


	/************************************************/
	getEnemiesByType(type){
		var arr = [];

		for (var i = 0; i < this.enemies.getChildren().length; i++) {
			var enemy = this.enemies.getChildren()[i];

			if (enemy.getData("type") == type) {
				arr.push(enemy);
			}
		}

		return arr;	  
	}
	/************************************************/
};
/**************************************************************************************/

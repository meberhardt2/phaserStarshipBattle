import { Entity } from '../entities/entity';
import { LaserEnemy } from '../weapons/laser_enemy';

/**************************************************************************************/
export class GunShip1 extends Entity{

	/************************************************/
	constructor(scene, x, y) {
		super(scene, x, y, "sprEnemy1", "GunShip1");

		this.body.velocity.y = Phaser.Math.Between(50, 100);

		this.shootTimer = this.scene.time.addEvent({
			delay: 1000,
			callback: function() {
				var laser = new LaserEnemy(
				this.scene,
				this.x,
				this.y
			);
			laser.setScale(this.scaleX);
				this.scene.enemyLasers.add(laser);
			},
			callbackScope: this,
			loop: true
		});
	}
	/************************************************/


	/************************************************/
	onDestroy(){
		if (this.shootTimer !== undefined) {
			if (this.shootTimer) {
				this.shootTimer.remove(false);
			}
		}
	}
	/************************************************/
}
/**************************************************************************************/

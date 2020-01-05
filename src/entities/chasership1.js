import { Entity } from './entity';

/**************************************************************************************/
export class ChaserShip1 extends Entity{

	/************************************************/
	constructor(scene, x, y) {
		super(scene, x, y, "sprEnemy1", "ChaserShip1");

		this.states = {
			MOVE_DOWN: "MOVE_DOWN",
			CHASE: "CHASE"
		};

		this.state = this.states.MOVE_DOWN;

		this.body.velocity.y = Phaser.Math.Between(50, 100);
	}
	/************************************************/


	/************************************************/
	update(){
		if (!this.getData("isDead") && this.scene.player) {
			if (Phaser.Math.Distance.Between(this.x, this.y, this.scene.player.x, this.scene.player.y) < 320) {
				this.state = this.states.CHASE;
			}

			if (this.state == this.states.CHASE) {
				var dx = this.scene.player.x - this.x;
				var dy = this.scene.player.y - this.y;
				var angle = Math.atan2(dy, dx);
				var speed = 100;

				this.body.setVelocity(
					Math.cos(angle) * speed,
					Math.sin(angle) * speed
				);
					
				//will rotate the ship
				if (this.x < this.scene.player.x) {
					this.angle -= 5;
				}
				else {
					this.angle += 5;
				} 
			}
		}
	}
	/************************************************/
}
/**************************************************************************************/

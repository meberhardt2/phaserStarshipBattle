import { Entity } from '../entities/entity';

/**************************************************************************************/
export class Carrier1 extends Entity{

	/************************************************/
	constructor(scene, x, y) {
		super(scene, x, y, "sprEnemy1", "Carrier1");

		this.body.velocity.y = Phaser.Math.Between(50, 100);
	}
	/************************************************/

}
/**************************************************************************************/

import { Entity } from './entity';

/**************************************************************************************/
export class CarrierShip1 extends Entity{

	/************************************************/
	constructor(scene, x, y) {
		super(scene, x, y, "sprEnemy1", "CarrierShip1");

		this.body.velocity.y = Phaser.Math.Between(50, 100);
	}
	/************************************************/

}
/**************************************************************************************/

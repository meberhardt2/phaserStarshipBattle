import { Weapon } from '../weapons/weapon';

/**************************************************************************************/
export class LaserEnemy extends Weapon {
	constructor(scene, x, y) {
		super(scene, x, y, "sprLaserEnemy0");
		
		this.body.velocity.y = 200;
	}
}
/**************************************************************************************/

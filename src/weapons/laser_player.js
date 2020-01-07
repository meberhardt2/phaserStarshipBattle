import { Weapon } from '../weapons/weapon';

/**************************************************************************************/
export class LaserPlayer extends Weapon {
	constructor(scene, x, y) {
		super(scene, x, y, "sprLaserPlayer");
		
		this.body.velocity.y = -200;			//moves the lasers up
	}
}
/**************************************************************************************/

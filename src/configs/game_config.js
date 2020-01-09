/**************************************************************************************/
export const Config = {
	type: Phaser.AUTO,
	width: 1000,
	height: 800,
	backgroundColor: "black",
	physics: {
		default: "arcade",
		arcade: {
			gravity: { x: 0, y: 0 }
		}
	},
	scene: [],
	pixelArt: true,
	roundPixels: true
};
/**************************************************************************************/

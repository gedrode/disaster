//tank
const rock = new TankUnitType("rock");
exports.rock = rock;
Object.assign(rock, {
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	lightColor: Pal.techBlue,
	squareShape: true,
	omniMovement: false,
	rotateMoveFirst: true,
	speed: 1,
	hitSize: 14,
	treadPullOffset: 3,
	treadRects: [new Rect(16, 8-32, 8, 48)],
	outlineRadius: 1,
	rotateSpeed: 3,
	health: 520,
	armor: 1,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	constructor: () => new TankUnit.create(),
})
rock.weapons.add(
Object.assign(new Weapon("gedd-rock-weapon"), {
	layerOffset: 0.0001,
	reload: 40,
	shootY: 10.75,
	recoil: 1,
	rotate: true,
	rotateSpeed: 5.7,
	mirror: false,
	x: 0,
	y: 0,
	heatColor: Color.valueOf("f9350f"),
	cooldownTime: 30,
	shootSound: Sounds.mediumCannon,
	
	bullet: Object.assign(new BasicBulletType(4, 30), {
		sprite: "gedd-bullet",
		smokeEffect: Fx.shootBigSmoke,
		shootEffect: Fx.shootBigColor,
		width: 5,
		height: 7,
		lifetime: 40,
		hitSize: 4,
		hitColor: Color.valueOf("98ba53"),
		backColor: Color.valueOf("98ba53"),
		trailColor: Color.valueOf("98ba53"),
		frontColor: Color.white,
		trailWidth: 1.7,
		trailLength: 5,
		despawnEffect: Fx.hitBulletColor,
		hitEffect: Fx.hitBulletColor,
		
		splashDamageRadius: 8 * 2.25,
		splashDamage: 20,
		
		pierce: true,
		pierceBuilding: true,
		pierceCap: 3,
	})
})
)

const longbow = new TankUnitType("longbow");
exports.longbow = longbow;
Object.assign(longbow, {
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	lightColor: Pal.techBlue,
	squareShape: true,
	omniMovement: false,
	rotateMoveFirst: true,
	speed: 0.85,
	hitSize: 18,
	treadPullOffset: 3,
	treadRects: [new Rect(16, 8-32, 8, 48)],
	outlineRadius: 1,
	rotateSpeed: 3,
	health: 820,
	armor: 2,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	constructor: () => new TankUnit.create(),
})
longbow.weapons.add(
Object.assign(new Weapon("gedd-longbow-weapon"), {
	layerOffset: 0.0001,
	reload: 35,
	shootY: 10.75,
	recoil: 1,
	rotate: true,
	rotateSpeed: 5,
	mirror: false,
	x: 0,
	y: 0,
	heatColor: Color.valueOf("f9350f"),
	cooldownTime: 30,
	shootSound: Sounds.mediumCannon,
	
	bullet: Object.assign(new BasicBulletType(10, 60), {
		sprite: "gedd-ctl",
		smokeEffect: Fx.shootBigSmoke,
		shootEffect: Fx.shootBigColor,
		width: 5,
		height: 20,
		lifetime: 18,
		hitSize: 8,
		hitColor: Color.valueOf("98ba53"),
		backColor: Color.valueOf("98ba53"),
		trailColor: Color.valueOf("98ba53"),
		frontColor: Color.white,
		trailWidth: 10,
		trailLength: 24,
		despawnEffect: Fx.hitBulletColor,
		hitEffect: Fx.hitBulletColor,
	})
})
)

const arbalest = new TankUnitType("arbalest");
exports.arbalest = arbalest;
Object.assign(arbalest, {
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	lightColor: Pal.techBlue,
	squareShape: true,
	omniMovement: false,
	rotateMoveFirst: true,
	speed: 0.7,
	hitSize: 25,
	treadPullOffset: 3,
	treadRects: [new Rect(16, 8-32, 8, 48)],
	outlineRadius: 1,
	rotateSpeed: 3,
	health: 1420,
	armor: 4,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	constructor: () => new TankUnit.create(),
})
arbalest.weapons.add(
Object.assign(new Weapon("gedd-arbalest-weapon"), {
	layerOffset: 0.0001,
	reload: 80,
	shootY: 10.75,
	recoil: 1,
	rotate: true,
	rotateSpeed: 5.7,
	mirror: false,
	x: 0,
	y: 0,
	heatColor: Color.valueOf("f9350f"),
	cooldownTime: 30,
	shoot: Object.assign(new ShootAlternate(3.5), {
		shots: 4,
		barrels: 3,
		shotDelay: 2
	}),
	inaccuracy: 5,
	shootSound: Sounds.mediumCannon,
	
	bullet: Object.assign(new BasicBulletType(6, 80), {
		sprite: "gedd-ctl",
		smokeEffect: Fx.shootBigSmoke,
		shootEffect: Fx.shootBigColor,
		width: 32,
		height: 10,
		lifetime: 40,
		hitSize: 18,
		hitColor: Color.valueOf("98ba53"),
		backColor: Color.valueOf("98ba53"),
		trailColor: Color.valueOf("98ba53"),
		frontColor: Color.white,
		trailWidth: 18,
		trailLength: 5,
		despawnEffect: Fx.hitBulletColor,
		hitEffect: Fx.hitBulletColor,

		pierce: true,
		pierceBuilding: true,
		pierceCap: 3,
	})
})
)

const rifle = new TankUnitType("rifle");
exports.rifle = rifle;
Object.assign(rifle, {
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	lightColor: Pal.techBlue,
	squareShape: true,
	omniMovement: false,
	rotateMoveFirst: true,
	speed: 0.7,
	hitSize: 25,
	treadPullOffset: 3,
	treadRects: [new Rect(16, 8-32, 8, 48)],
	outlineRadius: 1,
	rotateSpeed: 3,
	health: 8420,
	armor: 8,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	constructor: () => new TankUnit.create(),
})
rifle.weapons.add(
Object.assign(new Weapon("gedd-rifle-weapon"), {
	layerOffset: 0.0001,
	reload: 60,
	shootY: 10.75,
	recoil: 2,
	rotate: true,
	rotateSpeed: 5.7,
	mirror: false,
	x: 0,
	y: 0,
	heatColor: Color.valueOf("f9350f"),
	cooldownTime: 30,
		shoot: Object.assign(new ShootPattern(), {
		shots: 2,
		shotDelay: 2,
	}),
	inaccuracy: 1,
	shootSound: Sounds.mediumCannon,
	
	bullet: Object.assign(new BasicBulletType(6, 120), {
		sprite: "gedd-ctl",
		smokeEffect: Fx.shootBigSmoke,
		shootEffect: Fx.shootBigColor,
		width: 12,
		height: 10,
		lifetime: 40,
		hitSize: 18,
		hitColor: Color.valueOf("98ba53"),
		backColor: Color.valueOf("98ba53"),
		trailColor: Color.valueOf("98ba53"),
		frontColor: Color.white,
		trailWidth: 8,
		trailLength: 5,
		despawnEffect: Fx.hitBulletColor,
		hitEffect: Fx.hitBulletColor,

		splashDamageRadius: 8 * 4.25,
		splashDamage: 40,

		pierce: true,
		pierceBuilding: true,
		pierceCap: 3,
	})
})
)

const blunderbuss = new TankUnitType("blunderbuss");
exports. blunderbuss = blunderbuss;
Object.assign(blunderbuss, {
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	lightColor: Pal.techBlue,
	squareShape: true,
	omniMovement: false,
	rotateMoveFirst: true,
	speed: 0.7,
	hitSize: 25,
	treadPullOffset: 3,
	treadRects: [new Rect(16, 8-32, 8, 48)],
	outlineRadius: 1,
	rotateSpeed: 3,
	health: 19420,
	armor: 12,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	constructor: () => new TankUnit.create(),
})
blunderbuss.weapons.add(
Object.assign(new Weapon("gedd-blunderbuss-weapon"), {
	layerOffset: 0.0001,
	reload: 80,
	shootY: 10.75,
	recoil: 2,
	rotate: true,
	rotateSpeed: 5.7,
	mirror: false,
	x: 0,
	y: 0,
	heatColor: Color.valueOf("f9350f"),
	cooldownTime: 30,
	shoot: Object.assign(new ShootAlternate(3.5), {
		shots: 2,
		barrels: 6,
		shotDelay: 0
	}),
	inaccuracy: 3,
	shootSound: Sounds.mediumCannon,
	
	bullet: Object.assign(new BasicBulletType(6, 160), {
		sprite: "gedd-ctl",
		smokeEffect: Fx.shootBigSmoke,
		shootEffect: Fx.shootBigColor,
		width: 12,
		height: 10,
		lifetime: 40,
		hitSize: 18,
		hitColor: Color.valueOf("98ba53"),
		backColor: Color.valueOf("98ba53"),
		trailColor: Color.valueOf("98ba53"),
		frontColor: Color.white,
		trailWidth: 16,
		trailLength: 5,
		despawnEffect: Fx.hitBulletColor,
		hitEffect: Fx.hitBulletColor,

		splashDamageRadius: 8 * 4.25,
		splashDamage: 40,

		pierce: true,
		pierceBuilding: true,
		pierceCap: 3,
	})
}),
Object.assign(new Weapon("gedd-blunderbuss-weapon1"), {
	layerOffset: 0.0001,
	reload: 40,
	shootY: 10.75,
	recoil: 2,
	rotate: true,
	rotateSpeed: 5.7,
	mirror: false,
	x: 18,
	y: 0,
	heatColor: Color.valueOf("f9350f"),
	cooldownTime: 30,
		shoot: Object.assign(new ShootPattern(), {
		shots: 2,
		shotDelay: 3,
	}),
	inaccuracy: 1,
	shootSound: Sounds.laser,
	
	bullet: Object.assign(new LaserBulletType(150), {
		smokeEffect: Fx.shootBigSmoke,
		shootEffect: Fx.shootBigColor,
		width: 12,
		length: 160,
		lifetime: 40,
		hitSize: 18,
		hitColor: Color.valueOf("98ba53"),
		despawnEffect: Fx.hitBulletColor,
		hitEffect: Fx.hitBulletColor,
	})
})
)

const castleB = new MissileUnitType("castle-b");

const castleS = new UnitType("castle-s");
exports.castleS = castleS;
Object.assign(castleS, {
	constructor: () => new UnitEntity.create(),
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	drawCell: true,
	healFlash: true,
	healColor: Pal.neoplasm1,
	health: 180,
	speed: 3,
	flying: true,
	hitSize: 3.5,
	engineOffset: 5.5,
	armor: 2,
})
castleS.weapons.add(
Object.assign(new Weapon("none"), {
	mirror: false,
	x: 0,
	y: 1,
	shootY: 4,
	reload: 30,
	cooldownTime: 42,
	shootSound: Sounds.shootSnap,
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new BasicBulletType(), {
		recoil: 0,
		backColor: Color.valueOf("84a94b"),
		frontColor: Color.valueOf("84a94b"),
		lifetime: 35,
		damage:20,
		speed: 4,
		hitEffect: Fx.none,
		despawnEffect: Fx.none,
		trailColor: Color.valueOf("84a94b"),
		trailWidth: 0.8,
		trailLength: 14,
		trailChance: 2,
		hitSound: Sounds.none,
		
	})
})
)

const castle = new TankUnitType("castle");
exports.castle = castle;
Object.assign(castle, {
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	lightColor: Pal.techBlue,
	squareShape: true,
	omniMovement: false,
	rotateMoveFirst: true,
	speed: 0.2,
	hitSize: 60,
	treadPullOffset: 3,
	treadRects: [new Rect(16, 8-32, 8, 48)],
	outlineRadius: 1,
	rotateSpeed: 3,
	health: 13000,
	armor: 20,
	itemCapacity: 100,
	researchCostMultiplier: 20,
	constructor: () => new TankUnit.create(),
})
castle.abilities.add(
	new UnitSpawnAbility(castleS, 60 * 20, 0, 0),
	new UnitSpawnAbility(castleB, 60 * 20, 0, 6),
);
castle.weapons.add(
Object.assign(new Weapon("gedd-castle-weapon"), {
	layerOffset: 0.0001,
	reload: 40,
	shootY: 10.75,
	recoil: 1,
	rotate: true,
	rotateSpeed: 5.7,
	mirror: true,
	x: 8,
	y: 6,
	heatColor: Color.valueOf("f9350f"),
	shoot: Object.assign(new ShootPattern(), {
		shots: 4,
		shotDelay: 4,
	}),
	inaccuracy: 1,
	cooldownTime: 30,
	shootSound: Sounds.mediumCannon,
	
	bullet: Object.assign(new BasicBulletType(6, 80), {
		sprite: "gedd-ctl",
		smokeEffect: Fx.shootBigSmoke,
		shootEffect: Fx.shootBigColor,
		width: 18,
		height: 20,
		lifetime: 40,
		hitSize: 10,
		hitColor: Color.valueOf("98ba53"),
		backColor: Color.valueOf("98ba53"),
		trailColor: Color.valueOf("98ba53"),
		frontColor: Color.white,
		status: StatusEffects.melting,
		trailWidth: 1.7,
		trailLength: 5,
		despawnEffect: Fx.hitBulletColor,
		hitEffect: Fx.hitBulletColor,
		
		splashDamageRadius: 8 * 2.25,
		splashDamage: 20,
		
		pierce: true,
		pierceBuilding: true,
		pierceCap: 3,
	})
})
)

//legs
const rambler = new UnitType("rambler");
exports.rambler = rambler;
Object.assign(rambler, {
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	speed: 0.72,
	drag: 0.11,
	hitSize: 11,
	rotateSpeed: 3,
	health: 680,
	armor: 2,
	legStraightness: 0.3,
	stepShake: 0,
	
	legCount: 4,
	legLength: 8,
	lockLegBase: true,
	legContinuousMove: true,
	legExtension: -2,
	legBaseOffset: 3,
	legMaxLength: 1.1,
	legMinLength: 0.2,
	legLengthScl: 0.96,
	legForwardScl: 1.1,
	legGroupSize: 3,
	rippleScale: 0.2,
	
	legMoveSpace: 1,
	allowLegStep: true,
	hovering: true,
	legPhysicsLayer: false,
	
	shadowElevation: 0.1,
	groundLayer: 74,
	
	constructor: () => new LegsUnit.create()
})
rambler.weapons.add(
Object.assign(new Weapon("gedd-rambler-weapon"), {
	mirror: true,
	x: 3,
	y: 0,
	shootY: 4,
	reload: 60,
	cooldownTime: 42,
	shootSound: Sounds.missile,
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new MissileBulletType(), {
		recoil: 0.8,
		backColor: Color.valueOf("84a94b"),
		frontColor: Color.valueOf("84a94b"),
		speed: 5,
		damage: 32,
		lifetime: 35,
		hitEffect: Fx.none,
		despawnEffect: Fx.none,
		trailColor: Color.valueOf("84a94b"),
		trailWidth: 0.8,
		trailLength: 14,
		trailChance: 0,
		homingRange: 80,
		homingPower: 0.05,
		hitSound: Sounds.bang,

	})
})
)


//Mech
const daggerL = new UnitType("dagger-l");
exports.daggerL = daggerL;
Object.assign(daggerL, {
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	speed: 3.72,
	drag: 0.11,
	hitSize: 4,
	rotateSpeed: 3,
	health: 100,
	armor: 2,
        shadowElevation: 0.1,
	groundLayer: 74,
	
	constructor: () => new MechUnit.create(),
})
daggerL.weapons.add(
Object.assign(new Weapon("gedd-dagger-l-weapon"), {
	mirror: true,
	x: -4,
	y: 1,
	shootY: 4,
	reload: 8,
	cooldownTime: 42,
	shootSound: Sounds.shootSnap,
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new BasicBulletType(), {
		recoil: 0,
		backColor: Color.valueOf("ffeb39"),
		frontColor: Color.valueOf("fff171"),
		speed: 2,
		damage: 5,
		lifetime: 25,
		hitEffect: Fx.none,
		despawnEffect: Fx.none,
		trailColor: Color.valueOf("eeffaa"),
		trailWidth: 0.8,
		trailLength: 14,
		trailChance: 0,
		hitSound: Sounds.none,

	})
})
)



const burin = new UnitType("burin");
exports.burin = burin;
Object.assign(burin, {
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	speed: 0.72,
	drag: 0.11,
	hitSize: 11,
	rotateSpeed: 3,
	health: 480,
	armor: 2,
        shadowElevation: 0.1,
	groundLayer: 74,
	
	constructor: () => new MechUnit.create(),
})
burin.weapons.add(
Object.assign(new Weapon("gedd-burin-weapon"), {
	mirror: true,
	x: -4,
	y: 1,
	shootY: 4,
	reload: 18,
	recoil: 1.75,
	cooldownTime: 42,
	shootSound: Sounds.shootSnap,
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new BasicBulletType(), {
		recoil: 0,
		backColor: Color.valueOf("ffeb39"),
		frontColor: Color.valueOf("fff171"),
		speed: 5,
		damage: 20,
		lifetime: 35,
		hitEffect: Fx.none,
		despawnEffect: Fx.none,
		trailColor: Color.valueOf("eeffaa"),
		trailWidth: 0.8,
		trailLength: 14,
		trailChance: 0,
		hitSound: Sounds.none,

	})
})
)


const upset = new UnitType("upset");
exports.upset = upset;
Object.assign(upset, {
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	speed: 0.52,
	drag: 0.11,
	hitSize: 15,
	rotateSpeed: 2.2,
	health: 690,
	armor: 5,
	shadowElevation: 0.1,
	groundLayer: 74,
	
	constructor: () => new MechUnit.create()
})
upset.weapons.add(
Object.assign(new Weapon("gedd-upset-weapon"), {
	mirror: true,
	x: -6,
	y: -2,
	recoil: 2.5,
	shootY: 4,
	reload: 14,
	cooldownTime: 42,
	shootSound: Sounds.shootBig,
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new BasicBulletType(), {
		recoil: 1,
		backColor: Color.valueOf("ffeb39"),
		frontColor: Color.valueOf("fff171"),
		speed: 4,
		width: 7,
		height: 8.5,
		damage: 20,
		lifetime: 35,
		hitEffect: Fx.none,
		despawnEffect: Fx.none,
		trailColor: Color.valueOf("eeffaa"),
		trailWidth: 0.8,
		trailLength: 14,
		trailChance: 1,
		hitSound: Sounds.none
	})
})
);

const flarel = new UnitType("flare-l");
exports.flarel = flarel;
Object.assign(flarel, {
	constructor: () => new UnitEntity.create(),
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	drawCell: true,
	healFlash: true,
	healColor: Pal.neoplasm1,
	health: 80,
	speed: 3,
	flying: true,
	hitSize: 2,
	engineOffset: 5.5,
	armor: 0,
})
flarel.weapons.add(
Object.assign(new Weapon("none"), {
	mirror: false,
	x: 0,
	y: 1,
	shootY: 4,
	reload: 10,
	cooldownTime: 42,
	shootSound: Sounds.shootSnap,
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new BasicBulletType(), {
		recoil: 0,
		backColor: Color.valueOf("84a94b"),
		frontColor: Color.valueOf("84a94b"),
		lifetime: 35,
		damage:4,
		speed: 2,
		hitEffect: Fx.none,
		despawnEffect: Fx.none,
		trailColor: Color.valueOf("84a94b"),
		trailWidth: 0.8,
		trailLength: 14,
		trailChance: 0,
		hitSound: Sounds.none,
		
	})
})
)
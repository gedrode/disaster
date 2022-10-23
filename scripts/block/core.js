const item = require("item");
const status = require("status");

//lampholder
const lampholder = new UnitType("lampholder");
Object.assign(lampholder, {
	aiController: UnitTypes.alpha.aiController,
	isEnemy: false,

	lowAltitude: true,
	flying: true,
	mineSpeed: 8.5,
	mineHardnessScaling: false,
	mineTier: 2,
	buildSpeed: 0.75,
	drag: 0.05,
	speed: 3,
	rotateSpeed: 15,
	accel: 0.1,
	itemCapacity: 30,
	health: 150,
	engineOffset: 6,
	hitSize: 8,
	alwaysUnlocked: true,
	constructor: () => new UnitEntity.create(),
})
lampholder.weapons.add(
Object.assign(new RepairBeamWeapon("gedd-lampholder-rweapon"), {
	mirror: false,
	x: 0,
	y: 0,
	targetBuildings: true,
	targetUnits: false,
	rotate: false,
	repairSpeed: 0.5,
}),
Object.assign(new Weapon(), {
	mirror: false,
	x: 0,
	y: 1,
	shootY: 4,
	reload: 28,
	cooldownTime: 12,
	shootSound: Sounds.laser,
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new LaserBulletType(), {
		recoil: 0.2,
		speed: 0,
		damage: 12,
		lifetime: 35,
		hitSound: Sounds.none,
		smokeEffect: Fx.hitLaser,
		hitEffect: Fx.hitLaser,
		despawnEffect: Fx.hitLaser,
                buildingDamageMultiplier: 0.001,
	})
})
)

const halo = new UnitType("halo");
Object.assign(halo, {
	aiController: UnitTypes.alpha.aiController,
	isEnemy: false,

	lowAltitude: true,
	flying: true,
	mineSpeed: 9.5,
	mineHardnessScaling: false,
	mineTier: 2,
	buildSpeed: 1,
	drag: 0.05,
	speed: 3.2,
	rotateSpeed: 15,
	accel: 0.1,
	itemCapacity: 30,
	health: 350,
	engineOffset: 6,
	hitSize: 10,
	alwaysUnlocked: true,
	constructor: () => new UnitEntity.create(),
})
halo.weapons.add(
Object.assign(new RepairBeamWeapon("gedd-halo-rweapon"), {
	mirror: false,
	x: 0,
	y: 0,
	targetBuildings: true,
	targetUnits: false,
	rotate: false,
	repairSpeed: 0.8,
}),
Object.assign(new Weapon(), {
	mirror: false,
	x: 0,
	y: 1,
	shootY: 4,
	reload: 20,
	cooldownTime: 12,
	shootSound: Sounds.laser,
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new LaserBulletType(), {
		recoil: 0.2,
		speed: 0,
		damage: 20,
		lifetime: 35,
		hitSound: Sounds.none,
		smokeEffect: Fx.hitLaser,
		hitEffect: Fx.hitLaser,
		despawnEffect: Fx.hitLaser,
                buildingDamageMultiplier: 0.001,
	})
})
)

const pilgrim = new UnitType("pilgrim");
Object.assign(pilgrim, {
	aiController: UnitTypes.alpha.aiController,
	isEnemy: false,

	lowAltitude: true,
	flying: true,
	mineSpeed: 10.5,
	mineHardnessScaling: false,
	mineTier: 2,
	buildSpeed: 1.6,
	drag: 0.05,
	speed: 4,
	rotateSpeed: 16,
	accel: 0.1,
	itemCapacity: 30,
	health: 750,
	engineOffset: 6,
	hitSize: 10,
	alwaysUnlocked: true,
	constructor: () => new UnitEntity.create(),
})
pilgrim.weapons.add(
Object.assign(new RepairBeamWeapon("gedd-pilgrim-rweapon"), {
	mirror: true,
	x: 8,
	y: 0,
	targetBuildings: true,
	targetUnits: true,
	rotate: false,
	repairSpeed: 1.2,
}),
Object.assign(new Weapon(), {
	mirror: false,
	x: 0,
	y: 1,
	shootY: 4,
	reload: 20,
	cooldownTime: 12,
	shootSound: Sounds.laser,
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new LaserBulletType(), {
		recoil: 0,
		speed: 0,
		damage: 28,
		lifetime: 35,
		hitSound: Sounds.none,
		smokeEffect: Fx.hitLaser,
		hitEffect: Fx.hitLaser,
		despawnEffect: Fx.hitLaser,
                buildingDamageMultiplier: 0.001,
	})
})
)

const aperture = CoreBlock("aperture");
exports.aperture = aperture
Object.assign(aperture, {
	alwaysUnlocked: true,
	isFirstTier: true,
	unitType: lampholder,
	health: 1500,
	itemCapacity: 5000,
	size: 3,
	unitCapModifier: 12,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		item.steel, 1000,
		item.aluminum, 500,
		item.iron, 200,
	)
})


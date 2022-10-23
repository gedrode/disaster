const item = require('item');

const ironWall = new Wall("iron-wall");
exports.ironWall = ironWall;
Object.assign(ironWall, {
	chanceDeflect: 7.2,
	flashHit: true,
	flashColor: Color.valueOf("98ba53"),
	deflectSound: Sounds.none,
	health: 600,
	armor: 4,
	size: 1,
	buildCostMultiplier: 4,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.iron, 12,
	),
})

const ironWallLarge = new Wall("iron-wall-large");
exports.ironWallLarge = ironWallLarge;
Object.assign(ironWallLarge, {
	chanceDeflect: 7.2,
	flashHit: true,
	flashColor: Color.valueOf("98ba53"),
	deflectSound: Sounds.none,
	health: 620 * 4,
	armor: 6,
	size: 2,
	buildCostMultiplier: 4,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.iron, 12 * 4,
	),
})

const steelWall = new Wall("steel-wall");
exports.steelWall = steelWall;
Object.assign(steelWall, {
	chanceDeflect: 7.2,
	flashHit: true,
	flashColor: Color.valueOf("98ba53"),
	deflectSound: Sounds.none,
	health: 610,
	armor: 5,
	size: 1,
	buildCostMultiplier: 4,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.steel, 14,
	),
})

const steelWallLarge = new Wall("steel-wall-large");
exports.steelWallLarge = steelWallLarge;
Object.assign(steelWallLarge, {
	chanceDeflect: 7.2,
	flashHit: true,
	flashColor: Color.valueOf("98ba53"),
	deflectSound: Sounds.none,
	health: 620 * 4,
	armor: 8,
	size: 2,
	buildCostMultiplier: 4,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.steel, 14 * 4,
	),
})

const aluminumAlloyWall = new Wall("aluminum-alloy-wall");
exports.aluminumAlloyWall = aluminumAlloyWall;
Object.assign(aluminumAlloyWall, {
	chanceDeflect: 7.2,
	flashHit: true,
	flashColor: Color.valueOf("98ba53"),
	deflectSound: Sounds.none,
	health: 780,
	armor: 7,
	size: 1,
	buildCostMultiplier: 4,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.aluminumAlloy, 14,
	),
})

const aluminumAlloyWallLarge = new Wall("aluminum-alloy-wall-large");
exports.aluminumAlloyWallLarge = aluminumAlloyWallLarge;
Object.assign(aluminumAlloyWallLarge, {
	chanceDeflect: 7.2,
	flashHit: true,
	flashColor: Color.valueOf("98ba53"),
	deflectSound: Sounds.none,
	health: 820 * 4,
	armor: 10,
	size: 2,
	buildCostMultiplier: 4,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.aluminumAlloy, 14 * 4,
	),
})
const item = require('item');
const liquid = require('liquid')

const furnace = new GenericCrafter("furnace");
exports.furnace = furnace;
Object.assign(furnace, {
	health: 240,
	craftEffect: Fx.smeltsmoke,
	outputItem: new ItemStack(item.steel, 1),
	craftTime: 40,
	size: 2,
	hasItems:true,
	hasPower: true,
	hasLiquids: false,
	drawer: new DrawMulti(
		new DrawDefault(), 
		Object.assign(new DrawRegion("-top"), {
		})
	),
	ambientSound: Sounds.smelter,
	ambientSoundVolume: 0.14,
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.copper, 60,
		Items.lead, 60,
	)
})
furnace.consumeItems(ItemStack.with(
	item.braize, 3, 
	item.iron, 2,
));
furnace.consumePower(0.50);

const aluminumAlloyFurnace = new GenericCrafter("aluminum-alloy-furnace");
exports.aluminumAlloyFurnace = aluminumAlloyFurnace;
Object.assign(aluminumAlloyFurnace, {
	craftEffect: Fx.none,
	outputItem: new ItemStack(item.aluminumAlloy, 1),
	craftTime: 180,
	size: 2,
	hasPower: true,
	hasLiquids: false,
	hasItems: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		Items.lead, 70,
		item.steel, 80,
		item.aluminum, 60,
	),
})
aluminumAlloyFurnace.consumePower(70 / 60);
aluminumAlloyFurnace.consumeItems(ItemStack.with(
	item.aluminum, 3, 
	item.steel, 2
));


const thermiteMixer = new GenericCrafter("thermite-mixer");
exports.thermiteMixer = thermiteMixer;
Object.assign(thermiteMixer, {
	hasItems: true,
	hasLiquids: false,
	hasPower: true,
	craftTime: 30,
	itemCapacity: 15,
	outputItem: new ItemStack(item.thermite, 3),
	size: 2,
	health: 120,
	craftEffect: Fx.formsmoke,
	updateEffect: Fx.plasticburn,
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		item.steel, 170,
		Items.copper, 80,
	)
})
thermiteMixer.consumePower(15 / 60);
thermiteMixer.consumeItems(ItemStack.with(
	item.iron, 3,
	item.aluminum, 2
));

const coalCrusher = new GenericCrafter("coal-crusher");
exports.coalCrusher = coalCrusher;
Object.assign(coalCrusher, {
	outputItem: new ItemStack(item.braize, 1),
	size: 1,
	hasPower: true,
	hasItems: true,
	hasLiquids: false,
	rotate: true,
	outputsLiquid: false,
	craftTime: 20,
	drawer: new DrawMulti(
		new DrawDefault(), 
		Object.assign(new DrawRegion("-top"), {
		})
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.copper, 70,
		Items.lead, 90,
	),
})
coalCrusher.consumePower(1)
coalCrusher.consumeItems(ItemStack.with(
	Items.sand, 3,
	Items.coal, 2
));

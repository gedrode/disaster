const unit = require('unit');
const heli = require('helicopter');
const item = require('item');

const UnitPlan = UnitFactory.UnitPlan

const steelUnitFactory = new UnitFactory("steel-unit-factory");
exports.steelUnitFactory = steelUnitFactory;
Object.assign(steelUnitFactory, {
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	plans: Seq.with(
		new UnitPlan(unit.burin, 60 * 12, ItemStack.with(
			item.steel, 80,
			Items.silicon, 40,
		)),
	),
	requirements: ItemStack.with(
		Items.lead, 80,
		item.steel, 120,
		Items.silicon, 100,
	),
	/*drawer: new DrawMulti(
		new DrawLiquidTile(Liquids.water),
		new DrawLiquidTile(Liquids.cryofluid),
		new DrawDefault()),*/
})
steelUnitFactory.consumePower(1.7);

const aluminumAlloyUnitFactory = new UnitFactory("aluminum-alloy-unit-factory");
exports.aluminumAlloyUnitFactory = aluminumAlloyUnitFactory;
Object.assign(aluminumAlloyUnitFactory, {
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	plans: Seq.with(
		new UnitPlan(unit.rambler, 60 * 12, ItemStack.with(
			item.steel, 60,
			item.aluminumAlloy, 80,
			Items.silicon, 50,
		)),
		new UnitPlan(heli.flutter, 60 * 12, ItemStack.with(
			item.steel, 80,
			item.aluminumAlloy, 70,
			Items.silicon, 40,
		)),
	),
	requirements: ItemStack.with(
		Items.lead, 140,
		item.aluminumAlloy, 100,
		item.steel, 160,
		Items.silicon, 140,
	),
})
aluminumAlloyUnitFactory.consumePower(1.7);

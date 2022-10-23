const nodeRoot = TechTree.nodeRoot;
const nodeProduce = TechTree.nodeProduce
const node = TechTree.node;
const SectorComplete = Objectives.SectorComplete;
const OnSector = Objectives.OnSector;
const Research = Objectives.Research;

const planet = require('Gelian');
const item = require('item');
const liquid = require('liquid');
const unit = require('unit');
const factory = require('block/factory');
const wall = require('block/wall');
const unitFactory = require('block/unitFactory');

planet.Gelian.techTree = nodeRoot("Gelian", planet.Gelian, () => {
	node(planet.hardLanding, Seq.with(
	new SectorComplete(SectorPresets.groundZero)), () => {
		node(planet.oldIndustrialArea, Seq.with(
		new SectorComplete(planet.hardLanding)), () => {})
	}),
	node(factory.coalCrusher, () => {
		node(factory.furnace, () => {
			node(factory.aluminumAlloyFurnace, () => {}),
			node(factory.thermiteMixer, () => {})
		})
	}),
	node(unitFactory.steelUnitFactory, () => {
		node(unit.burin, () => {
			node(unit.rock, () => {})
		}),
		node(unitFactory.aluminumAlloyUnitFactory, () => {
			node(unit.rambler, () => {})
		})
	}),
	node(wall.ironWall, () => {
		node(wall.ironWallLarge, () => {}),
		node(wall.steelWall, () => {
			node(wall.steelWallLarge, () => {}),
			node(wall.aluminumAlloyWall, () => {
				node(wall.aluminumAlloyWallLarge, () => {})
			})
		})
	}),
	node(liquid.acidLiquor, () => {}),
	nodeProduce(item.iron, () => {
		nodeProduce(item.braize, () => {
			nodeProduce(item.steel, () => {}),

			nodeProduce(item.aluminum, () => {
				nodeProduce(item.aluminumAlloy, () => {}),
				nodeProduce(item.thermite, () => {})
			})
		})
	})
})
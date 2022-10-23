const item = require('item');

Object.assign(new OreBlock("iron-ore", item.iron), {
	oreDefault: true,
	oreThreshold: 0.864,
	oreScale: 24.904762,
})

const aluminumore = new OreBlock("aluminumore",item.aluminum)
Object.assign(aluminumore, {
	oreDefault: true,
	oreThreshold: 0.864,
	oreScale: 24.904762,
})
const status = require('status')

const acidLiquor = new Liquid("acid-liquor",Color.valueOf("84a94b"));
exports.acidLiquor = acidLiquor;
Object.assign(acidLiquor, {
	effect: status.acidEtching,
	flammability: 0,
	temperature: 0.3,
	heatCapacity: 1,
	viscosity: 0.3,
	explosiveness: 0,
	hidden: false,
})
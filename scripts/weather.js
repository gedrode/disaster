const status = require("status");
const liquid = require("liquid");

const acidRain = new RainWeather("acid-rain");
exports.acidRain = acidRain;
acidRain.attrs.set(Attribute.water, 0.2);
Object.assign(acidRain, {
	status: status.armorCorrosion,
	sound: Sounds.rain,
	soundVol: 0.35,
	liquid: liquid.acidLiquor,
	color: Color.valueOf("7CF389FF"),
})
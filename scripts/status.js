const armorCorrosion = extend(StatusEffect, "armor-corrosion", {
	update(unit, time) {
		if (unit.type.armor >= 1) {
		//如果 (代码中单位数据.装甲 大于或等于 3) 则 {
			unit.armor = unit.type.armor - 10
			//游戏中单位数据.装甲 是 代码中单位数据.装甲 - 3
		}
	}
})
    Object.assign(armorCorrosion, {
	color: Color.valueOf("7CF389FF"),
	damage: 0.1,
	effect: Fx.mineSmall,
	damageMultiplier: 0.9,
	healthMultiplier: 0.9,
	speedMultiplier: 0.9,
	reloadMultiplier: 0.9,
	buildSpeedMultiplier: 0.9,
})

const armorFatigue = extend(StatusEffect, "armor-fatigue", {
	update(unit, time) {
		if (unit.type.armor >= 10) {
		//如果 (代码中单位数据.装甲 大于或等于 ) 则 {
			unit.armor = unit.type.armor - 10
			//游戏中单位数据.装甲 是 代码中单位数据.装甲 - 3
		}
	}
})
    Object.assign(armorFatigue, {
	color: Color.valueOf("7CF389FF"),
	damage: 0.1,
	effect: Fx.mineSmall,
	damageMultiplier: 0.9,
	healthMultiplier: 0.9,
	speedMultiplier: 0.9,
	reloadMultiplier: 0.9,
	buildSpeedMultiplier: 0.9,
})

const acidEtching = new StatusEffect("acid-etching");
exports.acidEtching = acidEtching;
Object.assign(acidEtching, {
	color: Color.valueOf("7CF389FF"),
	damage: 0.75,
	effect: Fx.mineSmall,
	damageMultiplier: 0.9,
	healthMultiplier: 0.9,
	speedMultiplier: 0.9,
	reloadMultiplier: 0.9,
	buildSpeedMultiplier: 0.9,
})
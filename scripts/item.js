const iron = new Item("iron", Color.valueOf("bcaaaa"));
exports.iron = iron;
Object.assign(iron, {
	hardness: 3,
	cost:1,
})

const aluminum = new Item("aluminum", Color.valueOf("BED6E4FF"));
exports.aluminum = aluminum;
Object.assign(aluminum, {
	hardness: 2,
	cost:1,
})


const steel = new Item("steel", Color.valueOf("C3C3C3FF"));
exports.steel = steel;
Object.assign(steel, {
	cost: 1,
})

const aluminumAlloy = new Item("aluminum-alloy", Color.valueOf("BED6E4FF"));
exports.aluminumAlloy = aluminumAlloy;
Object.assign(aluminumAlloy, {
        cost:1,
})



const braize = new Item("braize", Color.valueOf("000000FF"));
exports.braize = braize;
Object.assign(braize, {
})

const thermite = new Item("thermite", Color.valueOf("949494FF"));
exports.thermite = thermite;
Object.assign(thermite, {
})

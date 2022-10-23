var modName = "gedd";

var i = 0;

function Helicopter(name){
	var u = extend(UnitType, name, {
		update(unit){
			i += Time.delta;
			return i
		},
		draw(unit){
			this.super$draw(unit);
		
			Draw.rect(Core.atlas.find(modName + "-" + name + "-rotator"), unit.x, unit.y, i * 2.4);
			Draw.rect(Core.atlas.find(modName + "-" + name + "-rotator-shade"), unit.x, unit.y, i * 10.2);
		},
		flying: true,
	});
	return u
}

const flutter = Helicopter("flutter");
exports. flutter = flutter;
Object.assign(flutter, {
	constructor: () => new UnitEntity.create(),
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	drawCell: true,
	healFlash: true,
	healColor: Pal.neoplasm1,
	health: 260,
	speed: 3,
	flying: true,
	hitSize: 8.5,
	engineOffset: 5.5,
	armor: 2,
})
flutter.weapons.add(
Object.assign(new Weapon("flutter-weapon"), {
	mirror: true,
	x: 4,
	y: 0,
	shootY: 4,
	reload: 18,
	cooldownTime: 12,
	shootSound: Sounds.shootSnap,
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new BasicBulletType(), {
		recoil: 0,
		lifetime: 35,
		damage:30,
		speed: 5,
		hitColor: Color.valueOf("98ba53"),
		backColor: Color.valueOf("98ba53"),
		trailColor: Color.valueOf("98ba53"),
		frontColor: Color.white,
		trailWidth: 1.7,
		trailLength: 5,
		despawnEffect: Fx.hitBulletColor,
		hitEffect: Fx.hitBulletColor,
		hitSound: Sounds.none,
	})
})
)
const item = require('item');
const status = require("status")

Blocks.salvo.ammoTypes.put(
	item.iron, Object.assign(new BasicBulletType(4, 24, "bullet"), {
		width: 10,
		height: 13,
		shootEffect: Fx.shootBig,
		smokeEffect: Fx.shootBigSmoke,
		ammoMultiplier: 4,
		lifetime: 60,
		frontColor: Color.valueOf("8da1e3"),
		backColor: Color.valueOf("8da1e3"),
		reloadMultiplier: 1.2,
	})
)

Blocks.duo.ammoTypes.put(
	item.iron, Object.assign(new BasicBulletType(4, 12, "bullet"), {
		width: 7,
		height: 13,
		shootEffect: Fx.shootBig,
		smokeEffect: Fx.shootBigSmoke,
		ammoMultiplier: 4,
		lifetime: 40,
		frontColor: Color.valueOf("8da1e3"),
		backColor: Color.valueOf("8da1e3"),
		reloadMultiplier: 1.2,
	})
)

Blocks.salvo.ammoTypes.put(
	item.thermite, Object.assign(new BasicBulletType(3.5, 21), {
		width: 10,
		height: 12,
		frontColor: Color.valueOf("ede892"),
		backColor: Color.valueOf("d9c668"),
		status: StatusEffects.melting,
		hitEffect: new MultiEffect(
			Fx.hitBulletSmall,
			Fx.fireHit
		),
		ammoMultiplier: 6,
		splashDamage: 16,
		splashDamageRadius: 32,
		makeFire: true,
		lifetime: 210 / 3.5,
	})
)


Blocks.duo.ammoTypes.put(
	item.thermite, Object.assign(new BasicBulletType(3.5, 10), {
		width: 10,
		height: 12,
		frontColor: Color.valueOf("ede892"),
		backColor: Color.valueOf("d9c668"),
		status: StatusEffects.melting,
		hitEffect: new MultiEffect(
			Fx.hitBulletSmall,
			Fx.fireHit
		),
		ammoMultiplier: 6,
		splashDamage: 16,
		splashDamageRadius: 32,
		makeFire: true,
		lifetime: 210 / 3.5,
	})
)

Blocks.hail.ammoTypes.put(
	Items.metaglass, Object.assign(new ArtilleryBulletType(3, 15), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 3.75,
		splashDamage: 27,
		backColor: Pal.gray,
		frontColor: Color.white,
		ammoMultiplier: 4,
		reloadMultiplier: 1.15,
		fragBullets: 5,
		fragBullet: Object.assign(new BasicBulletType(3, 8, "bullet"), {
			width: 5,
			height: 12,
			shrinkY: 1,
			lifetime: 20,
			backColor: Pal.gray,
			frontColor: Color.white,
			despawnEffect: Fx.none,
		})
	})
)

Blocks.ripple.ammoTypes.put(
	item.thermite, Object.assign(new ArtilleryBulletType(3.5, 25), {
		hitEffect: Fx.blastExplosion,
		knockback: 0.8,
		lifetime: 80,
		width: 13,
		height: 13,
		collidesTiles: false,
		splashDamageRadius: 25,
		splashDamage: 55,
		status: StatusEffects.melting,
		statusDuration: 60 * 12,
		frontColor: Color.valueOf("ede892"),
		backColor: Color.valueOf("d9c668"),
		makeFire: true,
		trailEffect: Fx.incendTrail,
		ammoMultiplier: 5,
	})
)

Blocks.ripple.ammoTypes.put(
	Items.metaglass, Object.assign(new ArtilleryBulletType(3, 15), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 3.75,
		splashDamage: 27,
		backColor: Pal.gray,
		frontColor: Color.white,
		ammoMultiplier: 4,
		reloadMultiplier: 1.15,
		fragBullets: 5,
		fragBullet: Object.assign(new BasicBulletType(3, 8, "bullet"), {
			width: 5,
			height: 12,
			shrinkY: 1,
			lifetime: 20,
			backColor: Pal.gray,
			frontColor: Color.white,
			despawnEffect: Fx.none,
		})
	})
)

Blocks.ripple.ammoTypes.put(
	item.steel, Object.assign(new ArtilleryBulletType(4.8, 38), {
		knockback: 0.8,
		lifetime: 40,
		width: 11,
		height: 11,
		collidesTiles: false,
		backColor: Pal.gray,
		frontColor: Color.white,
		ammoMultiplier: 4,
		reloadMultiplier: 1.15,
	})
)


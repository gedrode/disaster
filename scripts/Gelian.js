const core = require("block/core");
const lib = require("base/lib");
const sS = require("base/sectorSize");

const Gelian = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(Gelian, 4));
        this.super$load();
    }
}, "Gelian", Planets.sun, 1);
sS.planetGrid(Gelian, 3.3);
Gelian.generator = new SerpuloPlanetGenerator();
Gelian.visible = true;
Gelian.bloom = false;
Gelian.accessible = true;
Gelian.tidalLock = true
Gelian.atmosphereColor = Color.valueOf("00FFE1BE");
Gelian.alwaysUnlocked = true;
Gelian.atmosphereRadIn = 0.02;
Gelian.atmosphereRadOut = 0.2;
Gelian.localizedName = "Gelian";
Gelian.orbitRadius = 35;
Gelian.startSector = 1;
defaultCore: core.aperture,
exports.Gelian = Gelian;

const hardLanding = new SectorPreset("hardLanding", Gelian, 1);
hardLanding.alwaysUnlocked = true;
hardLanding.difficulty = 2;
hardLanding.captureWave = 25;
hardLanding.localizedName = "hardLanding";
exports.hardLanding = hardLanding;
lib.addToResearch(hardLanding, {
    parent: 'groundZero',
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.groundZero))
});

const oldIndustrialArea = new SectorPreset("oldIndustrialArea", Gelian, 2);
oldIndustrialArea.alwaysUnlocked = false;
oldIndustrialArea.difficulty = 3;
oldIndustrialArea.captureWave = 35;
oldIndustrialArea.localizedName = "oldIndustrialArea";
exports.oldIndustrialArea = oldIndustrialArea;
lib.addToResearch(oldIndustrialArea, {
    parent: 'hardLanding',
    objectives: Seq.with(
        new Objectives.SectorComplete(hardLanding))
});




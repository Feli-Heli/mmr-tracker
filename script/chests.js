function generalCanGetChest(chestlist) {
    var canGet = 0;
    var unopened = 0;
    for (var key in chestlist) {
        if (chestlist.hasOwnProperty(key)) {
            if (!chestlist[key].isOpened) {
                unopened++;
            }

            if (!chestlist[key].isOpened && chestlist[key].isAvailable()) {
                canGet++;
            }
        }
    }

    if (unopened == 0) {
        return "opened";
    }
    if (canGet == unopened) {
        return "available";
    }
    if (canGet == 0) {
        return "unavailable";
    }
    return "possible";
}

function hasBoom(){
    if(chuInLogic == true){
        return (items.Bombs || items.Blast || items.Goron && items.PowderKeg)
    }else {
        return (items.Bombs || items.Blast || items.Goron && items.PowderKeg)
    }
}

//Tricks and Gimmicks
function LongJump(){
    if(LongJump == true){
        return true
    }else {
        return false
    }
}
function Hovering(){
    if(Hovering == true){
        return true
    }else {
        return false
    }
}
function IndexWarp(){
    if(IndexWarp == true){
        return true
    }else {
        return false
    }
}
function RecoilFlip(){
    if(RecoilFlip == true){
        return true
    }else {
        return false
    }
}
function RecoilFlipIce(){
    if(RecoilFlipIce == true){
        return true
    }else {
        return false
    }
}
function DogRace(){
    if(DogRace == true){
        return true
    }else {
        return false
    }
}
function FDAnywhere(){
    if(FDAnywhere == true){
        return true
    }else {
        return false
    }
}

function Day1Grave(){
    if(Day1Grave == true){
        return true
    }else {
        return false
    }
}
function ActionSwap(){
    if(ActionSwap == true){
        return true
    }else {
        return false
    }
}
function Postman(){
    if(Postman == true){
        return true
    }else {
        return false
    }
}
function GoronBomb(){
    if(GoronBomb == true){
        return true
    }else {
        return false
    }
}
function BomberSkip(){
    if(BomberSkip == true){
        return true
    }else {
        return false
    }
}
function BigOctoSkip(){
    if(BigOctoSkip == true){
        return true
    }else {
        return false
    }
}
function DekuSkip(){
    if(DekuSkip == true){
        return true
    }else {
        return false
    }
}
function TerminaStump(){
    if(TerminaStump == true){
        return true
    }else {
        return false
    }
}
function GoronLedge(){
    if(GoronLedge == true){
        return true
    }else {
        return false
    }
}
function FastBank(){
    if(FastBank == true){
        return true
    }else {
        return false
    }
}
function RunPoisoned(){
    if(RunPoisoned == true){
        return true
    }else {
        return false
    }
}
function JumpSlashClip(){
    if(JumpSlashClip == true){
        return true
    }else {
        return false
    }
}
// trick functions
function canPlay(song){
    return (song && items.Ocarina);
}
function canLongJump() {
    return LongJump && items.Bombs;
}
function canActionSwap() {
    return (ActionSwap && (items.Bow || items.Hookshot || items.Fire || items.Ice || items.Light) && items.stick && items.shield);
}
function canGoronBomb() {
    return (GoronBomb && items.Goron && items.Bombs);
}
function canUseFD() {
    return (FDAnywhere && items.FD);
}
function canRecoilFlip() {
    return (RecoilFlip && items.shield && hasBoom());
}
function canHover() {
    return (Hovering && items.shield && items.Bombs && (items.Sword || items.stick || items.GFsword));
}
function canIndexWarp() {
    return (IndexWarp && (canHover() || canActionSwap()) && canPlay(items.Soaring));
}
function canBigOctoSkip() {
    return (BigOctoSkip && (items.Deku || items.Goron));
}
function canGoronLedge() {
    return GoronLedge && items.Goron;
}
function canRunPoisoned() {
    return RunPoisoned && (items.Goron || items.Zora || canUseFD());
}
function canJumpSlashClip() {
    return JumpSlashClip && (items.Sword || items.stick || items.GFsword);
}

// area access
function canAccessHideout() {
    return items.Deku || (items.Bow || items.Hookshot || items.Zora) || BomberSkip || canHover() || canGoronBomb();
}
function canAccessDekuPalace() {
    return (items.Bottle || items.Pictobox || items.Zora || items.Hookshot || items.Bow || canBigOctoSkip() || canIndexWarp()) && (canRunPoisoned() || items.Deku) && (items.Deku || DekuSkip);
}
function canAccessWoodFall() {
    return (items.Bottle || items.Pictobox || items.Zora || items.Hookshot || items.Bow || canBigOctoSkip() || canIndexWarp()) && (canRunPoisoned() || items.Deku) && (items.Deku || canHover());
}
function canAccessMountain() {
    return (((items.Bow && (hasBoom() || items.Goron || (items.Fire && items.Magic))) || (RecoilFlipIce && items.shield && hasBoom()) || (Hovering && items.shield && (items.Sword || items.stick || items.GFsword) && (hasBoom() || items.Goron) || (items.Bow&& items.Fire && items.Magic)) || canIndexWarp()));
}
function canAccessSnowhead() {
    return canAccessMountain() && (items.Goron && canPlay(items.Lullaby));
}
function canAccessRanch() {
    return ((items.Goron && items.PowderKeg) || canHover() || canUseFD());
}
function canAccessOcean() {
    return (canPlay(items.EponasSong) || canHover() || canIndexWarp() || canGoronBomb());
}
function canAccessGBT() {
    return ((canAccessOcean() && canPlay(items.NewWave) && items.Zora) && (items.Hookshot || canHover() || canUseFD()));
}
function canAccessGraveyard() {
    return (canPlay(items.EponasSong) || canHover() || canIndexWarp() || canGoronBomb());
}
function canAccessCanyon() {
    return (((canPlay(items.EponasSong) || canGoronBomb()) && items.Hookshot && (items.Garo || items.Gibdo)) || canHover() || canIndexWarp());
}
function canAccessStoneTower() {
    return canAccessCanyon() && (((items.Goron || items.Zora) && items.Hookshot && canPlay(items.Elegy)) || canHover() || canIndexWarp()) && canPlay(items.Elegy);
}


// define dungeon chests
var dungeons = [
     {
        name: "South Clock Town",
        x: "55.5%",
        y: "53.5%",
        chestlist: {
            'Clock Tower Entrance': { isAvailable: function () {
                return true; }, },
            'Clock Town Scrub Trade': { isAvailable: function () {
                return items.Moonstear; }, },
            'Postbox': { isAvailable: function () {
                return items.Postman; }, },
            'Final Day Chest': { isAvailable: function () {
                return (items.Deku && items.Moonstear) || items.Hookshot || canHover(); }, },
            'Straw Roof Chest': { isAvailable: function () {
                return canHover() || items.Hookshot || canGoronLedge() || canJumpSlashClip() || canLongJump(); }, },
            'Laundry Pool: Guru Guru': { isAvailable: function () {
                return true; }, },
            'Laundry Pool: Kafei': { isAvailable: function () {
                return items.Letter; }, },
            'Laundry Pool: Curiosity Shop Man #1': { isAvailable: function () {
                return items.Letter; }, },
            'Laundry Pool: Curiosity Shop Man #2': { isAvailable: function () {
                return items.Letter; }, },        
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "North Clock Town",
        x: "55.5%",
        y: "48.5%",
        chestlist: {

            'Bombers Hide and Seek': { isAvailable: function () {
                return items.Bow || items.Hookshot || items.Zora || (items.Deku && items.Magic) ; }, },
            'Clock Town Map Purchase': { isAvailable: function () {
                return items.Bow || items.Hookshot || items.Zora || (items.Deku && items.Magic); }, },
            'Deku Playground Any Day': { isAvailable: function () {
                return items.Deku; }, },
            'Deku Playground Three Days': { isAvailable: function () {
                return items.Deku; }, },    
            'Keaton Quiz': { isAvailable: function () {
                return items.Keaton; }, },
            'North Clock Town Tree': { isAvailable: function () {
                return true; }, },
            'Old Lady (Blastmask)': { isAvailable: function () {
                return items.Zora || items.Sword || items.GFsword || canUseFD() || items.Goron; }, },
            'Town Great Fairy': { isAvailable: function () {
                return true; }, },
            'Town Great Fairy Non-Human': { isAvailable: function () {
                return items.Deku || items.Zora || items.Goron || canUseFD(); }, },            
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "West Clock Town",
        x: "52.8%",
        y: "51.0%",
        chestlist: {
            'All-Night Mask Purchase': { isAvailable: function () {
                return (items.Zora || items.Sword || items.GFsword || canUseFD() || items.Goron) && items.Wallet >= 2; }, },
            'Bank Reward #1': { isAvailable: function () {
                return true; }, },
            'Bank Reward #2': { isAvailable: function () {
                return items.Wallet >= 1 || FastBank; }, },
            'Bank Reward #3': { isAvailable: function () {
                return items.Wallet >= 2 || (FastBank && items.Wallet >= 1); }, },
            'Bomb Shop Purchases': { isAvailable: function () {
                return true; }, },
            'Big Bomb Bag Purchase': { isAvailable: function () {
                return items.Zora || items.Sword || items.GFsword || canUseFD() || items.Goron; }, },  
            'Postmans Game': { isAvailable: function () {
                return items.Bunny || Postman; }, }, 
            'Rosa Sisters': { isAvailable: function () {
                return items.Kamaro; }, }, 
            'Swordsmans School': { isAvailable: function () {
                return items.Sword; }, },
            'Trading Post Purchases': { isAvailable: function () {
                return true; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "East Clock Town",
        x: "58.3%",
        y: "51.0%",
        chestlist: {
            'Bombers Hideout Chest': { isAvailable: function () {
                return canAccessHideout() && hasBoom(); }, },
            'East Clock Town Chest': { isAvailable: function () {
                return true; }, },
            'Gorman': { isAvailable: function () {
                return items.Deku && items.Goron && items.Zora && items.Romani; }, },
            'Honey and Darling Any Day': { isAvailable: function () {
                return items.Bombs || items.Bow; }, },
            'Honey and Darling Three Days': { isAvailable: function () {
                return items.Bombs && items.Bow; }, },
            'Madame Aroma in Office': { isAvailable: function () {
                return true; }, },   
            'Madame Aroma in Bar': { isAvailable: function () {
                return items.Kafei && items.ExpressMail; }, },
            'Mayor': { isAvailable: function () {
                return items.Couple; }, },  
            'Milk Bar Chateau': { isAvailable: function () {
                return items.Romani && items.Wallet >= 1; }, },      
            'Milk Bar Milk': { isAvailable: function () {
                return items.Romani; }, },
            'Postmans Freedom Reward': { isAvailable: function () {
                return items.ExpressMail; }, },
            'Town Archery #1': { isAvailable: function () {
                return items.Bow; }, },   
            'Town Archery #2': { isAvailable: function () {
                return items.Bow; }, }, 
            'Treasure Chest Game Goron': { isAvailable: function () {
                return items.Goron; }, },                     
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
        {
        name: "Stock Pot Inn",
        x: "59.3%",
        y: "56.0%",
        chestlist: {

            'Anju and Kafei': { isAvailable: function () {
                return canAccessCanyon() && items.Pendant && items.Kafei && (items.Roomkey || items.Deku || canHover() || canRecoilFlip()); }, },
            'Grandma Long Story': { isAvailable: function () {
                return items.Allnight; }, },
            'Grandma Short Story': { isAvailable: function () {
                return items.Allnight; }, },
            'Inn Guest Room Chest': { isAvailable: function () {
                return items.Roomkey; }, },
            'Inn Reservation': { isAvailable: function () {
                return true; }, },
            'Inn Staff Room Chest': { isAvailable: function () {
                return true; }, },
            'Midnight Meeting': { isAvailable: function () {
                return items.Kafei && (items.Roomkey || items.Deku || canHover() || canRecoilFlip()); }, },
            'Toilet Hand': { isAvailable: function () {
                return (items.Roomkey || items.Deku || canHover() || canRecoilFlip()) && (items.LandDeed || items.SwampDeed || items.MountainDeed || items.OceanDeed || items.Letter || items.ExpressMail); }, },            
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Woodfall Temple",
        x: "14.5%",
        y: "15.0%",
        chestlist: {
            'Bow Chest': { isAvailable: function () { return canAccessWoodFall() && items.Deku && canPlay(items.Sonata); }, },
            'Compass Chest': { isAvailable: function () { return canAccessWoodFall() && items.Deku && canPlay(items.Sonata); }, },
            'Map Chest': { isAvailable: function () { return canAccessWoodFall() && items.Deku && canPlay(items.Sonata); }, },
            'Small Key Chest': { isAvailable: function () { return canAccessWoodFall() && items.Deku && canPlay(items.Sonata); }, },
            'Boss Key Chest': { isAvailable: function () { return canAccessWoodFall() && items.Deku && canPlay(items.Sonata) && items.Bow; }, },
            'Odolwa': { isAvailable: function () { return canAccessWoodFall() && items.Deku && canPlay(items.Sonata) && items.Bow && (items.Sword || items.GFsword || items.FD || items.Zora || items.Goron); }, },
        },
        isBeatable: function() {
            if (items.Deku && canPlay(items.Sonata) && items.Bow) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Stone Tower Temple",
        x: "14.5%",
        y: "42.0%",
        chestlist: {
            'Map Chest': { isAvailable: function () {
                return canAccessStoneTower() && (items.Goron && (items.shield >=2 || items.Light && items.Bow && items.Magic) || items.Zora && items.Light && items.Bow && items.Magic); }, },
            'Armos Room Chest': { isAvailable: function () {
                return canAccessStoneTower() && (items.Goron || items.Zora && (items.Light && items.Bow && items.Magic || items.Bottle)); }, },
            'Compass Chest': { isAvailable: function () {
                return canAccessStoneTower() && (items.Light && items.Bow && items.Magic || items.Bottle || items.shield >=2); }, },
            'Eyegore Room Chest': { isAvailable: function () {
                return canAccessStoneTower() && (items.Goron || items.Zora) || canPlay(items.Elegy) && (items.Light && items.Bow && items.Magic || items.Bottle); }, },    
            'Light Arrow Chest': { isAvailable: function () {
                return canAccessStoneTower() && items.Deku || canPlay(items.Elegy) && items.Light && items.Bow && items.Magic; }, },
            'Updraft Room Chest': { isAvailable: function () {
                return canAccessStoneTower() && items.Light && items.Bow && items.Magic; }, },
            'Boss Key Chest': { isAvailable: function () {
                return canAccessStoneTower() && items.Light && items.Bow && items.Magic; }, },
            'Giants Mask Chest': { isAvailable: function () {
                return canAccessStoneTower() && items.Light && items.Bow && items.Magic; }, },
            'Death Armos Room Chest': { isAvailable: function () {
                return canAccessStoneTower() && items.Light && items.Bow && items.Magic && (canPlay(items.Elegy) || items.Hookshot); }, },
            'Twinmold': { isAvailable: function () {
                return canAccessStoneTower() && items.Light && items.Bow && items.Magic; }, },
        },
         isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Snowhead Temple",
        x: "23.3%",
        y: "29.0%",
        chestlist: {
            'Bridge Room Chest': { isAvailable: function () {
                return canAccessSnowhead(); }, },
            'Map Chest': { isAvailable: function () {
                return canAccessSnowhead(); }, },
            'Block Room Chest': { isAvailable: function () {
                return canAccessSnowhead(); }, },
            'Compass Chest': { isAvailable: function () {
                return canAccessSnowhead(); }, },
            'Icicle Room Chest': { isAvailable: function () {
                return canAccessSnowhead() && hasBoom(); }, },
            'Fire Arrows Chest': { isAvailable: function () {
                return canAccessSnowhead() && hasBoom(); }, },
            'Boss Key Chest': { isAvailable: function () {
                return canAccessSnowhead() && items.Fire && items.Bow && items.Magic; }, },    
            'Goht': { isAvailable: function () {
                return canAccessSnowhead() && items.Fire && items.Bow && items.Magic; }, },           
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Great Bay Temple",
        x: "05.5%",
        y: "29.0%",
        chestlist: {
            'Map Chest': { isAvailable: function () {
                return canAccessGBT(); }, },
            'Compass Chest': { isAvailable: function () {
                return canAccessGBT(); }, },
            'Small Key Chest': { isAvailable: function () {
                return canAccessGBT(); }, },
            'Boss Key Chest': { isAvailable: function () {
                return canAccessGBT() && items.Ice && items.Bow && items.Magic; }, },    
            'Ice Arrow Chest': { isAvailable: function () {
                return canAccessGBT(); }, },
            'Gyorg': { isAvailable: function () {
                return canAccessGBT() && items.Ice && items.Fire && items.Bow && items.Magic; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Goron Village",
        x: "67.0%",
        y: "24.5%",
        chestlist: {
            'Baby Goron': { isAvailable: function () {
                return canAccessMountain() && items.Goron ; } },
            'Biggest Bomb Bag Purchase': { isAvailable: function () {
                return canAccessMountain() && (items.Goron || (items.Deku && items.Swampdeed && items.LandDeed && items.Moonstear)) && items.Wallet >=1; } },
            'Mountain Scrub Trade': { isAvailable: function () {
                return canAccessMountain() && items.Deku && items.SwampDeed; } },    
            'Goron Shop Purchases': { isAvailable: function () {
                return canAccessMountain(); } },
            'Goron Village Ledge': { isAvailable: function () {
                return canAccessMountain() && ((items.Deku && items.SwampDeed) || canHover()); } },
            'Lens Cave Invisible Chest': { isAvailable: function () {
                return canAccessMountain();  } },
            'Lens Cave Rock Chest': { isAvailable: function () {
                return canAccessMountain() && hasBoom();  } },
            'Lens Of Truth Chest': { isAvailable: function () {
                return canAccessMountain();  } },    
            'Powder Keg Challenge': { isAvailable: function () {
                return canAccessMountain() && items.Goron && (items.Magic && items.Fire || items.Goht);  } },     
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Twin Islands",
        x: "61.5%",
        y: "26.0%",
        chestlist: {
            'Goron Race': { isAvailable: function () {
                return canAccessMountain() && items.Goht && items.Goron ; } },
            'Goron Racetrack Grotto': { isAvailable: function () {
                return canAccessMountain() && (items.Goron || canHover()) && hasBoom(); } },
            'Hot Spring Water Grotto': { isAvailable: function () {
                return canAccessMountain() && hasBoom() && (items.Fire && items.Bow && items.Magic || (canPlay(items.Healing) && items.Lens && items.Bottle && items.Goron) || items.Goht || canRecoilFlip() || canActionSwap() && items.Bow); } },
            'Snowhead Map Purchase': { isAvailable: function () {
                return items.Bow || items.Hookshot || items.Deku && items.Magic || items.Zora; } },
            'Cave Chest': { isAvailable: function () {
                return canAccessMountain() && items.Goht && items.Zora;  } },
            'Underwater Ramp Chest': { isAvailable: function () {
                return canAccessMountain() && items.Goht && items.Zora;  } },
        },
              isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
   
    {
        name: "Termina Field",
        x: "55.5%",
        y: "59.5%",
        chestlist: {
            'Astronomy Telescope': { isAvailable: function () {
                return canAccessHideout(); }, },
            'Bio Baba Grotto': { isAvailable: function () {
                return (items.Bombs || items.Blast || items.Goron) && (items.Zora || items.Hookshot); }, },
            'Business Scrub Purchase': { isAvailable: function () {
                return canAccessHideout() && items.Wallet >=1; }, },
            'Dodongo Grotto': { isAvailable: function () {
                return items.Sword || items.Goron || items.stick || items.Zora || items.GFsword || canUseFD() || items.Bow || items.Bombs || items.Blast; }, },
            'Gossip Stones': { isAvailable: function () {
                return canPlay(items.Sonata) && items.Deku && (items.Bombs || items.Goron || items.Blast) || canPlay(items.NewWave) && items.Zora && (items.Bombs || items.Goron || items.Blast) || canPlay(items.Lullaby) && items.Goron; }, },
            'Kamaro': { isAvailable: function () {
                return canPlay(items.Healing); }, },
            'Peahat Grotto': { isAvailable: function () {
                return items.Sword || items.Goron || items.stick || items.Zora || items.GFsword || canUseFD() || items.Bow; }, },
            'Grass Chest': { isAvailable: function () {
                return true; }, },
            'Grass Grotto': { isAvailable: function () {
                return true; }, },
            'Pillar Grotto': { isAvailable: function () {
                return true; }, },
            'Stump Chest': { isAvailable: function () {
                return items.Hookshot || (items.Beans && items.Bottle) || TerminaStump; }, },
            'Underwater Chest': { isAvailable: function () {
                return items.Zora; }, },
        },
           isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Snowhead",
        x: "50.0%",
        y: "8.0%",
        chestlist: {
            'Snowhead Great Fairy': { isAvailable: function () {
                return canAccessMountain() && items.Goron && canPlay(items.Lullaby); }, },
        },
          isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Path to Snowhead",
        x: "54.0%",
        y: "15.0%",
        chestlist: {
            'Grotto': { isAvailable: function () {
                return canAccessMountain() && items.Goron && hasBoom(); }, },
            'Pillar': { isAvailable: function () {
                return canAccessMountain() && items.Goron && items.Lens && items.Magic && items.Hookshot; }, },    
        },
          isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Mountain Village",
        x: "56.0%",
        y: "25.0%",
        chestlist: {
            'Darmani': { isAvailable: function () {
                return canAccessMountain() && items.Magic && items.Lens && canPlay(items.Healing); }, },
            'Hungry Goron': { isAvailable: function () {
                return canAccessMountain() && items.Goron && items.Magic; }, },   
            'Mountain Smith Day 1': { isAvailable: function () {
                return canAccessMountain() && (items.Goht || (items.Bow && items.Fire && items.Magic) || canActionSwap()) && items.Wallet >=1; }, },
            'Mountain Smith Day 2': { isAvailable: function () {
                return canAccessMountain() && (items.Goht || (items.Bow && items.Fire && items.Magic) || canActionSwap()) && items.GoldDust; }, },
            'Mountain Spring Grotto': { isAvailable: function () {
                return canAccessMountain() && items.Goht; }, },
            'Waterfall Chest': { isAvailable: function () {
                return canAccessMountain() && items.Goht; }, },             
        },
          isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Road to Southern Swamp",
        x: "57.0%",
        y: "69.0%",
        chestlist: {
            'Grotto': { isAvailable: function () {
                return true; }, },
            'Tree': { isAvailable: function () {
                return items.Bow || items.Hookshot || items.Deku && items.Magic || items.Zora || items.Blast; }, },
            'Woodfall Map Purchase': { isAvailable: function () {
                return items.Bow || items.Hookshot || items.Deku && items.Magic || items.Zora; }, },
            'Swamp Archery #1': { isAvailable: function () {
                return items.Bow; }, },
            'Swamp Archery #2': { isAvailable: function () {
                return items.Bow; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Southern Swamp",
        x: "58.0%",
        y: "80.0%",
        chestlist: {
            'Boat Archery': { isAvailable: function () {
                return items.Odolwa && items.Bow; }, },
            'Kotake': { isAvailable: function () {
                return true; }, },
            'Koume': { isAvailable: function () {
                return items.Bottle; }, },
            'Mystery Woods Grotto': { isAvailable: function () {
                return true; }, },
            'Near Swamp Spider House Grotto': { isAvailable: function () {
                return (items.Bottle || items.Pictobox || items.Zora || items.Hookshot || items.Bow || canBigOctoSkip()) && (canRunPoisoned() || items.Deku); }, },
            'Pictograph Contest Winner': { isAvailable: function () {
                return items.Pictobox; }, },
            'Music Statue': { isAvailable: function () {
                return items.Bottle && items.Deku; }, },
            'Swamp Scrub Trade': { isAvailable: function () {
                return items.LandDeed; }, },
            'Swamp Spider House Reward': { isAvailable: function () {
                return (items.Bottle || items.Pictobox || items.Zora || items.Hookshot || items.Bow || canBigOctoSkip()) && (canRunPoisoned() || items.Deku) && (items.Bow || items.Zora || items.Hookshot) && (items.Hookshot || items.Beans && items.Bottle) && (items.Sword || items.GFsword || canUseFD()); }, },
            'Tourist Center Roof': { isAvailable: function () {
                return (items.Deku && items.LandDeed) || canGoronLedge() || canHover(); }, },
            'Witch Shop Blue Potion': { isAvailable: function () {
                return items.Scents && items.Bottle; }, },
            'Witch Shop Green Potion': { isAvailable: function () {
                return true; }, },
            'Witch Shop Red Potion': { isAvailable: function () {
                return true; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Woodfall",
        x: "61.0%",
        y: "87.0%",
        chestlist: {
            'Behind Woodfall Owl Chest': { isAvailable: function () {
                return canAccessWoodFall() && (items.Deku || canHover() || (items.Hookshot && canIndexWarp())); }, },
            'Entrance Chest': { isAvailable: function () {
                return canAccessWoodFall() && (items.Deku || canHover() || items.Hookshot || canRunPoisoned); }, },
            'Bridge Chest': { isAvailable: function () {
                return canAccessWoodFall() && (items.Deku || canHover() || items.Hookshot); }, },
            'Woodfall Great Fairy': { isAvailable: function () {
                return canAccessWoodFall() && items.Deku && canPlay(items.Sonata) && items.Bow; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Deku Palace",
        x: "58.0%",
        y: "96.0%",
        chestlist: {
            'Bean Grotto': { isAvailable: function () {
                return canAccessDekuPalace(); }, },
            'Bean Man': { isAvailable: function () {
                return canAccessDekuPalace(); }, },
            'Butler': { isAvailable: function () {
                return canAccessDekuPalace() && items.Deku && items.DekuPrincess && items.Odolwa && items.Bottle; }, },
            'Deku Palace West Garden': { isAvailable: function () {
                return canAccessDekuPalace(); }, },
            'Imprisoned Monkey': { isAvailable: function () {
                return canAccessDekuPalace() && items.Deku; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Milk Road",
        x: "50.5%",
        y: "62.5%",
        chestlist: {
            'Gorman Bros Race': { isAvailable: function () {
                return canPlay(items.EponasSong); }, },
            'Romani Ranch Map Purchase': { isAvailable: function () {
                return items.Bow || items.Hookshot || items.Zora || items.Deku && items.Magic; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Romani Ranch",
        x: "44.5%",
        y: "63.0%",
        chestlist: {
            'Aliens Defense': { isAvailable: function () {
                return canAccessRanch() && items.Bow; }, },
            'Cremia': { isAvailable: function () {
                return canAccessRanch() && items.Bow; }, },
            'Dog Race': { isAvailable: function () {
                return items.Truth || DogRace; }, },
            'Dog Race Chest': { isAvailable: function () {
                return items.Hookshot || items.Zora || canUseFD() || (items.Beans && items.Bottle) || canJumpSlashClip() || canHover(); }, },
            'Grog': { isAvailable: function () {
                return items.Bremen; }, },
            'Romanis Game': { isAvailable: function () {
                return canAccessRanch(); }, },            
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },    
    {
        name: "Great Bay Coast",
        x: "40.0%",
        y: "52.0%",
        chestlist: {
            'Grotto': { isAvailable: function () {
                return canAccessOcean(); }, },
            'Baby Zoras': { isAvailable: function () {
                return canAccessOcean() && items.Zora && items.Goron && items.Hookshot && items.Bottle; }, },
            'Fisherman Game': { isAvailable: function () {
                return canAccessOcean() && items.Gyorg; }, },
            'Ledge': { isAvailable: function () {
                return canAccessOcean() && items.Hookshot && items.Beans && items.Bottle; }, },
            'Great Bay Map Purchase (GB or Milk Road)': { isAvailable: function () {
                return items.Bow || items.Hookshot || items.Zora || canUseFD() || items.Deku && items.Magic; }, },
            'Lab Fish': { isAvailable: function () {
                return canAccessOcean() && items.Bottle; }, },
            'Mikau': { isAvailable: function () {
                return canAccessOcean() && canPlay(items.Healing); }, },
            'Ocean Spider House Chest': { isAvailable: function () {
                return canAccessOcean() && hasBoom() && items.Bow && items.Hookshot; }, },
            'Ocean Spider House Day 1 Reward': { isAvailable: function () {
                return canAccessOcean() && hasBoom() && items.Hookshot; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Zora Cape",
        x: "40.0%",
        y: "72.0%",
        chestlist: {
            'Beaver Race #1': { isAvailable: function () {
                return canAccessOcean() && items.Zora && items.Hookshot; }, },
            'Beaver Race #2': { isAvailable: function () {
                return canAccessOcean() && items.Zora && items.Hookshot; }, },
            'Ocean Great Fairy': { isAvailable: function () {
                return canAccessOcean() && canPlay(items.NewWave) && items.Zora && items.Ice && items.Bow && items.Magic; }, },
            'Grotto': { isAvailable: function () {
                return canAccessOcean() && (hasBoom() || items.Goron); }, },
            'Ledge With Tree Chest': { isAvailable: function () {
                return canAccessOcean() && items.Hookshot; }, },
            'Ledge Without Tree Chest': { isAvailable: function () {
                return canAccessOcean() && items.Hookshot; }, },
            'Like-Like': { isAvailable: function () {
                return canAccessOcean() && items.Zora; }, },
            'Underwater Chest': { isAvailable: function () {
                return canAccessOcean() && items.Zora; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Zora Hall",
        x: "32.0%",
        y: "65.0%",
        chestlist: {
            'Evan': { isAvailable: function () {
                return canAccessOcean() && items.Zora && items.Ocarina; }, },
            'Lulus Room Ledge': { isAvailable: function () {
                return canAccessOcean() && items.Zora && ((items.Goron && items.MountainDeed) || canGoronLedge() || canHover()); }, },
            'Ocean Scrub Trade': { isAvailable: function () {
                return canAccessOcean() && items.Zora && items.Goron && items.MountainDeed; }, },
            'Stage Lights': { isAvailable: function () {
                return canAccessOcean() && ((canActionSwap && items.Bow) || items.Fire && items.Magic && items.Bow); }, },
            'Zora Shop Purchases': { isAvailable: function () {
                return canAccessOcean(); }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Pinnacle Rock",
        x: "32.0%",
        y: "40.0%",
        chestlist: {
            'Lower Chest': { isAvailable: function () {
                return canAccessOcean() && items.Zora; }, },
            'Upper Chest': { isAvailable: function () {
                return canAccessOcean() && items.Zora; }, },
            'Seahorses': { isAvailable: function () {
                return canAccessOcean() && items.Zora && items.Bottle && items.Pictobox; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    }, 
    {
        name: "Pirates Fortress Exterior",
        x: "38.5%",
        y: "28.0%",
        chestlist: {
            'Corner Chest': { isAvailable: function () {
                return canAccessOcean() && items.Zora; }, },
            'Log Chest': { isAvailable: function () {
                return canAccessOcean() && items.Zora; }, },
            'Sand Chest': { isAvailable: function () {
                return canAccessOcean() && items.Zora; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    }, 
    {
        name: "Pirates Fortress Sewer",
        x: "40.5%",
        y: "23.0%",
        chestlist: {
            'Maze Chest': { isAvailable: function () {
                return canAccessOcean() && items.Zora && items.Goron; }, },
            'Cage': { isAvailable: function () {
                return canAccessOcean() && items.Zora && items.Goron; }, },
            'Cage Room Deep Chest': { isAvailable: function () {
                return canAccessOcean() && items.Zora && items.Goron; }, },
            'Cage Room Shallow Chest': { isAvailable: function () {
                return canAccessOcean() && items.Zora && items.Goron; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },   
    {
        name: "Pirates Fortress Interior",
        x: "40.5%",
        y: "18.0%",
        chestlist: {
            'Hookshot Chest': { isAvailable: function () {
                return canAccessOcean() && items.Zora && (items.Goron || items.Hookshot || canHover()) && (items.Bow || items.Hookshot || items.Deku && items.Magic); }, },
            'Guard Room Chest': { isAvailable: function () {
                return canAccessOcean() && items.Zora && (items.Goron || items.Hookshot || canHover()); }, },
            'Lower Chest': { isAvailable: function () {
                return canAccessOcean() && items.Zora && (items.Goron || items.Hookshot || canHover()); }, },
            'Upper Chest': { isAvailable: function () {
                return canAccessOcean() && items.Zora && (items.Goron || items.Hookshot || canHover()); }, },
            'Tank Chest': { isAvailable: function () {
                return canAccessOcean() && items.Zora && (items.Hookshot || canHover()); }, },    
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
   {
        name: "Road to Ikana",
        x: "66.0%",
        y: "50.5%",
        chestlist: {
            'Pillar Chest': { isAvailable: function () {
                return items.Hookshot || canHover(); }, },
            'Grotto': { isAvailable: function () {
                return items.Goron; }, },
            'Invisible Soldier': { isAvailable: function () {
                return canAccessGraveyard() && items.Lens && items.Magic && items.Bottle; }, },    
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },  
   {
        name: "Ikana Graveyard",
        x: "70.0%",
        y: "41.5%",
        chestlist: {
            'Captain Keetas Chest': { isAvailable: function () {
                return canAccessGraveyard() && canPlay(items.Sonata) && (items.Sword || items.Goron || items.Zora || items.GFsword || canUseFD()); }, },
            'Dampe Digging': { isAvailable: function () {
                return canAccessGraveyard() && items.Captain; }, },
            'Day 1 Grave Bats': { isAvailable: function () {
                return canAccessGraveyard() && (items.Captain || Day1Grave) && (items.Sword || items.Goron || items.Zora || items.GFsword || canUseFD() || items.Bow || items.Bombs || items.Blast || items.stick); }, },
            'Day 1 Grave Tablet': { isAvailable: function () {
                return canAccessGraveyard() && (items.Captain || Day1Grave) && (items.Sword || items.Goron || items.Zora || items.GFsword || canUseFD() || items.Bombs || items.Blast); }, },
            'Grotto': { isAvailable: function () {
                return canAccessGraveyard() && hasBoom(); }, },
            'Iron Knuckle Chest': { isAvailable: function () {
                return canAccessGraveyard() && (items.Captain || Day1Grave && LongJump && items.Bombs) && (items.Sword || items.Goron || items.Zora || items.GFsword || canUseFD() || items.Bombs || items.Blast); }, },            
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
       {
        name: "Ikana Canyon",
        x: "78.0%",
        y: "53.5%",
        chestlist: {
            'Canyon Scrub Trade': { isAvailable: function () {
                return canAccessCanyon() && items.Zora && items.OceanDeed; }, },
            'Ledge': { isAvailable: function () {
                return canAccessCanyon() && ((items.Zora && items.OceanDeed && items.Deku) || canHover()); }, },
            'Great Fairy': { isAvailable: function () {
                return canAccessCanyon() && items.Hookshot && items.Light && items.Bow && items.Magic; }, },
            'Pamelas Father': { isAvailable: function () {
                return canAccessCanyon() && (canPlay(items.SongofStorms) || canRecoilFlip()) && canPlay(items.Healing); }, },
            'Poe Hut': { isAvailable: function () {
                return canAccessCanyon(); }, },
            'Secret Shrine Grotto': { isAvailable: function () {
                return canAccessCanyon(); }, },        
            'Stone Tower Map Purchase': { isAvailable: function () {
                return ((canAccessCanyon() || canAccessOcean()) && (items.Bow || items.Hookshot)) ; }, },       
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },     
       {
        name: "Beneath the Well",
        x: "78.0%",
        y: "47.5%",
        chestlist: {
            'Mirror Shield Chest': { isAvailable: function () {
                return canAccessCanyon() && ((items.Gibdo && items.Bottle) || (items.Light && items.Bow && items.Magic) || (canHover() && items.Zora)); }, },
            'Well Left Path Chest ': { isAvailable: function () {
                return canAccessCanyon() && items.Gibdo && items.Bottle; }, },
            'Well Right Path Chest': { isAvailable: function () {
                return canAccessCanyon() && items.Gibdo && items.Bottle; }, },       
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Ikana Castle",
        x: "77.0%",
        y: "61.5%",
        chestlist: {
            'Pillar': { isAvailable: function () {
                return canAccessCanyon() && ((items.Light && items.Bow && items.Magic) || items.shield >=2 || canHover()) && items.Deku && items.Fire && items.Bow && items.Magic; }, },
            'Ikana King': { isAvailable: function () {
                return canAccessCanyon() && ((items.Light && items.Bow && items.Magic) || items.shield >=2 || canHover()) && items.Bow && ((items.Goron && items.PowderKeg) || canHover() || (items.Light && items.Bow && items.Magic)) && items.Magic && items.Fire && items.shield >=2; }, }, 
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },   
    {
        name: "Stone Tower",
        x: "82.0%",
        y: "38.5%",
        chestlist: {
            'Inverted Stone Tower Left Chest': { isAvailable: function () {
                return canAccessStoneTower() && items.Light && items.Bow && items.Magic && canPlay(items.Elegy) && ((items.Beans && items.Bottle) || canHover()); }, },
            'Inverted Stone Tower Middle Chest': { isAvailable: function () {
                return canAccessStoneTower() && items.Light && items.Bow && items.Magic && canPlay(items.Elegy) && ((items.Beans && items.Bottle) || canHover()); }, }, 
            'Inverted Stone Tower Right Chest': { isAvailable: function () {
                return canAccessStoneTower() && items.Light && items.Bow && items.Magic && canPlay(items.Elegy) && ((items.Beans && items.Bottle) || canHover()); }, },    
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    }, 
       {
        name: "Secret Shrine",
        x: "74.5%",
        y: "50.5%",
        chestlist: {
            'Dinolfos Chest': { isAvailable: function () {
                return canAccessCanyon() && items.Light && items.Bow && items.Magic; }, },
            'Wizzrobe Chest': { isAvailable: function () {
                return canAccessCanyon() && items.Light && items.Bow && items.Magic; }, },
            'Wart Chest': { isAvailable: function () {
                return canAccessCanyon() && items.Light && items.Bow && items.Magic; }, },
            'Garo Master Chest': { isAvailable: function () {
                return canAccessCanyon() && items.Light && items.Bow && items.Magic; }, },
            'Final Chest': { isAvailable: function () {
                return canAccessCanyon() && items.Light && items.Bow && items.Magic; }, },      
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    //cows
           {
        name: "Termina Cows",
        x: "55.5%",
        y: "57.5%",
        chestlist: {
            'Cow 1': { isAvailable: function () {
                return (canPlay(items.EponasSong) && hasBoom()); }, },
            'Cow 2': { isAvailable: function () {
                return (canPlay(items.EponasSong) && hasBoom()); }, },     
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },  
        {
        name: "Romani Ranch Cows",
        x: "44.5%",
        y: "63.0%",
        chestlist: {
            'Cow 1': { isAvailable: function () {
                return canAccessRanch() && canPlay(items.EponasSong); }, },
            'Cow 2': { isAvailable: function () {
                return canAccessRanch() && canPlay(items.EponasSong); }, },
            'Cow 3': { isAvailable: function () {
                return canAccessRanch() && canPlay(items.EponasSong); }, },           
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },  
        {
        name: "Great Bay Coast Cows",
        x: "44.0%",
        y: "38.0%",
        chestlist: {
            'Cow 1': { isAvailable: function () {
                return canAccessOcean() && canPlay(items.EponasSong) && (items.Hookshot || canHover()); }, },
            'Cow 2': { isAvailable: function () {
                return canAccessOcean() && canPlay(items.EponasSong) && (items.Hookshot || canHover()); }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
          {
        name: "Beneath the Well Cow",
        x: "78.0%",
        y: "47.5%",
        chestlist: {
            'Cow': { isAvailable: function () {
                return canAccessCanyon() && items.Gibdo && items.Bottle && canPlay(items.EponasSong); }, },      
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },                           
];

//define overworld chests
var chests = [

]


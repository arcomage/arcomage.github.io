(self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[]).push([[7381],{4983:function(e,a,n){"use strict";n.d(a,{OO:function(){return d},bd:function(){return u},mP:function(){return g}});var r=n(7294),o=n(2099),s=n(4733),t=n(5236),c=n(8199),l=n(6360);const i={i18n:o.i18n,cards:s.cardsI18n,taverns:t.tavernsI18n},d=(0,r.createContext)({i18n:()=>"",cards:()=>"",taverns:()=>""}),m={[c.F]:i},u=({children:e})=>{const[a,o]=(0,r.useState)(m),s=(0,l.C)((e=>e.lang.code));return(0,r.useEffect)((()=>{var e,r,t,c;a[s]||(o(Object.assign(Object.assign({},a),{[s]:null})),e=void 0,r=void 0,c=function*(){const[{i18n:e},{cardsI18n:r},{tavernsI18n:t}]=yield Promise.all([n(6109)(`./${s}`),n(5527)(`./${s}`),n(6454)(`./${s}`)]);o(Object.assign(Object.assign({},a),{[s]:{i18n:e,cards:r,taverns:t}}))},new((t=void 0)||(t=Promise))((function(a,n){function o(e){try{l(c.next(e))}catch(e){n(e)}}function s(e){try{l(c.throw(e))}catch(e){n(e)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}l((c=c.apply(e,r||[])).next())})))}),[s]),r.createElement(d.Provider,{value:{i18n:e=>{var n,r,o;return null!==(o=null===(r=(null!==(n=a[s])&&void 0!==n?n:a[c.F]).i18n)||void 0===r?void 0:r[e])&&void 0!==o?o:""},cards:(e,n)=>{var r,o;const t=(null!==(r=a[s])&&void 0!==r?r:a[c.F]).cards,l=null==t?void 0:t[e];return null!==(o=null==l?void 0:l[n])&&void 0!==o?o:""},taverns:(e,n)=>{var r,o;const t=(null!==(r=a[s])&&void 0!==r?r:a[c.F]).taverns,l=null==t?void 0:t[e];return null!==(o=null==l?void 0:l[n])&&void 0!==o?o:""}}},e)},g=e=>e&&e.charAt(0).toUpperCase()+e.slice(1)},4733:function(e,a,n){"use strict";n.r(a),n.d(a,{cardsI18n:function(){return r}});const r=[{name:"Brick Shortage",desc:"All players lose 8 bricks"},{name:"Lucky Cache",desc:"+2 Bricks. +2 Gems. Play again"},{name:"Friendly Terrain",desc:"+1 Wall. Play again"},{name:"Miners",desc:"+1 Quarry"},{name:"Mother Lode",desc:"If quarry < enemy quarry, +2 quarry. Else, +1 quarry"},{name:"Dwarven Miners",desc:"+4 Wall. +1 Quarry"},{name:"Work Overtime",desc:"+5 Wall. You lose 6 gems"},{name:"Copping the Tech",desc:"If quarry < enemy quarry, quarry = enemy quarry"},{name:"Basic Wall",desc:"+3 Wall"},{name:"Sturdy Wall",desc:"+4 Wall"},{name:"Innovations",desc:"+1 To all player's quarrys, you gain 4 gems"},{name:"Foundations",desc:"If wall = 0, +6 wall, else +3 wall"},{name:"Tremors",desc:"All walls take 5 damage. Play again"},{name:"Secret Room",desc:"+1 Magic. Play again"},{name:"Earthquake",desc:"-1 To all player's quarrys"},{name:"Big Wall",desc:"+6 Wall"},{name:"Collapse!",desc:"-1 Enemy quarry"},{name:"New Equipment",desc:"+2 Quarry"},{name:"Strip Mine",desc:"-1 Quarry. +10 Wall. You gain 5 gems"},{name:"Reinforced Wall",desc:"+8 Wall"},{name:"Porticulus",desc:"+5 Wall, +1 dungeon"},{name:"Crystal Rocks",desc:"+7 Wall, gain 7 gems"},{name:"Harmonic Ore",desc:"+6 Wall, +3 tower"},{name:"Mondo Wall",desc:"+12 Wall"},{name:"Focused Designs",desc:"+8 Wall, +5 tower"},{name:"Great Wall",desc:"+15 Wall"},{name:"Rock Launcher",desc:"+6 Wall. 10 Damage to enemy"},{name:"Dragon's Heart",desc:"+20 Wall. +8 Tower"},{name:"Forced Labor",desc:"+9 Wall, lose 5 recruits"},{name:"Rock Garden",desc:"+1 Wall. +1 Tower. +2 Recruits"},{name:"Flood Water",desc:"Player(s) w/lowest wall are -1 Dungeon and 2 damage to tower"},{name:"Barracks",desc:"+6 Recruits, +6 wall. If dungeon < enemy dungeon, +1 dungeon"},{name:"Battlements",desc:"+7 Wall, 6 damage to enemy"},{name:"Shift",desc:"Switch your wall with enemy wall"},{name:"Quartz",desc:"+1 Tower. Play again"},{name:"Smoky Quartz",desc:"1 Damage to enemy tower. Play again"},{name:"Amethyst",desc:"+3 Tower"},{name:"Spell Weavers",desc:"+1 Magic"},{name:"Prism",desc:"Draw 1 card. Discard 1 card. Play again"},{name:"Lodestone",desc:"+3 Tower. This card can't be discarded without playing it"},{name:"Solar Flare",desc:"+2 Tower. 2 Damage to enemy tower"},{name:"Crystal Matrix",desc:"+1 Magic. +3 Tower. +1 Enemy tower"},{name:"Gemstone Flaw",desc:"3 Damage to enemy tower"},{name:"Ruby",desc:"+5 Tower"},{name:"Gem Spear",desc:"5 Damage to enemy tower"},{name:"Power Burn",desc:"5 Damage to your tower. +2 Magic"},{name:"Harmonic Vibe",desc:"+1 Magic. +3 Tower. +3 Wall"},{name:"Parity",desc:"All player's magic equals the highest player's magic"},{name:"Emerald",desc:"+8 Tower"},{name:"Pearl of Wisdom",desc:"+5 Tower. +1 Magic"},{name:"Shatterer",desc:"-1 Magic. 9 Damage to enemy tower"},{name:"Crumblestone",desc:"+5 Tower. Enemy loses 6 bricks"},{name:"Sapphire",desc:"+11 Tower"},{name:"Discord",desc:"7 Damage to all towers, all players magic -1"},{name:"Fire Ruby",desc:"+6 Tower. 4 Damage to enemy tower"},{name:"Quarry's Help",desc:"+7 Tower. Lose 10 bricks"},{name:"Crystal Shield",desc:"+8 Tower. +3 Wall"},{name:"Empathy Gem",desc:"+8 Tower. +1 Dungeon"},{name:"Diamond",desc:"+15 Tower"},{name:"Sanctuary",desc:"+10 Tower. +5 Wall, gain 5 recruits"},{name:"Lava Jewel",desc:"+12 Tower. 6 Damage to enemy"},{name:"Dragon's Eye",desc:"+20 Tower"},{name:"Crystallize",desc:"+11 Tower. -6 Wall"},{name:"Bag of Baubles",desc:"If tower < enemy tower, +2 tower. Else +1 tower"},{name:"Rainbow",desc:"+1 Tower to all players. You gain 3 gems"},{name:"Apprentice",desc:"+4 Tower, you lose 3 recruits, 2 damage to enemy tower"},{name:"Lightning Shard",desc:"If Tower > enemy wall, 8 damage to enemy tower. Else 8 damage"},{name:"Phase Jewel",desc:"+13 Tower. +6 Recruits. +6 Bricks"},{name:"Mad Cow Disease",desc:"All players lose 6 recruits"},{name:"Faerie",desc:"2 Damage. Play again"},{name:"Moody Goblins",desc:"4 Damage. You lose 3 gems"},{name:"Minotaur",desc:"+1 Dungeon"},{name:"Elven Scout",desc:"Draw 1 card. Discard 1 card. Play again"},{name:"Goblin Mob",desc:"6 Damage. You take 3 damage"},{name:"Goblin Archers",desc:"3 Damage to enemy tower. You take 1 damage"},{name:"Shadow Faerie",desc:"2 Damage to enemy tower. Play again"},{name:"Orc",desc:"5 Damage"},{name:"Dwarves",desc:"4 Damage. +3 Wall"},{name:"Little Snakes",desc:"4 Damage to enemy tower"},{name:"Troll Trainer",desc:"+2 Dungeon"},{name:"Tower Gremlin",desc:"2 Damage. +4 Tower. +2 Wall"},{name:"Full Moon",desc:"+1 to all player's dungeon. You gain 3 recruits"},{name:"Slasher",desc:"6 Damage"},{name:"Ogre",desc:"7 Damage"},{name:"Rabid Sheep",desc:"6 Damage. Enemy loses 3 recruits"},{name:"Imp",desc:"6 Damage. All players lose 5 bricks, gems and recruits"},{name:"Spizzer",desc:"If enemy wall = 0, 10 damage, else 6 damage"},{name:"Werewolf",desc:"9 Damage"},{name:"Corrosion Cloud",desc:"If enemy wall > 0, 10 damage, else 7 damage"},{name:"Unicorn",desc:"If magic > enemy magic, 12 damage, else 8 damage"},{name:"Elven Archers",desc:"If wall > enemy wall, 6 damage to enemy tower, else 6 damage"},{name:"Succubus",desc:"5 Damage to enemy tower, enemy loses 8 recruits"},{name:"Rock Stompers",desc:"8 Damage, -1 enemy quarry"},{name:"Thief",desc:"Enemy loses 10 gems, 5 bricks, you gain 1/2 amt. round up"},{name:"Stone Giant",desc:"10 Damage. +4 Wall"},{name:"Vampire",desc:"10 Damage. Enemy loses 5 recruits, -1 enemy dungeon"},{name:"Dragon",desc:"20 Damage. Enemy loses 10 gems, -1 enemy dungeon"},{name:"Spearman",desc:"If wall > enemy wall do 3 damage else do 2 damage"},{name:"Gnome",desc:"3 Damage. +1 Gem"},{name:"Berserker",desc:"8 Damage. 3 Damage to your tower"},{name:"Warlord",desc:"13 Damage. You lose 3 gems"},{name:"Pegasus Lancer",desc:"12 Damage to enemy tower"}]},8199:function(e,a,n){"use strict";n.d(a,{R:function(){return r},F:function(){return o}});const r={en:"English",fr:"Français",de:"Deutsch","zh-Hans":"简体中文","zh-Hant":"繁體中文",ru:"Русский",pl:"Polski",es:"Español",it:"Italiano",cs:"Čeština"},o="en"},2099:function(e,a,n){"use strict";n.r(a),n.d(a,{i18n:function(){return r}});const r={tower:"tower",wall:"wall",resource:"resource",brick:"brick",bricks:"bricks",gem:"gem",gems:"gems",recruit:"recruit",recruits:"recruits",quarry:"quarry",magic:"magic",dungeon:"dungeon","Your %s":"Your %s","Opponent's %s":"Opponent's %s","Your %sp":"Your %sp","Opponent's %sp":"Opponent's %sp","%s (%ss production)":"%s (%ss production)","This card costs %s":"This card costs %s",discarded:"discarded","Discard a card":"Discard a card","You Win!":"You Win!","You Lose!":"You Lose!","Tie Game":"Tie Game",Preferences:"Preferences",": ":": ","Your Name":"Your Name","Opponent's Name":"Opponent's Name","Choose a Tavern (Preset Preferences)":"Choose a Tavern (Preset Preferences)",Default:"Default",Customized:"Customized","Starting Conditions":"Starting Conditions","Victory Conditions":"Victory Conditions","Other Preferences":"Other Preferences","Cards in Hand":"Cards in Hand","AI Type":"AI Type",Multiplayer:"Multiplayer",off:"off",on:"on","Your ID":"Your ID","Enter your opponent's ID":"Enter your opponent's ID",Connect:"Connect","Copied 📋✔️":"Copied 📋✔️","Connecting to the network ⌛":"Connecting to the network ⌛","Connected to the network (but not to anyone) ✔️":"Connected to the network (but not to anyone) ✔️","Connecting to ID %s ⌛":"Connecting to ID %s ⌛","Connected to ID %s ✔️ You're the host 🏠":"Connected to ID %s ✔️ You're the host 🏠","Connected by ID %s ✔️ You're the guest 💼":"Connected by ID %s ✔️ You're the guest 💼","Connection failed ❌":"Connection failed ❌","Disconnected 🔌":"Disconnected 🔌","You are playing against computer AI":"You are playing against computer AI","You are playing against human":"You are playing against human","Your opponent is disconnected. The current game will continue and your opponent will be replaced by computer AI.":"Your opponent is disconnected. The current game will continue and your opponent will be replaced by computer AI.","Multiplayer Mode is experimental and unstable":"Multiplayer Mode is experimental and unstable",Reset:"Reset","Apply & New Game":"Apply & New Game",Cancel:"Cancel",Language:"Language",Volume:"Volume",Mute:"Mute",Help:"Help","Toggle Full Screen":"Toggle Full Screen",ERATHIAN:"Use Erathian [%s] (for latin letters only)","ArcoMage HD":"ArcoMage HD",DESC:"Web-based open source HD clone of 3DO and NWC's 2000 card game Arcomage","Please go to %s to view more information (including %s1), star the repo and follow %s2 there.":"Please go to %s to view more information (including %s1), star the repo and follow %s2 there.","the GitHub project page":"the GitHub project page","an informative tutorial image in English":"an informative tutorial image in English","Game rules":"Game rules",GAMERULES:"Victory conditions vary per tavern. Build your tower, destroy your opponent's tower, or collect enough resources before your opponent does.\nLarge yellow numbers in column are the productions. This is how many new units of a particular resource you will receive on your next turn. Small black numbers in column are the resources. This is how many units you have available to spend on your current turn.\nCards: Each have their own cost to play, indicated in a small circle in the lower right corner of the card. The cost will be deducted from your resources according to the color of the card. Left click on a card plays the card. Right click on a card to discard without playing.\nRed represents your Quarry Generator which produces your Brick resources, blue represents your Magic Generator which produces Gem resources, green represents your Dungeon generator which produces Recruit resources.","With no usable or discardable card, your opponent has surrendered":"With no usable or discardable card, your opponent has surrendered","With no usable or discardable card, you have surrendered":"With no usable or discardable card, you have surrendered","Please rotate your device to landscape mode":"Please rotate your device to landscape mode"}},5236:function(e,a,n){"use strict";n.r(a),n.d(a,{tavernsI18n:function(){return r}});const r=[{name:"On The House",location:"Harmondale"},{name:"Griffin's Rest",location:"Erathia"},{name:"The Snobbish Goblin",location:"Deyja"},{name:"Familiar Place",location:"The Bracada Desert"},{name:"The Blessed Brew",location:"Celeste"},{name:"The Laughing Monk",location:"Evenmorn Island"},{name:"Fortune's Folly",location:"Mount Nighon"},{name:"Miner's Only",location:"The Barrow Downs"},{name:"The Loyal Mercenary",location:"Tatalia"},{name:"Grogg's Grog",location:"Stone City"}]},5527:function(e,a,n){var r={"./cs":[1048,7335],"./cs.ts":[1048,7335],"./de":[5235,2920],"./de.ts":[5235,2920],"./en":[4733],"./en.ts":[4733],"./es":[7444,2295],"./es.ts":[7444,2295],"./fr":[1654,5432],"./fr.ts":[1654,5432],"./it":[8825,7285],"./it.ts":[8825,7285],"./pl":[7096,4025],"./pl.ts":[7096,4025],"./ru":[3821,7685],"./ru.ts":[3821,7685],"./zh-Hans":[9369,3085],"./zh-Hans.ts":[9369,3085],"./zh-Hant":[7304,3430],"./zh-Hant.ts":[7304,3430]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=r[e],o=a[0];return Promise.all(a.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=5527,e.exports=o},6109:function(e,a,n){var r={"./cs":[8630,3243],"./cs.ts":[8630,3243],"./de":[4023,6969],"./de.ts":[4023,6969],"./en":[2099],"./en.ts":[2099],"./es":[5481,8728],"./es.ts":[5481,8728],"./fr":[2466,4989],"./fr.ts":[2466,4989],"./it":[2813,8768],"./it.ts":[2813,8768],"./pl":[6029,9243],"./pl.ts":[6029,9243],"./ru":[5265,2434],"./ru.ts":[5265,2434],"./zh-Hans":[9068,1189],"./zh-Hans.ts":[9068,1189],"./zh-Hant":[1055,7445],"./zh-Hant.ts":[1055,7445]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=r[e],o=a[0];return Promise.all(a.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=6109,e.exports=o},6454:function(e,a,n){var r={"./cs":[8900,4747],"./cs.ts":[8900,4747],"./de":[1235,6567],"./de.ts":[1235,6567],"./en":[5236],"./en.ts":[5236],"./es":[7726,8463],"./es.ts":[7726,8463],"./fr":[7794,4884],"./fr.ts":[7794,4884],"./it":[5617,1687],"./it.ts":[5617,1687],"./pl":[4736,9190],"./pl.ts":[4736,9190],"./ru":[6873,9462],"./ru.ts":[6873,9462],"./zh-Hans":[6765,250],"./zh-Hans.ts":[6765,250],"./zh-Hant":[4040,2835],"./zh-Hant.ts":[4040,2835]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=r[e],o=a[0];return Promise.all(a.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=6454,e.exports=o}}]);
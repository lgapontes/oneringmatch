/*
  Basic Functions
*/

function checkIfHelm(item) {
  return checkIfContains(HELMS,item.name);
}

function checkIfArmorOrHelm(item) {
  if (checkIfExists(item)) {
    if (Object.hasOwn(ARMOUR, item.name)) {
      return true;
    } else {
      return checkIfHelm(item);
    }
  } else {
    return false;
  }
}

function checkIfArmorOrHelmOrShield(item) {
  if (checkIfExists(item)) {
    if (Object.hasOwn(SHIELDS, item.name)) {
      return true;
    } else {
      return checkIfArmorOrHelm(item);
    }
  } else {
    return false;
  }
}

function checkIfWeapon(item) {
  return checkIfContains(WEAPONS,item.name);
}

function checkIfShield(item) {
  return checkIfContains(SHIELDS,item.name);
}

function clone(obj) {
  let clone = Object.assign({},obj);
  return clone;
}

function cloneArray(array) {
  let clone = Object.assign([], array);
  return clone;
}

function cloneString(str) {
  return (' ' + str).slice(1);
}

/* Create log controls */

let LOGS = [];

function clearLog() {
  LOGS = [];
}

function addChoiceInLog(message,choice) {
  LOGS.push({
    message: message,
    choice: choice,
    name: false,
    travelling_gear: false
  });
}

function addNameInLog(message,choice1,choice2) {
  LOGS.push({
    message: message,
    choice: choice1,
    name: true,
    travelling_gear: false,
    family_name: choice2
  });
}

function addTravellingGearInLog(message,choice1,choice2) {
  LOGS.push({
    message: message,
    choice: choice1,
    name: false,
    travelling_gear: true,
    skill: choice2
  });
}

/*
  Constants
  - uppercase Ctrl+k, Ctrl+U
  - lowercase Ctrl+k, Ctrl+L
*/

const VIRTUES_LIST = {
  'CONFIDENCE': {
    notes: '+2 Hope',
    apply: (character,callback) => {
      let hope = character.attributes.hope;
      character.attributes.hope = hope + 2;
      character.current_stats.current_hope = hope + 2;
      callback();
    }
  },
  'DOUR-HANDED': {
    notes: 'In Special Damage, +1 STRENGTH on Heavy Blow, +1 Feat Die result on Pierce',
    apply: (character,callback) => {
      callback();
    }
  },
  'HARDINESS': {
    notes: '+2 Endurance',
    apply: (character,callback) => {
      let endurance = character.attributes.endurance;
      character.attributes.endurance = endurance + 2;
      character.current_stats.current_endurance = endurance + 2;
      callback();
    }
  },
  'MASTERY': {
    notes: 'Choose two Skills and make them Favoured',
    apply: (character,callback) => {
      let actual_favoured_skills_1 = cloneArray(character.favoured_skills);
      let skills = cloneArray(SKILLS);

      randomArrayMinusExclusionary(skills,actual_favoured_skills_1,(skill_1)=>{
        character.favoured_skills.push(skill_1);
        let actual_favoured_skills_2 = cloneArray(character.favoured_skills);

        randomArrayMinusExclusionary(skills,actual_favoured_skills_2,(skill_2)=>{
          character.favoured_skills.push(skill_2);
          callback();
        });
      });
    }
  },
  'NIMBLENESS': {
    notes: '+1 Parry',
    apply: (character,callback) => {
      let parry = character.attributes.parry;
      character.attributes.parry = parry + 1;
      callback();
    }
  },
  'PROWESS': {
    notes: 'Lower one of your Attribute TNs by 1',
    apply: (character,callback) => {
      let array_TNs = ['TN_strength','TN_heart','TN_wits'];
      let index_array_TNs = Math.floor(Math.random() * array_TNs.length);
      let selected_TN = array_TNs[index_array_TNs];
      let actual_TN = character.attributes[selected_TN];
      character.attributes[selected_TN] = actual_TN - 1;
      callback();
    }
  },
};

/*
Dread -> Pavor
Greed -> Ganância
Misdeeds -> Transgressões
Sorcery -> Feitiçaria
*/

const REWARDS_LIST = {
  'CLOSE-FITTING': {
    notes: 'Add +2 to the PROTECTION result',
    check: checkIfArmorOrHelm,
    apply: (item) => {}
  },
  'CUNNING MAKE': {
    notes: '-2 Load (minimum of 0)',
    check: checkIfArmorOrHelmOrShield,
    apply: (item) => {
      item.load = item.load - 2;
      if (item.load < 0) {
        item.load = 0;
      }
    }
  },
  'FELL': {
    notes: '+2 Injury',
    check: checkIfWeapon,
    apply: (item) => {
      if (item.injury == '16(1h)/18(2h)') {
        item.injury = '18(1h)/20(2h)';
      } else if (item.injury == '14(1h)/16(2h)') {
        item.injury = '16(1h)/18(2h)';
      } else if (item.injury == '18(1h)/20(2h)') {
        item.injury = '20(1h)/22(2h)';
      } else if (isNumber(item.injury)) {
        let injury = parseInt(item.injury) + 2;
        item.injury = '' + injury;
      }
    }
  },
  'GRIEVOUS': {
    notes: '+1 Damage',
    check: checkIfWeapon,
    apply: (item) => {
      item.damage = item.damage + 1;
    }
  },
  'KEEN': {
    notes: 'Causes Piercing Blow with 9+ on the Feat die',
    check: checkIfWeapon,
    apply: (item) => {}
  },
  'REINFORCED': {
    notes: '+1 Parry',
    check: checkIfShield,
    apply: (item) => {
      if (item.parry_modifier == '+1') {
        item.parry_modifier = '+2';
      } else if (item.parry_modifier == '+2') {
        item.parry_modifier = '+3';
      } else if (item.parry_modifier == '+3') {
        item.parry_modifier = '+4';
      }
    }
  }
};

const SKILLS = [
  'Awe', // SKILLS[0]
  'Athletics', // SKILLS[1]
  'Awareness', // SKILLS[2]
  'Hunting', // SKILLS[3]
  'Song', // SKILLS[4]
  'Craft', // SKILLS[5]
  'Enhearten', // SKILLS[6]
  'Travel', // SKILLS[7]
  'Insight', // SKILLS[8]
  'Healing', // SKILLS[9]
  'Courtesy', // SKILLS[10]
  'Battle', // SKILLS[11]
  'Persuade', // SKILLS[12]
  'Stealth', // SKILLS[13]
  'Scan', // SKILLS[14]
  'Explore', // SKILLS[15]
  'Riddle', // SKILLS[16]
  'Lore' // SKILLS[17]
];

const TRAVELLING_GEAR = {
  'Knife for skinning rabbits': [SKILLS[3]],
  'Little box of salt to cook': [SKILLS[3]],
  'Rope with grappling hook to climb': [SKILLS[1]],
  'Wind-proof lantern': [SKILLS[14]],
  'Exotic musical instrument': [SKILLS[4]],
  'Balm to soothe pain': [SKILLS[9]],
  'Suit of expensive clothing': [SKILLS[0], SKILLS[10]],
  'Earrings of pearl': [SKILLS[0], SKILLS[10]],
  'Liquor to infuse strength': [SKILLS[6]],
  'Sunstone to navigate in bad weather': [SKILLS[7]],
  'Fine pipe to find comfort': [SKILLS[8],SKILLS[16]],
  'Detailed set of maps': [SKILLS[15], SKILLS[7]],
  'Set of instruments to carve stone': [SKILLS[5]],
  'Flint and torch': [SKILLS[2]],
  'Fishing net': [SKILLS[3]],
  'Poetry book': [SKILLS[4]],
  'Scrolls from the library of Gondor': [SKILLS[17]],
  'Athelas, the Kingsfoil': [SKILLS[9]],
  'Sweet flute': [SKILLS[4]],
  'Lavender petals': [SKILLS[10]],
  'Sewing needle and thread': [SKILLS[5]],
  'Woodworking tools': [SKILLS[5]],
  'Ring with personalized seal': [SKILLS[0], SKILLS[12]],
  'Elven cloak': [SKILLS[13]],
  'Horn of Battle': [SKILLS[11]]
};

const WEAPONS = {
  'Dagger': {
    damage: 2,
    injury: '14',
    load: 0,
    combat_proficiency: 'Brawling',
    notes: '',
    hands: [1]
  },
  'Cudgel': {
    damage: 3,
    injury: '12',
    load: 0,
    combat_proficiency: 'Brawling',
    notes: '',
    hands: [1]
  },
  'Club': {
    damage: 4,
    injury: '14',
    load: 1,
    combat_proficiency: 'Brawling',
    notes: '',
    hands: [1]
  },
  'Short Sword': {
    damage: 3,
    injury: '16',
    load: 1,
    combat_proficiency: 'Swords',
    notes: '',
    hands: [1]
  },
  'Sword': {
    damage: 4,
    injury: '16',
    load: 2,
    combat_proficiency: 'Swords',
    notes: '',
    hands: [1]
  },
  'Long Sword': {
    damage: 5,
    injury: '16(1h)/18(2h)',
    load: 3,
    combat_proficiency: 'Swords',
    notes: 'Can be used 1 or 2-handed',
    hands: [1,2]
  },
  'Short Spear': {
    damage: 3,
    injury: '14',
    load: 2,
    combat_proficiency: 'Spears',
    notes: 'Can be thrown',
    hands: [1]
  },
  'Spear': {
    damage: 4,
    injury: '14(1h)/16(2h)',
    load: 3,
    combat_proficiency: 'Spears',
    notes: 'Can be 1 or 2-handed. Can be thrown',
    hands: [1,2]
  },
  'Great Spear': {
    damage: 5,
    injury: '16',
    load: 4,
    combat_proficiency: 'Spears',
    notes: '2-handed',
    hands: [2]
  },
  'Axe': {
    damage: 5,
    injury: '18',
    load: 2,
    combat_proficiency: 'Axes',
    notes: '',
    hands: [1]
  },
  'Long-hafted Axe': {
    damage: 6,
    injury: '18(1h)/20(2h)',
    load: 3,
    combat_proficiency: 'Axes',
    notes: 'Can be used 1 or 2-handed',
    hands: [1,2]
  },
  'Great Axe': {
    damage: 7,
    injury: '20',
    load: 4,
    combat_proficiency: 'Axes',
    notes: '2-handed',
    hands: [2]
  },
  'Mattock': {
    damage: 7,
    injury: '18',
    load: 3,
    combat_proficiency: 'Axes',
    notes: '2-handed',
    hands: [2]
  },
  'Bow': {
    damage: 3,
    injury: '14',
    load: 2,
    combat_proficiency: 'Bows',
    notes: 'Ranged weapon',
    hands: [2]
  },
  'Great Bow': {
    damage: 4,
    injury: '16',
    load: 4,
    combat_proficiency: 'Bows',
    notes: 'Ranged weapon',
    hands: [2]
  }
};

const WEAPONS_RELATIONSHIP = {
  'Brawling': ['Dagger','Cudgel','Club'],
  'Axes': ['Axe','Long-hafted Axe','Great Axe','Mattock'],
  'Bows': ['Bow','Great Bow'],
  'Spears': ['Short Spear','Spear','Great Spear'],
  'Swords': ['Short Sword','Sword','Long Sword']
};

const ARMOUR = {
  'Leather Shirt': {
    protection: '1d',
    load: 3,
    type: 'Leather armour'
  },
  'Leather Corslet': {
    protection: '2d',
    load: 6,
    type: 'Leather armour'
  },
  'Mail-shirt': {
    protection: '3d',
    load: 9,
    type: 'Mail armour'
  },
  'Coat of Mail': {
    protection: '4d',
    load: 12,
    type: 'Mail armour'
  }
};

const HELMS = {
  'Helm': {
    protection: '+1d',
    load: 4,
    type: 'Headgear'
  }
};

const SHIELDS = {
  'Buckler': {
    parry_modifier: '+1',
    load: 2
  },
  'Shield': {
    parry_modifier: '+2',
    load: 4
  },
  'Great Shield': {
    parry_modifier: '+3',
    load: 6
  }
};

const STANDARDS_OF_LIVING = {
  'Poor': {
    armour: ['Leather Shirt', 'Leather Corslet' ],
    shields: ['Buckler'],
    useful_items: 0,
    ponies_and_horses: []
  },
  'Frugal': {
    armour: ['Leather Shirt', 'Leather Corslet' ],
    shields: ['Buckler'],
    useful_items: 1,
    ponies_and_horses: []
  },
  'Common': {
    armour: ['Leather Shirt', 'Leather Corslet', 'Mail-shirt'],
    shields: ['Buckler', 'Shield'],
    useful_items: 2,
    ponies_and_horses: ['Old Horse (vigour 1)','Half-starved Pony (vigour 1)']
  },
  'Prosperous': {
    armour: ['Leather Shirt', 'Leather Corslet', 'Mail-shirt', 'Coat of Mail' ],
    shields: ['Buckler', 'Shield', 'Great Shield'],
    useful_items: 3,
    ponies_and_horses: ['Decent Horse (vigour 2)', 'Decent Pony (vigour 2)']
  },
  'Rich': {
    armour: ['Leather Shirt', 'Leather Corslet', 'Mail-shirt', 'Coat of Mail' ],
    shields: ['Buckler', 'Shield', 'Great Shield'],
    useful_items: 4,
    ponies_and_horses: ['Fine Horse (vigour 3)', 'Fine Pony (vigour 3)']
  },
  'Very Rich': {
    armour: ['Leather Shirt', 'Leather Corslet', 'Mail-shirt', 'Coat of Mail' ],
    shields: ['Buckler', 'Shield', 'Great Shield'],
    useful_items: 4,
    ponies_and_horses: ['Fine Horse (vigour 3)', 'Fine Pony (vigour 3)']
  }
};

const DISTINCTIVE_FEATURES = [
  'Bold',
  'Cunning',
  'Eager',
  'Faithful',
  'Fair',
  'Fair-Spoken',
  'Fierce',
  'Generous',
  'Honourable',
  'Inquisitive',
  'Keen-Eyed',
  'Lordly',
  'Merry',
  'Patient',
  'Proud',
  'Rustic',
  'Secretive',
  'Stern',
  'Subtle',
  'Swift',
  'Tall',
  'True-Hearted',
  'Wary',
  'Wilful'
];

function clearFinalCharacter(character) {
  character.favoured_skills = [];
  character.skills = {};
  character.combat_proficiencies['Axes'] = 0;
  character.combat_proficiencies['Bows'] = 0;
  character.combat_proficiencies['Spears'] = 0;
  character.combat_proficiencies['Swords'] = 0;
  character.initial_combat_proficiencies = {};
  character.distinctive_features = [];
  character.war_gear = [];
  character.rewards_list = {};
  character.useful_items = [];
  character.extra_notes = '';
  character.current_stats.adventure_points = 0;
  character.current_stats.skill_points = 0;
  character.current_stats.fellowship_score = 0;
  character.current_stats.current_endurance = 0;
  character.current_stats.load = 0;
  character.current_stats.fatigue = 0;
  character.current_stats.current_hope = 0;
  character.current_stats.shadow = 0;
  character.current_stats.shadow_scars = 0;
  character.current_stats.weary = false;
  character.current_stats.miserable = false;
  character.current_stats.wounded = false;
  character.current_stats.injury = '';
}

const FINAL_CHARACTER = {
  randomPointChoiceProficiences: false,
  heroic_culture: null,
  calling: null,
  attributes: {
    strength: 0,
    heart: 0,
    wits: 0,
    endurance: 0,
    hope: 0,
    parry: 0,
    TN_strength: 0,
    TN_heart: 0,
    TN_wits: 0
  },
  cultural_blessing: '',
  standard_of_living: '',
  age: 0,
  name: '',
  family_name: '',
  genre: '',
  imagem_path: '',
  treasure: 0,
  flaws: '',
  patron: '',
  favoured_skills: [],
  ponies_and_horses: '',
  skills: {},
  combat_proficiencies: {
    'Axes': 0,
    'Bows': 0,
    'Spears': 0,
    'Swords': 0
  },
  initial_combat_proficiencies: {},
  favorite_weapon: '',
  distinctive_features: [],
  shadow_path: '',
  war_gear: [],
  armour: null,
  helm: null,
  shield: null,
  can_use_shield: true,
  rewards_list: {},
  useful_items: [],
  extra_notes: '',
  current_stats: {
    adventure_points: 0,
    skill_points: 0,
    fellowship_score: 0,
    current_endurance: 0,
    load: 0,
    fatigue: 0,
    current_hope: 0,
    shadow: 0,
    shadow_scars: 0,
    weary: false,
    miserable: false,
    wounded: false,
    injury: ''
  },
  rewards: {
    name: '',
    notes: '',
    item: ''
  },
  virtues: {
    name: '',
    notes: ''
  },
  wisdow: 1,
  valour: 1
};

const HEROIC_CULTURES = {

  'Bardings': {
    images: {
      'm': ['img/characters/bardings/m0.jpg','img/characters/bardings/m1.jpg'],
      'f': ['img/characters/bardings/f0.jpg','img/characters/bardings/f1.jpg']
    },
    heroic_cultures_select: 'Bardings (The One Ring Core Rules)',
    cultural_blessing: 'Favoured VALOUR rolls',
    standard_of_living: 'Prosperous',
    attributes: [
      {strength: 5, heart: 7, wits: 2},
      {strength: 4, heart: 7, wits: 3},
      {strength: 5, heart: 6, wits: 3},
      {strength: 4, heart: 6, wits: 4},
      {strength: 5, heart: 5, wits: 4},
      {strength: 6, heart: 6, wits: 2}
    ],
    derived_stats: {
      getEndurance: (strength) => { return strength + 20; },
      getHope: (heart) => { return heart + 8; },
      getParry: (wits) => { return wits + 12; },
      getTargetNumberOfStrength: (strength) => { return 20 - strength; },
      getTargetNumberOfHeart: (heart) => { return 20 - heart; },
      getTargetNumberOfWits: (wits) => { return 20 - wits; }
    },
    skills: {
      'Awe': 1,
      'Athletics': 1,
      'Awareness': 0,
      'Hunting': 2,
      'Song': 1,
      'Craft': 1,
      'Enhearten': 2,
      'Travel': 1,
      'Insight': 2,
      'Healing': 0,
      'Courtesy': 2,
      'Battle': 2,
      'Persuade': 3,
      'Stealth': 0,
      'Scan': 1,
      'Explore': 1,
      'Riddle': 0,
      'Lore': 1
    },
    favoured_skills: ['Athletics','Enhearten'],
    combat_proficiencies_2_points: ['Bows','Swords'],
    combat_proficiencies_1_point: ['Axes','Bows','Spears','Swords'],
    distinctive_features_list: ['Bold','Eager','Fair','Fierce','Generous','Proud','Tall','Wilful'],
    range_ages: {min: 18, max: 40},
    names: {
      male_names: 'Aegir,Arn,Brandulf,Domarr,Egil,Erland,Farald,Finn,Gautarr,Hafgrim,Hjalmar,Ingolf,Jofur,Kolbeinn,Leiknir,Lomund,Munan,Nari,Nefstan,Ottarr,Ragnarr,Reinald,Sigmarr,Steinarr,Thorald,Torwald,Ulfarr,Unnarr,Vandil,Varinn'.split(','),
      female_names: 'Aldis,Asfrid,Bera,Bergdis,Dagmar,Eilif,Erna,Frida,Geira,Gudrun,Halla,Hild,Ingirun,Ingrith,Lif,Linhild,Kelda,Runa,Saldis,Sigga,Sigrun,Thora,Thordis,Thorhild,Ulfhild,Ulfrun,Una,Valdis,Vigdis,Walda'.split(','),
      family_names: []
    },
    ponies_and_horses: clone(STANDARDS_OF_LIVING['Prosperous'].ponies_and_horses),
    previous_experience: 10,
    extra_notes: '',
    weapons_restriction: [],
    shield_restriction: [],
    armour_restriction: [],
    helmet_restriction: false
  },

  'Dwarves of Durin’s Folk': {
    images: {
      'm': ['img/characters/dwarves_of_durins_folk/m0.jpg','img/characters/dwarves_of_durins_folk/m1.jpg','img/characters/dwarves_of_durins_folk/m2.jpg'],
      'f': ['img/characters/dwarves_of_durins_folk/f0.jpg','img/characters/dwarves_of_durins_folk/f1.jpg']
    },
    heroic_cultures_select: 'Dwarves of Durin’s Folk (The One Ring Core Rules)',
    cultural_blessing: '1/2 Load of armour and helm',
    standard_of_living: 'Prosperous',
    attributes: [
      {strength: 7, heart: 2, wits: 5},
      {strength: 7, heart: 3, wits: 4},
      {strength: 6, heart: 3, wits: 5},
      {strength: 6, heart: 4, wits: 4},
      {strength: 5, heart: 4, wits: 5},
      {strength: 6, heart: 2, wits: 6}
    ],
    derived_stats: {
      getEndurance: (strength) => { return strength + 22; },
      getHope: (heart) => { return heart + 8; },
      getParry: (wits) => { return wits + 10; },
      getTargetNumberOfStrength: (strength) => { return 20 - strength; },
      getTargetNumberOfHeart: (heart) => { return 20 - heart; },
      getTargetNumberOfWits: (wits) => { return 20 - wits; }
    },
    skills: {
      'Awe': 2,
      'Athletics': 1,
      'Awareness': 0,
      'Hunting': 0,
      'Song': 1,
      'Craft': 2,
      'Enhearten': 0,
      'Travel': 3,
      'Insight': 0,
      'Healing': 0,
      'Courtesy': 1,
      'Battle': 1,
      'Persuade': 0,
      'Stealth': 0,
      'Scan': 3,
      'Explore': 2,
      'Riddle': 2,
      'Lore': 1
    },
    favoured_skills: ['Craft','Travel'],
    combat_proficiencies_2_points: ['Axes','Swords'],
    combat_proficiencies_1_point: ['Axes','Bows','Spears','Swords'],
    distinctive_features_list: ['Cunning','Fierce','Lordly','Proud','Secretive','Stern','Wary','Wilful'],
    range_ages: {min: 50, max: 90},
    names: {
      male_names: 'Ai,Anar,Beli,Bláin,Borin,Burin,Bruni,Farin,Flói,Frár,Frerin,Frór,Ginar,Gróin,Grór,Hanar,Hepti,Iari,Lófar,Lóni,Náli,Nár,Niping,Nói,Núr,Nýrád,Ónar,Póri,Regin,Svior,Veig,Vidar'.split(','),
      female_names: 'Adís,Afrid,Agda,Bersa,Birna,Dagrún,Dís,Drífa,Edda,Elin,Fenja,Frida,Geira,Gísla,Hadda,Hón,Ida,Ilmr,Jóra,Kára,Kóna,Líf,Línhild,Már,Mist,Nál,Oda,Ósk,Rán,Rinda,Sefa,Syn,Tóra,Trana,Úlfrún,Vírún,Yrr'.split(','),
      family_names: []
    },
    ponies_and_horses: clone(STANDARDS_OF_LIVING['Prosperous'].ponies_and_horses),
    previous_experience: 10,
    extra_notes: 'Dwarven cannot use: Great Bow, Great Spear, and Great Shield',
    weapons_restriction: ['Great Bow','Great Spear'],
    shield_restriction: ['Great Shield'],
    armour_restriction: [],
    helmet_restriction: false
  },

  'Elves of Lindon': {
    images: {
      'm': ['img/characters/elves_of_lindon/m0.jpg','img/characters/elves_of_lindon/m1.jpg'],
      'f': ['img/characters/elves_of_lindon/f0.jpg','img/characters/elves_of_lindon/f1.jpg']
    },
    heroic_cultures_select: 'Elves of Lindon (The One Ring Core Rules)',
    cultural_blessing: '1 Hope to Magical Success (only Skills at least one rank, not Miserable)',
    standard_of_living: 'Frugal',
    attributes: [
      {strength: 5, heart: 2, wits: 7},
      {strength: 4, heart: 3, wits: 7},
      {strength: 5, heart: 3, wits: 6},
      {strength: 4, heart: 4, wits: 6},
      {strength: 5, heart: 4, wits: 5},
      {strength: 6, heart: 2, wits: 6}
    ],
    derived_stats: {
      getEndurance: (strength) => { return strength + 20; },
      getHope: (heart) => { return heart + 8; },
      getParry: (wits) => { return wits + 12; },
      getTargetNumberOfStrength: (strength) => { return 20 - strength; },
      getTargetNumberOfHeart: (heart) => { return 20 - heart; },
      getTargetNumberOfWits: (wits) => { return 20 - wits; }
    },
    skills: {
      'Awe': 2,
      'Athletics': 2,
      'Awareness': 2,
      'Hunting': 0,
      'Song': 2,
      'Craft': 2,
      'Enhearten': 1,
      'Travel': 0,
      'Insight': 0,
      'Healing': 1,
      'Courtesy': 0,
      'Battle': 0,
      'Persuade': 0,
      'Stealth': 3,
      'Scan': 0,
      'Explore': 0,
      'Riddle': 0,
      'Lore': 3
    },
    favoured_skills: ['Song','Lore'],
    combat_proficiencies_2_points: ['Bows','Spears'],
    combat_proficiencies_1_point: ['Axes','Bows','Spears','Swords'],
    distinctive_features_list: ['Fair','Keen-Eyed', 'Lordly', 'Merry', 'Patient', 'Subtle', 'Swift', 'Wary'],
    range_ages: {min: 100, max: 300},
    names: {
      male_names: 'Amras,Aredhel,Beleganor,Belegon,Calanhir,Carmagor,Dagorhir,Durandir,Edrahil,Ellahir,Fincalan,Fuindor,Galdagor,Galdor,Hallas,Hirimlad,Ithildir,Lascalan,Linaith,Mablin,Malanor,Nauros,Orgalad,Pelegorn,Sargon'.split(','),
      female_names: 'Anórel,Aranel,Arbereth,Baraniel,Calanril,Celebrindal,Celenneth,Elanor,Elwing,Eraniel,Fimbrethil,Gloredhel,Idril,Irilde,Laurelin,Lôrwend,Lothíriel,Meneloth,Moriel,Narieth,Narniel,Nimloth,Nimrodel,Níniel,Tarandis'.split(','),
      family_names: []
    },
    ponies_and_horses: clone(STANDARDS_OF_LIVING['Frugal'].ponies_and_horses),
    previous_experience: 10,
    extra_notes: 'Remove a maximum of 1 Shadow during the Fellowship Phase',
    weapons_restriction: [],
    shield_restriction: [],
    armour_restriction: [],
    helmet_restriction: false
  },

  'Hobbits of the Shire': {
    images: {
      'm': ['img/characters/hobbits_of_the_shire/m0.jpg','img/characters/hobbits_of_the_shire/m1.jpg'],
      'f': ['img/characters/hobbits_of_the_shire/f0.jpg','img/characters/hobbits_of_the_shire/f1.jpg']
    },
    heroic_cultures_select: 'Hobbits of the Shire (The One Ring Core Rules)',
    cultural_blessing: 'Favoured WISDOM rolls, +1d on Greed Shadow Tests',
    standard_of_living: 'Common',
    attributes: [
      {strength: 3, heart: 6, wits: 5},
      {strength: 3, heart: 7, wits: 4},
      {strength: 2, heart: 7, wits: 5},
      {strength: 4, heart: 6, wits: 4},
      {strength: 4, heart: 5, wits: 5},
      {strength: 2, heart: 6, wits: 6}
    ],
    derived_stats: {
      getEndurance: (strength) => { return strength + 18; },
      getHope: (heart) => { return heart + 10; },
      getParry: (wits) => { return wits + 12; },
      getTargetNumberOfStrength: (strength) => { return 20 - strength; },
      getTargetNumberOfHeart: (heart) => { return 20 - heart; },
      getTargetNumberOfWits: (wits) => { return 20 - wits; }
    },
    skills: {
      'Awe': 0,
      'Athletics': 0,
      'Awareness': 2,
      'Hunting': 0,
      'Song': 2,
      'Craft': 1,
      'Enhearten': 0,
      'Travel': 0,
      'Insight': 2,
      'Healing': 1,
      'Courtesy': 2,
      'Battle': 0,
      'Persuade': 2,
      'Stealth': 3,
      'Scan': 0,
      'Explore': 0,
      'Riddle': 3,
      'Lore': 0
    },
    favoured_skills: ['Courtesy','Stealth'],
    combat_proficiencies_2_points: ['Bows','Swords'],
    combat_proficiencies_1_point: ['Axes','Bows','Spears','Swords'],
    distinctive_features_list: ['Eager','Fair-Spoken','Faithful','Honourable','Inquisitive','Keen-Eyed','Merry','Rustic'],
    range_ages: {min: 33, max: 50},
    names: {
      male_names: 'Andwise,Berilac,Bungo,Cottar,Doderic,Dudo,Erling,Fastred,Ferumbras,Folco,Gorhendad,Griffo,Halfred,Hamson,Ilberic,Isembold,Isengar,Longo,Marmadas,Marroc,Mungo,Odo,Orgulas,Otho,Posco,Reginard,Robin,Rudigar,Sadoc,Saradas,Tobold,Tolman'.split(','),
      female_names: 'Adaldrida,Amaranth,Asphodel,Belba,Bell,Berylla,Camellia,Daisy,Eglantine,Estella,Gilly,Hanna,Lily,Malva,Marigold,May,Melilot,Menegilda,Mentha,Mirabella,Myrtle,Pearl,Peony,Pervinca,Pimpernel,Primrose,Primula,Prisca,Rosamunda,Ruby,Salvia'.split(','),
      family_names: 'Baggins,Boffin,Bolger,Bracegirdle,Brandybuck,Brown,Brownlock,Bunce,Burrows,Cotton,Gamgee,Gardner,Goldworthy,Goodbody,Goodchild,Grubb,Headstrong,Hornblower,Maggot,Noakes,North-tooks,Proudfoot,Puddifoot,Roper,Rumble,Sackville,Smallburrow,Took,Twofoot,Whitfoot'.split(',')
    },
    ponies_and_horses: clone(STANDARDS_OF_LIVING['Common'].ponies_and_horses),
    previous_experience: 10,
    extra_notes: '',
    weapons_restriction: ['Sword','Long Sword','Great Spear','Long-hafted Axe','Great Axe','Mattock','Great Bow'],
    shield_restriction: ['Great Shield'],
    armour_restriction: [],
    helmet_restriction: false
  },

  'Men of Bree': {
    images: {
      'm': ['img/characters/men_of_bree/m0.jpg','img/characters/men_of_bree/m1.jpg'],
      'f': ['img/characters/men_of_bree/f0.jpg','img/characters/men_of_bree/f1.jpg']
    },
    heroic_cultures_select: 'Men of Bree (The One Ring Core Rules)',
    cultural_blessing: '+1 Fellowship Point',
    standard_of_living: 'Common',
    attributes: [
      {strength: 2, heart: 5, wits: 7},
      {strength: 3, heart: 4, wits: 7},
      {strength: 3, heart: 5, wits: 6},
      {strength: 4, heart: 4, wits: 6},
      {strength: 4, heart: 5, wits: 5},
      {strength: 2, heart: 6, wits: 6}
    ],
    derived_stats: {
      getEndurance: (strength) => { return strength + 20; },
      getHope: (heart) => { return heart + 10; },
      getParry: (wits) => { return wits + 10; },
      getTargetNumberOfStrength: (strength) => { return 20 - strength; },
      getTargetNumberOfHeart: (heart) => { return 20 - heart; },
      getTargetNumberOfWits: (wits) => { return 20 - wits; }
    },
    skills: {
      'Awe': 0,
      'Athletics': 1,
      'Awareness': 1,
      'Hunting': 1,
      'Song': 1,
      'Craft': 2,
      'Enhearten': 2,
      'Travel': 1,
      'Insight': 2,
      'Healing': 0,
      'Courtesy': 3,
      'Battle': 0,
      'Persuade': 2,
      'Stealth': 1,
      'Scan': 1,
      'Explore': 1,
      'Riddle': 2,
      'Lore': 0
    },
    favoured_skills: ['Insight','Riddle'],
    combat_proficiencies_2_points: ['Axes','Spears'],
    combat_proficiencies_1_point: ['Axes','Bows','Spears','Swords'],
    distinctive_features_list: ['Cunning', 'Fair-Spoken', 'Faithful', 'Generous', 'Inquisitive', 'Patient', 'Rustic', 'True-Hearted'],
    range_ages: {min: 18, max: 40},
    names: {
      male_names: 'Alfred,Artie,Bill,Bob,Carl,Ed,Fred,Giles,Herb,Larry,Nob,Oswald,Percy,Perry,Sid,Tom,Harry'.split(','),
      female_names: 'Daisy,Emma,Etta,Fay,Fern,Flora,Gert,Holly,Lily,Myrtle,Poppy,Rose,Sage,Tilly,Violet'.split(','),
      family_names: 'Appledore,Asterfire,Bellsap,Briarcleave,Butterbur,Cherryborn,Chesterstout,Droverwind,Ferny,Foxglow,Goatleaf,Hardybough,Heathertoes,Hedgedon,Kettlegrass,Lilyhawk,Mossburn,Mugworts,Oakstout,Pickthorn,Pollenroad,Rushlight,Shrubrose,Sweetroot,Thistlewool,Wayward'.split(','),
    },
    ponies_and_horses: clone(STANDARDS_OF_LIVING['Common'].ponies_and_horses),
    previous_experience: 10,
    extra_notes: '',
    weapons_restriction: [],
    shield_restriction: [],
    armour_restriction: [],
    helmet_restriction: false
  },

  'Rangers of the North': {
    images: {
      'm': ['img/characters/rangers_of_the_north/m0.jpg','img/characters/rangers_of_the_north/m1.jpg','img/characters/rangers_of_the_north/m2.jpg'],
      'f': ['img/characters/rangers_of_the_north/f0.jpg','img/characters/rangers_of_the_north/f1.jpg']
    },
    heroic_cultures_select: 'Rangers of the North (The One Ring Core Rules)',
    cultural_blessing: '+1 Attribute',
    standard_of_living: 'Frugal',
    attributes: [
      {strength: 7, heart: 5, wits: 2},
      {strength: 7, heart: 4, wits: 3},
      {strength: 6, heart: 5, wits: 3},
      {strength: 6, heart: 4, wits: 4},
      {strength: 5, heart: 5, wits: 4},
      {strength: 6, heart: 6, wits: 2}
    ],
    derived_stats: {
      getEndurance: (strength) => { return strength + 20; },
      getHope: (heart) => { return heart + 6; },
      getParry: (wits) => { return wits + 14; },
      getTargetNumberOfStrength: (strength) => { return 20 - strength; },
      getTargetNumberOfHeart: (heart) => { return 20 - heart; },
      getTargetNumberOfWits: (wits) => { return 20 - wits; }
    },
    skills: {
      'Awe': 1,
      'Athletics': 2,
      'Awareness': 2,
      'Hunting': 2,
      'Song': 0,
      'Craft': 0,
      'Enhearten': 0,
      'Travel': 2,
      'Insight': 0,
      'Healing': 2,
      'Courtesy': 0,
      'Battle': 2,
      'Persuade': 0,
      'Stealth': 2,
      'Scan': 1,
      'Explore': 2,
      'Riddle': 0,
      'Lore': 2
    },
    favoured_skills: ['Hunting','Lore'],
    combat_proficiencies_2_points: ['Spears','Swords'],
    combat_proficiencies_1_point: ['Axes','Bows','Spears','Swords'],
    distinctive_features_list: ['Bold','Honourable', 'Secretive', 'Stern', 'Subtle', 'Swift', 'Tall', 'True-Hearted'],
    range_ages: {min: 20, max: 50},
    names: {
      male_names: 'Adrahil,Amlaith,Arvegil,Baranor,Belecthor,Bergil,Celepharn,Cirion,Damrod,Dírhael,Duinhir,Egalmoth,Eradan,Findemir,Forlong,Golasdan,Hallas,Hirluin,Ingold,Iorlas,Malvegil,Ohtar,Orodreth,Tarannon,Targon'.split(','),
      female_names: 'Anwen,Arbereth,Berúthiel,Baraniel,Calanril,Celenneth,Elnîth,Eraniel,Finduilas,Gilraen,Gilraeth,Gloredhel,Idril,Ioreth,Ivorwen,Lôrwend,Lothíriel,Luindîs,Meneloth,Moriel,Morwen,Narieth,Narniel,Orothêl,Tarandîs'.split(','),
      family_names: []
    },
    ponies_and_horses: clone(STANDARDS_OF_LIVING['Frugal'].ponies_and_horses),
    previous_experience: 10,
    extra_notes: 'Recover 1/2 HEART in Fellowship Phase (rounding fractions up)',
    weapons_restriction: [],
    shield_restriction: [],
    armour_restriction: [],
    helmet_restriction: false
  },

  'High Elves of Rivendell': {
    images: {
      'm': ['img/characters/high_elves_of_rivendell/m0.jpg','img/characters/high_elves_of_rivendell/m1.jpg'],
      'f': ['img/characters/high_elves_of_rivendell/f0.jpg','img/characters/high_elves_of_rivendell/f1.jpg']
    },
    heroic_cultures_select: 'High Elves of Rivendell (The One Ring: Rivendell)',
    cultural_blessing: '1 Hope to Magical Success (only Skills at least one rank, not Miserable), +1 Attribute',
    standard_of_living: 'Prosperous',
    attributes: [
      {strength: 5, heart: 2, wits: 7},
      {strength: 4, heart: 3, wits: 7},
      {strength: 5, heart: 3, wits: 6},
      {strength: 4, heart: 4, wits: 6},
      {strength: 5, heart: 4, wits: 5},
      {strength: 6, heart: 2, wits: 6}
    ],
    derived_stats: {
      getEndurance: (strength) => { return strength + 22; },
      getHope: (heart) => { return heart + 6; },
      getParry: (wits) => { return wits + 12; },
      getTargetNumberOfStrength: (strength) => { return 20 - strength; },
      getTargetNumberOfHeart: (heart) => { return 20 - heart; },
      getTargetNumberOfWits: (wits) => { return 20 - wits; }
    },
    skills: {
      'Awe': 2,
      'Athletics': 2,
      'Awareness': 2,
      'Hunting': 0,
      'Song': 2,
      'Craft': 2,
      'Enhearten': 0,
      'Travel': 1,
      'Insight': 0,
      'Healing': 2,
      'Courtesy': 1,
      'Battle': 2,
      'Persuade': 0,
      'Stealth': 0,
      'Scan': 0,
      'Explore': 0,
      'Riddle': 0,
      'Lore': 3
    },
    favoured_skills: ['Awareness','Healing'],
    combat_proficiencies_2_points: ['Spears','Swords'],
    combat_proficiencies_1_point: ['Axes','Bows','Spears','Swords'],
    distinctive_features_list: ['Fair','Keen-Eyed', 'Lordly', 'Inquisitive', 'Merry', 'Proud', 'Subtle', 'Wilful'],
    range_ages: {min: 100, max: 300},
    names: {
      male_names: 'Aegnor,Beleg,Celegorm,Daeron,Edrahil,Fingon,Finrod,Gwindor,Mablung,Maeglin,Orodreth,Saeros'.split(','),
      female_names: 'Amarië,Ancalimë,Berúthiel,Celebrindal,Elwing,Finduilas,Fíriel,Idril,Lothiriel,Míriel,Nimloth,Nimrodel'.split(','),
      family_names: []
    },
    ponies_and_horses: clone(STANDARDS_OF_LIVING['Prosperous'].ponies_and_horses),
    previous_experience: 10,
    extra_notes: 'Remove Shadow Points only in Yule Fellowship Phase',
    weapons_restriction: [],
    shield_restriction: [],
    armour_restriction: [],
    helmet_restriction: false
  },

  'Beornings': {
    images: {
      'm': ['img/characters/beornings/m0.jpg','img/characters/beornings/m1.jpg'],
      'f': ['img/characters/beornings/f0.jpg','img/characters/beornings/f1.jpg']
    },
    heroic_cultures_select: 'Beornings (The One Ring: Peoples of Wilderland)',
    cultural_blessing: 'If Wounded, Attack and PROTECTION rolls are Favoured',
    standard_of_living: 'Common',
    attributes: [
      {strength: 5, heart: 7, wits: 2},
      {strength: 4, heart: 7, wits: 3},
      {strength: 5, heart: 6, wits: 3},
      {strength: 4, heart: 6, wits: 4},
      {strength: 5, heart: 5, wits: 4},
      {strength: 6, heart: 6, wits: 2}
    ],
    derived_stats: {
      getEndurance: (strength) => { return strength + 22; },
      getHope: (heart) => { return heart + 6; },
      getParry: (wits) => { return wits + 12; },
      getTargetNumberOfStrength: (strength) => { return 20 - strength; },
      getTargetNumberOfHeart: (heart) => { return 20 - heart; },
      getTargetNumberOfWits: (wits) => { return 20 - wits; }
    },
    skills: {
      'Awe': 3,
      'Athletics': 2,
      'Awareness': 2,
      'Hunting': 2,
      'Song': 0,
      'Craft': 1,
      'Enhearten': 1,
      'Travel': 1,
      'Insight': 3,
      'Healing': 1,
      'Courtesy': 0,
      'Battle': 1,
      'Persuade': 0,
      'Stealth': 1,
      'Scan': 1,
      'Explore': 0,
      'Riddle': 1,
      'Lore': 0
    },
    favoured_skills: ['Athletics','Scan'],
    combat_proficiencies_2_points: ['Axes','Spears'],
    combat_proficiencies_1_point: ['Axes','Bows','Spears','Swords'],
    distinctive_features_list: ['Bold', 'Fierce', 'Generous', 'Honourable', 'Rustic', 'Stern', 'Tall', 'Wary'],
    range_ages: {min: 14, max: 40},
    names: {
      male_names: 'Agilfrid,Arnulf,Avagis,Baldac,Barald,Berangar,Cilderic,Eberulf,Eboric,Evermud,Frideger,Garivald,Geberic,Gerold,Grimfast,Hartmut,Hathus,Heriwulf,Ingund,Iwald,Leudast,Magneric,Maracar,Otbert,Ramnulf,Rathar,Rigunth,Sigeric,Theodard,Thorismund,Walcaud,Widuven,Wulferd'.split(','),
      female_names: 'Adosinda,Amalfrida,Amalina,Avagisa,Avina,Basina,Beranhild,Brunihild,Deuteria,Gailavira,Garsendis,Geleswinta,Gelvira,Grimhild,Gunteuch,Hermesind,Heva,Hilduara,Ingund,Radegund,Sichild,Verich,Waldrada,Wisigard'.split(','),
      family_names: 'from the High Pass,of the Mountains,the Bald,the Black,the Bold,the Captain,the Cloaked,the Crooked,the Eloquent,the Foresighted,the Good,the Goodsword,the Loyal,the Old,the Pugnacious,the Quickwitted,the Quiet,the Red,of the Red-shield,the Rich,the Runner,the Sad,the Sharp,the Smith,the Thin,the Trouble-maker,the Wise,the Young'.split(',')
    },
    ponies_and_horses: clone(STANDARDS_OF_LIVING['Common'].ponies_and_horses),
    previous_experience: 10,
    extra_notes: '',
    weapons_restriction: [],
    shield_restriction: [],
    armour_restriction: [],
    helmet_restriction: false
  },

  'Elves of Mirkwood': {
    images: {
      'm': ['img/characters/elves_of_mirkwood/m0.jpg','img/characters/elves_of_mirkwood/m1.jpg'],
      'f': ['img/characters/elves_of_mirkwood/f0.jpg','img/characters/elves_of_mirkwood/f1.jpg']
    },
    heroic_cultures_select: 'Elves of Mirkwood (The One Ring: Peoples of Wilderland)',
    cultural_blessing: 'When in the forest, or at night, spend 1 Hope to Magical Success',
    standard_of_living: 'Frugal',
    attributes: [
      {strength: 5, heart: 2, wits: 7},
      {strength: 4, heart: 3, wits: 7},
      {strength: 5, heart: 3, wits: 6},
      {strength: 4, heart: 4, wits: 6},
      {strength: 5, heart: 4, wits: 5},
      {strength: 6, heart: 2, wits: 6}
    ],
    derived_stats: {
      getEndurance: (strength) => { return strength + 18; },
      getHope: (heart) => { return heart + 8; },
      getParry: (wits) => { return wits + 14; },
      getTargetNumberOfStrength: (strength) => { return 20 - strength; },
      getTargetNumberOfHeart: (heart) => { return 20 - heart; },
      getTargetNumberOfWits: (wits) => { return 20 - wits; }
    },
    skills: {
      'Awe': 1,
      'Athletics': 2,
      'Awareness': 2,
      'Hunting': 2,
      'Song': 2,
      'Craft': 1,
      'Enhearten': 0,
      'Travel': 0,
      'Insight': 0,
      'Healing': 1,
      'Courtesy': 0,
      'Battle': 1,
      'Persuade': 0,
      'Stealth': 3,
      'Scan': 2,
      'Explore': 1,
      'Riddle': 0,
      'Lore': 2
    },
    favoured_skills: ['Awareness','Stealth'],
    combat_proficiencies_2_points: ['Bows','Spears'],
    combat_proficiencies_1_point: ['Axes','Bows','Spears','Swords'],
    distinctive_features_list: ['Cunning', 'Fair', 'Fierce', 'Keen-Eyed', 'Merry', 'Proud', 'Secretive', 'Swift'],
    range_ages: {min: 300, max: 700},
    names: {
      male_names: 'Amras,Aredhel,Beleganor,Belegon,Calanhir,Carmagor,Dagorhir,Durandir,Edrahil,Ellahir,Fincalan,Fuindor,Galdagor,Galdor,Hallas,Hirimlad,Ithildir,Lascalan,Linaith,Mablin,Malanor,Nauros,Orgalad,Pelegorn,Sargon'.split(','),
      female_names: 'Anórel,Aranel,Arbereth,Baraniel,Calanril,Celebrindal,Celenneth,Elanor,Elwing,Eraniel,Fimbrethil,Gloredhel,Idril,Irilde,Laurelin,Lôrwend,Lothiriel,Meneloth,Moriel,Narieth,Narniel,Nimloth,Nimrodel,Níniel,Tarandis'.split(','),
      family_names: []
    },
    ponies_and_horses: clone(STANDARDS_OF_LIVING['Frugal'].ponies_and_horses),
    previous_experience: 10,
    extra_notes: '',
    weapons_restriction: [],
    shield_restriction: [],
    armour_restriction: [],
    helmet_restriction: false
  },

  'Woodmen of Wilderland': {
    images: {
      'm': ['img/characters/woodmen_of_wilderland/m0.jpg','img/characters/woodmen_of_wilderland/m1.jpg'],
      'f': ['img/characters/woodmen_of_wilderland/f0.jpg','img/characters/woodmen_of_wilderland/f1.jpg']
    },
    heroic_cultures_select: 'Woodmen of Wilderland (The One Ring: Peoples of Wilderland)',
    cultural_blessing: '+2 Parry when fighting in a forest',
    standard_of_living: 'Frugal',
    attributes: [
      {strength: 2, heart: 5, wits: 7},
      {strength: 3, heart: 4, wits: 7},
      {strength: 3, heart: 5, wits: 6},
      {strength: 4, heart: 4, wits: 6},
      {strength: 4, heart: 5, wits: 5},
      {strength: 2, heart: 6, wits: 6}
    ],
    derived_stats: {
      getEndurance: (strength) => { return strength + 22; },
      getHope: (heart) => { return heart + 8; },
      getParry: (wits) => { return wits + 10; },
      getTargetNumberOfStrength: (strength) => { return 20 - strength; },
      getTargetNumberOfHeart: (heart) => { return 20 - heart; },
      getTargetNumberOfWits: (wits) => { return 20 - wits; }
    },
    skills: {
      'Awe': 0,
      'Athletics': 2,
      'Awareness': 3,
      'Hunting': 3,
      'Song': 1,
      'Craft': 1,
      'Enhearten': 1,
      'Travel': 0,
      'Insight': 0,
      'Healing': 2,
      'Courtesy': 0,
      'Battle': 1,
      'Persuade': 0,
      'Stealth': 2,
      'Scan': 0,
      'Explore': 2,
      'Riddle': 1,
      'Lore': 0
    },
    favoured_skills: ['Hunting','Healing'],
    combat_proficiencies_2_points: ['Axes','Bows'],
    combat_proficiencies_1_point: ['Axes','Bows','Spears','Swords'],
    distinctive_features_list: ['Cunning', 'Eager', 'Faithful', 'Patient', 'Stern', 'Swift', 'True-Hearted', 'Wary'],
    range_ages: {min: 16, max: 55},
    names: {
      male_names: 'Amalric,Ansegisel,Audovald,Balderic,Beranald,Beormud,Ebrimuth,Euric,Gisalric,Grimbald,Gundovald,Hartgard,Hartnid,Imnachar,Ingelram,Malaric,Munderic,Odo,Odovacar,Reginar,Ricfried,Sigibert,Sunnegisil,Theodebert,Theodemir,Theudebald,Theuderic,Waleran,Willicar'.split(','),
      female_names: 'Adosinda,Amalfrida,Amalina,Avagisa,Avina,Basina,Beranhild,Brunihild,Deuteria,Gailavira,Garsendis,Geleswinta,Gelvira,Grimhild,Gunteuch,Hermesind,Heva,Hilduara,Ingund,Radegund,Sichild,Verich,Waldrada,Wisigard'.split(','),
      family_names: 'the Bird-keeper,the Bowman,the Bride,the Bright one,the Eagle,the Healer,the Hound,the Hunter,the Quick,the Shepherd,the Shield-bearer,the Silent one,the Spear-shaker,the Wood-goer'.split(',')
    },
    ponies_and_horses: clone(STANDARDS_OF_LIVING['Frugal'].ponies_and_horses),
    previous_experience: 10,
    extra_notes: '',
    weapons_restriction: [],
    shield_restriction: [],
    armour_restriction: [],
    helmet_restriction: false
  },

  'Dwarves of Nogrod and Belegost': {
    images: {
      'm': ['img/characters/dwarves_of_nogrod_and_belegost/m0.jpg','img/characters/dwarves_of_nogrod_and_belegost/m1.jpg'],
      'f': ['img/characters/dwarves_of_nogrod_and_belegost/f0.jpg','img/characters/dwarves_of_nogrod_and_belegost/f1.jpg']
    },
    heroic_cultures_select: 'Dwarves of Nogrod and Belegost (Moria: Through the Doors of Durin)',
    cultural_blessing: '1/2 Load of armour and helm',
    standard_of_living: 'Common',
    attributes: [
      {strength: 7, heart: 2, wits: 5},
      {strength: 7, heart: 3, wits: 4},
      {strength: 6, heart: 3, wits: 5},
      {strength: 6, heart: 4, wits: 4},
      {strength: 5, heart: 4, wits: 5},
      {strength: 6, heart: 2, wits: 6}
    ],
    derived_stats: {
      getEndurance: (strength) => { return strength + 22; },
      getHope: (heart) => { return heart + 8; },
      getParry: (wits) => { return wits + 10; },
      getTargetNumberOfStrength: (strength) => { return 20 - strength; },
      getTargetNumberOfHeart: (heart) => { return 20 - heart; },
      getTargetNumberOfWits: (wits) => { return 20 - wits; }
    },
    skills: {
      'Awe': 2,
      'Athletics': 1,
      'Awareness': 0,
      'Hunting': 0,
      'Song': 1,
      'Craft': 3,
      'Enhearten': 0,
      'Travel': 2,
      'Insight': 0,
      'Healing': 0,
      'Courtesy': 0,
      'Battle': 0,
      'Persuade': 0,
      'Stealth': 0,
      'Scan': 3,
      'Explore': 2,
      'Riddle': 2,
      'Lore': 2
    },
    favoured_skills: ['Awe','Craft'],
    combat_proficiencies_2_points: ['Axes','Swords'],
    combat_proficiencies_1_point: ['Axes','Bows','Spears','Swords'],
    distinctive_features_list: ['Cunning','Fierce','Proud','Rustic','Secretive','Stern','Wary','Wilful'],
    range_ages: {min: 50, max: 90},
    names: {
      male_names: 'Ai,Anar,Beli,Bláin,Borin,Burin,Bruni,Farin,Flói,Frár,Frerin,Frór,Ginar,Gróin,Grór,Hanar,Hepti,Iari,Lófar,Lóni,Náli,Nár,Niping,Nói,Núr,Nýrád,Ónar,Póri,Regin,Svior,Veig,Vidar'.split(','),
      female_names: 'Adís,Afrid,Agda,Bersa,Birna,Dagrún,Dís,Drífa,Edda,Elin,Fenja,Frida,Geira,Gísla,Hadda,Hón,Ida,Ilmr,Jóra,Kára,Kóna,Líf,Línhild,Már,Mist,Nál,Oda,Ósk,Rán,Rinda,Sefa,Syn,Tóra,Trana,Úlfrún,Vírún,Yrr'.split(','),
      family_names: []
    },
    ponies_and_horses: clone(STANDARDS_OF_LIVING['Common'].ponies_and_horses),
    previous_experience: 10,
    extra_notes: 'Dwarven cannot use: Great Bow, Great Spear, and Great Shield. Can only choose another Dwarf as your Fellowship Focus.',
    weapons_restriction: ['Great Bow','Great Spear'],
    shield_restriction: ['Great Shield'],
    armour_restriction: [],
    helmet_restriction: false
  },

};

const CALLINGS = {
  'Captain': {
    calling_select: 'Captain (The One Ring Core Rules)',
    two_favoured_skills: ['Battle','Enhearten','Persuade'],
    additional_distinctive_feature: ['Leadership'],
    shadow_path: 'Lure of Power'
  },
  'Champion': {
    calling_select: 'Champion (The One Ring Core Rules)',
    two_favoured_skills: ['Athletics', 'Awe', 'Hunting'],
    additional_distinctive_feature: ['Enemy-Lore: Evil Men','Enemy-Lore: Orcs','Enemy-Lore: Spiders','Enemy-Lore: Trolls','Enemy-Lore: Wargs','Enemy-Lore: Undead'],
    shadow_path: 'Curse of Vengeance'
  },
  'Messenger': {
    calling_select: 'Messenger (The One Ring Core Rules)',
    two_favoured_skills: ['Courtesy', 'Song', 'Travel'],
    additional_distinctive_feature: ['Folk-Lore'],
    shadow_path: 'Wandering-Madness'
  },
  'Scholar': {
    calling_select: 'Scholar (The One Ring Core Rules)',
    two_favoured_skills: ['Craft', 'Lore', 'Riddle'],
    additional_distinctive_feature: ['Rhymes of Lore'],
    shadow_path: 'Lure of Secrets'
  },
  'Treasure Hunter': {
    calling_select: 'Treasure Hunter (The One Ring Core Rules)',
    two_favoured_skills: ['Explore', 'Scan', 'Stealth'],
    additional_distinctive_feature: ['Burglary'],
    shadow_path: 'Dragon-Sickness'
  },
  'Warden': {
    calling_select: 'Warden (The One Ring Core Rules)',
    two_favoured_skills: ['Awareness', 'Healing', 'Insight'],
    additional_distinctive_feature: ['Shadow-Lore'],
    shadow_path: 'Path of Despair'
  }
};

/*
  Random Functions
  (Math.floor(Math.random() * 2)) -> 0 ou 1
  Math.floor(Math.random() * array.length) -> random array
*/

function randomArray(array,callback) {
  let index = Math.floor(Math.random() * array.length);
  callback(array[index]);
}

function randomArrayMinusExclusionary(array,exclusionary,callback) {
  let clonedArray = cloneArray(array);
  let raffled = false;
  while (raffled == false) {
    let index = Math.floor(Math.random() * clonedArray.length);
    let item = clonedArray[index];

    if (exclusionary.includes(item)) {
      let indexExclusionary = clonedArray.indexOf(item);
      clonedArray.splice(indexExclusionary, 1); // 2nd parameter means remove one item only

      if (clonedArray.length == 0) {
        throw "Erro ao sortear um item em randomArrayMinusExclusionary (veja os elementos 0): " + array[0] + ' ' + exclusionary[0];
      }

    } else {
      raffled = true;
      callback(item);
    }
  }
}

function randomBetween(min,max,callback) {
  let number = Math.floor(Math.random() * (max - min + 1)) + min;
  callback(number);
}

function sortArray(array) {
  let clonedArray = cloneArray(array);
  clonedArray.sort();
  clonedArray.reverse();
  return clonedArray;
}

function removeArray(array,arrayToRemove,callback) {
  let clonedArray = cloneArray(array);

  if (array.length == 0) {
    callback(clonedArray);
  } else if (arrayToRemove.length == 0) {
    callback(clonedArray);
  } else {
    arrayToRemove.forEach((item, i) => {

      let remove_index = clonedArray.indexOf(item);
      if (remove_index > -1) {
        clonedArray.splice(remove_index, 1);
      }

      if (i == (arrayToRemove.length - 1)) {
        callback(clonedArray);
      }
    });
  }
}

/* Create characters */

function skillActualPoint0(actual_point,allow_skill_points,item) {
  if (actual_point == 0) {
    if (!allow_skill_points.hasOwnProperty('point1')) {
      allow_skill_points['point1'] = { cost: 1, skills:[] };
    }
    allow_skill_points.point1.skills.push(item);
  }
}

function skillActualPoint1(actual_point,allow_skill_points,item) {
  if (actual_point == 1) {
    if (!allow_skill_points.hasOwnProperty('point2')) {
      allow_skill_points['point2'] = { cost: 2, skills:[] };
    }
    allow_skill_points.point2.skills.push(item);
  }
}

function skillActualPoint2(actual_point,allow_skill_points,item) {
  if (actual_point == 2) {
    if (!allow_skill_points.hasOwnProperty('point3')) {
      allow_skill_points['point3'] = { cost: 3, skills:[] };
    }
    allow_skill_points.point3.skills.push(item);
  }
}

function skillActualPoint3(actual_point,allow_skill_points,item) {
  if (actual_point == 3) {
    if (!allow_skill_points.hasOwnProperty('point5')) {
      allow_skill_points['point5'] = { cost: 5, skills:[] };
    }
    allow_skill_points.point5.skills.push(item);
  }
}

function proficiencyActualPoint0(actual_point,allow_proficiency_points,item) {
  if (actual_point == 0) {
    if (!allow_proficiency_points.hasOwnProperty('point2')) {
      allow_proficiency_points['point2'] = { cost: 2, profciencies:[] };
    }
    allow_proficiency_points.point2.profciencies.push(item);
  }
}

function proficiencyActualPoint1(actual_point,allow_proficiency_points,item) {
  if (actual_point == 1) {
    if (!allow_proficiency_points.hasOwnProperty('point4')) {
      allow_proficiency_points['point4'] = { cost: 4, profciencies:[] };
    }
    allow_proficiency_points.point4.profciencies.push(item);
  }
}

function proficiencyActualPoint2(actual_point,allow_proficiency_points,item) {
  if (actual_point == 2) {
    if (!allow_proficiency_points.hasOwnProperty('point6')) {
      allow_proficiency_points['point6'] = { cost: 6, profciencies:[] };
    }
    allow_proficiency_points.point6.profciencies.push(item);
  }
}

function checkAllowSkillPoints(character,previous_experience,callback) {
  let array_skills = Object.keys(character.skills);
  let allow_skill_points = {};

  array_skills.forEach((item, index) => {
    let actual_point = character.skills[item];

    if (previous_experience >= 5) {
      skillActualPoint0(actual_point,allow_skill_points,item);
      skillActualPoint1(actual_point,allow_skill_points,item);
      skillActualPoint2(actual_point,allow_skill_points,item);
      skillActualPoint3(actual_point,allow_skill_points,item);
    } else if (previous_experience >= 3) {
      skillActualPoint0(actual_point,allow_skill_points,item);
      skillActualPoint1(actual_point,allow_skill_points,item);
      skillActualPoint2(actual_point,allow_skill_points,item);
    } else if (previous_experience == 2) {
      skillActualPoint0(actual_point,allow_skill_points,item);
      skillActualPoint1(actual_point,allow_skill_points,item);
    } else if (previous_experience == 1) {
      skillActualPoint0(actual_point,allow_skill_points,item);
    }

    if (index == (array_skills.length - 1)) {
      callback(allow_skill_points);
    }
  });
}

function checkAllowProficiencyPoints(character,previous_experience,callback) {
  let array_proficiency = Object.keys(character.combat_proficiencies);
  let allow_proficiency_points = {};

  array_proficiency.forEach((item, index) => {
    let actual_point = character.combat_proficiencies[item];

    if (previous_experience >= 6) {
      proficiencyActualPoint0(actual_point,allow_proficiency_points,item);
      proficiencyActualPoint1(actual_point,allow_proficiency_points,item);
      proficiencyActualPoint2(actual_point,allow_proficiency_points,item);
    } else if (previous_experience >= 4) {
      proficiencyActualPoint0(actual_point,allow_proficiency_points,item);
      proficiencyActualPoint1(actual_point,allow_proficiency_points,item);
    } else if (previous_experience >= 2) {
      proficiencyActualPoint0(actual_point,allow_proficiency_points,item);
    }

    if (index == (array_proficiency.length - 1)) {
      callback(allow_proficiency_points);
    }
  });
}

function randomPointCosts(character,previous_experience,callback) {
  let skill_or_proficiency = (Math.floor(Math.random() * 2));

  if ((skill_or_proficiency == 0) && (character.randomPointChoiceProficiences == true)) {
    // SKILL
    checkAllowSkillPoints(character,previous_experience,(allow_skill_points)=>{

      let array_allow_skill_points = Object.keys(allow_skill_points);
      if (array_allow_skill_points.length > 0) {
        let index_allow_skill_points = Math.floor(Math.random() * array_allow_skill_points.length);
        let selected_cost = allow_skill_points[array_allow_skill_points[index_allow_skill_points]];

        let index_selected_cost_skill = Math.floor(Math.random() * selected_cost.skills.length);
        let selected_skill = selected_cost.skills[index_selected_cost_skill];

        addChoiceInLog('Previous Experience Choices',selected_skill);

        character.skills[selected_skill] = character.skills[selected_skill] + 1;
        previous_experience = previous_experience - selected_cost.cost;
      } else {
        previous_experience = 0;
      }

      callback(previous_experience);
    });
  } else {
    if (character.randomPointChoiceProficiences == false) {
      character.randomPointChoiceProficiences = true;

      // COMBAT PROFICIENCY
      checkAllowProficiencyPoints(character,previous_experience,(allow_proficiency_points)=>{

        let array_allow_proficiency_points = Object.keys(allow_proficiency_points);
        if (array_allow_proficiency_points.length > 0) {
          let index_allow_proficiency_points = Math.floor(Math.random() * array_allow_proficiency_points.length);
          let selected_cost = allow_proficiency_points[array_allow_proficiency_points[index_allow_proficiency_points]];

          let index_selected_cost_proficiency = Math.floor(Math.random() * selected_cost.profciencies.length);
          let selected_proficiency = selected_cost.profciencies[index_selected_cost_proficiency];

          addChoiceInLog('Previous Experience Choices',selected_proficiency);

          character.combat_proficiencies[selected_proficiency] = character.combat_proficiencies[selected_proficiency] + 1;
          previous_experience = previous_experience - selected_cost.cost;
        }

        callback(previous_experience);
      });
    }
  }
}

function choicesHeroicCulturePreviousExperience(character,heroicCulture,callback) {
  let previous_experience = heroicCulture.previous_experience;

  while (previous_experience > 0) {

    randomPointCosts(character,previous_experience,(changed_previous_experience)=>{
      previous_experience = changed_previous_experience;

      if (previous_experience == 0) {
        callback();
      }
    });
  }
}

function choicesHeroicCulture(heroicCultureName,heroicCulture,callback) {
  let character = clone(FINAL_CHARACTER);
  clearFinalCharacter(character);

  character.heroic_culture = heroicCultureName;

  randomArray(heroicCulture.attributes,attributes=>{
    character.attributes.strength = attributes.strength;
    character.attributes.heart = attributes.heart;
    character.attributes.wits = attributes.wits;

    if ((character.heroic_culture == 'Rangers of the North') || (character.heroic_culture == 'High Elves of Rivendell')) {
      let array_ranger_attribute = ['strength','heart','wits'];
      let index_ranger_attribute = Math.floor(Math.random() * array_ranger_attribute.length);
      let ranger_attribute = array_ranger_attribute[index_ranger_attribute];
      character.attributes[ranger_attribute] = character.attributes[ranger_attribute] + 1;

      let log_choice = '+1 Strength';
      if (ranger_attribute == 'heart') {
        log_choice = '+1 Heart';
      } else if (ranger_attribute == 'wits') {
        log_choice = '+1 Wits';
      }
      addChoiceInLog('Heroic Culture Attribute Bonus',log_choice);
    }

    character.attributes.endurance = heroicCulture.derived_stats.getEndurance(character.attributes.strength);
    character.attributes.hope = heroicCulture.derived_stats.getHope(character.attributes.heart);
    character.attributes.parry = heroicCulture.derived_stats.getParry(character.attributes.wits);
    character.attributes.TN_strength = heroicCulture.derived_stats.getTargetNumberOfStrength(character.attributes.strength);
    character.attributes.TN_heart = heroicCulture.derived_stats.getTargetNumberOfHeart(character.attributes.heart);
    character.attributes.TN_wits = heroicCulture.derived_stats.getTargetNumberOfWits(character.attributes.wits);

    randomBetween(heroicCulture.range_ages.min,heroicCulture.range_ages.max,age=>{
      character.age = age;
      addChoiceInLog('Chosen age',age);

      character.cultural_blessing = heroicCulture.cultural_blessing;
      character.standard_of_living = heroicCulture.standard_of_living;

      let baseNames = '';
      if (Math.floor(Math.random() * 2) == 0) {
        baseNames = 'male_names';
        character.genre = 'm';
      } else {
        baseNames = 'female_names';
        character.genre = 'f';
      }

      let array_imagens = cloneArray(heroicCulture.images[character.genre]);
      let index_array_imagens = Math.floor(Math.random() * array_imagens.length);
      character.imagem_path = array_imagens[index_array_imagens];

      randomArray(heroicCulture.names[baseNames],name=>{

        let family_name = '';
        if (heroicCulture.names.family_names.length > 0) {
          let index_family_names = Math.floor(Math.random() * heroicCulture.names.family_names.length);
          family_name = heroicCulture.names.family_names[index_family_names];
        }

        character.name = name;
        character.family_name = family_name;

        addNameInLog('Character\'s Name',name,family_name);

        character.favoured_skills = [];

        randomArray(heroicCulture.favoured_skills,skill=>{
          character.favoured_skills.push(skill);
          character.skills = clone(heroicCulture.skills);

          addChoiceInLog('Favoured Skills of Heroic Culture',skill);

          /* Ponies and Horses */
          let ponies_and_horses = '';
          if (heroicCulture.ponies_and_horses.length > 0) {
            let index_ponies_and_horses = (Math.floor(Math.random() * heroicCulture.ponies_and_horses.length));
            ponies_and_horses = heroicCulture.ponies_and_horses[index_ponies_and_horses];

            addChoiceInLog('Ponies and Horses',ponies_and_horses);
          }
          character.ponies_and_horses = ponies_and_horses;

          /* Combat Proficiencies */
          let index_combat_proficiencies_2_points = (Math.floor(Math.random() * heroicCulture.combat_proficiencies_2_points.length));
          let combat_proficiencies_2_points = heroicCulture.combat_proficiencies_2_points[index_combat_proficiencies_2_points];
          character.combat_proficiencies[combat_proficiencies_2_points] = 2;

          addChoiceInLog('Combat Proficiencies with 2 points',combat_proficiencies_2_points);

          let array_combat_proficiencies_1_point = cloneArray(heroicCulture.combat_proficiencies_1_point);
          let index_array_combat_proficiencies_1_point = array_combat_proficiencies_1_point.indexOf(combat_proficiencies_2_points);
          array_combat_proficiencies_1_point.splice(index_array_combat_proficiencies_1_point, 1);
          let index_combat_proficiencies_1_point = (Math.floor(Math.random() * array_combat_proficiencies_1_point.length));
          let combat_proficiencies_1_point = array_combat_proficiencies_1_point[index_combat_proficiencies_1_point];
          character.combat_proficiencies[combat_proficiencies_1_point] = 1;

          addChoiceInLog('Combat Proficiencies with 1 point',combat_proficiencies_1_point);

          character.initial_combat_proficiencies = clone(character.combat_proficiencies);

          /* Distinctive Features */
          character.distinctive_features = [];

          let distinctive_features_list = cloneArray(heroicCulture.distinctive_features_list);
          randomArray(distinctive_features_list,(first_distinctive_feature)=>{
            character.distinctive_features.push(first_distinctive_feature);

            addChoiceInLog('Distinctive Features of Heroic Culture',first_distinctive_feature);

            randomArrayMinusExclusionary(distinctive_features_list,character.distinctive_features,(second_distinctive_feature)=>{
              character.distinctive_features.push(second_distinctive_feature);

              addChoiceInLog('Distinctive Features of Heroic Culture',second_distinctive_feature);

              character.extra_notes = cloneString(heroicCulture.extra_notes);

              /* Previous Experience */
              choicesHeroicCulturePreviousExperience(character,heroicCulture,()=>{
                /* Current Stats */
                character.current_stats.current_endurance = character.attributes.endurance;
                character.current_stats.current_hope = character.attributes.hope;

                /*
                  Other properties:

                  Apply specifics of heroic culture
                  character.calling
                  character.favoured_skills
                  character.distinctive_features
                  character.shadow_path
                  character.war_gear
                  character.armour
                  character.helm
                  character.shield
                  character.useful_items
                  character.rewards
                  character.virtues
                */
                callback(character);
              });

            });
          });

        });
      });
    });
  });
}

function randomHeroicCulture(defaultHeroicCulture,callback) {
  let heroicCulture = null;
  let heroicCultureName = '';

  if (checkIfContains(HEROIC_CULTURES,defaultHeroicCulture)) {
    heroicCultureName = defaultHeroicCulture;
  } else {
    let arrayHeroicCulture = Object.keys(HEROIC_CULTURES);
    let indexHeroicCulture = Math.floor(Math.random() * arrayHeroicCulture.length);
    heroicCultureName = arrayHeroicCulture[indexHeroicCulture];
  }

  heroicCulture = HEROIC_CULTURES[heroicCultureName];

  addChoiceInLog('Selected Heroic Culture',heroicCultureName);

  choicesHeroicCulture(heroicCultureName,heroicCulture,callback);
}

function choicesCalling(callingName,calling,character,callback) {
  character.calling = callingName;

  addChoiceInLog('Selected Calling',callingName);

  let two_favoured_skills = cloneArray(calling.two_favoured_skills);
  randomArrayMinusExclusionary(two_favoured_skills,character.favoured_skills,(favoured_skills_1)=>{
    character.favoured_skills.push(favoured_skills_1);

    addChoiceInLog('Favoured Skills of Calling',favoured_skills_1);

    let index_favoured_skills_1 = two_favoured_skills.indexOf(favoured_skills_1);
    two_favoured_skills.splice(index_favoured_skills_1, 1);

    randomArrayMinusExclusionary(two_favoured_skills,character.favoured_skills,(favoured_skills_2)=>{
      character.favoured_skills.push(favoured_skills_2);

      addChoiceInLog('Favoured Skills of Calling',favoured_skills_2);

      randomArray(calling.additional_distinctive_feature,(new_distinctive_feature)=>{
        character.distinctive_features.push(new_distinctive_feature);

        character.shadow_path = calling.shadow_path;
        callback();
      });
    });
  });

  /*
    Other properties:

    Apply specifics of heroic culture
    character.war_gear
    character.armour
    character.helm
    character.shield
    character.useful_items
    character.rewards
    character.virtues
  */
}

function randomCalling(defaultCalling,character,callback) {
  let calling = null;
  let callingName = '';

  if (checkIfContains(CALLINGS,defaultCalling)) {
    callingName = defaultCalling;
  } else {
    let arrayCalling = Object.keys(CALLINGS);
    let indexCalling = Math.floor(Math.random() * arrayCalling.length);
    callingName = arrayCalling[indexCalling];
  }

  calling = CALLINGS[callingName];
  choicesCalling(callingName,calling,character,callback);
}

function randomWarGear(character,callback) {
  character.war_gear = [];

  let combat_proficiencies = clone(character.combat_proficiencies);
  let array_combat_proficiencies = Object.keys(combat_proficiencies);
  let important_combat_proficiencies = [];
  let highest_score = -1;

  let favorite_weapon = '';
  if (character.initial_combat_proficiencies['Axes'] == 2) {
    favorite_weapon = 'Axes';
  } else if (character.initial_combat_proficiencies['Bows'] == 2) {
    favorite_weapon = 'Bows';
  } else if (character.initial_combat_proficiencies['Spears'] == 2) {
    favorite_weapon = 'Spears';
  } else if (character.initial_combat_proficiencies['Swords'] == 2) {
    favorite_weapon = 'Swords';
  }
  /* Pada futura definição do rewards */
  character.favorite_weapon = favorite_weapon;

  array_combat_proficiencies.forEach((proficiency, index_proficiency) => {
    let score = combat_proficiencies[proficiency];
    let changed_score = score;
    if (proficiency == favorite_weapon) {
      changed_score = changed_score + 1;
    }

    let label_proficiency = changed_score + '-' + proficiency;
    important_combat_proficiencies.push(label_proficiency);

    if (score > highest_score) {
      highest_score = score;
    }

    if (index_proficiency == (array_combat_proficiencies.length - 1)) {
      let brawling = (highest_score - 1) + '-' + 'Brawling';
      important_combat_proficiencies.push(brawling);

      let sorted_combat_proficiencies = sortArray(important_combat_proficiencies);

      let weapon1 = sorted_combat_proficiencies[0].split('-')[1];
      let weapon2 = sorted_combat_proficiencies[1].split('-')[1];
      let weapon3 = sorted_combat_proficiencies[2].split('-')[1];

      let weapons_relationship_1 = cloneArray(WEAPONS_RELATIONSHIP[weapon1]);
      let weapons_restriction = cloneArray(HEROIC_CULTURES[character.heroic_culture].weapons_restriction);

      removeArray(weapons_relationship_1,weapons_restriction,(weapons_relationship_1_final)=>{
        let index_weapons_relationship_1_final = Math.floor(Math.random() * weapons_relationship_1_final.length);
        let weapons_1_name = weapons_relationship_1_final[index_weapons_relationship_1_final];
        let weapons_1 = clone(WEAPONS[weapons_1_name]);
        weapons_1['name'] = weapons_1_name;
        character.war_gear.push(weapons_1);

        addChoiceInLog('Selected War Gear',weapons_1_name);

        /* Rewards List */
        character.rewards_list[character.favorite_weapon] = {};
        character.rewards_list[character.favorite_weapon]['item'] = weapons_1;
        character.rewards_list[character.favorite_weapon]['rewards'] = ['FELL','GRIEVOUS','KEEN'];


        let index_weapons_1_hands = Math.floor(Math.random() * weapons_1.hands.length);
        character.can_use_shield = (weapons_1.hands[index_weapons_1_hands] == 1);

        let weapons_relationship_2 = cloneArray(WEAPONS_RELATIONSHIP[weapon2]);

        removeArray(weapons_relationship_2,weapons_restriction,(weapons_relationship_2_final)=>{
          let index_weapons_relationship_2_final = Math.floor(Math.random() * weapons_relationship_2_final.length);
          let weapons_2_name = weapons_relationship_2_final[index_weapons_relationship_2_final];
          let weapons_2 = clone(WEAPONS[weapons_2_name]);
          weapons_2['name'] = weapons_2_name;

          if (Math.floor(Math.random() * 3) > 0) {
            character.war_gear.push(weapons_2);

            addChoiceInLog('Selected War Gear',weapons_2_name);
          }

          let weapons_relationship_3 = cloneArray(WEAPONS_RELATIONSHIP[weapon3]);

          removeArray(weapons_relationship_3,weapons_restriction,(weapons_relationship_3_final)=>{
            let index_weapons_relationship_3_final = Math.floor(Math.random() * weapons_relationship_3_final.length);
            let weapons_3_name = weapons_relationship_3_final[index_weapons_relationship_3_final];
            let weapons_3 = clone(WEAPONS[weapons_3_name]);
            weapons_3['name'] = weapons_3_name;

            if (Math.floor(Math.random() * 2) == 0) {
              character.war_gear.push(weapons_3);

              addChoiceInLog('Selected War Gear',weapons_3_name);
            }

            callback();
          });
        });

      });
    }
  });
}

function randomShield(character,callback) {
  if (character.can_use_shield) {
    let shields = clone(SHIELDS);

    let array_shields = Object.keys(shields);
    if (STANDARDS_OF_LIVING[character.standard_of_living].shields.length > 0) {
      array_shields = cloneArray(STANDARDS_OF_LIVING[character.standard_of_living].shields);
    }

    let shield_restriction = cloneArray(HEROIC_CULTURES[character.heroic_culture].shield_restriction);

    removeArray(array_shields,shield_restriction,(array_shields_final)=>{
      let index_array_shields_final = Math.floor(Math.random() * array_shields_final.length);
      let shield_name = array_shields_final[index_array_shields_final];
      let shield = clone(shields[shield_name]);
      shield['name'] = shield_name;
      character.shield = shield;

      addChoiceInLog('Selected War Gear',shield_name);

      /* Rewards List */
      character.rewards_list['Shields'] = {};
      character.rewards_list['Shields']['item'] = shield;
      character.rewards_list['Shields']['rewards'] = ['CUNNING MAKE','REINFORCED'];

      callback();
    });

  } else {
    callback();
  }
}

function randomArmour(character,callback) {
  let armours = clone(ARMOUR);

  let array_armours = Object.keys(armours);
  if (STANDARDS_OF_LIVING[character.standard_of_living].armour.length > 0) {
    array_armours = cloneArray(STANDARDS_OF_LIVING[character.standard_of_living].armour);
  }

  let armour_restriction = cloneArray(HEROIC_CULTURES[character.heroic_culture].armour_restriction);

  removeArray(array_armours,armour_restriction,(array_armours_final)=>{
    if (array_armours_final.length == 0) {
      callback();
    } else {
      let index_array_armours_final = Math.floor(Math.random() * array_armours_final.length);
      let armour_name = array_armours_final[index_array_armours_final];
      let armour = clone(armours[armour_name]);
      armour['name'] = armour_name;
      character.armour = armour;

      addChoiceInLog('Selected War Gear',armour_name);

      if (character.heroic_culture == 'Dwarves of Durin’s Folk') {
        character.armour.load = Math.ceil(character.armour.load / 2);
      }

      /* Rewards List */
      character.rewards_list['Armours'] = {};
      character.rewards_list['Armours']['item'] = armour;
      character.rewards_list['Armours']['rewards'] = ['CLOSE-FITTING','CUNNING MAKE'];

      callback();
    }
  });
}

function randomHelm(character,callback) {
  if (HEROIC_CULTURES[character.heroic_culture].helmet_restriction) {
    callback();
  } else {

    /* 2 em 3 chances de obter um Elmo */
    if (Math.floor(Math.random() * 3) > 0) {
      let helm = clone(HELMS['Helm']);
      helm['name'] = 'Helm';
      character.helm = helm;

      addChoiceInLog('Selected War Gear','Helm');

      if (character.heroic_culture == 'Dwarves of Durin’s Folk') {
        character.helm.load = 2;
      }

      /* Rewards List */
      character.rewards_list['Helms'] = {};
      character.rewards_list['Helms']['item'] = helm;
      character.rewards_list['Helms']['rewards'] = ['CLOSE-FITTING','CUNNING MAKE'];

      callback();
    } else {
      callback();
    }
  }
}

function randomUsefulItems(character,callback) {
  let count_useful_items = STANDARDS_OF_LIVING[character.standard_of_living].useful_items;
  if (count_useful_items == 0) {
    callback();
  } else {
    let array_useful_items = Object.keys(TRAVELLING_GEAR);
    for (let index=0; index<count_useful_items; index++) {
      let index_array_useful_items = Math.floor(Math.random() * array_useful_items.length);
      let useful_item_name = array_useful_items[index_array_useful_items];

      let array_skills = cloneArray(TRAVELLING_GEAR[useful_item_name]);
      let useful_item_skill = array_skills[Math.floor(Math.random() * array_skills.length)];

      //character.useful_items.push(useful_item_name + ': ' + useful_item_skill);
      character.useful_items.push({
        item: useful_item_name,
        skill: useful_item_skill
      });

      addTravellingGearInLog('Travelling Gear Selected',useful_item_name,useful_item_skill);

      array_useful_items.splice(index_array_useful_items, 1);

      if (index == (count_useful_items - 1)) {
        callback();
      }
    }
  }
}

function randomReward(character,callback) {
  let array_rewards_list = Object.keys(character.rewards_list);
  let index_rewards_list = Math.floor(Math.random() * array_rewards_list.length);
  let reward_detail_selected = character.rewards_list[array_rewards_list[index_rewards_list]];

  let index_reward_detail_selected = Math.floor(Math.random() * reward_detail_selected.rewards.length);
  let reward_name_selected = reward_detail_selected.rewards[index_reward_detail_selected];
  let reward_selected = clone(REWARDS_LIST[reward_name_selected]);
  reward_selected['name'] = reward_name_selected;

  addChoiceInLog('Reward Selected',reward_name_selected);

  if (reward_selected.check(reward_detail_selected.item)) {
    reward_selected.apply(reward_detail_selected.item);
    character.rewards.name = reward_selected.name;
    character.rewards.notes = reward_selected.notes;
    character.rewards.item = reward_detail_selected.item.name;

    callback();
  } else {
    callback();
  }
}

function randomVirtue(character,callback) {
  let array_virtues_list = Object.keys(VIRTUES_LIST);
  let index_array_virtues_list = Math.floor(Math.random() * array_virtues_list.length);
  let selected_virtue_name = array_virtues_list[index_array_virtues_list];
  let selected_virtue = clone(VIRTUES_LIST[selected_virtue_name]);

  character.virtues.name = selected_virtue_name;
  character.virtues.notes = selected_virtue.notes;

  addChoiceInLog('Selected Virtue',selected_virtue_name);

  selected_virtue.apply(character,()=>{
    callback();
  });
}

function addLoad(character,load) {
  let actual_load = character.current_stats.load;
  character.current_stats.load = actual_load + load;

  if (character.current_stats.load >= character.current_stats.current_endurance) {
    character.current_stats.weary = true;
  }
}

function calcParryAndLoad(character,callback) {
  if (character.shield != null) {
    let actual_parry = character.attributes.parry;

    if (character.shield.parry_modifier.includes('+')) {
      let parry_modifier = parseInt(character.shield.parry_modifier.substr(1));
      character.attributes.parry = actual_parry + parry_modifier;
    }

    addLoad(character,character.shield.load);
  }

  if (character.armour != null) {
    addLoad(character,character.armour.load);
  }

  if (character.helm != null) {
    addLoad(character,character.helm.load);
  }

  if (character.war_gear.length > 0) {
    character.war_gear.forEach((gear, index) => {
      addLoad(character,gear.load);

      if (index == (character.war_gear.length - 1)) {
        callback();
      }
    });
  } else {
    callback();
  }
}

function rollCharacter(callback) {
  clearLog();

  let selectedHeroicCulture = '';
  let selectedCalling = '';

  let formSelectHeroicCulture = document.getElementById('form-select-heroic-culture');
  let valueFormSelectHeroicCulture = formSelectHeroicCulture.options[formSelectHeroicCulture.selectedIndex].value;
  if (valueFormSelectHeroicCulture != 'all') {
    selectedHeroicCulture = valueFormSelectHeroicCulture;
  }

  let formSelectCalling = document.getElementById('form-select-calling');
  let valueFormSelectCalling = formSelectCalling.options[formSelectCalling.selectedIndex].value;
  if (valueFormSelectCalling != 'all') {
    selectedCalling = valueFormSelectCalling;
  }

  randomHeroicCulture(selectedHeroicCulture,(character)=>{
    randomCalling(selectedCalling,character,()=>{
      randomWarGear(character,()=>{
        randomShield(character,()=>{
          randomArmour(character,()=>{
            randomHelm(character,()=>{
              randomUsefulItems(character,()=>{
                randomReward(character,()=>{
                  randomVirtue(character,()=>{
                    calcParryAndLoad(character,()=>{
                      console.log(getInternationalization('#T001'));
                      callback(character);
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

function convertUsefulItems(character,callback) {
  let notes = '';
  if (character.useful_items.length == 0) {
    callback(notes);
  } else {
    character.useful_items.forEach((useful_item, index_item) => {

      let item_name = getInternationalization(useful_item.item);
      let item_skill = getInternationalization(useful_item.skill);

      notes = notes + item_name + ': ' + item_skill + '\n';

      if (index_item == (character.useful_items.length - 1)) {
        callback(notes);
      }
    });
  }
}

function convertCharacterToSheet(character,callback) {

  let family_name = character.family_name;
  if (family_name != '') {
    family_name = ' ' + getInternationalization(family_name);
  }
  let name = character.name + family_name;

  convertUsefulItems(character,(notes_callback)=>{
    let notes = notes_callback;

    if (character.extra_notes != '') {
      notes = notes + getInternationalization(character.extra_notes) + '\n';
    }

    if (character.ponies_and_horses != '') {
      notes = notes + getInternationalization(character.ponies_and_horses) + '\n';
    }

    /* BEGIN - Create Character Sheet */

    let distinctive_features_1 = '';
    let distinctive_features_2 = '';

    if (character.distinctive_features.length > 0) {
      distinctive_features_1 = getInternationalization(character.distinctive_features[0]);
    }
    if (character.distinctive_features.length > 1) {
      distinctive_features_1 = distinctive_features_1 + ', ' + getInternationalization(character.distinctive_features[1]);
    }
    if (character.distinctive_features.length > 2) {
      distinctive_features_2 = getInternationalization(character.distinctive_features[2]);
    }
    if (character.distinctive_features.length > 3) {
      distinctive_features_2 = distinctive_features_2 + ', ' + getInternationalization(character.distinctive_features[3]);
    }
    if (character.distinctive_features.length > 4) {
      distinctive_features_2 = distinctive_features_2 + ', ' + getInternationalization(character.distinctive_features[4]);
    }
    if (character.distinctive_features.length > 5) {
      distinctive_features_2 = distinctive_features_2 + ', ' + getInternationalization(character.distinctive_features[5]);
    }

    let character_armour_name = '';
    let character_armour_protection = '';
    let character_armour_load = '';
    if (character.armour != null) {
      character_armour_name = getInternationalization(character.armour.name);
      character_armour_protection = character.armour.protection;
      character_armour_load = character.armour.load;
    }

    let character_helm_name = '';
    let character_helm_protection = '';
    let character_helm_load = '';
    if (character.helm != null) {
      character_helm_name = getInternationalization(character.helm.name);
      character_helm_protection = character.helm.protection;
      character_helm_load = character.helm.load;
    }

    let character_shield_name = '';
    let character_shield_parry_modifier = '';
    let character_shield_load = '';
    if (character.shield != null) {
      character_shield_name = getInternationalization(character.shield.name);
      character_shield_parry_modifier = character.shield.parry_modifier;
      character_shield_load = character.shield.load;
    }

    let flaws = '';
    if (character.flaws != '') {
      flaws = getInternationalization(character.flaws);
    }

    let character_rewards = '';
    if (character.rewards != null) {
      character_rewards = getInternationalization(character.rewards.name) + ':\n' + getInternationalization(character.rewards.notes) + ' (' + getInternationalization(character.rewards.item) + ')';
    }

    let character_virtues = '';
    if (character.virtues != null) {
      character_virtues = getInternationalization(character.virtues.name) + ':\n' + getInternationalization(character.virtues.notes);
    }

    let characterSheet = {
      character_sheet: 'url(img/ficha_' + CURRENT_I18N + '_pdf.jpg)',

      character_heroic_culture: getInternationalization(character.heroic_culture),
      character_calling: getInternationalization(character.calling),
      character_attributes_strength: character.attributes.strength,
      character_attributes_heart: character.attributes.heart,
      character_attributes_wits: character.attributes.wits,
      character_attributes_endurance: character.attributes.endurance,
      character_attributes_hope: character.attributes.hope,
      character_attributes_parry: character.attributes.parry,
      character_attributes_TN_strength: character.attributes.TN_strength,
      character_attributes_TN_heart: character.attributes.TN_heart,
      character_attributes_TN_wits: character.attributes.TN_wits,
      character_cultural_blessing: getInternationalization(character.cultural_blessing),
      character_standard_of_living: getInternationalization(character.standard_of_living),
      character_age: character.age,
      character_name: name,
      character_imagem_path: character.imagem_path,
      character_treasure: character.treasure,
      character_flaws: flaws,
      character_patron: character.patron,

      character_favoured_skills_Awe: (character.favoured_skills.indexOf('Awe') > -1),
      character_favoured_skills_Athletics: (character.favoured_skills.indexOf('Athletics') > -1),
      character_favoured_skills_Awareness: (character.favoured_skills.indexOf('Awareness') > -1),
      character_favoured_skills_Hunting: (character.favoured_skills.indexOf('Hunting') > -1),
      character_favoured_skills_Song: (character.favoured_skills.indexOf('Song') > -1),
      character_favoured_skills_Craft: (character.favoured_skills.indexOf('Craft') > -1),
      character_favoured_skills_Enhearten: (character.favoured_skills.indexOf('Enhearten') > -1),
      character_favoured_skills_Travel: (character.favoured_skills.indexOf('Travel') > -1),
      character_favoured_skills_Insight: (character.favoured_skills.indexOf('Insight') > -1),
      character_favoured_skills_Healing: (character.favoured_skills.indexOf('Healing') > -1),
      character_favoured_skills_Courtesy: (character.favoured_skills.indexOf('Courtesy') > -1),
      character_favoured_skills_Battle: (character.favoured_skills.indexOf('Battle') > -1),
      character_favoured_skills_Persuade: (character.favoured_skills.indexOf('Persuade') > -1),
      character_favoured_skills_Stealth: (character.favoured_skills.indexOf('Stealth') > -1),
      character_favoured_skills_Scan: (character.favoured_skills.indexOf('Scan') > -1),
      character_favoured_skills_Explore: (character.favoured_skills.indexOf('Explore') > -1),
      character_favoured_skills_Riddle: (character.favoured_skills.indexOf('Riddle') > -1),
      character_favoured_skills_Lore: (character.favoured_skills.indexOf('Lore') > -1),

      character_distinctive_features_1: distinctive_features_1,
      character_distinctive_features_2: distinctive_features_2,
      character_shadow_path: getInternationalization(character.shadow_path),

      character_war_gear_0_name: '',
      character_war_gear_0_damage: '',
      character_war_gear_0_injury: '',
      character_war_gear_0_load: '',
      character_war_gear_0_notes: '',
      character_war_gear_1_name: '',
      character_war_gear_1_damage: '',
      character_war_gear_1_injury: '',
      character_war_gear_1_load: '',
      character_war_gear_1_notes: '',
      character_war_gear_2_name: '',
      character_war_gear_2_damage: '',
      character_war_gear_2_injury: '',
      character_war_gear_2_load: '',
      character_war_gear_2_notes: '',
      character_war_gear_3_name: '',
      character_war_gear_3_damage: '',
      character_war_gear_3_injury: '',
      character_war_gear_3_load: '',
      character_war_gear_3_notes: '',

      character_armour_name: character_armour_name,
      character_armour_protection: character_armour_protection,
      character_armour_load: character_armour_load,
      character_helm_name: character_helm_name,
      character_helm_protection: character_helm_protection,
      character_helm_load: character_helm_load,
      character_shield_name: character_shield_name,
      character_shield_parry_modifier: character_shield_parry_modifier,
      character_shield_load: character_shield_load,

      character_notes: notes,

      character_current_stats_adventure_points: character.current_stats.adventure_points,
      character_current_stats_skill_points: character.current_stats.skill_points,
      character_current_stats_fellowship_score: character.current_stats.fellowship_score,
      character_current_stats_current_endurance: character.current_stats.current_endurance,
      character_current_stats_load: character.current_stats.load,
      character_current_stats_fatigue: character.current_stats.fatigue,
      character_current_stats_current_hope: character.current_stats.current_hope,
      character_current_stats_shadow: character.current_stats.shadow,
      character_current_stats_shadow_scars: character.current_stats.shadow_scars,
      character_current_stats_weary: character.current_stats.weary,
      character_current_stats_miserable: character.current_stats.miserable,
      character_current_stats_wounded: character.current_stats.wounded,
      character_current_stats_injury: character.current_stats.injury,
      character_rewards: character_rewards,
      character_virtues: character_virtues,
      character_wisdow: character.wisdow,
      character_valour: character.valour
    };

    let array_character_skills = Object.keys(character.skills);
    array_character_skills.forEach((skill, index_skill) => {

      characterSheet['character_skills_' + skill + '_1'] = (character.skills[skill] >= 1);
      characterSheet['character_skills_' + skill + '_2'] = (character.skills[skill] >= 2);
      characterSheet['character_skills_' + skill + '_3'] = (character.skills[skill] >= 3);
      characterSheet['character_skills_' + skill + '_4'] = (character.skills[skill] >= 4);
      characterSheet['character_skills_' + skill + '_5'] = (character.skills[skill] >= 5);
      characterSheet['character_skills_' + skill + '_6'] = (character.skills[skill] >= 6);

      if (index_skill == (array_character_skills.length - 1)) {

        let array_combat_proficiencies = Object.keys(character.combat_proficiencies);
        array_combat_proficiencies.forEach((prof, index_prof) => {

          characterSheet['character_combat_proficiencies_' + prof + '_1'] = (character.combat_proficiencies[prof] >= 1);
          characterSheet['character_combat_proficiencies_' + prof + '_2'] = (character.combat_proficiencies[prof] >= 2);
          characterSheet['character_combat_proficiencies_' + prof + '_3'] = (character.combat_proficiencies[prof] >= 3);
          characterSheet['character_combat_proficiencies_' + prof + '_4'] = (character.combat_proficiencies[prof] >= 4);
          characterSheet['character_combat_proficiencies_' + prof + '_5'] = (character.combat_proficiencies[prof] >= 5);
          characterSheet['character_combat_proficiencies_' + prof + '_6'] = (character.combat_proficiencies[prof] >= 6);

          if (index_prof == (array_combat_proficiencies.length - 1)) {

            if (character.war_gear.length == 0) {
              callback(characterSheet);
            } else {
              character.war_gear.forEach((war_gear, index_war_gear) => {

                characterSheet['character_war_gear_' + index_war_gear + '_name'] = getInternationalization(war_gear.name);
                characterSheet['character_war_gear_' + index_war_gear + '_damage'] = war_gear.damage;
                characterSheet['character_war_gear_' + index_war_gear + '_injury'] = getInternationalization(war_gear.injury);
                characterSheet['character_war_gear_' + index_war_gear + '_load'] = war_gear.load;
                characterSheet['character_war_gear_' + index_war_gear + '_notes'] = getInternationalization(war_gear.notes);

                if (index_war_gear == (character.war_gear.length - 1)) {
                  callback(characterSheet);
                }
              });
            }
          }
        });
      }
    });

    /* END - Create Character Sheet */
  });
}

function render(tag,value) {
  let element = document.getElementById(tag);
  if (element != null) {

    if (element.nodeName == "IMG") {
        element.src = value;
    } else if (element.nodeName == "TEXTAREA") {
        element.value = value;
    } else if (element.nodeName == "INPUT") {
      if (element.type == 'text') {
        element.value = value;
      } else if (element.type == 'checkbox') {
        element.checked = value;
      }
    }

  }
}

function renderCreationChoicesLogs(callback) {
  let span_log = document.getElementById('log-span1');
  span_log.innerHTML = '';
  let text_log = '';

  let creationChoicesLogs = cloneArray(LOGS);
  creationChoicesLogs.forEach((log, index_log) => {

    text_log = text_log + `<span class="text-emphasis">${getInternationalization(log.message)}:</span> `;

    if (log.name) {
      text_log = text_log + `${getInternationalization(log.choice)} ${getInternationalization(log.family_name)}`;
    } else if (log.travelling_gear) {
      text_log = text_log + `${getInternationalization(log.choice)}: ${getInternationalization(log.skill)}`;
    } else {
      text_log = text_log + `${getInternationalization(log.choice)}`;
    }

    if (index_log == (creationChoicesLogs.length - 1)) {
      span_log.innerHTML = text_log;

      callback();
    } else {
      text_log = text_log + '<br>';
    }
  });
}

function renderCharacterSheet(characterSheet,callback) {
  document.getElementById('character_notes').value = '';
  document.getElementById('character_current_stats_load').value = '';

  let array_character_sheet = Object.keys(characterSheet);
  array_character_sheet.forEach((tag, index_tag) => {
    render(tag,characterSheet[tag]);

    if (index_tag == (array_character_sheet.length - 1)) {
      document.getElementById('hidden_character_sheet').value = characterSheet.character_sheet;
      document.getElementById('hidden_character_imagem_path').value = characterSheet.character_imagem_path;

      console.log(getInternationalization('#T002'));
      callback();
    }
  });
}

function getSheetData(characterSheet,callback) {
  let formCharacterSheet = clone(defaultCharacterSheet);
  formCharacterSheet.character_sheet = 'url(img/ficha_' + CURRENT_I18N + '_pdf.jpg)';
  formCharacterSheet.imagem_path = characterSheet.imagem_path;
  formCharacterSheet.character_imagem_path = characterSheet.character_imagem_path;

  let tag_character_rewards = document.getElementById('character_rewards');
  formCharacterSheet.character_rewards = tag_character_rewards.value;

  let tag_character_virtues = document.getElementById('character_virtues');
  formCharacterSheet.character_virtues = tag_character_virtues.value;

  let tag_character_notes = document.getElementById('character_notes');
  formCharacterSheet.character_notes = tag_character_notes.value;

  let main = document.querySelector('main');
  let array_input = [...main.querySelectorAll('input[type=text]')];
  let array_checkbox = [...main.querySelectorAll('input[type=checkbox]')];

  array_input.forEach((item_input, index_input) => {
      if (isNumber(characterSheet[item_input.id]) && isNumber(item_input.value)) {
        if (item_input.id.indexOf('injury') > -1) {
          formCharacterSheet[item_input.id] = item_input.value;
        } else {
          if (item_input.id == 'character_shield_parry_modifier') {
            formCharacterSheet[item_input.id] = item_input.value;
          } else {
            formCharacterSheet[item_input.id] = parseInt(item_input.value);
          }
        }
      } else {
        formCharacterSheet[item_input.id] = item_input.value;
      }

      if (index_input == (array_input.length - 1)) {

        array_checkbox.forEach((item_checkbox, index_checkbox) => {
          formCharacterSheet[item_checkbox.id] = item_checkbox.checked;

          if (index_checkbox == (array_checkbox.length - 1)) {
            callback(formCharacterSheet);
          }
        });

      }
  });
}

function setNewTextInTextarea(notes,textarea,text,callback) {
  let new_textarea = textarea;
  if (notes) {
    if (text.indexOf(': ') > -1) {
      let itens = text.split(': ');
      getInternationalizationWithoutKey(itens[0],(returnTextarea0)=>{
        getInternationalizationWithoutKey(itens[1],(returnTextarea1)=>{
          new_textarea = new_textarea + returnTextarea0 + ': ' + returnTextarea1;
          callback(new_textarea);
        });
      });
    } else {
      getInternationalizationWithoutKey(text,(returnTextarea)=>{
        new_textarea = new_textarea + returnTextarea + '\n';
        callback(new_textarea);
      });
    }
  } else {
    if (text.indexOf(':') > -1) {
      let newText = text.replace(':','');
      getInternationalizationWithoutKey(newText,(returnTextarea)=>{
        new_textarea = new_textarea + returnTextarea + ':\n';
        callback(new_textarea);
      });

    } else {
      getInternationalizationWithoutKey(text,(returnTextarea)=>{
        new_textarea = new_textarea + returnTextarea + '\n';
        callback(new_textarea);
      });
    }
  }
}

function changeSheetInternationalization(callback) {
  convertCharacterToSheet(CHARACTER_ROLLED.character,(newCharacterSheet)=>{
    callback(newCharacterSheet);
  });
}

document.getElementById('select-i18n').addEventListener('input',(event)=>{
  let index = event.target.selectedIndex;
  localStorage.setItem("select-i18n", index);
  changeInternationalization(getI18NValue(index));
});

function openLoading() {
  document.getElementById('loading').style.display = 'block';
}

function closeLoading() {
  document.getElementById('loading').style.display = 'none';
}

function changeInternationalization(i18n) {
  openLoading();
  CURRENT_I18N = i18n;
  createSelect(I18N_VALUES,'label','select-i18n',I18N_VALUES[i18n].index,()=>{
    createSelectToForm('All Heroic Cultures',HEROIC_CULTURES,'heroic_cultures_select','form-select-heroic-culture',()=>{
      createSelectToForm('All Callings',CALLINGS,'calling_select','form-select-calling',()=>{
        /* Final steps */

        document.getElementById('about-h1-title').innerHTML = getInternationalization('#T009');
        document.getElementById('logs-h1-title').innerHTML = getInternationalization('#T018');

        document.querySelector('main').style.backgroundImage = 'url(img/ficha_' + CURRENT_I18N + '_pdf.jpg)';

        document.getElementById('form-h1-title').innerHTML = getInternationalization('#T011');
        document.getElementById('form-span1').innerHTML = getInternationalization('#T012');
        document.getElementById('form-span2').innerHTML = getInternationalization('#T013');
        document.getElementById('form-label-select1').innerHTML = getInternationalization('#T014');
        document.getElementById('form-label-select2').innerHTML = getInternationalization('#T015');

        document.getElementById('about-span1').innerHTML = getInternationalization('#T016');

        document.getElementById('logs-close-logs').innerHTML = getInternationalization('#T020');
        document.getElementById('logs-close-logs').onclick = function(event) {
          removeInvisible('div.form');
          removeInvisible('main');

          addInvisible('div.logs');
        };

        document.getElementById('about-close-about').innerHTML = getInternationalization('#T017');
        document.getElementById('about-close-about').onclick = function(event) {
          removeInvisible('div.form');
          removeInvisible('main');

          addInvisible('div.about');
        };

        document.getElementById('form-reroll-character').innerHTML = getInternationalization('#T005');
        document.getElementById('form-reroll-character').onclick = function(event) {
          completeRollCharacter();
        };

        document.getElementById('form-link-logs').innerHTML = getInternationalization('#T019');
        document.getElementById('form-link-logs').onclick = function(event) {
          addInvisible('div.form');
          addInvisible('main');
          addInvisible('div.about');

          removeInvisible('div.logs');
        };

        document.getElementById('form-link-about').onclick = function(event) {
          addInvisible('div.form');
          addInvisible('main');
          addInvisible('div.logs');

          removeInvisible('div.about');
        };

        document.getElementById('form-export-fillable-pdf').innerHTML = getInternationalization('#T007');
        document.getElementById('form-export-fillable-pdf').onclick = function(event) {
          printPdf();
        };

        document.getElementById('nav_link_reroll_character').innerHTML = getInternationalization('#T004');
        document.getElementById('nav_link_reroll_character').onclick = function(event) {
          completeRollCharacter();
          document.documentElement.classList.remove('menu-aberto');
        };

        document.getElementById('nav_link_export_fillable_pdf').innerHTML = getInternationalization('#T006');
        document.getElementById('nav_link_export_fillable_pdf').onclick = function(event) {
          printPdf();
          document.documentElement.classList.remove('menu-aberto');
        };

        document.getElementById('nav_link_channel').innerHTML = getInternationalization('#T008');
        document.getElementById('nav_link_channel').onclick = function(event) {
          window.open('https://www.youtube.com/@flechamagica','_blank');
          document.documentElement.classList.remove('menu-aberto');
        };

        document.getElementById('nav_link_logs').innerHTML = getInternationalization('#T018');
        document.getElementById('nav_link_logs').onclick = function(event) {
          addInvisible('div.form');
          addInvisible('main');
          addInvisible('div.about');

          removeInvisible('div.logs');

          document.documentElement.classList.remove('menu-aberto');
        };

        document.getElementById('nav_link_about').innerHTML = getInternationalization('#T009');
        document.getElementById('nav_link_about').onclick = function(event) {
          addInvisible('div.form');
          addInvisible('main');
          addInvisible('div.logs');

          removeInvisible('div.about');

          document.documentElement.classList.remove('menu-aberto');
        };

        if (CHARACTER_ROLLED.character != null) {
          changeSheetInternationalization((newCharacterSheet)=>{
            renderCharacterSheet(newCharacterSheet,()=>{
              renderCreationChoicesLogs(()=>{
                closeLoading();
                console.log(getInternationalization('#T010'));
              });
            });
          });
        } else {
          closeLoading();
        }
        /* Final steps */
      });
    });
  });
}

function addInvisible(element) {
  if (!document.querySelector(element).classList.contains('invisible')) {
    document.querySelector(element).classList.add('invisible');
  }
}

function removeInvisible(element) {
  if (document.querySelector(element).classList.contains('invisible')) {
    document.querySelector(element).classList.remove('invisible');
  }
}

function toggleInvisible(element) {
  document.querySelector(element).classList.toggle('invisible');
}

function startInternationalization() {
  let index = 0;
  let indexStorage = localStorage.getItem("select-i18n");
  if (checkIfExists(indexStorage) && isNumber(indexStorage)) {
    index = parseInt(indexStorage);
  } else {
    localStorage.setItem("select-i18n", index);
  }
  changeInternationalization(getI18NValue(index));
}

startInternationalization();

function completeRollCharacter() {
  rollCharacter((character)=>{
    convertCharacterToSheet(character,(characterSheet)=>{
      CHARACTER_ROLLED.character = character;
      CHARACTER_ROLLED.characterSheet = characterSheet;
      renderCharacterSheet(characterSheet,()=>{
        renderCreationChoicesLogs(()=>{});
      });
    });
  });
}

function printPdf() {
  document.getElementById('form-pdf-roller').submit();
  console.log(getInternationalization('#T003'));
}

/* Roll first time when page open */
completeRollCharacter();

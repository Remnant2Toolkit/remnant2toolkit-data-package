import type { Archetype } from './index.d'

export const archetypes: Archetype[] = [
  {
    category: 'archetype',
    name: 'Alchemist',
    imagePath: '/T_UI_Icon_Archetype_Alchemist.png',
    id: '67pme7',
    description:
      'The ALCHEMIST specializes in powerful buffing Vials and consumable potency.',
    howToGet:
      'Approach every sewer drain on the edge of any of the Dran overland areas in Losemn until you get grabbed by a Manticora. Once you load into the new area, defeat the white Manticora',
    wikiLinks: [`https://remnant2.wiki.fextralife.com/Alchemist`],
    linkedItems: {
      traits: [
        { name: 'Potency', amount: 10 },
        { name: 'Spirit', amount: 2 },
        { name: 'Expertise', amount: 2 },
        { name: 'Vigor', amount: 1 },
      ],
      skills: [
        { name: 'Vial: Stone Mist' },
        { name: 'Vial: Frenzy Dust' },
        { name: 'Vial: Elixir of Life' },
      ],
      perks: [
        { name: 'Spirited' },
        { name: 'Liquid Courage' },
        { name: 'Panacea' },
        { name: 'Gold to Lead' },
        { name: 'Experimentalist' },
      ],
    },
  },
  {
    category: 'archetype',
    name: 'Archon',
    imagePath: '/T_UI_Icon_Archetype_Arcanist.png',
    id: 'og1fvq',
    description:
      'The ARCHON is the master of Weapon Mods and Mod Power generation.',
    howToGet: `To Unlock the Red Door you will need the following. Engram EXPLORER with skill Fortune Hunter (LV10), Engram INVADER with skill Worm Hole (LV5), Armor set Realmwalker, Relic Consumable Void Heart, Leto's Amulet, Amber Moonstone, Black Cat Band, Zanias Malice, Anastasijas Inspiration, Cube Gun, Ford's Scattergun, Labyrinth Staff. With all this the door will open.`,
    wikiLinks: [`https://remnant2.wiki.fextralife.com/Archon`],
    linkedItems: {
      traits: [
        { name: 'Flash Caster', amount: 10 },
        { name: 'Spirit', amount: 3 },
        { name: 'Vigor', amount: 1 },
        { name: 'Endurance', amount: 1 },
      ],
      skills: [
        { name: 'Reality Rune' },
        { name: 'Chaos Gate' },
        { name: 'Havoc Form' },
      ],
      perks: [
        { name: 'Tempest' },
        { name: 'Amplify' },
        { name: 'Power Creep' },
        { name: 'Spirit Within' },
        { name: 'Power Leak' },
      ],
    },
  },
  {
    category: 'archetype',
    name: 'Challenger',
    imagePath: '/T_UI_Icon_Archetype_Defender.png',
    id: 'wm2xsy',
    description:
      'The CHALLENGER specializes in close range combat and heightened survivability.',
    howToGet: `Buy from Reggie at Ward 13 for 1500 Scrap`,
    wikiLinks: [`https://remnant2.wiki.fextralife.com/Challenger`],
    linkedItems: {
      traits: [
        { name: 'Strong Back', amount: 10 },
        { name: 'Vigor', amount: 3 },
        { name: 'Endurance', amount: 2 },
      ],
      skills: [
        { name: 'War Stomp' },
        { name: 'Juggernaut' },
        { name: 'Rampage' },
      ],
      perks: [
        { name: 'Die Hard' },
        { name: 'Close Quarters' },
        { name: 'Intimidating Presence' },
        { name: 'Powerlifter' },
        { name: 'Face of Danger' },
      ],
    },
  },
  {
    category: 'archetype',
    name: 'Engineer',
    imagePath: '/T_UI_Icon_Archetype_Engineer.png',
    id: '98i1ka',
    description:
      'The ENGINEER specializes in Heavy Weaponry which can be carried or placed in turret mode.',
    howToGet: `Found just out of bounds in either of the two overland areas you roll on N'Erud. For an easier time locating this item try using the EXPLORER Archtype's skill "Fortune Hunter" to highlight the item in the fog.`,
    wikiLinks: [`https://remnant2.wiki.fextralife.com/Engineer`],
    linkedItems: {
      traits: [
        { name: 'Fortify', amount: 10 },
        { name: 'Vigor', amount: 2 },
        { name: 'Endurance', amount: 2 },
        { name: 'Expertise', amount: 1 },
      ],
      skills: [
        { name: 'Heavy Weapon: Vulcan' },
        { name: 'Heavy Weapon: Flamethrower' },
        { name: 'Heavy Weapon: Impact Cannon' },
      ],
      perks: [
        { name: 'High Tech' },
        { name: 'Metalworker' },
        { name: 'Magnetic Field' },
        { name: 'Heavy Mobility' },
        { name: 'Surplus' },
      ],
    },
  },
  {
    category: 'archetype',
    name: 'Explorer',
    imagePath: '/T_UI_Icon_Archetype_Explorer.png',
    id: 'la3vvu',
    description:
      'The EXPLORER specializes in finding valuable items and overall team utility.',
    howToGet: `Finish a full campaign playthrough`,
    wikiLinks: [`https://remnant2.wiki.fextralife.com/Explorer`],
    linkedItems: {
      traits: [
        { name: 'Swiftness', amount: 10 },
        { name: 'Endurance', amount: 2 },
        { name: 'Spirit', amount: 2 },
        { name: 'Expertise', amount: 1 },
      ],
      skills: [
        { name: 'Plainswalker' },
        { name: 'Gold Digger' },
        { name: 'Fortune Hunter' },
      ],
      perks: [
        { name: 'Lucky' },
        { name: 'Scavenger' },
        { name: 'Metal Detector' },
        { name: 'Prospector' },
        { name: 'Self Discovery' },
      ],
    },
  },
  {
    category: 'archetype',
    name: 'Gunslinger',
    imagePath: '/T_UI_Icon_Archetype_Gunslinger.png',
    id: 'd2qga5',
    description:
      'The GUNSLINGER specializes in raw damage, firearm handling, and ammo conservation.',
    howToGet: `Listen to 20 total Mudtooth stories in Ward 13 after finishing your second world in campaign mode`,
    wikiLinks: [`https://remnant2.wiki.fextralife.com/Gunslinger`],
    linkedItems: {
      traits: [
        { name: 'Ammo Reserves', amount: 10 },
        { name: 'Vigor', amount: 2 },
        { name: 'Expertise', amount: 2 },
        { name: 'Endurance', amount: 1 },
      ],
      skills: [
        { name: 'Quick Draw' },
        { name: 'Sidewinder' },
        { name: 'Bulletstorm' },
      ],
      perks: [
        { name: 'Loaded' },
        { name: 'Swift Shot' },
        { name: 'Posse Up' },
        { name: 'Quick Hands' },
        { name: 'Sleight of Hand' },
      ],
    },
  },
  {
    category: 'archetype',
    name: 'Handler',
    imagePath: '/T_UI_Icon_Archetype_Handler.png',
    id: 'aazlxe',
    description:
      'The HANDLER specializes in teamwork in both solo and cooperative scenarios.',
    howToGet: `Buy from Mudtooth at Ward 13 for 1500 Scrap`,
    wikiLinks: [`https://remnant2.wiki.fextralife.com/Handler`],
    linkedItems: {
      traits: [
        { name: 'Kinship', amount: 10 },
        { name: 'Expertise', amount: 3 },
        { name: 'Vigor', amount: 1 },
        { name: 'Endurance', amount: 1 },
      ],
      skills: [
        { name: 'Guard Dog' },
        { name: 'Support Dog' },
        { name: 'Attack Dog' },
      ],
      perks: [
        { name: 'Bonded' },
        { name: 'Pack Hunter' },
        { name: 'Spirit of the Wolf' },
        { name: 'Teamwork' },
        { name: 'Best Friend' },
      ],
    },
  },
  {
    category: 'archetype',
    name: 'Hunter',
    imagePath: '/T_UI_Icon_Archetype_Sharpshooter.png',
    id: '5tkqdz',
    description:
      'The HUNTER specializes in ranged damage, precision shots and marking enemies.',
    howToGet: `Buy from Brabus at Ward 13 for 1500 Scrap`,
    wikiLinks: [`https://remnant2.wiki.fextralife.com/Hunter`],
    linkedItems: {
      traits: [
        { name: 'Longshot', amount: 10 },
        { name: 'Endurance', amount: 2 },
        { name: 'Expertise', amount: 2 },
        { name: 'Vigor', amount: 1 },
      ],
      skills: [
        { name: `Hunter's Mark` },
        { name: `Hunter's Focus` },
        { name: `Hunter's Shroud` },
      ],
      perks: [
        { name: 'Dead to Rights' },
        { name: 'Deadeye' },
        { name: 'Return to Sender' },
        { name: 'Urgency' },
        { name: 'Intuition' },
      ],
    },
  },
  {
    category: 'archetype',
    name: 'Invader',
    imagePath: '/T_UI_Icon_Archetype_Invader.png',
    id: '0ipjpk',
    description: `The INVADER specializes elusiveness and misdirecting the enemy's focus.`,
    howToGet: `Use the "Walker's Dream" item and defeat the "Bane" abberation. To get the "Walker's Dream" item use the Dreamcatcher melee weapon on the sleeping walker special enemy (glowing blue) in an area just off the main path between the Corrupted Harbour and Blackened Citadel checkpoint.`,
    wikiLinks: [`https://remnant2.wiki.fextralife.com/Invader`],
    linkedItems: {
      traits: [
        { name: 'Untouchable', amount: 10 },
        { name: 'Endurance', amount: 4 },
        { name: 'Spirit', amount: 1 },
      ],
      skills: [
        { name: 'Void Cloak' },
        { name: 'Worm Hole' },
        { name: 'Reboot' },
      ],
      perks: [
        { name: 'Shadow' },
        { name: 'S.H.A.R.K.' },
        { name: 'Loophole' },
        { name: 'Circumvent' },
        { name: 'Override' },
      ],
    },
  },
  {
    category: 'archetype',
    name: 'Medic',
    imagePath: '/T_UI_Icon_Archetype_Medic.png',
    id: 'd6fvmc',
    description:
      'The MEDIC specializes in survivability with enhanced healing and Relic effectiveness.',
    howToGet: `Buy from Dr. Norah at Ward 13 for 1500 Scrap`,
    wikiLinks: [`https://remnant2.wiki.fextralife.com/Medic`],
    linkedItems: {
      traits: [
        { name: 'Triage', amount: 10 },
        { name: 'Vigor', amount: 2 },
        { name: 'Expertise', amount: 2 },
        { name: 'Spirit', amount: 1 },
      ],
      skills: [
        { name: 'Wellspring' },
        { name: 'Healing Shield' },
        { name: 'Redemption' },
      ],
      perks: [
        { name: 'Regenerator' },
        { name: 'Invigorated' },
        { name: 'Benevolence' },
        { name: 'Backbone' },
        { name: 'Benefactor' },
      ],
    },
  },
  {
    category: 'archetype',
    name: 'Ritualist',
    imagePath: '', // TODO
    id: '1q7z9d',
    dlc: 'dlc1',
    description:
      'The RITUALIST is a powerful class focusing on status effects and AOE damage, that can make enemies infect their allies with whatever status they are suffering',
    howToGet: `In Forlorn Coast, there are two interconnected rowboats near the center of the docks area. Using an overhead view on the map, they are hard to miss - their shape is unique. From there you can jump to another boat under the docks. This path leads underground, straight to a ritual performed by a witch elite. The doll is there, behind the ritual. NOTE: If you allow the ritual to complete, you will begin a miniboss fight.`,
    wikiLinks: [`https://remnant2.wiki.fextralife.com/Ritualist`],
    linkedItems: {
      traits: [
        { name: 'Affliction', amount: 10 },
        { name: 'Spirit', amount: 2 },
        { name: 'Expertise', amount: 2 },
        { name: 'Endurance', amount: 1 },
      ],
      skills: [
        { name: 'Eruption' },
        { name: 'Miasma' },
        { name: 'Death Wish' },
      ],
      perks: [
        { name: 'Vile' },
        { name: 'Wrath' },
        { name: 'Terrify' },
        { name: 'Dark Blood' },
        { name: 'Purge' },
      ],
    },
  },
  {
    category: 'archetype',
    name: 'Summoner',
    imagePath: '/T_UI_Icon_Archetype_Summoner.png',
    id: 'og0bwx',
    description:
      'The SUMMONER specializes in using Minions to do their bidding and sacrificing them.',
    howToGet: `Available at the Bloodmoon Altar for 15 Bloodmoon Essence. Acquire Bloodmoon Essence from killing Root Wisps during a bloodmoon (red moon in the sky) in any of Yaesha's outside areas`,
    wikiLinks: [`https://remnant2.wiki.fextralife.com/Summoner`],
    linkedItems: {
      traits: [
        { name: 'Regrowth', amount: 10 },
        { name: 'Spirit', amount: 3 },
        { name: 'Vigor', amount: 1 },
        { name: 'Expertise', amount: 1 },
      ],
      skills: [
        { name: 'Minion: Hollow' },
        { name: 'Minion: Flyer' },
        { name: 'Minion: Reaver' },
      ],
      perks: [
        { name: 'Ruthless' },
        { name: 'Dominator' },
        { name: 'Residue' },
        { name: 'Outrage' },
        { name: 'Incite' },
      ],
    },
  },
]
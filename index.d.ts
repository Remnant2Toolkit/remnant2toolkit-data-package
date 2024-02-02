type DLC = 'dlc1'

export interface Archetype {
  category: 'archetype'
  name: string
  imagePath: string
  id: string
  dlc?: DLC
  description: string
  howToGet: string
  wikiLinks: string[]
  linkedItems: {
    traits: Array<{ name: string; amount: number }>
    skills: Array<{ name: string }>
    perks: Array<{ name: string }>
  }
}

/**
 * Used to link items, such as guns to their mods,
 * archtypes to skills, etc.
 */
type LinkedItems = Partial<{
  archetype: { name: string }
  skills: Array<{ name: string }>
  weapon: { name: string }
  mod: { name: string }
  traits: Array<{ name: string; amount: number }>
  perks: Array<{ name: string }>
}>

type ItemCategory =
  | 'helm'
  | 'torso'
  | 'legs'
  | 'gloves'
  | 'relic'
  | 'amulet'
  | 'weapon'
  | 'archetype'
  | 'concoction'
  | 'consumable'
  | 'mod'
  | 'mutator'
  | 'relicfragment'
  | 'ring'
  | 'skill'
  | 'trait'
  | 'perk'

// Base item type that all items extend from
interface GenericItemProps {
  id: string
  name: string
  category: ItemCategory
  dlc?: ReleaseKey
  imagePath: string
  saveFileSlug?: string
  description?: string
  cooldown?: number
  howToGet?: string
  wikiLinks?: string[]
  linkedItems?: LinkedItems
  health?: number
  healthPercent?: number
  healthCap?: number
  stamina?: number
  staminaPercent?: number
  armor?: number
  armorPercent?: number
  weight?: number
  weightPercent?: number
  weightThreshold?: number
  bleedResistance?: number
  bleedResistancePercent?: number
  fireResistance?: number
  fireResistancePercent?: number
  shockResistance?: number
  shockResistancePercent?: number
  blightResistance?: number
  blightResistancePercent?: number
  toxinResistance?: number
  toxinResistancePercent?: number
}

export class GenericItem implements GenericItemProps {
  public id: GenericItemProps['id'] = ''
  public name: GenericItemProps['name'] = ''
  public category: GenericItemProps['category'] = 'skill'
  public dlc?: GenericItemProps['dlc'] = 'base'
  public description?: GenericItemProps['description'] = ''
  public cooldown?: GenericItemProps['cooldown'] = -1
  public imagePath: GenericItemProps['imagePath'] = ''
  public howToGet?: GenericItemProps['howToGet'] = ''
  public wikiLinks?: GenericItemProps['wikiLinks'] = []
  public linkedItems?: GenericItemProps['linkedItems'] = {}
  public saveFileSlug?: GenericItemProps['saveFileSlug'] = ''
  public health?: GenericItemProps['health'] = 0
  public healthPercent?: GenericItemProps['healthPercent'] = 0
  public healthCap?: GenericItemProps['healthCap'] = 1 // no cap
  public stamina?: GenericItemProps['stamina'] = 0
  public staminaPercent?: GenericItemProps['staminaPercent'] = 0
  public armor?: GenericItemProps['armor'] = 0
  public armorPercent?: GenericItemProps['armorPercent'] = 0
  public weight?: GenericItemProps['weight'] = 0
  public weightPercent?: GenericItemProps['weightPercent'] = 0
  public weightThreshold?: GenericItemProps['weightThreshold'] = 0
  public bleedResistance?: GenericItemProps['bleedResistance'] = 0
  public bleedResistancePercent?: GenericItemProps['bleedResistancePercent'] = 0
  public fireResistance?: GenericItemProps['fireResistance'] = 0
  public fireResistancePercent?: GenericItemProps['fireResistancePercent'] = 0
  public shockResistance?: GenericItemProps['shockResistance'] = 0
  public shockResistancePercent?: GenericItemProps['shockResistancePercent'] = 0
  public blightResistance?: GenericItemProps['blightResistance'] = 0
  public blightResistancePercent?: GenericItemProps['blightResistancePercent'] = 0
  public toxinResistance?: GenericItemProps['toxinResistance'] = 0
  public toxinResistancePercent?: GenericItemProps['toxinResistancePercent'] = 0

  constructor(props: GenericItemProps) {
    this.id = props.id
    this.name = props.name
    this.category = props.category
    this.dlc = props.dlc
    this.description = props.description
    this.cooldown = props.cooldown
    this.imagePath = props.imagePath
    this.howToGet = props.howToGet
    this.wikiLinks = props.wikiLinks
    this.linkedItems = props.linkedItems
    this.saveFileSlug = props.saveFileSlug
    this.health = props.health
    this.healthPercent = props.healthPercent
    this.healthCap = props.healthCap
    this.stamina = props.stamina
    this.staminaPercent = props.staminaPercent
    this.armor = props.armor
    this.armorPercent = props.armorPercent
    this.weight = props.weight
    this.weightPercent = props.weightPercent
    this.weightThreshold = props.weightThreshold
    this.bleedResistance = props.bleedResistance
    this.bleedResistancePercent = props.bleedResistancePercent
    this.fireResistance = props.fireResistance
    this.fireResistancePercent = props.fireResistancePercent
    this.shockResistance = props.shockResistance
    this.shockResistancePercent = props.shockResistancePercent
    this.blightResistance = props.blightResistance
    this.blightResistancePercent = props.blightResistancePercent
    this.toxinResistance = props.toxinResistance
    this.toxinResistancePercent = props.toxinResistancePercent
  }

  public static isGenericItem = (item?: GenericItem): item is GenericItem => {
    if (!item) return false
    return (
      item.category !== 'trait' &&
      item.category !== 'weapon' &&
      item.category !== 'helm' &&
      item.category !== 'torso' &&
      item.category !== 'legs' &&
      item.category !== 'gloves' &&
      item.category !== 'mutator' &&
      item.category !== 'mod' &&
      item.category !== 'perk'
    )
  }
}

interface BaseArmorItem extends GenericItem {
  set?: string
}
export class ArmorItem extends GenericItem implements BaseArmorItem {
  public set: BaseArmorItem['set']

  constructor(props: BaseArmorItem) {
    super(props)
    this.set = props.set
  }

  public static isArmorItem = (item?: GenericItem): item is ArmorItem => {
    if (!item) return false
    return (
      item.category === 'helm' ||
      item.category === 'torso' ||
      item.category === 'legs' ||
      item.category === 'gloves'
    )
  }
}

interface BaseModItem extends GenericItem {}
export class ModItem extends GenericItem implements BaseModItem {
  public category: BaseModItem['category'] = 'mod'

  constructor(props: BaseModItem) {
    super(props)
  }

  public static isModItem = (item?: GenericItem): item is ModItem => {
    if (!item) return false
    return item.category === 'mod'
  }
}

interface BaseMutatorItem extends GenericItem {
  maxLevelBonus: string
  type: 'gun' | 'melee'
}
export class MutatorItem extends GenericItem implements BaseMutatorItem {
  public category: BaseMutatorItem['category'] = 'mutator'
  public type: BaseMutatorItem['type'] = 'gun'
  public maxLevelBonus: BaseMutatorItem['maxLevelBonus'] = ''

  constructor(props: BaseMutatorItem) {
    super(props)
    this.type = props.type
    this.maxLevelBonus = props.maxLevelBonus
  }

  public static isMutatorItem = (item?: GenericItem): item is MutatorItem => {
    if (!item) return false
    return item.category === 'mutator'
  }
}

interface BasePerkItem extends GenericItem {
  type: 'prime' | 'damage' | 'team' | 'utility' | 'relic'
}
export class PerkItem extends GenericItem implements BasePerkItem {
  public category: BasePerkItem['category'] = 'perk'
  public type: BasePerkItem['type'] = 'prime'

  constructor(props: BasePerkItem) {
    super(props)
    this.type = props.type
  }

  public static isPerkItem = (item?: GenericItem): item is PerkItem => {
    if (!item) return false
    return item.category === 'perk'
  }
}

interface BaseTraitItem extends GenericItem {
  amount: number
  maxLevelBonus: string
  healthStep: number // The amount to increase the health per level
  healthStepPercent: number // The percentage to increase the health per level
  staminaStep: number // The amount to increase the stamina per level
  staminaStepPercent: number // The percentage to increase the stamina per level
  armorStep: number // The amount to increase the armor per level
  armorStepPercent: number // The percentage to increase the armor per level
  weightStep: number // The amount to increase the weight per level
  weightStepPercent: number // The percentage to increase the weight per level
  weightThresholds: number[] // The weight thresholds for the weight step
}
export class TraitItem extends GenericItem implements BaseTraitItem {
  public category: BaseTraitItem['category'] = 'trait'
  public maxLevelBonus: BaseTraitItem['maxLevelBonus'] = ''
  public amount: BaseTraitItem['amount'] = DEFAULT_TRAIT_AMOUNT
  public healthStep: BaseTraitItem['healthStep'] = 0
  public healthStepPercent: BaseTraitItem['healthStepPercent'] = 0
  public staminaStep: BaseTraitItem['staminaStep'] = 0
  public staminaStepPercent: BaseTraitItem['staminaStepPercent'] = 0
  public armorStep: BaseTraitItem['armorStep'] = 0
  public weightStep: BaseTraitItem['weightStep'] = 0
  public armorStepPercent: BaseTraitItem['armorStepPercent'] = 0
  public weightThresholds: BaseTraitItem['weightThresholds'] = []
  public weightStepPercent: BaseTraitItem['weightStepPercent'] = 0

  constructor(props: BaseTraitItem) {
    super(props)
    this.amount = props.amount
    this.maxLevelBonus = props.maxLevelBonus
    this.healthStep = props.healthStep
    this.healthStepPercent = props.healthStepPercent
    this.staminaStep = props.staminaStep
    this.staminaStepPercent = props.staminaStepPercent
    this.armorStep = props.armorStep
    this.armorStepPercent = props.armorStepPercent
    this.weightStep = props.weightStep
    this.weightStepPercent = props.weightStepPercent
    this.weightThresholds = props.weightThresholds
  }

  public static isTraitItem = (item: GenericItem | null): item is TraitItem => {
    if (!item) return false
    return item.category === 'trait'
  }
}

interface BaseWeaponItem extends GenericItem {
  type: 'long gun' | 'melee' | 'hand gun'
  damage: number
  rps?: number
  magazine?: number
}
export class WeaponItem extends GenericItem implements BaseWeaponItem {
  public category: BaseWeaponItem['category'] = 'weapon'
  public type: BaseWeaponItem['type'] = 'long gun'
  public damage: BaseWeaponItem['damage'] = 0
  public rps?: BaseWeaponItem['rps'] = 0
  public magazine?: BaseWeaponItem['magazine'] = 0

  constructor(props: BaseWeaponItem) {
    super(props)
    this.type = props.type
    this.damage = props.damage
    this.rps = props.rps
    this.magazine = props.magazine
  }

  public static isWeaponItem = (item?: GenericItem): item is WeaponItem => {
    if (!item) return false
    return item.category === 'weapon'
  }
}

export type Item =
  | GenericItem
  | ArmorItem
  | WeaponItem
  | ModItem
  | MutatorItem
  | TraitItem
  | PerkItem

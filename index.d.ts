type DLC = 'dlc1'

export interface Archetype {
  category: 'archetype',
  name: string,
  imagePath: string,
  id: string,
  dlc?: DLC
  description: string,
  howToGet: string,
  wikiLinks: string[],
  linkedItems: {
    traits: Array<{ name: string, amount: number }>
    skills: Array<{ name: string}>,
    perks: Array<{ name: string }>,
  }
}
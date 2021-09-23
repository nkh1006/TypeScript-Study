interface House {
  name    : string
  planets : string | string[]
}
  
interface HouseWithID extends House {
  id: number
}

type Input = string | House[]
type FilterFn = (house: House) => boolean

function findHouses(
  input: Input , filter?: FilterFn
): HouseWithID[] {
  if (typeof input === 'string') input = JSON.parse(input)
  let housesWithID: HouseWithID[] = (input as House[]).map((house,id) => ({ id , ...house }))
  housesWithID = (filter) ? housesWithID.filter(filter) : housesWithID
  return housesWithID
}

const houses: House[] = [
  { "name": "Atreides"  , "planets": "Calladan" },
  { "name": "Corrino"   , "planets": ["Kaitan", "Salusa Secundus"] },
  { "name": "Harkonnen" , "planets": ["Giedi Prime", "Arrakis"] }
]

console.log( findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides") )
console.log( findHouses(houses, ({ name }) => name === "Harkonnen") )
console.log( findHouses(houses, ({ planets }) => planets[0] === "Kaitan") )
console.log( findHouses(houses) )
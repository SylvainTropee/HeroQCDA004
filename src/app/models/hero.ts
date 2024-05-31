export interface Hero {

  id : number
  name : string
  images : {
    sm : string,
    md : string,
    lg : string,
  }
  powerstats : {
    intelligence : number,
    strength : number,
    speed: number,
    durability : number,
    power : number,
    combat : number
  }
  biography : {
    fullName : string
  }

}

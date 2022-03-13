type ID = string;
type PopularTag = string;
type MaybePopularTag = string | null;

interface IUser {
  id: ID
  name: string
  surname: string
}

const popularTags: PopularTag[] = ["dragon", "coffee"];

let username: string = "alex";
let pageName: string | number = "1";

let errorMessage: string | null = null;

let userTest: IUser | null = null;

let someProp: string | number | null | undefined | string[] | object
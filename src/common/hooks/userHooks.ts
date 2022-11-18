import { User } from "../types/user";

export function useFetchUser(): User {
  return {
    givenNames: "Matt",
    familyName: "Compton",
    avatar: "🌭",
  };
}

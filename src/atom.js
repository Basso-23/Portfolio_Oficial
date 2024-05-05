import { atom } from "jotai";

//* Variable para el current user
export const userAtom = atom(undefined);

//* Variable para identificar si es admin
export const adminAtom = atom(false);

//* Data original NO se manipula
export const originalAtom = atom([]);

//* Data
export const dataAtom = atom([]);

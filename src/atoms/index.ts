import { atom } from "recoil";

interface UserAtomState {
  access_key: string;
}

const userAtom = atom<UserAtomState>({
  key: "user",
  default: {
    access_key: "animego123",
  },
});

export default userAtom;

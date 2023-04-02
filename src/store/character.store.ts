import type { Character } from '@prisma/client';
import { create } from 'zustand';

type CharacterState = {
  activeChar: Omit<Character, 'createdAt' | 'updatedAt'>;
};

type CharacterActions = {
  clearActiveChar(): void;
  setCharacterAttr(
    attr: keyof Character,
    value: string | number | string[],
  ): void;
};

const initialState: CharacterState = {
  activeChar: {
    name: '',
    id: '',
    userId: '',
    events: 0,
    archetypeId: '',
    trainingIds: [],
    talentIds: [],
    homeland: '',
    playerName: '',
    notes: '',
  },
};

type CharacterStore = CharacterState & CharacterActions;

export const useCharacterStore = create<CharacterStore>((set) => ({
  ...initialState,
  clearActiveChar: () => set(initialState),
  setCharacterAttr: (attr, value) =>
    set((state) => ({
      activeChar: {
        ...state.activeChar,
        [attr]: value,
      },
    })),
}));

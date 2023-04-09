import type { Character } from '@prisma/client';
import { create } from 'zustand';

type CharacterState = {
  activeChar: Omit<Character, 'createdAt' | 'updatedAt'>;
};

type CharacterActions = {
  clearActiveChar: () => void;
  setActiveChar: (char: Character) => void;
  updateCharacter: (charUpdate: Partial<Character>) => void;
};

const initialState: CharacterState = {
  activeChar: {
    id: '',
    userId: '',
    archetype: '',
    eventCount: 0,
    faction: 'Marklund',
    homeland: '',
    name: '',
    notes: '',
    playerName: '',
    talents: [],
    trainings: [],
    trappings: [],
  },
};

type CharacterStore = CharacterState & CharacterActions;

export const useCharacterStore = create<CharacterStore>((set) => ({
  ...initialState,
  clearActiveChar: () => set(initialState),
  setActiveChar: (activeChar) => set({ activeChar }),
  updateCharacter: (charUpdate) =>
    set((state) => ({ activeChar: { ...state.activeChar, ...charUpdate } })),
}));

import { FactionDescriptions, type Faction } from '@malleus/constants/Factions';
import { useCharacterStore } from '@malleus/store/character.store';
import Paper from '@mui/material/Paper';
import { FactionCard, FactionSelect } from './';

export const AllegiancePanel = () => {
  const selectedFaction = useCharacterStore(
    (store) => store.activeChar.faction as Faction | '',
  );

  return (
    <Paper className="wizard-panel flex-col overflow-y-auto">
      <FactionSelect />
      {selectedFaction !== '' && (
        <FactionCard faction={FactionDescriptions[selectedFaction]} />
      )}
    </Paper>
  );
};

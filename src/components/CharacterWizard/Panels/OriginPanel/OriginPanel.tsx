import Paper from '@mui/material/Paper';
import { CharacterNameInput, HomelandSelect, PlayerNameInput } from '.';

export const OriginPanel = () => {
  return (
    <Paper className="wizard-panel flex-col">
      <PlayerNameInput />
      <CharacterNameInput />
      <HomelandSelect />
    </Paper>
  );
};

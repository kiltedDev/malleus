import { useMaxTalents } from '@malleus/hooks/useMaxTalents';
import { useMaxTrainings } from '@malleus/hooks/useMaxTrainings';
import { useNeedsIllicit } from '@malleus/hooks/useNeedsIllicit';
import { useCharacterStore } from '@malleus/store/character.store';
import { api } from '@malleus/utils/api';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

const ReportIcon = (valid: boolean) => {
  if (valid) return <CheckCircleIcon color="success" />;
  return <UnpublishedIcon color="error" />;
};

export const FinalizePanel = () => {
  const router = useRouter();
  const character = useCharacterStore((store) => store.activeChar);
  const clearActiveChar = useCharacterStore((store) => store.clearActiveChar);
  const needsIllicit = useNeedsIllicit();
  const maxTrainings = useMaxTrainings();
  const maxTalents = useMaxTalents();
  const validateOriginPanel = () => {
    if (!character.name) return false;
    if (!character.homeland) return false;
    return true;
  };

  const createCharacter = api.character.create.useMutation();

  const validateTrainings = () => {
    if (character.trainings.length !== maxTrainings) return false;
    return !needsIllicit;
  };

  const handleCharacterSave = () => {
    createCharacter.mutate(character, {
      onSuccess: () => {
        clearActiveChar();
        void router.push('/characters');
      },
    });
  };

  return (
    <Paper className="wizard-panel flex-col">
      <Typography variant="title">
        Origin Complete{' '}
        {validateOriginPanel() ? (
          <CheckCircleIcon color="success" />
        ) : (
          <UnpublishedIcon color="error" />
        )}
      </Typography>
      <Typography variant="title">
        Archetype Complete{' '}
        {character.archetype ? (
          <CheckCircleIcon color="success" />
        ) : (
          <UnpublishedIcon color="error" />
        )}
      </Typography>
      <Typography variant="title">
        Trainings Complete{' '}
        {validateTrainings() ? (
          <CheckCircleIcon color="success" />
        ) : (
          <UnpublishedIcon color="error" />
        )}
      </Typography>
      <Typography variant="title">
        Talents Complete{' '}
        {character.talents.length === maxTalents ? (
          <CheckCircleIcon color="success" />
        ) : (
          <UnpublishedIcon color="error" />
        )}
      </Typography>
      <Typography variant="title">
        Allegiance Complete <CheckCircleIcon color="success" />
      </Typography>
      <Typography variant="title">
        Trappings Complete{' '}
        <Tooltip title="Look, inventory management is complicated. I'll get there.">
          <CheckCircleIcon color="warning" />
        </Tooltip>
      </Typography>
      <Button
        color="success"
        variant="outlined"
        className="w-fit"
        onClick={handleCharacterSave}
      >
        Save
      </Button>
    </Paper>
  );
};

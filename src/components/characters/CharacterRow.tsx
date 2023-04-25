import { useCharacterStore } from '@malleus/store/character.store';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { IconButton } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { type Character } from '@prisma/client';
import { useRouter } from 'next/router';

type CharacterRowProps = {
  character: Character;
  onDeleteClick: () => void;
};

export const CharacterRow = ({
  character,
  onDeleteClick,
}: CharacterRowProps) => {
  const router = useRouter();
  const setActiveChar = useCharacterStore((store) => store.setActiveChar);

  const handleEditClick = () => {
    setActiveChar(character);
    void router.push(`/characters/${character.id}`);
  };

  const handleDeleteClick = () => {
    setActiveChar(character);
    onDeleteClick();
  };

  return (
    <TableRow>
      <TableCell className="text-xl">{character.name}</TableCell>
      <TableCell className="text-xl">{character.archetype}</TableCell>
      <TableCell className="text-xl">{character.faction}</TableCell>
      <TableCell className="justify-between text-xl">
        <IconButton title="edit" name="edit" onClick={handleEditClick}>
          <HistoryEduIcon fontSize="large" />
        </IconButton>
        <IconButton title="delete" name="delete" onClick={handleDeleteClick}>
          <WhatshotIcon fontSize="large" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

import { api } from '@malleus/utils/api';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { CharacterRow } from './CharacterRow';
import { DeleteCharacter } from './DeleteCharacter';

export const CharacterTable = () => {
  const { data: sessionData } = useSession();
  const { data: characters, refetch: refetchCharacters } =
    api.character.getAll.useQuery(undefined, {
      enabled: sessionData?.user !== undefined,
    });
  const [deleteOpen, setDeleteOpen] = useState(false);

  if (!characters) {
    return <></>;
  }

  const handleDeleteClick = () => {
    setDeleteOpen(true);
  };

  return (
    <div className="w-3/4">
      <Table className="table-auto">
        <TableHead>
          <TableRow>
            <TableCell className="text-2xl">Name</TableCell>
            <TableCell className="text-2xl">Archetype</TableCell>
            <TableCell className="text-2xl">Allegiance</TableCell>
            <TableCell className="text-2xl" align="center" width="160">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        {characters.map((character) => (
          <CharacterRow
            key={character.id}
            character={character}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </Table>
      <DeleteCharacter open={deleteOpen} onClose={() => setDeleteOpen(false)} />
    </div>
  );
};

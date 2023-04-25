import { useCharacterStore } from '@malleus/store/character.store';
import { api } from '@malleus/utils/api';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

type DeleteCharacterProps = {
  open: boolean;
  onClose: () => void;
};

export const DeleteCharacter = ({ open, onClose }: DeleteCharacterProps) => {
  const activeChar = useCharacterStore((store) => store.activeChar);
  const clearActiveChar = useCharacterStore((store) => store.clearActiveChar);

  const confirmDelete = api.character.destroy.useMutation();

  const [confirmText, setConfirmText] = useState('');

  const handleCancelClick = () => {
    clearActiveChar();
    onClose();
  };

  const handleDeleteConfirm = () => {
    confirmDelete.mutate(
      { id: activeChar.id },
      {
        onSuccess: () => {
          clearActiveChar;
          onClose();
        },
      },
    );
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Character?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`Do you want to delete ${activeChar.name}? You can't take it back.  They'll be dead.  Dead forever... To continue, type DELETE and click Confirm.`}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          value={confirmText}
          onChange={(e) => setConfirmText(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleCancelClick}>
          Cancel
        </Button>
        <Button
          disabled={confirmText.toLowerCase() !== 'delete'}
          onClick={handleDeleteConfirm}
          color="error"
          variant="contained"
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

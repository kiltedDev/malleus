import { Homelands } from '@malleus/constants/homelands';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

type HomelandSelectProps = {
  homeland: string;
  setHomeland(homeland: string): void;
};

export const HomelandSelect = ({
  homeland,
  setHomeland,
}: HomelandSelectProps) => {
  const handleHomelandBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setHomeland(e.target.value);
  };

  return (
    <Autocomplete
      freeSolo
      options={Homelands}
      renderInput={(params) => (
        <TextField
          {...params}
          onBlur={handleHomelandBlur}
          InputLabelProps={{ shrink: true }}
          label="Homeland"
          defaultValue={homeland}
        />
      )}
    />
  );
};

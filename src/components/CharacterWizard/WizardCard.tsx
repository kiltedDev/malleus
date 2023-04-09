import MuiButton, { type ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type WizardCardProps = ButtonProps & {
  name: string;
  description?: string;
  features?: string;
  selected: boolean;
};

export const WizardCard = ({
  name,
  description,
  features,
  selected,
  ...buttonProps
}: WizardCardProps) => {
  return (
    <Button
      selected={selected}
      variant="contained"
      color="primary"
      {...buttonProps}
      className={`flex flex-col justify-start rounded-xl p-4 ${buttonProps.className}`}
    >
      <Typography variant="title">{name}</Typography>
      <Typography variant="subtitle1">{description}</Typography>
      <Typography variant="subtitle2">{features}</Typography>
    </Button>
  );
};

const Button = styled(MuiButton)<{ selected: boolean }>(({ selected }) => ({
  border: '1px solid transparent',
  '&:not(.not)': {
    backgroundImage: 'linear-gradient(to bottom right, #121212, #222)',
  },
  '&:hover': {
    backgroundImage: 'linear-gradient(to bottom right, #0d0c0a, #1a0006)',
  },
  ...(selected && {
    '&:not(.not)': {
      color: 'white',
      border: '1px solid white',
      backgroundImage: 'linear-gradient(to bottom right, #0d0c0a, #1a0006)',
    },
  }),
}));

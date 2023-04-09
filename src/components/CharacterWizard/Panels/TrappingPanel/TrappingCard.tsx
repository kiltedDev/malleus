import DiamondIcon from '@mui/icons-material/Diamond';
import MuiButton, { type ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type TrappingCardProps = ButtonProps & {
  name: string;
  description?: string;
  upkeep: number;
  selected: boolean;
};

export const TrappingCard = ({
  name,
  description,
  upkeep,
  selected,
  ...buttonProps
}: TrappingCardProps) => {
  return (
    <Button
      selected={selected}
      variant="contained"
      color="primary"
      {...buttonProps}
      className={`flex flex-col justify-start rounded-xl p-4 ${buttonProps.className}`}
    >
      <div className="flex w-full justify-end">
        {upkeep > 0 && <DiamondIcon fontSize="small" />}
        {upkeep > 1 && <DiamondIcon fontSize="small" />}
        {upkeep > 2 && <DiamondIcon fontSize="small" />}
        {upkeep > 3 && <DiamondIcon fontSize="small" />}
      </div>
      <Typography variant="title">{name}</Typography>
      <Typography variant="flavor">{description}</Typography>
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
      border: '1px solid white',
      backgroundImage: 'linear-gradient(to bottom right, #0d0c0a, #1a0006)',
    },
  }),
}));

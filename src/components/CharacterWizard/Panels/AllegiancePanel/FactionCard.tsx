import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { type FactionDescription } from './';

type FactionCardProps = {
  faction: FactionDescription;
};

export const FactionCard: React.FC<FactionCardProps> = ({ faction }) => {
  return (
    <div className="mx-auto flex w-3/4 flex-col gap-2">
      <div className="flex gap-8">
        <Image
          width={64}
          height={64}
          alt="freiport heraldry"
          src={faction.image}
          className="float-left"
        />
        <div className="flex flex-col">
          <Typography variant="title" fontSize={24}>
            {faction.homeland}
          </Typography>
          <Typography typography="subtitle2" fontSize={20}>
            {faction.leader}
          </Typography>
        </div>
      </div>
      <Typography>{faction.vision}</Typography>

      <Typography variant="flavor">…{faction.leaderPromise}…</Typography>
      <Typography variant="subtitle2" fontSize={16}>
        <Typography component="span" className="font-bold">
          Descriptors:
        </Typography>{' '}
        {faction.descriptors.join(', ')}
      </Typography>
      <Typography variant="subtitle2">{faction.favorDescriptor}</Typography>
      {faction.favorOptions.length > 0 && (
        <Table className="mx-auto w-[80%]">
          <TableHead>
            <TableCell>Faction Rewards</TableCell>
            <TableCell className="text-right">Favor to Upkeep</TableCell>
          </TableHead>
          <TableBody>
            {faction.favorOptions.map((option) => (
              <TableRow key={option.trapping}>
                <TableCell className="border-transparent">
                  <Typography fontSize={18} variant="body2">
                    {option.trapping}{' '}
                    {option.trappingDescription && (
                      <Typography variant="flavor" component="span">
                        ({option.trappingDescription})
                      </Typography>
                    )}
                  </Typography>
                </TableCell>
                <TableCell className="border-transparent text-right">
                  <Typography fontSize={18} variant="body2">
                    {option.cost}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell className="border-transparent">
                <Typography fontSize={18} variant="body2">
                  Stadard Item
                </Typography>
              </TableCell>
              <TableCell className="border-transparent text-right">
                <Typography fontSize={18} variant="body2">
                  Normal Cost
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
    </div>
  );
};

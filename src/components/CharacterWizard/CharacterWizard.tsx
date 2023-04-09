import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import {
  AllegiancePanel,
  ArchetypePanel,
  FinalizePanel,
  OriginPanel,
  TalentPanel,
  TrainingPanel,
  TrappingPanel,
} from '.';

const stages = [
  'origins',
  'archetype',
  'trainings',
  'talents',
  'allegiance',
  'trappings',
  'finalize',
] as const;
type Stage = (typeof stages)[number];

export const CharacterWizard = () => {
  const [currentStage, setCurrentStage] = useState<Stage>('origins');

  const handleTabChange = (_: unknown, newStage: Stage) => {
    setCurrentStage(newStage);
  };

  return (
    <div className="flex h-full w-full flex-col justify-center gap-8">
      <TabContext value={currentStage}>
        <TabList
          onChange={handleTabChange}
          aria-label="character stage selector set"
        >
          {stages.map((stage) => (
            <Tab key={stage} label={stage} value={stage} />
          ))}
        </TabList>
        <TabPanel value="origins">
          <OriginPanel />
        </TabPanel>
        <TabPanel value="archetype">
          <ArchetypePanel />
        </TabPanel>
        <TabPanel value="trainings">
          <TrainingPanel />
        </TabPanel>
        <TabPanel value="talents">
          <TalentPanel />
        </TabPanel>
        <TabPanel value="allegiance">
          <AllegiancePanel />
        </TabPanel>
        <TabPanel value="trappings">
          <TrappingPanel />
        </TabPanel>
        <TabPanel value="finalize">
          <FinalizePanel />
        </TabPanel>
      </TabContext>
    </div>
  );
};

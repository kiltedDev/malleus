import { CharacterWizard } from '@malleus/components/CharacterWizard';
import { type NextPage } from 'next/types';

export const CharacterView: NextPage = () => {
  return (
    <div className="content">
      <CharacterWizard />
    </div>
  );
};

export default CharacterView;

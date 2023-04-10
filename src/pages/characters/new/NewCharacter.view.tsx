import { CharacterWizard } from '@malleus/components/CharacterWizard';
import { type NextPage } from 'next';

const NewCharacter: NextPage = () => {
  return (
    <div className="content">
      <CharacterWizard />
    </div>
  );
};

export default NewCharacter;

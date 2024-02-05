import { FC, useEffect, useState } from 'react';
import Form from '@/components/Form';
import { Numbers } from '@/types/types';
import { getMissingNumbers } from '@/utils';

const App: FC = () => {
  const [numbers, setNumbers] = useState<Numbers | null>(null);

  const updateNumbers = (numbers: Numbers) => {
    setNumbers(numbers);
  };

  useEffect(() => {
    if (!numbers) {
      return;
    }

    const missingNumbers = getMissingNumbers(numbers);
  }, [numbers]);

  return (
    <>
      <Form updateNumbers={updateNumbers} />
      <p>Collection of numbers:</p>
      {numbers ? (
        <ul>
          {numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      ) : (
        <p>Collection is empty</p>
      )}
    </>
  );
};

export default App;

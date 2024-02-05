import { FC, useState } from 'react';
import Form from '@/components/Form';

const App: FC = () => {
  const [numbers, setNumbers] = useState<number[] | null>(null);

  const updateNumbers = (numbers: number[]) => {
    setNumbers(numbers);
  };

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

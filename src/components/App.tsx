import { FC, useEffect, useState } from 'react';
import Form from '@/components/Form';
import { Numbers } from '@/types/types';
import { getMissingNumbers } from '@/utils';
import GlobalStyles from '@/components/GlobalStyles';
import Container from './Container';
import NumbersList from './NumbersList/NumbersList';
import Title from '@/components/Title';
import Image from '@/components/Image';
import timelineImg from '@/images/timeline.jpg';
import { Messages } from '@/constants';

const App: FC = () => {
  const [numbers, setNumbers] = useState<Numbers | null>(null);
  const [missingNumbers, setMissingNumbers] = useState<Numbers | null>(null);

  const updateNumbers = (numbers: Numbers) => {
    setNumbers(numbers);
  };

  useEffect(() => {
    if (!numbers) {
      return;
    }

    const missingNumbers = getMissingNumbers(numbers);
    setMissingNumbers(missingNumbers);
  }, [numbers]);

  return (
    <>
      <Container>
        <Form updateNumbers={updateNumbers} />
        <Title text={Messages.numbers} />
        {numbers ? (
          <NumbersList numbers={numbers} />
        ) : (
          <Title text={Messages.emptyList} />
        )}
        {missingNumbers && (
          <>
            <Title text={Messages.missingNumbers} />
            <NumbersList numbers={missingNumbers} />
            <Title text={Messages.description} />
            <Image src={timelineImg} width={778} height={464} alt='timeline' />
          </>
        )}
      </Container>
      <GlobalStyles />
    </>
  );
};

export default App;

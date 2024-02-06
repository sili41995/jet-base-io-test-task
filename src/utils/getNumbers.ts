import { GeneralParams } from '@/constants';
import { Numbers } from '@/types/types';

const getNumbers = (amount: number): Numbers => {
  const numbers: Numbers = [];
  const numbersSet = new Set<number>([]);
  const numberOfMissingNumbers = GeneralParams.numberOfMissingNumbers;

  const maxRandomNumber = amount - numberOfMissingNumbers;
  const randomNumber =
    Math.random() * (maxRandomNumber - numberOfMissingNumbers) +
    numberOfMissingNumbers;
  numbersSet.add(Math.round(randomNumber));
  numbersSet.add(Math.round(randomNumber + 1));

  const missingNumbers = Array.from(numbersSet);

  for (let i = 1; i <= amount; i += 1) {
    if (missingNumbers.includes(i)) {
      continue;
    } else {
      numbers.push(i);
    }
  }

  return numbers;
};

export default getNumbers;

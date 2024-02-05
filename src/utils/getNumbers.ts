import { Numbers } from '@/types/types';

const getNumbers = (amount: number): Numbers => {
  const numbers: Numbers = [];
  const numbersSet = new Set<number>([]);

  while ([...numbersSet].length !== 2) {
    numbersSet.add(Math.ceil(Math.random() * amount));
  }

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

import { Numbers } from '@/types/types';

const getMissingNumbers = (arr: Numbers): Numbers => {
  const missingNumbers = [];
  const startNumber = arr[0];
  let startIndex = 0;
  let lastIndex = arr.length - 1;

  while (startIndex <= lastIndex) {
    const middleIndex = Math.floor((startIndex + lastIndex) / 2);

    if (arr[middleIndex] > startNumber + middleIndex) {
      lastIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
  }

  const missingNumber = startNumber + startIndex;
  missingNumbers.push(missingNumber, missingNumber + 1);

  return missingNumbers;
};

export default getMissingNumbers;

import { FC } from 'react';
import { IProps } from './Form.types';
import { GeneralParams, InputNames } from '@/constants';
import { useForm } from 'react-hook-form';
import { IFormData } from '@/types/types';
import { getNumbers } from '@/utils';

const Form: FC<IProps> = ({ updateNumbers }) => {
  const { register, handleSubmit } = useForm<IFormData>();

  const onFormSubmit = (data: IFormData) => {
    const amount = Number(data[InputNames.amountOfNumbers]);

    if (!amount) return;

    const numbers = getNumbers(amount);
    updateNumbers(numbers);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input
        {...register(InputNames.amountOfNumbers, {
          min: GeneralParams.numberOfMissingNumbers + 1,
        })}
        defaultValue={0}
        type='number'
      />
      <button type='submit'>Accept</button>
    </form>
  );
};

export default Form;

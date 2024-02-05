import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IProps } from './Form.types';
import { GeneralParams, InputNames } from '@/constants';
import { IFormData } from '@/types/types';
import { getNumbers } from '@/utils';

const Form: FC<IProps> = ({ updateNumbers }) => {
  const { register, handleSubmit } = useForm<IFormData>();

  const onFormSubmit: SubmitHandler<IFormData> = (data) => {
    const amount = Number(data[InputNames.amountOfNumbers]);
    const numbers = getNumbers(amount);
    updateNumbers(numbers);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input
        {...register(InputNames.amountOfNumbers, {
          min: GeneralParams.numberOfMissingNumbers + 1,
          required: true,
        })}
        defaultValue={0}
        type='number'
      />
      <button type='submit'>Accept</button>
    </form>
  );
};

export default Form;

import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/productInterfaces';

interface useProductArgs {
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  value?: number;
  initialValues?: InitialValues;
};


export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

  const [counter, setCounter] = useState<number>( initialValues?.count || value );

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max( counter + value, 0 );
     if (initialValues?.maxCount) {
       newValue = Math.min(initialValues?.maxCount, newValue);
     }

    setCounter(newValue);
    onChange && onChange({count: newValue, product});
  }

  const reset = () => {
    setCounter(initialValues?.count || value);
  }

  useEffect(() => {
    if(!isMounted.current) return;
    setCounter(value)
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,

    increaseBy,
    reset
  }
};

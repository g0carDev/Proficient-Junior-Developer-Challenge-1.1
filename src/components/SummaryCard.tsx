import { useMemo } from 'react';
import './styles/SummaryCard.styles.css';

interface Props{
  totalItems: number;
  totalSize: number;
}

const TAX = 0.16;

export const SummaryCard = ({  totalItems, totalSize }: Props) => {

  const subTotal = useMemo(() => (totalSize * 200).toFixed(2), [totalSize])
  const tax = (Number(subTotal) * TAX).toFixed(2)
  const total = (Number(subTotal) + Number(tax)).toFixed(2)
  const dueToday = Number(total) / 2
  return (
    <div>
      <h2 className='summary__title'>Summary</h2>
      <div className='summary__card'>
        <ul className='summary__list'>
          <li className='list__item'>
            <span className='item__title'>Total Items</span>
            <span className='item__value'>{totalItems}</span>
          </li>
          <li className='list__item'>
            <span className='item__title'>Total m²</span>
            <span className='item__value'>{totalSize}</span>
          </li>
          <li className='list__item'>
            <span className='item__title'>Subtotal</span>
            <span className='item__value'>${subTotal}</span>
          </li>
          <li className='list__item'>
            <span className='item__title'>Tax</span>
            <span className='item__value'>${tax}</span>
          </li>
          <li className='list__item'>
            <span className='item__title bold'>Total</span>
            <span className='item__value bold'>${total}</span>
          </li>
          <li className='list__item'>
            <span className='item__title bold'>Due Today 50%</span>
            <span className='item__value bold'>${dueToday}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

import './styles/Counter.styles.css'

interface Props {
  count: number
  handleCount: (value: number) => void
}
export const Counter = ({count, handleCount }: Props) => {
  return (
    <div className='counter'>
      <button className='counter__button button__left' onClick={() => handleCount(-1)}>
        <img src='assets/icons/less.svg' alt='Plus' />
      </button>
      <span className='counter__number '>{count}</span>
      <button className='counter__button button__right ' onClick={() => handleCount(+1)}>
        <img src='assets/icons/plus.svg' alt='Plus' />
      </button>
    </div>
  )
}

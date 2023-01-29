import './styles/Button.styles.css'

interface Props {
  text: string;
  onClick: () => void;
  outline?: boolean;
  contained?: boolean;
}

export const Button = ({ text, onClick, outline = true, contained }: Props) => {
  return (
    <button onClick={onClick}
      className={`button ${outline ? 'outline' : ''} ${contained ? 'contained' : ''}`}
    >{text}</button>
  )
}

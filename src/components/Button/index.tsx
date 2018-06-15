import { createElement } from 'react';
import * as style from './style.scss';

interface Props {
  children?: string;
  isPrimary?: boolean;
  onClick: () => void;
}

function Button(props: Props) {
  const { isPrimary = false, children = '', onClick } = props;
  const buttonClassNames = isPrimary ? `${style.button} ${style.button_isPrimary}` : style.button;

  return (
    <button className={buttonClassNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

import { createElement } from 'react';
import * as style from './style.scss';

interface Props {
  children?: string;
}

function Title(props: Props) {
  return <h2 className={style.title}>{props.children}</h2>;
}

export default Title;

import { Icon } from '../icon/Icon';

export const Logo = (props: {iconId:string}) => {
  return (
    <a href="#">
      <Icon
        width="97"
        height="59"
        viewBox="0 0 97 59"
        iconId={props.iconId}
      />
    </a>
  );
};

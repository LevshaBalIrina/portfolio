import { theme } from './Theme';

type FontPropsType = {
  family?: string;
  weight?: number;
  color?: string;
  lineHeihgt?: number;
  Fmin?: number;
  Fmax?: number;
};

export const font = ({
  family,
  weight,
  color,
  lineHeihgt,
  Fmax,
  Fmin,
}: FontPropsType) => `
    font-family: ${family || 'Poppins'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.primaryFont};
    line-height: ${lineHeihgt || 1.3}; 
    font-size: clamp(${Fmin}px, ( calc( (100vw - 360px) / (1600 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px )), ${Fmax}px) ;

`;
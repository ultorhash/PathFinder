import { FC } from 'react';
import { StyledButton } from './ButtonStyle';
import { IButton } from './IButton';

export const Button: FC<IButton> = (props) => {
    return (
        <StyledButton isMarginLeft={props.isMarginLeft} onClick={props.change}><img src={props.img} alt="settings icon"/></StyledButton>
    )
}
import { default as MuiSwitch, SwitchProps as MuiSwitchProps } from '@mui/material/Switch';

export type SwitchProps = MuiSwitchProps & {};

export const Switch = ({ ...props }: SwitchProps) => <MuiSwitch {...props}></MuiSwitch>;

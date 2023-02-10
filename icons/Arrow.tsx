import { SvgIcon, SvgIconProps } from "@mui/material";

export const Arrow = (props: SvgIconProps) => {
    
    return (
        <SvgIcon viewBox="0 0 464 465" fill="none" {...props}>
            <path d="M464 0H93.5V101.5H291.5L0 393L71.5 464.5L363.5 172.5V388.5H464V0Z" fill={props.fill || '#D6F379'}/>
        </SvgIcon>
    );
};

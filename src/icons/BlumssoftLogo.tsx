import {SvgIcon, SxProps, Theme} from '@mui/material';

interface Props {
    sx?: SxProps<Theme>,
}

const BlumssoftLogo = ({sx = []}: Props) =>
    <SvgIcon viewBox='0 0 24 24' sx={sx}>
        <defs>
            <linearGradient
                id="gradient_1"
                x1="7.74" y1="12.57"
                x2="18.27" y2="17.09"
                gradientUnits="userSpaceOnUse">
                <stop offset=".04" stopColor="#ffd43d"/>
                <stop offset="1" stopColor="#10aac0"/>
            </linearGradient>
            <linearGradient
                id="gradient_2"
                x1="11.81" y1="2.18"
                x2="25.37" y2="7.04"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ffd43d"/>
                <stop offset=".89" stopColor="#10aac0"/>
            </linearGradient>
            <linearGradient
                id="gradient_3"
                x1="2.02" y1="16.55"
                x2="11.33" y2="23.11"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ffd43d"/>
                <stop offset="1" stopColor="#10aac0"/>
            </linearGradient>
            <linearGradient
                id="gradient_4"
                x1="6.97" y1="7.11"
                x2="18.28" y2="14.04"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ffd43d"/>
                <stop offset="1" stopColor="#10aac0"/>
            </linearGradient>
        </defs>
        <path
            fill="url(#gradient_1)"
            d="m15.53,8.99c-1.72-.54-3.14-.91-4.18-1.15-.46-.11-1.06-.24-1.61.08-.47.28-.89.88-.84,1.59.02.32.13.62.31.88.3.42.78.66,1.28.68.87.04,3.24.13,4.33,1.45.25.3.71.67.96,1.21.36.75.44,2.5.35,3.35-.17,1.54-.51,2.12-1.02,3.21-1.01,2.15,1.23,2.92,1.23,2.92,0,0,1.79.65,3.27-1.06.08-.09.15-.18.24-.26l2.13-2.21c.85-.88,1.41-2.04,1.52-3.29.06-.66,0-1.39-.25-2.14-.27-.77-.78-1.42-1.43-1.88-1.12-.8-3.53-2.39-6.27-3.39Z"/>
        <path
            fill="url(#gradient_2)"
            d="m11.11,4.3s-.54,1.33.63,1.47,5.8,1.37,6.87,2.07,1.96.64,1.96.64c0,0,1.55.14,2.02-1.45s.58-2.25-.21-3.34c-.57-.79-2.71-2.04-3.86-2.68-.59-.33-1.24-.5-1.91-.5-.77,0-1.77.14-2.52.71-1.42,1.07-2.42,1.85-2.98,3.08Z"/>
        <path
            fill="url(#gradient_3)"
            d="m1.84,15.2c-.71.32-1.45.98-1.33,2.37.05.53.24,1.03.52,1.47.56.87,1.84,2.5,3.95,3.55,0,0,2.48,1.53,4.24.62,0,0,1.75-.73,2.44-2.81,0,0,.55-1.16-.96-1.68s-2.04-.66-6.97-3.41c-.59-.33-1.29-.37-1.9-.1Z"/>
        <path className=""
              fill="url(#gradient_4)"
              d="m1.28,6s-1.09,2.33,0,4,1.24,2.22,5.37,4.56,5.89,2.18,5.89,2.18c0,0,2.25-.15,1.09-2.21,0,0-.33-.97-1.8-1.16s-3.22-.72-4.26-3.1,1.4-5.5,1.4-5.5l1.08-1.86s.71-1.58-.94-2.07c-.78-.23-1.51-.2-2.06-.1s-1.07.34-1.52.68c-1.04.81-3.43,2.78-4.25,4.59Z"/>
    </SvgIcon>

export default BlumssoftLogo
import { SxProps, styled, Theme } from '@mui/material';

interface Props{
    src?: string
    title?: string
    sx?: SxProps<Theme>
}

const Img = styled('img')()

const NailCard = ({src, title, sx=[]}: Props) => {
    return <Img
        src={src}
        srcSet={src}
        alt={title ?? ''}
        loading="lazy"
        sx={sx}
    />
}

export default NailCard


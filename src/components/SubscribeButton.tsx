import { Button, ButtonProps } from '@mui/material';
import { useHistory } from 'react-router-dom';

const SubscribeButton = (props: ButtonProps) => {
    const history = useHistory();

    const handleRouteSubscribe = () => {
    };

    return <Button
        variant='contained'
        size='small'
        onClick={handleRouteSubscribe}
        {...props}
    >
        Записаться
    </Button>;
};

export default SubscribeButton;
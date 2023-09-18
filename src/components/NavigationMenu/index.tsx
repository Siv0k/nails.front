import React from 'react';
import {matchPath} from "react-router-dom";
import Tabs, {TabsActions} from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from "@mui/material/Link";

import {ROUTES} from "config/constants";

const NavigationMenu = () => {
    const tabsRef = React.useRef<TabsActions | null>(null);

    const value = React.useMemo(
        () =>
            Object.values(ROUTES)
                .find(
                    ({ url }) =>
                        matchPath(window.location.pathname, url))?.url,
        [window.location.pathname]);

    return <Tabs
        action={tabsRef}
        value={value}
        indicatorColor='secondary'
        textColor='primary'
    >
        {Object.values(ROUTES)
            .map(({url, label}) => <Tab
                    key={url}

                    label={label}
                    value={url}
                    href={url}
                    component={Link}
                />
            )
        }
    </Tabs>;
};

export default NavigationMenu;
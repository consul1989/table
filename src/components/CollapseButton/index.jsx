import IconButton from '@mui/material/IconButton';
import { useCollapseContext, useCollapseUpdateContext } from '../../context/CollapseContext';

export const CollapseButton = () => {
    const collapsed = useCollapseContext();
    const toggle = useCollapseUpdateContext();

    return (
        <IconButton onClick={toggle} disableRipple>
            {collapsed ? '❯❯' : '❮❮'}
        </IconButton>
    );
};

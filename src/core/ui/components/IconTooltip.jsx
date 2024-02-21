import { registerBrick } from 'olympe';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Icon from '@mui/material/Icon';
import { cssToSxProps, ifNotNull, ifNotTransparent, useMUITheme, getColorDefinition, validateIcon } from "helpers/mui";
import { markdownTextToReactElement } from 'helpers/remarkable';
import { ReactBrick, useProperty } from 'helpers/react.jsx';


/**
 * Provide a Icon Tooltip visual component using MUI Tooltip
 */
export default class IconTooltip extends ReactBrick {
    /**
     * @override
     */
    setupExecution($) {
        return $.observe('Hidden');
    }

    /**
     * @override
     */
    updateParent(parent, element) {
        parent.style.overflow = 'visible'; // Allow overflow
        return super.updateParent(parent, element);
    }

    /**
     * @override
     */
    static getReactComponent($) {
        return (props) => {
            const [hidden] = props.values;
            const theme = useMUITheme($);

            // Icon properties
            const icon = useProperty($, 'Icon');
            const iconColor = useProperty($, 'Icon Color');
            const tooltipColor = useProperty($, 'Tooltip Color');
            const height = useProperty($, 'Height');
            const width = useProperty($, 'Width');
            const fontSize = useProperty($, 'Font Size');
            const borderRadius = useProperty($, 'Border Radius');
            const borderColor = useProperty($, 'Border Color');
            const borderWidth = useProperty($, 'Border Width');
            const backgroundColor = useProperty($, 'Default Color');
            const cssProperty = useProperty($, 'CSS Property');

            // Tooltip properties
            const text = useProperty($, 'Text');
            const textColor = useProperty($, 'Text Color');
            const withFormat = useProperty($, 'With Format');
            const title = (withFormat ? markdownTextToReactElement(text, 'span') : text) || '';

            const StyledTooltip = styled(({ className, ...props }) => (
                <Tooltip {...props} classes={{ popper: className }}  />
            ))(() => ({
                [`& .${tooltipClasses.tooltip}`]: {
                    color: getColorDefinition(textColor, 'Icon Tooltip'),
                    backgroundColor: getColorDefinition(tooltipColor, 'Icon Tooltip'),
                    fontSize: fontSize
                }
            }));

            return !hidden && (
                <ThemeProvider theme={theme}>
                    <StyledTooltip title={title}>
                        <Icon
                            // Events
                            onClick={() => $.trigger('On Click')}
                            sx={{
                                width: width,
                                height: height,
                                fontSize: `${Math.min(width, height)}px !important`,
                                color: getColorDefinition(iconColor, 'Icon Tooltip'),
                                backgroundColor: getColorDefinition(backgroundColor, 'Icon Tooltip'),
                                ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius),
                                ...ifNotNull('borderWidth', borderWidth),
                                ...ifNotTransparent('borderStyle', 'solid', borderColor),
                                ...ifNotTransparent('borderColor', borderColor),
                                boxSizing: 'border-box',
                                ...cssToSxProps(cssProperty)
                            }}
                        >{validateIcon(icon, 'Icon Tooltip')}</Icon>
                    </StyledTooltip>
                </ThemeProvider>
            );
        };
    }
}

registerBrick('01881e66aff3a43aa01b', IconTooltip);

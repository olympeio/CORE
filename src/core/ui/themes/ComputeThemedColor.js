import { observeMUITheme } from 'helpers/mui';
import { Brick, registerBrick, Color, BrickContext } from 'olympe';
import { combineLatest } from 'rxjs';
import { Theme as MUITheme } from "@mui/material/styles";

export default class ComputeThemedColor extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        // Update the value based on its inputs but also based on the MUI theme related to the given context
        return combineLatest([observeMUITheme($), ...this.getInputs().map(input => $.observe(input))]);
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {MUITheme} muiTheme
     * @param {string} colorType
     * @param {string} tone
     * @param {number} transparency
     * @param {function(Color)} setColor
     * @param {function(string)} setColorHex
     * @param {function(string)} setColorRgb
     */
    update($, [muiTheme, colorType, tone, transparency], [setColor, setColorHex, setColorRgb]) {
        const themeColor = muiTheme.palette?.[colorType]?.[tone] ?? '';
        let olympeColor;
        if(themeColor.startsWith('rgb')) {
            const result = themeColor.substring(4, themeColor.length-1).split(',')
            olympeColor = Color.create(Number(result[0]), Number(result[1]), Number(result[2]), transparency);
        } else if (themeColor.startsWith('#')) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(themeColor);
            olympeColor = Color.create(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), transparency);
        } else {
            $.throw(`Unsupported color format: ${themeColor}`);
        }
        setColor(olympeColor);
        setColorHex(olympeColor.toHexString());
        setColorRgb(olympeColor.toRGBString());
    }
}

registerBrick('019344e79024e7ad586a', ComputeThemedColor);

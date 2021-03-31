import colors from "../resources/colorPalette.js"
export class ColorPicker {
    //Creates a color palette based on the colorPalette file
    colorPalette = colors;
    counters = {};
    constructor() {
        /*Object.defineProperties(this.counters, Object.keys(this.colorPalette));
        Object.assign(this.counters, 0);*/
        Object.keys(this.colorPalette).forEach(color => {
            this.counters[color] = 0;
        });
    }

    get colorsForLoginScreen() {
        //Creates an array of the different colors the user can chose between
        //e.g. ["red","blue"]
        const colors = [];
        Object.keys(this.colorPalette).forEach(color => {
            colors.push(color);
        });
        return colors;
    }

    previewShade(color) {
        color = color.toLowerCase();
        //returns the hsl color of the input color
        //e.g. "red" => "hsl(0, 100%, 74%)"
        if (this.colorPalette.hasOwnProperty(color))
            return (this.colorPalette[color])[0];
        else return undefined;
    }



    getShade(color) {
        color = color.toLowerCase();
        //Returns the next shade of the chosen color
        if (this.colorPalette.hasOwnProperty(color)){
            const count = this.counters[color]++;
            this.counters[color] %= this.colorPalette[color].length;
            return (this.colorPalette[color])[count];}
        else return undefined
    }
}

import {addTestSuite} from "../AkvarioTest.js";
import {TestSuite} from "../testClasses.js";
import {ColorPicker} from "../../public/js/ColorPicker.js";
import shades from "../../public/resources/colorPalette.js"

const testSuite = new TestSuite("colorPicker.js");
const colorPicker = new ColorPicker();
function previewShade (color){
    return colorPicker.previewShade(color);
}

const colors = Object.keys(shades);
const inputPrev = ["nonexistent color"];
const outputPrev = [undefined];

for (const color of colors) {
        inputPrev.push(color);
        if (colors.includes(color.toLowerCase()))
                outputPrev.push(shades[color][0])
        else outputPrev.push(undefined);
}

testSuite.addFunctionTest(previewShade,
    inputPrev,
    outputPrev);

function getShade (color){
    return colorPicker.getShade(color);
}

for (const color of colors) {
        const input = [color, color.toUpperCase(), color, color.toUpperCase(), color, color.toUpperCase(), color, color.toUpperCase(), color, "nonexistent color"];
        const output = [];
        for (let i = 0; i < input.length; i++) {
                if (colors.includes(input[i].toLowerCase()))
                        output.push(shades[color][i%shades[color].length]);
                else output.push(undefined);
        }
        testSuite.addFunctionTest(getShade,
            input,
            output)
}

export function colorPickerTest (){
    addTestSuite(testSuite);
}

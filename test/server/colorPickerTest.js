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

/*testSuite.addFunctionTest(getShade,
    ["red"],
    [(shades["red"])[0]]);*/

/*testSuite.addFunctionTest(getShade,
    ["red", "red", "red", "red", "RED", "red", "red", "red", "red"],
    ["hsl(0, 100%, 74%)",
        "hsl(0, 100%, 68%)",
        "hsl(0, 100%, 62%)",
        "hsl(0, 100%, 56%)",
        "hsl(0, 100%, 48%)",
        "hsl(0, 100%, 44%)",
        "hsl(0, 100%, 38%)",
        "hsl(0, 100%, 32%)",
        "hsl(0, 100%, 74%)"]);*/
/*
testSuite.addFunctionTest(getShade,
    ["orange", "orange", "orange", "orange", "ORANGE", "orange", "orange", "orange", "orange"],
    ["hsl(32, 100%, 74%)",
        "hsl(32, 100%, 68%)",
        "hsl(32, 100%, 62%)",
        "hsl(32, 100%, 56%)",
        "hsl(32, 100%, 50%)",
        "hsl(32, 100%, 44%)",
        "hsl(32, 100%, 38%)",
        "hsl(32, 100%, 32%)",
        "hsl(32, 100%, 74%)"]);

testSuite.addFunctionTest(getShade,
    ["yellow", "yellow", "yellow", "yellow", "YELLOW", "yellow", "yellow", "yellow", "yellow"],
    ["hsl(60, 100%, 74%)",
        "hsl(60, 100%, 68%)",
        "hsl(60, 100%, 62%)",
        "hsl(60, 100%, 56%)",
        "hsl(60, 100%, 50%)",
        "hsl(60, 100%, 44%)",
        "hsl(60, 100%, 38%)",
        "hsl(60, 100%, 32%)",
        "hsl(60, 100%, 74%)"]);

testSuite.addFunctionTest(getShade,
    ["green", "green", "green", "green", "GREEN", "green", "green", "green", "green"],
    ["hsl(119, 100%, 74%)",
        "hsl(119, 100%, 68%)",
        "hsl(119, 100%, 62%)",
        "hsl(119, 100%, 56%)",
        "hsl(119, 100%, 50%)",
        "hsl(119, 100%, 44%)",
        "hsl(119, 100%, 38%)",
        "hsl(119, 100%, 32%)",
        "hsl(119, 100%, 74%)"]);

testSuite.addFunctionTest(getShade,
    ["cyan", "cyan", "cyan", "cyan", "CYAN", "cyan", "cyan", "cyan", "cyan"],
    ["hsl(179, 100%, 74%)",
        "hsl(179, 100%, 68%)",
        "hsl(179, 100%, 62%)",
        "hsl(179, 100%, 56%)",
        "hsl(179, 100%, 50%)",
        "hsl(179, 100%, 44%)",
        "hsl(179, 100%, 38%)",
        "hsl(179, 100%, 32%)",
        "hsl(179, 100%, 74%)"]);

testSuite.addFunctionTest(getShade,
    ["blue", "blue", "blue", "blue", "BLUE", "blue", "blue", "blue", "blue"],
    ["hsl(212, 100%, 74%)",
        "hsl(212, 100%, 68%)",
        "hsl(212, 100%, 62%)",
        "hsl(212, 100%, 56%)",
        "hsl(212, 100%, 50%)",
        "hsl(212, 100%, 44%)",
        "hsl(212, 100%, 38%)",
        "hsl(212, 100%, 32%)",
        "hsl(212, 100%, 74%)"]);

testSuite.addFunctionTest(getShade,
    ["Purple", "Purple", "purple", "PURPLE", "Purple", "Purple", "Purple", "Purple", "Purple"],
    ["hsl(275, 100%, 74%)",
        "hsl(275, 100%, 68%)",
        "hsl(275, 100%, 62%)",
        "hsl(275, 100%, 56%)",
        "hsl(275, 100%, 50%)",
        "hsl(275, 100%, 44%)",
        "hsl(275, 100%, 38%)",
        "hsl(275, 100%, 32%)",
        "hsl(275, 100%, 74%)"]);

testSuite.addFunctionTest(getShade,
    ["pink", "pink", "pink", "brown", "pink", "PINK", "pink", "pink", "pink", "pink"],
    ["hsl(316, 100%, 74%)",
        "hsl(316, 100%, 68%)",
        "hsl(316, 100%, 62%)",
        undefined,
        "hsl(316, 100%, 56%)",
        "hsl(316, 100%, 50%)",
        "hsl(316, 100%, 44%)",
        "hsl(316, 100%, 38%)",
        "hsl(316, 100%, 32%)",
        "hsl(316, 100%, 74%)"]);
*/

export function colorPickerTest (){
    addTestSuite(testSuite);
}

//["red"], ["orange"], ["yellow"], ["green"], ["cyan"], ["blue"], ["purple"], ["pink"]
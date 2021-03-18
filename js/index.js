import * as fontsLib from './fonts-map.js';
import convert from './convert.js';

$(document).ready(() => {

    const fonts = {
        'maccswiss': fontsLib.maccswiss,
        'makpoddrska': fontsLib.makpoddrska
    }

    //default chosen font
    let chosenFont = fonts.maccswiss;

    //Real-time conver
    $("#text-input").keyup(() => { convert(chosenFont) })

    //Change font
    $("#selectFont").on('change', (event) => {
        try {
            chosenFont = fonts[event.target.value];
            convert(chosenFont);
        } catch (error) {
            alert(`Probably a newly added font was not set up correctly! - ${error}`);
        }
    })

    //Convert on button click 
    //Useless because there is real-time conversion, but it gives the user something to click on. 'Cos why not...
    const btn = $("#convert-btn").click(() => { convert(chosenFont) });
});
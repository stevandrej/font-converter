import * as fontsLib from './fonts-map';
import convert from './convert';

$(document).ready(function () {

    const fonts = {
        'maccswiss': fontsLib.maccswiss,
        'makpoddrska': fontsLib.makpoddrska
    }

    //default chosen font
    let chosenFont = 'maccswiss';

    //Real-time conver
    $("#text-input").keyup(() => { convert() })

    //Change font
    $("#selectFont").on('change', (event) => {
        chosenFont = event.target.value;
        convert();
    })

    //Convert on button click 
    //Useless because there is real-time conversion, but it gives the user something to click on. 'Cos why not...
    const btn = $("#convert-btn").click(() => { convert() });
});
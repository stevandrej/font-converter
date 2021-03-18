//Converter funcion
const convert = (font) => {
	let inputText = $("#text-input").val();
	let outputText = new Array;

	let inputTextChars = inputText.split('');

	inputTextChars.forEach(element => {
		if (font.has(element))
			outputText.push(font.get(element));
		else
			outputText.push(element);
	});

	outputText = outputText.join("");
	$("#text-output").val(outputText);
}

export default convert;
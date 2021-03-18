//Converter funcion
const convert = () => {
	let inputText = $("#text-input").val();
	let outputText = new Array;

	let inputTextChars = inputText.split('');

	inputTextChars.forEach(element => {
		if (fonts[chosenFont].has(element))
			outputText.push(fonts[chosenFont].get(element));
		else
			outputText.push(element);
	});

	outputText = outputText.join("");
	$("#text-output").val(outputText);
}

export default convert;
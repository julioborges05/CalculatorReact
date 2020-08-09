sum = (val1, val2) => {
    return (val1 + val2);
}

sub = (val1, val2) => {
    return (val1 - val2);
}

mult = (val1, val2) => {
    return (val1 * val2);
}

div = (val1, val2) => {
    return (val1 / val2);
}

receiverValue = (value) => {
    if("/" == value || "X" == value || "-" == value || "+" == value){
        arrayValues[0] = parseFloat(valueNumber);
        expression = arrayValues[0] + " " + value + " ";
        valueNumber = 0;
        switch (value){
            case "/":
                calc = "div";
                break;
            case "X":
                calc = "mult";
                break;
            case "-":
                calc = "sub";
                break;
            case "+":
                calc = "sum";
                break;
        }
    }
}
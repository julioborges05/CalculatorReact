let valueNumber = "";
let newValue = "";
let arrayValues = [];
let calc;
let result;
let expression;

function AppComponent() {
    let [num, alternum] = React.useState(0);
    let [exp, alterexp] = React.useState("");

    const alter = (value) =>{
        if(typeof(1) != typeof(value)){
            switch(value){
                case 'CE':
                    valueNumber = "";
                    alternum(0);
                    break;
                case 'C':
                    arrayValues = [];
                    valueNumber = "";
                    alterexp("");
                    alternum(0);
                    break;
                case '<<<':
                    newValue = "";
                    for(let i = 0; i < valueNumber.length-1; i++){
                        newValue += valueNumber[i];
                    }
                    valueNumber = newValue;
                    "" == valueNumber ? (valueNumber = 0) : "";
                    alternum(parseFloat(valueNumber));
                    break;
                case '/':
                    receiverValue('/');
                    alterexp(expression);
                    break;
                case 'X':
                    receiverValue('X');
                    alterexp(expression);
                    break;
                case '-':
                    receiverValue('-');
                    alterexp(expression);
                    break;
                case '+':
                    receiverValue('+');
                    alterexp(expression);
                    break;
                case '+/-':
                    valueNumber = parseFloat(valueNumber) * (-1);
                    alternum(valueNumber);
                    break;
                case '.':
                    0 == valueNumber ? (valueNumber = "0.") : valueNumber += value + "";
                    alternum(valueNumber);
                    break;
                case '=':
                    arrayValues[1] = parseFloat(valueNumber);

                    if(0 == valueNumber && "div" == calc){
                        console.log("Divisão por 0");
                        alternum("Impossivel dividir");
                        break;
                    }

                    alterexp(expression + arrayValues[1] + " =");

                    "sum" == calc ? (result = sum(arrayValues[0], arrayValues[1])) :
                        "sub" == calc ? (result = sub(arrayValues[0], arrayValues[1])):
                            "mult" == calc ? (result = mult(arrayValues[0], arrayValues[1])):
                                "div" == calc ? (result = div(arrayValues[0], arrayValues[1])):
                                    console.log("Aconteceu um erro");

                    alternum(parseFloat(result));
                    valueNumber = 0;
                    arrayValues = [];
                    break;
            }
        } else {
            valueNumber += value + "";
            alternum(parseFloat(valueNumber));
        }


        console.log(arrayValues);
    }

    return(
        <div id="back">
            <History exp={exp}/>
            <Display num={num}/>
            <ButtonArray alter={alter}/>
        </div>
    )   
}

function ButtonArray(props){
    const nameButton = ["CE", "C", "<<<", "/",
                        7, 8, 9, "X", 
                        4, 5, 6, "-", 
                        1, 2, 3, "+", 
                        "+/-", 0, ".", "="];

    const listButton = nameButton.map((nameButton) =>
        <button className="button" onClick = {() => {props.alter(nameButton)}}>{nameButton}</button>
    );
    return(
        <React.Fragment>
            {listButton}
        </React.Fragment>
    )
}

function History(props){
    React.useEffect(function(){});
    return(
        <div id="exp">
            {props.exp}
        </div>
    )
}

function Display(props){
    React.useEffect(function(){});
    return(
        <div id="display">
            <p>{props.num}</p>
        </div>
    )
}

ReactDOM.render(
    <AppComponent />,
    document.getElementById('app')
)
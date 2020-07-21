let valueNumber = "";
let expression = "";
let comand = "";
let result = 0;
let value1, value2;
let count = 1;

function AppComponent() {
    const [num, alternum] = React.useState(0);
    const [exp, alterexp] = React.useState(expression);

    const alterExp = function (){
        if(count == 1){
            value1 = parseFloat(valueNumber);
            count++;
        }else{
            value2 = parseFloat(valueNumber);
            count--;
        }


        if(expression[expression.length-1] == "="){
            if(comand == "mult"){
                alternum(0);
                result = mult(value1, value2);
                alternum(result);
            } else if(comand == "div"){
                alternum(0);
                result = divi(value1, value2);
                alternum(result);
            } else if(comand == "sum"){
                alternum(0);
                result = sum(value1, value2);
                alternum(result);
            } else if(comand == "sub"){
                alternum(0);
                result = sub(value1, value2);
                alternum(result);
            }
        }else{
            if(expression[expression.length-2] == "/"){
                //console.log("DIVISÃO");
                comand = "div";
            }else if(expression[expression.length-2] == "X"){
                comand = "mult";
            }else if(expression[expression.length-2] == "+"){
                comand = "sum";
            }else if(expression[expression.length-2] == "-"){
                comand = "sub";
            }
            alternum("0");
        }


        alterexp(expression);
        valueNumber = "";
    }

    const mudaValor = function (){
        alternum(parseFloat(valueNumber));
    }

    return(
        <div id="back">
            <History exp={exp}/>
            <Display num={parseFloat(num)}/>
            <Button muda={mudaValor} exp={alterExp}/>
        </div>
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

function Button(props){
    return(
        <React.Fragment>
            <button className="button" onClick = {() => {valueNumber = "0"; props.muda()}}>CE</button>
            <button className="button" onClick = {() => {expression = ""; props.exp()}}>C</button>
            <button className="button" onClick = {() => {expression = valueNumber + " / "; props.exp()}}>/</button>
            <button className="button" onClick = {() => {expression = valueNumber + " X "; props.exp()}}>X</button>
            <button className="button" onClick = {() => {valueNumber += "7"; props.muda()}}>7</button>
            <button className="button" onClick = {() => {valueNumber += "8"; props.muda()}}>8</button>
            <button className="button" onClick = {() => {valueNumber += "9"; props.muda()}}>9</button>
            <button className="button" onClick = {() => {expression = valueNumber + " - "; props.exp()}}>-</button>
            <button className="button" onClick = {() => {valueNumber += "4"; props.muda()}}>4</button>
            <button className="button" onClick = {() => {valueNumber += "5"; props.muda()}}>5</button>
            <button className="button" onClick = {() => {valueNumber += "6"; props.muda()}}>6</button>
            <button className="button" onClick = {() => {expression = valueNumber + " + "; props.exp()}}>+</button>
            <button className="button" onClick = {() => {valueNumber += "1"; props.muda()}}>1</button>
            <button className="button" onClick = {() => {valueNumber += "2"; props.muda()}}>2</button>
            <button className="button" onClick = {() => {valueNumber += "3"; props.muda()}}>3</button>
            <button id="equal" onClick = {() => {expression += valueNumber + " ="; props.exp()}}>=</button>
            <button id="zero" onClick = {() => {valueNumber += "0"; props.muda()}}>0</button>
            <button className="button" onClick = {() => {valueNumber += "."; props.muda()}}>.</button>
        </React.Fragment>
    )
}

ReactDOM.render(
    <AppComponent />,
    document.getElementById('app')
)
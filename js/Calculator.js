let valueNumber = "";
let values = [];
let index = 0;
let operator = "";
let lastOperator = "";
let result;

function AppComponent() {
    let [num, alternum] = React.useState(0);
    let [exp, alterExp] = React.useState("");

    const alterValue = function(){
        alternum(parseFloat(valueNumber));
        values[index] = parseFloat(valueNumber);
        console.log(values);
    }

    const alterExpression = function(){
        "C" != operator ? alterExp(values[index] + operator) : alterExp("");
        "" == exp ? (0 == index ? index++ : index--): index = 0;

        if ("=" == operator){
            if ("/" == lastOperator){
                result = div(values[0], values[1]);
                alterExp(values[0] + "/" + values[1] + "=");
                alternum(parseFloat(result));
            } else if ("X" == lastOperator){
                result = mult(values[0], values[1]);
                alterExp(values[0] + "X" + values[1] + "=");
                alternum(parseFloat(result));
            } else if ("-" == lastOperator){
                result = sub(values[0], values[1]);
                alterExp(values[0] + "-" + values[1] + "=");
                alternum(parseFloat(result));
            } else if ("+" == lastOperator){
                result = sum(values[0], values[1]);
                alterExp(values[0] + "+" + values[1] + "=");
                alternum(parseFloat(result));
            }
        } else {
            alternum(0);
        }

        //console.log(num);

        valueNumber = "";
    }

    return(
        <div id="back">
            <History exp={exp}/>
            <Display num={parseFloat(num)}/>
            <Button alter={alterValue} alterE={alterExpression}/>
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
            <button className="button" onClick = {() => {valueNumber = "0"; props.alter()}}>CE</button>
            <button className="button" onClick = {() => {valueNumber = "0"; operator="C"; values = []; index = 0; props.alter(); props.alterE()}}>C</button>
            <button className="button" onClick = {() => {operator = "/"; props.alterE()}}>/</button>
            <button className="button" onClick = {() => {operator = "X"; props.alterE()}}>X</button>
            <button className="button" onClick = {() => {valueNumber += "7"; props.alter()}}>7</button>
            <button className="button" onClick = {() => {valueNumber += "8"; props.alter()}}>8</button>
            <button className="button" onClick = {() => {valueNumber += "9"; props.alter()}}>9</button>
            <button className="button" onClick = {() => {operator = "-"; props.alterE()}}>-</button>
            <button className="button" onClick = {() => {valueNumber += "4"; props.alter()}}>4</button>
            <button className="button" onClick = {() => {valueNumber += "5"; props.alter()}}>5</button>
            <button className="button" onClick = {() => {valueNumber += "6"; props.alter()}}>6</button>
            <button className="button" onClick = {() => {operator = "+"; props.alterE()}}>+</button>
            <button className="button" onClick = {() => {valueNumber += "1"; props.alter()}}>1</button>
            <button className="button" onClick = {() => {valueNumber += "2"; props.alter()}}>2</button>
            <button className="button" onClick = {() => {valueNumber += "3"; props.alter()}}>3</button>
            <button id="equal" onClick = {() => {lastOperator = operator; operator = "="; props.alterE()}}>=</button>
            <button id="zero" onClick = {() => {valueNumber += "0"; props.alter()}}>0</button>
            <button className="button" onClick = {() => {valueNumber += "."; props.alter()}}>.</button>
        </React.Fragment>
    )
}

ReactDOM.render(
    <AppComponent />,
    document.getElementById('app')
)
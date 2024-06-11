import React, { useState } from "react";
import "./App.css";
function Calculator() {

let [result, setResult] = useState('');

function checkuserInputdetails(number1,number2)
{
  console.log(number2)
  let dotcount1=0,dotcount2=0,i=0,j=0;
   while(i<number1.length || j<number2.length)
   {
    // console.log(number2)
       if(number1[i]==='.' && i<number1.length)
       {
        dotcount1+=1
       }
       if(number2[j]==='.' && j<number2.length)
       {
        dotcount2+=1
       }
       i++;
       j++;
   }
   if(dotcount1>1 || dotcount2>1)
   {
    return 0
   }
   return 1
}

// finally user input to save result
function updatingUserValues(event){
  let currentData=event.target.value
  
    let symbolCount=0;
    for(let i=0;i<result.length;i++)
    {
      if((result[i]==='+') || (result[i]==='-') || (result[i]==='/') || (result[i]==='*') || (result[i]==='%'))
      {
        symbolCount+=1
      }
    }
    if(symbolCount<1)
    {
      setResult(result+event.target.value)  
    }
    else if(((currentData!=='+') && (currentData!=='-') && (currentData!=='/') && (currentData!=='*') && (currentData!=='%')))
    {
      setResult(result+event.target.value) 
    }

 }
///user input values to empty

  function EmptyValues() {
    setResult("");
  }
  //deleting the values

  function DeleteLastValue() {
    setResult(result.slice(0, -1));
  }

  // finally calculate the values

  function EvalValues() {
    
      let split;
      for(let i=0;i<result.length;i++)
      {
        if(result[i]==='+')
        {
         
          split=result.split('+')
         // console.log(split)
          if(checkuserInputdetails((split[0]),(split[1])))
          {
            setResult(`${((Number(split[0]))+(Number(split[1])).toFixed(2))}`)
          }
          else{
            setResult("Math error")
          }
        }
        else if(result[i]==='-') 
        {
          split=result.split('-')
          if(checkuserInputdetails(split[0],split[1]))
          {
          
          setResult(`${(Number(split[0])-Number(split[1])).toFixed(2)}`)
          
          }
          else{
            setResult("Math error")
          }
        } 
        else if(result[i]==='*') 
        {
          split=result.split('*')
          if(checkuserInputdetails(split[0],split[1]))
          {
            setResult(`${(Number(split[0])*Number(split[1])).toFixed(2)}`)
           
          }
          else{
            setResult("Math error")
          }

        }
        else if(result[i]==='/') 
        {
          split=result.split('/')
          if(checkuserInputdetails(split[0],split[1]))
          {
          setResult(`${(Number(split[0])/Number(split[1])).toFixed(2)}`)

          }
          else{
            setResult("Math error")
          }
        }
        else if(result[i]==='%') 
        {
          split=result.split('%')
          if(checkuserInputdetails(split[0],split[1]))
          {
          setResult(`${(Number(split[0])%Number(split[1])).toFixed(2)}`)
          
          }
          else{
            setResult("Math error")
          }
        }
        
      }
     
  }
  return (
   
    <div className="container">
      <div className="grid">
        <div className="dispaly">
          <div className=''>
          <input className="output"   type="text" value={result} />
    
          </div>
        
        </div>

        <div className="button">
          <div className=" ">
            <button className="box box-AC" name="AC" onClick={EmptyValues}>
              AC
            </button>
          </div>
          <div className="box box-CE">
            <button name="AC" onClick={DeleteLastValue}>
              CE
            </button>
          </div>
          <div className="box box-%">
            <button
              name="%"
              value="%"
              onClick={updatingUserValues}
            >
              %
            </button>
          </div>
          <div className="box box-/">
            <button
              name="/"
              value="/"
              onClick={ updatingUserValues}
            >
              /
            </button>
          </div>
          <div className="box box-7">
            <button
              name="7"
              value="7"
              onClick={ updatingUserValues}
            >
              7
            </button>
          </div>
          <div className="box box-8">
            <button
              name="8"
              value="8"
              onClick={ updatingUserValues}
            >
              8
            </button>
          </div>
          <div className="box box-9">
            <button
              name="9"
              value="9"
              onClick={updatingUserValues}
            >
              9
            </button>
          </div>
          <div className="box box-*">
            <button
              name="*"
              value="*"
              onClick={updatingUserValues}
            >
              *
            </button>
          </div>
          <div className="box box-4">
            <button
              name="4"
              value="4"
              onClick={ updatingUserValues}
            >
              4
            </button>
          </div>
          <div className="box box-5">
            <button
              name="5"
              value="5"
              onClick={updatingUserValues}
            >
              5
            </button>
          </div>
          <div className="box box-6">
            <button
              name="6"
              value="6"
              onClick={ updatingUserValues}
            >
              6
            </button>
          </div>
          <div className="box box--">
            <button
              name="-"
              value="-"
              onClick={ updatingUserValues}
            >
              -
            </button>
          </div>
          <div className="box box-1">
            <button
              name="1"
              value="1"
              onClick={updatingUserValues}
            >
              1
            </button>
          </div>
          <div className="box box-2">
            <button
              name="2"
              value="2"
              onClick={ updatingUserValues}
            >
              2
            </button>
          </div>
          <div className="box box-3">
            <button
              name="3"
              value="3"
              onClick={ updatingUserValues}
            >
              3
            </button>
          </div>
          <button
            className="box-pluse"
            name="+"
            value="+"
            onClick={updatingUserValues}
          >
            +
          </button>
          <div className="box box-0">
            <button
              name="0"
              value="0"
              onClick={ updatingUserValues}
            >
              0
            </button>
          </div>
          <div className="box box-.">
            <button
              name="."
              value="."
              onClick={ updatingUserValues}
            >
              .
            </button>
          </div>
          <div className="box box-=">
            <button name="=" onClick={()=> EvalValues()}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

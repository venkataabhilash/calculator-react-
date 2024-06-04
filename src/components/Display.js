import React, { useState } from 'react'

const Display = () => {
    const [input,setInput]= useState('');
    const submit =(num) =>{
        setInput(input+ num);
    }
    const clear = () => {
      setInput('');
    };
    const evaluate = () =>{
      setInput(eval(input).toString());
    }
  return (
    <>
      <div className='maincnt'>
        <div className='display'>{input}</div>
        <div className='calc'>
          <button className='btn' onClick={() => submit('1')}>1</button>
          <button className='btn' onClick={() => submit('2')}>2</button>
          <button className='btn' onClick={() => submit('3')}>3</button>
          <button className='btn' onClick={() => submit('+')}>+</button>
          <button className='btn' onClick={() => submit('4')}>4</button>
          <button className='btn' onClick={() => submit('5')}>5</button>
          <button className='btn' onClick={() => submit('6')}>6</button>
          <button className='btn' onClick={() => submit('-')}>-</button>
          <button className='btn' onClick={() => submit('7')}>7</button>
          <button className='btn' onClick={() => submit('8')}>8</button>
          <button className='btn' onClick={() => submit('9')}>9</button>
          <button className='btn' onClick={() => submit('*')}>*</button>
          <button className='btn' onClick={()=> clear()}>C</button>
          <button className='btn' onClick={() => submit('0')}>0</button>
          <button className='btn' onClick={() => submit('/')}>/</button>
          <button className='btn' onClick={()=> evaluate()}>=</button>
        </div>
      </div>
    </>
  )
}

export default Display
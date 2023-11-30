
import { useState } from 'react';
import './App.css';
import { TextField,Stack,Button } from '@mui/material';

function App() {
  const [total,setTotal]=useState(0)
  const [Principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [time,setTime]=useState(0)
  const [validprinciple,setValidPrinciple]=useState(true)
  const [validrate,setValidRate]=useState(true)
  const [validtime,setValidTime]=useState(true)


  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!Principle || !rate || !time){
      alert('Enter valid value')
      
    }
    else{
      let a=Principle*rate/100*time
      setTotal(a)
    }

  }

  const validateInput=(e)=>{
    const {name,value}=e.target
    // console.log(!!value.match(/^[0-9]{1,}$/))
    if(!!value.match((/^[0-9]{1,}$/))){
      if(name=='principle'){
        setPrinciple(value)
        setValidPrinciple(true)
      }
      else if(name=='rate'){
        setRate(value)
        setValidRate(true)
      }
      else{
        setTime(value)
        setValidTime(true) 
      }
    }
    else{
      if(name=='principle'){
        setPrinciple(value)
        setValidPrinciple(false)
      }
      else if(name=='rate'){
        setRate(value)
        setValidRate(false)
      }
      else{
        setTime(value)
        setValidTime(false)
      }
    }
  }



  const valueReset=()=>{
    setTotal(0)
    setPrinciple(0)
    setRate(0)
    setTime(0)
    setValidPrinciple(true)
    setValidRate(true)
    setValidTime(true)
  }

  

  // console.log(Principal,rate,time)
  
  return (
    <div style={{height:"100vh"}} className="w-100 d-flex justify-content-center align-items-center bg-dark">
      <div className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>calculate your simple interest easily!</p>
        <div style={{backgroundColor:"#F5E33C"}} className='text-center rounded'>
           <h4 className='pt-4'>₹ {total}</h4>
           <p className='pb-4'>Your total interest</p>
        </div>
      <div >
      <form className='my-5' onSubmit={(event)=>handleSubmit(event)} id='screen'>
        <div className='mb-3'>
          <TextField className='w-100' id="outlined-basic1" label="₹ Principle amount" variant="outlined"
           value={Principle || ''} name='principle' onChange={(event)=>validateInput(event)}
          />
            {
              !validprinciple && 
              <div className='text-danger'>
                *invalid principle amount value
              </div>
            }
        
        </div>
        <div className='mb-3'>
          <TextField className='w-100' id="outlined-basic2" label="Rate of interest (p,a) %" variant="outlined" 
           value={rate || ''} name='rate' onChange={(event)=>validateInput(event)}
          />
           {
              !validrate && 
              <div className='text-danger'>
                *invalid Rate value
              </div>
            }
        </div>
         <div className='mb-3'>
          <TextField className='w-100' id="outlined-basic3" label="Time priod (Yr)" variant="outlined" 
           value={time|| ''} name='time' onChange={(event)=>validateInput(event)}
          />
           {
              !validtime && 
              <div className='text-danger'>
                *invalid Years
              </div>
            }
        </div>
        <Stack spacing={2} direction={'row'} >
          <Button type='submit' style={{height:"50px",width:"250px"}} variant="contained" className='bg-dark' disabled={validprinciple && validrate && validtime ? false:true}>Calculate</Button>
          <Button type='reset' style={{height:"50px",width:"250px"}} variant="outlined" onClick={valueReset}>Reset</Button>
        </Stack>
      </form>
      
      </div>
      </div>
    </div>
  );
}

export default App;

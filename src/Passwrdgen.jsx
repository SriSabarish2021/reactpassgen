import React, { useCallback, useEffect, useMemo } from 'react'
import { useState } from 'react'
import './Passwrdgen.css'
import { useRef } from 'react'
const Passwrdgen = () => {
    const reference=useRef()
    const [passclick,setGetingPass]=useState()

    const [inpval,setinpval]=useState(5)
    const [uppper,setupper]=useState(false)
    const [lower,setlower]=useState(false)
    const [numberr,setnumber]=useState(false)

    useEffect(() => {
      handleClick()
    }, [])
    

    const handleClick = () => {
        setGetingPass(getvalbychange())
    }


    let getvalbychange=useCallback(() => {
        let collection='!@#$%^&*(?>~/.,;[{}|*-+'
        if(uppper)
            collection+='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if(lower)
            collection+='abcdefghijklmnopqrstuvwxyz';
        if(numberr)
            collection+='1234567890';

        let allstrpass=''
        for (let id =1; id<=Number(inpval); id++) {
            let random=Math.floor(Math.random()*collection.length)
            allstrpass+=collection.charAt(random)
        }
        return allstrpass
    })



    let copy=()=>{
        reference.current.select()
        navigator.clipboard.writeText(passclick)
    }

  return (
    <div className='pass'>
        <header>
            <h3>Pass Generator</h3>
        </header>
        <main className='main'>
            <section className='sec'>

                    <input type="range" min={1} max={20}  placeholder='Enter Length' value={inpval} onChange={(e)=>setinpval(e.target.value)}/>
                    <div className='row'>
                        <input id='upper' name='upper' type="checkbox" checked={uppper} onChange={()=>setupper(uppper=>!uppper)}/>
                        <label htmlFor="upper">Upper-Case</label>
                    </div>
                    <div className='row'>
                        <input className='lower' name='lower' type="checkbox" checked={lower} onChange={()=>setlower(lower=>!lower)}/>
                        <label htmlFor="lower">Lower-Case</label>
                    </div>
                    <div className='row'> 
                        <input className='number' name='number' type="checkbox" checked={numberr} onChange={()=>setnumber(numberr=>!numberr)}/>
                        <label htmlFor="number">Number</label>
                    </div>               
            </section>
            <section className='sec'>
                <button onClick={handleClick}>Get Pass</button>
                <input readOnly value={passclick} ref={reference} style={{color:'black'}}/>
                <button onClick={copy}>Copy</button>
            </section>
           
        </main>
    </div>
  )
}

export default Passwrdgen

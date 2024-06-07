
import { useState } from 'react'
import "./Quotes.css"

const Quotes = () =>{
  const [quotes, setQuotes] = useState(null)
  const [Loader, setLoader] = useState(null)

  const handleQuotes = async (ev) =>{
    ev.preventDefault;
   
  try {
    const api_link = "https://api.adviceslip.com/advice"
    setLoader(true)
    const response = await fetch(api_link);
    const display = await response.json();
    console.log(display.slip.advice)
    setQuotes(display.slip.advice)
    setLoader(false)

  } catch (error) {
    console.log("error occured");
    setQuotes("error occured");
    setLoader(true)
  }
  }

  return(
  <div className='text'>
      <h1>&copy; diana mwende</h1>
      <button onClick={handleQuotes}>generate quotes</button>
      <h1>{quotes}</h1>
      <p>{Loader &&  "loading..."}</p>
     
    
    </div>

    )

}


export default Quotes;
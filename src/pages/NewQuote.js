import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

function NewQuote() {
    const history =   useHistory()
    const addQuote = quote =>{
        console.log(quote);

        history.push('/quotes')
    }
  return <QuoteForm onAddQuote={addQuote} />;
}

export default NewQuote;

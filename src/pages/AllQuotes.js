import React from "react";
import QuoteList from '../components/quotes/QuoteList';


const DUMMY_DATA = [
    {id: 'q1', author: 'Isroil', text: 'Learning React is Amazing'},
    {id: 'q2', author: 'Rustamov', text: 'Learning React is Great'}
]

function AllQuotes() {
  return <QuoteList quotes={DUMMY_DATA} />;
}

export default AllQuotes;

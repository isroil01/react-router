import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
    {id: 'q1', author: 'Isroil', text: 'Learning React is Amazing'},
    {id: 'q2', author: 'Rustamov', text: 'Learning React is Great'}
]

function QuoteDetail() {
    const params = useParams();
    const filtered = DUMMY_DATA.find((item) =>item.id === params.quoteId);
    if(!filtered){
        return <p>no quote find</p>
    }
  return (
      <Fragment>
          <HighlightedQuote text={filtered.text} author={filtered.author} />
          <Route path={`/quotes/${params.quoteId}`} exact>
            <div className="centered">
               <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Load Comment</Link>       
            </div>
          </Route>
          <Route path={`/quotes/${params.quoteId}/comments`}>
             <Comments />
          </Route>
      </Fragment>
  );
}

export default QuoteDetail;

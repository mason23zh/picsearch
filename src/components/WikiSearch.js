import React, { useState, useEffect } from "react";
import axios from "axios";
/**
 *
 * The WikiSearch component will do following things:
 * 1: Render Search Bar
 * 2: Take user input
 * 3: Make Http request to Wiki api
 */
const WikiSearch = () => {
  const [term, setTerm] = useState(""); //The search term entered by user
  const [results, setResults] = useState([]); //Wiki api response

  console.log(term);
  console.log(results);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    //run search only if there is a term
    //setTimeout function will add throttle to make Http request
    //from wiki. A 550ms delay is added to prevent call api
    //as soon as a change has been made.

    if (term && !results.length) {
      search();
    } else {
      const timeOutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 550);

      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term for wikipedia</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui list">{renderedResults}</div>
    </div>
  );
};

export default WikiSearch;

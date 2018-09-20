import React from 'react';

const Accordion = (props) => {
	const {array1, showAccordion, open} = props;
	return(
          <div className={open ? 'accordion open' : 'accordion'}>

              <h1 className="accordion-heading">
                <a onClick={showAccordion}>Words: <span>{array1.length}</span></a>
              </h1>

          <div className="accordion-content">
            <ul className="results">
              {array1.map((word, i) => {
              return (<li className={'result'} key={i}> > {word}</li>);
              })}
            </ul>
          </div>
        </div>
	)
}

export default Accordion;
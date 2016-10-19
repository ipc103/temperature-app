import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default (props) => {

  const average =  arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

  return (
    <div>
      <Sparklines height={120} width={180} data={ props.data } >
      <SparklinesLine color={props.color}/>
      < SparklinesReferenceLine type="avg"/>
      </Sparklines>
      {Math.round( average(props.data) )}
    </div>
  )
};

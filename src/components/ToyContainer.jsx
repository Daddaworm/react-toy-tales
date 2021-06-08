import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  // create a function that maps over toyData and on eah iteration returns a ToyCard component.
  const renderToyCards = () => {
    return props.toyData.map((toy, idx) => {
      return <ToyCard key={idx} toy={toy}/>
    })
  }
  // const toyCards =  props.toyData.map((toy, idx) => {
  //   return <ToyCard />
  // })
  return(
    <div id="toy-collection">
      {renderToyCards()}
    </div>
  );
}

export default ToyContainer;

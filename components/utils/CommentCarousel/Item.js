
import { createRef, useEffect, useState } from 'react'
const Item =  (props) =>{
  const [showCard, setShowCard] = useState(false);
  const card = createRef();

  if (typeof window !== 'undefined') {
    
    const itemObserver = new IntersectionObserver(onItemobserver, {
      rootMargin: '100px 0px',
      threshold: 0.25
    });

    useEffect(() => {
      if (window && 'IntersectionObserver' in window) {
          if (card && card.current) {
            itemObserver.observe(card.current);
          }
      } else {
        setShowCard(true);
      }
    
    }, [card]); 

    function onItemobserver(entries) {
      if (!entries || entries.length <= 0) {
         return;
      }
 
      if (entries[0].isIntersecting) {
        setShowCard(true);
        itemObserver.disconnect();
      } 
    }
  }

  const { entry, width, wa } = props
  return (
    <div className="comments-item bd-green" style={{width}} ref={card}>
      <div className={!wa ? "comments-item-inner" : "comments-item-inner wa"}>
      <div className="w-100 d-flex flex-row justify-start align-items-center mb-1 bd-green">
          {
            !showCard? undefined :
            <img src={entry.picture || '/assets/nouser.svg'}></img>
          }
          <div className="d-flex w-100 flex-column justify-start align-items-start ml-3">
            <span className=" name"> {entry.name} </span>
            <span className=" small "> Aluno  </span>
          </div>
      </div> 

      <div className="text-content bd-red">
        <span className="text"> {entry.text} </span>
      </div> 
    
      </div> 
  </div>
  )
}

export default Item
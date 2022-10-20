import { useEffect, useState, useMemo, useRef } from "react";
import useOnScreen from "../utils/useOnScreen";

const CreationPad = ({ title, windowWidth }) => {
  const creationRef = useRef();
  // const creationRefValue = useOnScreen(creationRef);
  const [rendred, setRendred] = useState(false)
  const [loading, setLoading] = useState(false);


  /* useEffect(() => {
     if (rendred) return;
     if (creationRefValue) {
       setLoading(true);
       setTimeout(() => { setLoading(false) }, 300);
       setRendred(true)
     }
     else {
       setLoading(false);
     }
 
   }, [creationRefValue])*/

  return (
    <div className="creationPad" ref={creationRef}>
      {/*creationRefValue */true && (!loading ? < >
        <img
          className="creationImage"
          alt={`${title} image`}
          src={`/images/${windowWidth > 375 ? `desktop` : `mobile`
            }/${title.replace(/\s/g, "-")}.jpg`}
        />
        <p className="creationPadTitle">{title.toUpperCase()}</p>
      </> : <>loading...</>)
      }
    </div>
  );
};

export default CreationPad;

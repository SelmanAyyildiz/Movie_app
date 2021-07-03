
import "./style.css"

export const Card = ({title, poster}) => { 
    return (
        <div className="card-wrapper"> 
          <img src={poster}/>
          <p>{title}</p>
      
         
        </div>
    )
}

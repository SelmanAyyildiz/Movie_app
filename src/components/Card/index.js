
import "./style.css"

export const Card = ({title, pop, poster}) => { 
    return (
        <div className="card-wrapper" style={{backgroundImage:{poster}}}> 
          <p>{title}</p>
          <p>{pop}</p>
        </div>
    )
}

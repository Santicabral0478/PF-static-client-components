import CoworkCard from "../CoworkCard";
import "./style.css"

export const Coworks = ()=>{
    return(
        <section className="section property" aria-label="property">
        <div className="container">

          <h2 className="h2 section-title">Espacios destacados</h2>

          <p className="section-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet molestias modi id fugit adipisci 
          </p>

          <ul className="property-list">

            <li>
              <CoworkCard/>                
            </li>

            <li>
              <CoworkCard/>
            </li>

          </ul>

        </div>
      </section>
    )
}

export default Coworks;
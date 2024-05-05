import "./style.css"

export const Banner =()=>{
    

    return(
        <section className="section hero" aria-label="hero">
            <div className="container">

              <div className="hero-bg">
                <div className="hero-content">

                  <h1 className="h1 hero-title">
                    El Espacio Ideal.<span className="span"><b>Coworking</b></span> Para tu empresa
                  </h1>

                  <p className="hero-text">
                    ¡Descubre y reserva! Una infinidad de oficinas y espacios de Coworking que se adapten a tu ubicacion
                  </p>

                </div>
              </div>

              <div className="hero-form-wrapper">
                <div className="form-tab">

                  <button className="tab-btn active" data-tab-btn>Libres</button>
                  <button className="tab-btn" data-tab-btn>Reservadas</button>
                  <button className="tab-btn" data-tab-btn>Todo</button>

                </div>

                <form action="" className="hero-form">

                  <div className="input-wrapper">
                    <label className="input-label">Ubicacion</label>

                    <select name="category" id="category" className="dropdown-list">

                      <option value="centro">Centro</option>
                      <option value="norte">Zona norte</option>
                      <option value="sur">Zona Sur</option>
                      <option value="automatico">Automatico</option>

                    </select>
                  </div>

                  <div className="input-wrapper">
                    <label className="input-label">Precio</label>

                    <select name="min-price" id="min-price" className="dropdown-list">

                      <option value="min price">Menor precio</option>
                      <option value="500">Mayor precio</option>
                      <option value="1000">1000</option>
                      <option value="2000">2000</option>
                      <option value="3000">3000</option>
                      <option value="4000">4000</option>
                      <option value="5000">5000</option>
                      <option value="6000">6000</option>

                    </select>
                  </div>

                  <div className="input-wrapper">
                    <label className="input-label">Metros Cuadrados</label>

                    <select name="max-price" id="max-price" className="dropdown-list">

                      <option value="max price">Menor medida</option>
                      <option value="500">Menor medida</option>
                      <option value="1000">100</option>
                      <option value="2000">200</option>
                      <option value="3000">300</option>
                      <option value="4000">400</option>
                      <option value="5000">500</option>
                      <option value="6000">600</option>

                    </select>
                  </div>

                  <button style={{display: "block"}} type="submit" className="btn btn-primary">Buscar</button>

                </form>
              </div>

            </div>
        </section>
    )


}

export default Banner;
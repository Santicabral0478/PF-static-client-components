import "./style.css"

const HomeMain = ()=>{
  return(
    <main>
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





        <section className="section" aria-label="prodmin">
          <div className="container prodmin">

            <div className="prodmin-banner img-holder" style={{width: "600", height: "700"}}>
              <img src="/coco-about.jpg" alt="" />
            </div>

            <div className="prodmin-content">

              <h2 className="h2 section-title">Nuestra Historia y compromiso</h2>

              <p className="section-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus tenetur aliquam molestiae, recusandae aut magnam eveniet, magni dolore eos, suscipit id! Nobis iste, delectus aspernatur debitis molestiae architecto? Aliquid.
              </p>

              <a href="#" className="btn btn-primary">Ver mas</a>

            </div>

          </div>
        </section>




        <section className="section service" aria-label="service">
          <div className="container">

            <h2 className="h2 section-title">Como reservar</h2>

            <p className="section-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eos repellendus necessitatibus deserunt repellendus necessitatibus deserunt 
            </p>

            <ul className="service-list">

              <li>
                <div className="service-card">

                  <div className="card-icon">
                    1
                  </div>

                  <h3 className="h3 card-title">Encuentra Tu espacio ideal</h3>

                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet molestias modi id fugit adipisci 
                  </p>

                </div>
              </li>

              <li>
                <div className="service-card">

                  <div className="card-icon">
                    2
                  </div>

                  <h3 className="h3 card-title">Haz una reserva</h3>

                  <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet molestias modi id fugit adipisci 
                  </p>

                </div>
              </li>

              <li>
                <div className="service-card">

                  <div className="card-icon">
                    i
                  </div>

                  <h3 className="h3 card-title">Coordina el encuentro</h3>

                  <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet molestias modi id fugit adipisci 
                  </p>

                </div>
              </li>

            </ul>

          </div>
        </section>

        {/* <!-- 
          - #PROPERTY
        --> */}

        <section className="section property" aria-label="property">
          <div className="container">

            <h2 className="h2 section-title">Espacios destacados</h2>

            <p className="section-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet molestias modi id fugit adipisci 
            </p>

            <ul className="property-list">

              <li>
                <div className="property-card">

                  <figure className="card-banner img-holder" style={{width: "800", height: "533"}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Coworking_Space_in_Berlin.jpg/640px-Coworking_Space_in_Berlin.jpg" width="800" height="533" loading="lazy"
                      alt="espacio 1" className="img-cover"/>
                  </figure>

                  <button className="card-action-btn" aria-label="add to favourite">
                      i
                  </button>

                  <div className="card-content">

                    <h3 className="h3">
                      <a href="#" className="card-title">Espacio 1</a>
                    </h3>

                    <ul className="card-list">

                      <li className="card-item">
                        <div className="item-icon">
                          i
                        </div>

                        <span className="item-text">8000sqf</span>
                      </li>

                      <li className="card-item">
                        <div className="item-icon">
                          i
                        </div>

                        <span className="item-text">4 Ambientes</span>
                      </li>

                      <li className="card-item">
                        <div className="item-icon">
                          i
                        </div>

                        <span className="item-text">4 Baños</span>
                      </li>

                    </ul>

                    <div className="card-meta">

                      <div>
                        <span className="meta-title">Price</span>

                        <span className="meta-text">$5000</span>
                      </div>

                      <div>
                        <span className="meta-title">Rating</span>

                        <span className="meta-text">

                          <div className="rating-wrapper">
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                          </div>

                          <span>5.0(30)</span>

                        </span>
                      </div>

                    </div>

                  </div>

                </div>
              </li>

              <li>
                <div className="property-card">

                  <figure className="card-banner img-holder" style={{width: "800", height: "533"}}>
                    <img src="https://images.adsttc.com/media/images/5d8d/7813/284d/d19b/1700/000f/newsletter/17sharecuse_edit.jpg?1569552378" width="800" height="533" loading="lazy"
                      alt="espacio 2" className="img-cover"/>
                  </figure>

                  <button className="card-action-btn" aria-label="add to favourite">
                    i
                  </button>

                  <div className="card-content">

                    <h3 className="h3">
                      <a href="#" className="card-title">espacio 2</a>
                    </h3>

                    <ul className="card-list">

                      <li className="card-item">
                        <div className="item-icon">
                          i
                        </div>

                        <span className="item-text">8000sqf</span>
                      </li>

                      <li className="card-item">
                        <div className="item-icon">
                          i
                        </div>

                        <span className="item-text">4 Ambientes</span>
                      </li>

                      <li className="card-item">
                        <div className="item-icon">
                          i
                        </div>

                        <span className="item-text">4 Baños</span>
                      </li>

                    </ul>

                    <div className="card-meta">

                      <div>
                        <span className="meta-title">Price</span>

                        <span className="meta-text">$5000</span>
                      </div>

                      <div>
                        <span className="meta-title">Rating</span>

                        <span className="meta-text">

                          <div className="rating-wrapper">
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                          </div>

                          <span>5.0(30)</span>

                        </span>
                      </div>

                    </div>

                  </div>

                </div>
              </li>

              <li>
                <div className="property-card">

                  <figure className="card-banner img-holder" style={{width: "800", height: "533"}}>
                    <img src="https://www.constructionweekonline.in/cloud/2021/11/17/The-Office-Pass.jpg" width="800" height="533" loading="lazy"
                      alt="espacio 3" className="img-cover"/>
                  </figure>

                  <button className="card-action-btn" aria-label="add to favourite">
                    i
                  </button>

                  <div className="card-content">

                    <h3 className="h3">
                      <a href="#" className="card-title">espacio 3</a>
                    </h3>

                    <ul className="card-list">

                      <li className="card-item">
                        <div className="item-icon">
                          i
                        </div>

                        <span className="item-text">8000sqf</span>
                      </li>

                      <li className="card-item">
                        <div className="item-icon">
                          i
                        </div>

                        <span className="item-text">4 Ambientes</span>
                      </li>

                      <li className="card-item">
                        <div className="item-icon">
                          i
                        </div>

                        <span className="item-text">4 Baños</span>
                      </li>

                    </ul>

                    <div className="card-meta">

                      <div>
                        <span className="meta-title">Price</span>

                        <span className="meta-text">$5000</span>
                      </div>

                      <div>
                        <span className="meta-title">Rating</span>

                        <span className="meta-text">

                          <div className="rating-wrapper">
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                          </div>

                          <span>5.0(30)</span>

                        </span>
                      </div>

                    </div>

                  </div>

                </div>
              </li>

              <li>
                <div className="property-card">

                  <figure className="card-banner img-holder" style={{width: "800", height: "533"}}>
                    <img src="https://unitedco.com.au/wp-content/uploads/DBFF5CDE-07A6-4F40-8929-88760185BE42_1_201_a-scaled.jpeg" width="800" height="533" loading="lazy"
                      alt="espacio 4" className="img-cover"/>
                  </figure>

                  <button className="card-action-btn" aria-label="add to favourite">
                    i
                  </button>

                  <div className="card-content">

                    <h3 className="h3">
                      <a href="#" className="card-title">espacio 4</a>
                    </h3>

                    <ul className="card-list">

                      <li className="card-item">
                        <div className="item-icon">
                          i
                        </div>

                        <span className="item-text">8000sqf</span>
                      </li>

                      <li className="card-item">
                        <div className="item-icon">
                          i
                        </div>

                        <span className="item-text">4 Ambientes</span>
                      </li>

                      <li className="card-item">
                        <div className="item-icon">
                          i
                        </div>

                        <span className="item-text">4 Baños</span>
                      </li>

                    </ul>

                    <div className="card-meta">

                      <div>
                        <span className="meta-title">Price</span>

                        <span className="meta-text">$5000</span>
                      </div>

                      <div>
                        <span className="meta-title">Rating</span>

                        <span className="meta-text">

                          <div className="rating-wrapper">
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                          </div>

                          <span>5.0(30)</span>

                        </span>
                      </div>

                    </div>

                  </div>

                </div>
              </li>

              <li>
                <div className="property-card">

                  <figure className="card-banner img-holder" style={{width: "800", height: "533"}}>
                    <img src="https://assets.oyoroomscdn.com/cmsMedia/large/ff7d4187-e22a-4d97-996d-b307919997db.jpg" width="800" height="533" loading="lazy"
                      alt="espacio 5" className="img-cover"/>
                  </figure>

                  <button className="card-action-btn" aria-label="add to favourite">
                    i
                  </button>

                  <div className="card-content">

                    <h3 className="h3">
                      <a href="#" className="card-title">espacio 5</a>
                    </h3>

                    <ul className="card-list">

                      <li className="card-item">
                        <div className="item-icon">
                          i
                        </div>

                        <span className="item-text">8000sqf</span>
                      </li>

                      <li className="card-item">
                        <div className="item-icon">
                          i
                        </div>

                        <span className="item-text">4 Ambientes</span>
                      </li>

                      <li className="card-item">
                        <div className="item-icon">
                          i
                        </div>

                        <span className="item-text">4 Baños</span>
                      </li>

                    </ul>

                    <div className="card-meta">

                      <div>
                        <span className="meta-title">Price</span>

                        <span className="meta-text">$5000</span>
                      </div>

                      <div>
                        <span className="meta-title">Rating</span>

                        <span className="meta-text">

                          <div className="rating-wrapper">
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                          </div>

                          <span>5.0(30)</span>

                        </span>
                      </div>

                    </div>

                  </div>

                </div>
              </li>

              <li>
                <div className="property-card">

                  <figure className="card-banner img-holder" style={{width: "800", height: "533"}}>
                    <img src="https://cowello.com/wp-content/uploads/2022/08/Designing-your-coworking-space-1-min.jpg" height="533" loading="lazy"
                      alt="espacio 6" className="img-cover"/>
                  </figure>

                  <button className="card-action-btn" aria-label="add to favourite">
                    i
                  </button>

                  <div className="card-content">

                    <h3 className="h3">
                      <a href="#" className="card-title">espacio 6</a>
                    </h3>

                    <ul className="card-list">

                      <li className="card-item">
                          <div className="item-icon">
                              i
                          </div>
                        <span className="item-text">8000sqf</span>
                      </li>

                      <li className="card-item">
                          <div className="item-icon">
                              i
                          </div>
                        <span className="item-text">4 Ambientes</span>
                      </li>

                      <li className="card-item">
                          <div className="item-icon">
                              i
                          </div>
                        <span className="item-text">4 Baños</span>
                      </li>

                    </ul>

                    <div className="card-meta">

                      <div>
                        <span className="meta-title">Price</span>

                        <span className="meta-text">$5000</span>
                      </div>

                      <div>
                        <span className="meta-title">Rating</span>

                        <span className="meta-text">

                          <div className="rating-wrapper">
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                          </div>

                          <span>5.0(30)</span>

                        </span>
                      </div>

                    </div>

                  </div>

                </div>
              </li>

            </ul>

          </div>
        </section>
    </main>
)
}

export default HomeMain; 
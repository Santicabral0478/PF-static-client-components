import { About } from "../About";
import Banner from "../Banner";
import Service from "../Service";
import "./style.css"

const HomeMain = ()=>{

  return(
    <main>
        <Banner/>
        <About/>
        <Service/>

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
        <section className="bottom-cardss">

        </section>
    </main>
)
}

export default HomeMain; 
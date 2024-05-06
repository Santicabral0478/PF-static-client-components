import "../Cowoks/style.css"
export const CoworkCard =()=>{

    return(
        <div className="property-card">
            <figure className="card-banner img-holder" style={{width: "800", height: "533"}}>
                <img src="https://assets.oyoroomscdn.com/cmsMedia/large/ff7d4187-e22a-4d97-996d-b307919997db.jpg" width="800" height="533" loading="lazy"
                alt="espacio 5" className="img-cover"/>
            </figure>
            <button className="card-action-btn" aria-label="add to favourite">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
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
                                <span><svg xmlns="http://www.w3.org/2000/svg" className="rated" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" className="rated" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" className="rated" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" className="rated" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" className="rated" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" className="" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                            </div>
                            <span>5.0(30)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CoworkCard;
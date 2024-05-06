import Image from "next/image";
import "./style.css"

export const Banner =()=>{
    

    return(
        <section className="section hero" aria-label="hero">
            <div className="container">

              <div className="hero-bg">
                <div className="hero-content">
                  <div className="slogan-con">
                  <Image
                    className="logo-slogan"
                    src="/logo-slogan.png"
                    alt="logo" 
                    width={150} 
                    height={150} 
                    style={{filter: "invert(100%) brightness(200%)"}}
                  />

                  <h1 className="h1 hero-title">
                    El Espacio Ideal. <span className="span">Coworking</span> Para tu empresa
                  </h1>

                  </div>

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

                    <div
                        className="h-20 rounded-xl relative group w-full bg-gray-100 overflow-hidden before:absolute before:w-14 before:h-12 before:content[''] before:right-0 before:bg-green-300 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#f7fac8] border border-gray-300 border-solid"
                      >
                        <svg
                          y="0"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0"
                          width="100"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="xMidYMid meet"
                          height="100"
                          className="w-16 h-16 mr-4 absolute right-0 -rotate-45 stroke-gray-700 top-1.5 group-hover:rotate-0 duration-300"
                        >
                          <path
                            stroke-width="4"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            fill="none"
                            d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                            className="w-16 h-16 svg-stroke-primary"
                          ></path>
                        </svg>
                        <select
                          className=" appearance-none hover:placeholder-shown:bg-emerald-500 relative text-gray-600 bg-transparent ring-0 outline-none border border-neutral-500 placeholder-violet-700 font-bold focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                          style={{height: "5rem", fontSize: "17px", paddingLeft: "17px"}}
                        >

                          <option style={{fontSize: "13px"}}>iduchisd</option>
                          <option style={{fontSize: "13px"}}>React</option>
                          <option style={{fontSize: "13px"}}>Vue</option>
                          <option style={{fontSize: "13px"}}>Angular</option>
                          <option style={{fontSize: "13px"}}>Svelte</option>
                        </select>
                      </div>
                  </div>

                  <div className="input-wrapper">
                    <label className="input-label">Ubicacion</label>

                    <div
                        className="h-20 rounded-xl relative group w-full bg-gray-100 overflow-hidden before:absolute before:w-14 before:h-12  before:rotate-90 before:content[''] before:right-0 before:bg-green-300 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#eef9b0] border border-gray-300 border-solid"
                      >
                        <svg
                          y="0"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0"
                          width="100"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="xMidYMid meet"
                          height="100"
                          className="w-16 h-16 mr-4 absolute right-0 -rotate-45 stroke-gray-700 top-1.5 group-hover:rotate-0 duration-300"
                        >
                          <path
                            stroke-width="4"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            fill="none"
                            d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                            className="w-16 h-16 svg-stroke-primary"
                          ></path>
                        </svg>
                        <select
                          className=" appearance-none hover:placeholder-shown:bg-emerald-500 relative text-gray-600 bg-transparent ring-0 outline-none border border-neutral-500 placeholder-violet-700 font-bold focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                          style={{height: "5rem", fontSize: "17px", paddingLeft: "17px"}}
                        >

                          <option style={{fontSize: "13px"}}>iduchisd</option>
                          <option style={{fontSize: "13px"}}>React</option>
                          <option style={{fontSize: "13px"}}>Vue</option>
                          <option style={{fontSize: "13px"}}>Angular</option>
                          <option style={{fontSize: "13px"}}>Svelte</option>
                        </select>
                      </div>
                  </div>

                  <div className="input-wrapper">
                    <label className="input-label">Ubicacion</label>

                    <div
                        className="h-20 rounded-xl relative group w-full bg-gray-100 overflow-hidden before:absolute before:w-14 before:h-12 before:rotate-45 before:content[''] before:right-0 before:bg-yellow-300 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#aeffa3] border border-gray-300 border-solid"
                      >
                        <svg
                          y="0"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0"
                          width="100"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="xMidYMid meet"
                          height="100"
                          className="w-16 h-16 mr-4 absolute right-0 -rotate-45 stroke-gray-700 top-1.5 group-hover:rotate-0 duration-300"
                        >
                          <path
                            stroke-width="4"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            fill="none"
                            d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                            className="w-16 h-16 svg-stroke-primary"
                          ></path>
                        </svg>
                        <select
                          className=" appearance-none hover:placeholder-shown:bg-emerald-500 relative text-gray-600 bg-transparent ring-0 outline-none border border-neutral-500 placeholder-green-700 font-bold focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                          style={{height: "5rem", fontSize: "17px", paddingLeft: "17px"}}
                        >

                          <option style={{fontSize: "13px"}}>iduchisd</option>
                          <option style={{fontSize: "13px"}}>React</option>
                          <option style={{fontSize: "13px"}}>Vue</option>
                          <option style={{fontSize: "13px"}}>Angular</option>
                          <option style={{fontSize: "13px"}}>Svelte</option>
                        </select>
                      </div>
                  </div>


                  <button style={{display: "block"}} type="submit" className="btn btn-primary">Buscar</button>

                </form>
              </div>

            </div>
        </section>
    )


}

export default Banner;
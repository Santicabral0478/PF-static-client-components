import CoworkCard from "@/components/CoworkCard";
import "./style.css"
export const ProfileRoute = () => {

  return(
    <section className="py-8 relative">
        <div className="w-full mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center max-lg:gap-4 justify-between w-full">
            <ul className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12">
                <li className="flex items-center cursor-pointer outline-none group">

                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#11aa03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>

                    <span
                        className="font-normal text-lg leading-8 text-green-700 ml-2 mr-3 transition-all duration-500 group-hover:text-green-600">Finance</span>
                    <button
                        className="flex aspect-square h-6 rounded-full border border-green-700  items-center justify-center font-manrope font-medium text-base text-green-600  transition-all duration-500 group-hover:border-green-600 group-hover:text-green-600">8</button>

                </li>

                <li className="flex items-center cursor-pointer outline-none group">

                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>

                    <span
                        className="font-normal text-lg leading-8 text-black pl-2 pr-3 transition-all duration-500 group-hover:text-green-600">Management</span>
                    <span
                        className="w-6 h-6 rounded-full border border-gray-900 flex items-center justify-center font-manrope font-medium text-base text-gray-900 transition-all duration-500 group-hover:border-green-600 group-hover:text-green-600">3</span>
                </li>

                <li className="flex items-center cursor-pointer outline-none group">

                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    
                    <span
                        className="font-normal text-lg leading-8 text-black pl-2 pr-3 transition-all duration-500 group-hover:text-green-600">Today’s deal</span>
                    <span
                        className="w-6 h-6 rounded-full border border-gray-900 flex items-center justify-center font-manrope font-medium text-base text-gray-900 transition-all duration-500 group-hover:border-green-600 group-hover:text-green-600">1</span>
                </li>
            </ul>
            </div>
            <svg className="my-2 w-full" xmlns="http://www.w3.org/2000/svg" width="1216" height="2" viewBox="0 0 1216 2"
                fill="none">
                <path d="M0 1H1216" stroke="#babec4" />
            </svg>
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
                    <div className="box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
                        <h6 className="font-medium text-base leading-7 text-black mb-5">Price</h6>
                        <div className="flex items-center mb-5 gap-1">
                            <div className="relative w-full">
                                <input
                                    placeholder="Min"
                                    className="bg-[#d0f5b7] border-1 border-[#47644b] rounded-lg text-gray-700 px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
                                    type="text"
                                />
                            </div>
                            <p className="px-1 font-normal text-sm leading-6 text-gray-600">to</p>
                            <div className="relative w-full">
                                <input
                                    placeholder="Max"
                                    className="bg-[#d0f5b7] border-1 border-[#47644b] rounded-lg text-gray-700 px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
                                    type="text"
                                />
                            </div>
                        </div>

                        <label className="block mb-2 text-sm font-medium text-gray-600 w-full">Filtros</label>
                        <div className="relative w-full mb-8">
                            {/* Start Checkbox */}
                            <div className="check-container">
                                <div className="checkbox-wrapper-33">
                                <label className="checkbox">
                                  <input className="checkbox__trigger visuallyhidden" type="checkbox" />
                                  <span className="checkbox__symbol">
                                    <svg
                                      aria-hidden="true"
                                      className="icon-checkbox"
                                      width="28px"
                                      height="28px"
                                      viewBox="0 0 28 28"
                                      version="1"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                  </span>
                                  <p className="checkbox__textwrapper">Checkbox</p>
                                </label>
                                </div>
                                <div className="checkbox-wrapper-33">
                                <label className="checkbox">
                                  <input className="checkbox__trigger visuallyhidden" type="checkbox" />
                                  <span className="checkbox__symbol">
                                    <svg
                                      aria-hidden="true"
                                      className="icon-checkbox"
                                      width="28px"
                                      height="28px"
                                      viewBox="0 0 28 28"
                                      version="1"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                  </span>
                                  <p className="checkbox__textwrapper">Checkbox</p>
                                </label>
                                </div>
                                <div className="checkbox-wrapper-33">
                                <label className="checkbox">
                                  <input className="checkbox__trigger visuallyhidden" type="checkbox" />
                                  <span className="checkbox__symbol">
                                    <svg
                                      aria-hidden="true"
                                      className="icon-checkbox"
                                      width="28px"
                                      height="28px"
                                      viewBox="0 0 28 28"
                                      version="1"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                  </span>
                                  <p className="checkbox__textwrapper">Checkbox</p>
                                </label>
                                </div>
                            </div>
                            {/* End Checkbox */}
                        </div>
                        <button
                            className="w-full py-2.5 flex items-center justify-center gap-2 rounded-lg bg-green-600 text-white font-semibold text-lg shadow-sm shadow-transparent transition-all duration-500 hover:bg-green-700 hover:shadow-green-200  ">
                            Search
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.4987 13.9997L13.1654 12.6663M13.832 7.33301C13.832 10.6467 11.1457 13.333 7.83203 13.333C4.51832 13.333 1.83203 10.6467 1.83203 7.33301C1.83203 4.0193 4.51832 1.33301 7.83203 1.33301C11.1457 1.33301 13.832 4.0193 13.832 7.33301Z"
                                    stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-7 box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
                        <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
                            <p className="font-medium text-base leading-7 text-black ">Filtrar mas...</p>
                            <p
                                className="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-green-600">
                                RESET</p>
                        </div>


                        <div className="w-full mb-7">
                            <div className='accordion-group grid grid-cols-1 gap-5 sm:gap-9'
                                data-accordion="default-accordion">
                                <div className='accordion '
                                    id='category-heading-one'>
                                    <button
                                        className='accordion-toggle group accordion-active:text-green-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-green-600 active:text-green-600'
                                        aria-controls='category-collapse-one'>
                                        <h5 className="font-medium text-sm text-gray-900">
                                            Algunos filtros
                                        </h5>
                                        <svg className='text-gray-900 transition duration-500 group-hover:text-green-600 accordion-active:text-green-600 accordion-active:rotate-180'
                                            width='22' height='22' viewBox='0 0 22 22' fill='none'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25'
                                                stroke='currentColor' stroke-width='1.6' stroke-linecap='round'
                                                stroke-linejoin='round'></path>
                                        </svg>

                                    </button>
                                    <div id='category-collapse-one'
                                        className='accordion-content w-full px-0 overflow-hidden pr-4 max-h-0 '
                                        aria-labelledby='category-heading-one'>
                                        
                                        <div className="box flex flex-col gap-2 mt-5">

                                            <div className="flex items-center mb-2">
                                                <input id="checkbox-option-1" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-green-100 hover:bg-green-600 checked:bg-no-repeat checked:bg-center checked:border-green-100 checked:bg-green-600 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                                <label className="ml-1 font-normal text-xs cursor-pointer  text-gray-600">option-1</label>green
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <input id="checkbox-option-2" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-green-100 hover:bg-green-600 checked:bg-no-repeat checked:bg-center checked:border-green-600 checked:bg-green-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                                    <label className="ml-1 font-normal text-xs cursor-pointer  text-gray-600">option-2</label>
                                                    </div>
                                                    <div className="flex items-center mb-2">
                                                        <input id="checkbox-option-3" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-green-600 hover:bg-green-600 checked:bg-no-repeat checked:bg-center checked:border-green-600 checked:bg-green-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                                        <label className="ml-1 font-normal text-xs cursor-pointer  text-gray-600">option-3</label>
                                                        </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <label className="font-medium text-sm leading-6 text-gray-600 mb-1">Mas filtros</label>
                        <div className="relative w-full mb-7">
                            {/* Start Checkbox */}
                            <div className="check-container">
                            <div className="checkbox-wrapper-33">
                                <label className="checkbox">
                                  <input className="checkbox__trigger visuallyhidden" type="checkbox" />
                                  <span className="checkbox__symbol">
                                    <svg
                                      aria-hidden="true"
                                      className="icon-checkbox"
                                      width="28px"
                                      height="28px"
                                      viewBox="0 0 28 28"
                                      version="1"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                  </span>
                                  <p className="checkbox__textwrapper">Checkbox</p>
                                </label>
                            </div>
                            <div className="checkbox-wrapper-33">
                                <label className="checkbox">
                                  <input className="checkbox__trigger visuallyhidden" type="checkbox" />
                                  <span className="checkbox__symbol">
                                    <svg
                                      aria-hidden="true"
                                      className="icon-checkbox"
                                      width="28px"
                                      height="28px"
                                      viewBox="0 0 28 28"
                                      version="1"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                  </span>
                                  <p className="checkbox__textwrapper">Checkbox</p>
                                </label>
                            </div>
                            <div className="checkbox-wrapper-33">
                                <label className="checkbox">
                                  <input className="checkbox__trigger visuallyhidden" type="checkbox" />
                                  <span className="checkbox__symbol">
                                    <svg
                                      aria-hidden="true"
                                      className="icon-checkbox"
                                      width="28px"
                                      height="28px"
                                      viewBox="0 0 28 28"
                                      version="1"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                  </span>
                                  <p className="checkbox__textwrapper">Checkbox</p>
                                </label>
                            </div>
                            </div>
                            {/* End Checkbox */}

                        </div>
                        <p className="font-medium text-sm leading-6 text-black mb-3">Filtrar por puntuacion</p>
                            {/* Start Checkbox */}
                            <div className="check-container">
                                <div className="checkbox-wrapper-33">
                                <label className="checkbox">
                                  <input className="checkbox__trigger visuallyhidden" type="checkbox" />
                                  <span className="checkbox__symbol">
                                    <svg
                                      aria-hidden="true"
                                      className="icon-checkbox"
                                      width="28px"
                                      height="28px"
                                      viewBox="0 0 28 28"
                                      version="1"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                  </span>
                                  <span className="meta-text">
                                    <div className="rating-wrapper">
                                        <span><svg  className="rated" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg  className="rated" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg  className="rated" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg  className="rated" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg  className="" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                    </div>
                                    <span className="raing-text" >5.0(30)</span>
                                </span>
                                </label>
                                </div>
                                <div className="checkbox-wrapper-33">
                                <label className="checkbox">
                                  <input className="checkbox__trigger visuallyhidden" type="checkbox" />
                                  <span className="checkbox__symbol">
                                    <svg
                                      aria-hidden="true"
                                      className="icon-checkbox"
                                      width="28px"
                                      height="28px"
                                      viewBox="0 0 28 28"
                                      version="1"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                  </span>
                                  <span className="meta-text">
                                    <div className="rating-wrapper">
                                        <span><svg  className="rated" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg  className="rated" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg  className="rated" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg  className="" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg  className="" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                    </div>
                                    <span className="raing-text" >5.0(30)</span>
                                </span>
                                </label>
                                </div>
                                <div className="checkbox-wrapper-33">
                                <label className="checkbox">
                                  <input className="checkbox__trigger visuallyhidden" type="checkbox" />
                                  <span className="checkbox__symbol">
                                    <svg
                                      aria-hidden="true"
                                      className="icon-checkbox"
                                      width="28px"
                                      height="28px"
                                      viewBox="0 0 28 28"
                                      version="1"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                  </span>
                                  <span className="meta-text">
                                    <div className="rating-wrapper">
                                        <span><svg  className="rated" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg  className="rated" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg  className="" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg  className="" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg  className="" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                    </div>
                                    <span className="raing-text" >5.0(30)</span>
                                </span>
                                </label>
                                </div>
                                <div className="checkbox-wrapper-33">
                                <label className="checkbox">
                                  <input className="checkbox__trigger visuallyhidden" type="checkbox" />
                                  <span className="checkbox__symbol">
                                    <svg
                                      aria-hidden="true"
                                      className="icon-checkbox"
                                      width="28px"
                                      height="28px"
                                      viewBox="0 0 28 28"
                                      version="1"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                  </span>
                                  <span className="meta-text">
                                    <div className="rating-wrapper">
                                        <span><svg  className="rated" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg  className="" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg  className="" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg  className="" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg  className="" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                    </div>
                                    <span className="raing-text" >5.0(30)</span>
                                </span>
                                </label>
                                </div>
                            </div>

                            {/* End Checkbox */}
                    </div>
                </div>
                <div className="col-span-12 md:col-span-9">
                    <div className="container-coworks">
                        <ul className="cowork-list">
                          <li>
                              <CoworkCard/>
                          </li>
                          <li>
                              <CoworkCard/>     
                          </li>
                          <li>
                              <CoworkCard/>     
                          </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
                                        
  )
}

export default ProfileRoute;
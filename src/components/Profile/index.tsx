export const Profile = ()=>{
    return(
        <main>
            

        <ul className="insights-us">
            <li>
                <div className='img-cont'></div>
                <span className="info">
                    <h3>
                        Mariana C. Smulski
                    </h3>
                    <p>Director general</p>
                </span>
            </li>
        </ul>

        <div className="bottom-data">
            <div className="orders">
                <div className="header">
                    <i className="fa-solid fa-clock"></i>
                    <h3>Recientes</h3>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Hora</th>
                            <th>Piso</th>
                            <th>Quirofano</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>10:30 pm</p>
                            </td>
                            <td>3</td>
                            <td><span className="status completed">Q2</span></td>
                        </tr>
                        <tr>
                            <td>
                                <p>03:14 am</p>
                            </td>
                            <td>1</td>
                            <td><span className="status process">Q1</span></td>
                        </tr>
                        <tr>
                            <td>
                                <p>07:15 am</p>
                            </td>
                            <td>1</td>
                            <td><span className="status process">Q1</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="infoUsuario">
                <div className="header">
                    <i className='bx bx-note'></i>
                    <h3>Informacion</h3>
                    <i className="fa-solid fa-download"></i>
                </div>
            </div>


        </div>

    </main>
    )  
}

export default Profile;
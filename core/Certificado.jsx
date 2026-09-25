function Certificado () {
    return (
        <div className="certificado">
           <h2>certificado en:</h2>
            <table>
                <tr>
                    <td>Entry_level python </td>
                    <td>Unity Essentials</td>
                </tr>
                <tr>
                    <td><img src={imagen/images.jpg} className="certificado-img" alt="python" /></td>
                    <td><img src={imagen/unity_ess.png} className="certificado-img" alt="unity" /></td>
                </tr>
            </table>
        </div>
    );

}

export default Certificado;
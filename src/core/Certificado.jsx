import pythonCert from '../assets/certificado-python.jpg';
import unityCert from '../assets/certificado-unity.png';

function Certificado () {
    return (
        <div className="certificado">
           <h2>certificado en:</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Entry_level python </td>
                        <td>Unity Essentials</td>
                    </tr>
                    <tr>
                        <td><img src={pythonCert} className="certificado-img" alt="python" /></td>
                        <td><img src={unityCert} className="certificado-img" alt="unity" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default Certificado;
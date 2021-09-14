import { useState } from "react";


// Recordar hacer la alerta mas flexible para poder colocar el nombre que uno quiera
const Alerta = ({ mostrar, orden }) => {

    const [show, setShow] = useState(mostrar);

    if (show) {

        return (<div className="alert alert-primary alert-dismissible my-4" role="alert" id="liveAlert">
            <strong>Felicidades!</strong> Se ha registrado la compra bajo el código {orden}
            <button type="button" onClick={() => setShow(false)} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

        </div>
        )
    } else {
        return null

    }

}

export default Alerta;
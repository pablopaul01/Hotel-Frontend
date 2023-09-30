import Accordion from 'react-bootstrap/Accordion';

function AccordionRoom() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Servicios Incluidos</Accordion.Header>
                <Accordion.Body>
                    Las comodidades incluyen estacionamiento limitado gratis, venta de entradas, centro de negocios y zona de picnic. Los huéspedes también podrán disfrutar de jardín y tv en zonas comunes. Por un cargo, la propiedad cuenta con servicio de traslado al aeropuerto, servicio de guarda-equipaje y servicio de lavandería.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Servicios Opcionales</Accordion.Header>
                <Accordion.Body>
                    El bar cafetería Barlovento del Cambria sirve aperitivos. Todos los días se sirve un desayuno buffet que incluye fruta fresca, zumos naturales y pasteles.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AccordionRoom;
import Accordion from 'react-bootstrap/Accordion';

function AccordionRoom({ category }) {
    return (
        <Accordion defaultActiveKey="0" >
            <Accordion.Item eventKey="0" >
                <Accordion.Header>Características de la habitación</Accordion.Header>
                <Accordion.Body>
                    {category.data.descripcion}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Servicios Opcionales</Accordion.Header>
                <Accordion.Body>
                    Jacuzzi Privado: Sumérjase en la indulgencia con un jacuzzi privado en su suite. Relájese en la intimidad de su propio espacio y disfrute de un baño de burbujas en un entorno lujoso.
                    <hr />
                    Mayordomo Personal: Para una atención aún más exclusiva, nuestro servicio de mayordomo personal está a su disposición las 24 horas del día. Desde desempacar sus maletas hasta organizar cenas románticas en la habitación, su mayordomo se encargará de todas sus necesidades con un toque de distinción.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AccordionRoom;
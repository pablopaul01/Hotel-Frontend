import Carousel from 'react-bootstrap/Carousel';
import "./rooms.css"

const RoomCarrousel = ({ room }) => {

    const { data } = room;

    return (
        <>
            {
                data.length !== 0 ?
                    (
                        <Carousel slide={false}>
                            {
                                data.imagen.map((img) => (
                                    <Carousel.Item key={img.id}>
                                        <div>
                                            <img src={img.img} className="d-block w-100" alt={img.id} />
                                        </div>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    )
                    :
                    (
                        <h1>Habitación no encontrada</h1>
                    )
            }

        </>
    );
}

export default RoomCarrousel;
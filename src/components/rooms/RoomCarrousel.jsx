import Carousel from 'react-bootstrap/Carousel';
import "./rooms.css"

const RoomCarrousel = ({ category }) => {



    return (
        <>
            {
                category.loading ?
                    (
                        <h1>Habitación no encontrada</h1>
                    )
                    :
                    (
                        <Carousel slide={false}>
                            {
                                category.data.imagenes?.map((imagen) => (
                                    <Carousel.Item key={imagen._id}>
                                        <div>
                                            <img src={imagen.url} className="d-block w-100" alt={imagen._id} />
                                        </div>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>

                    )
            }

        </>
    );
}

export default RoomCarrousel;
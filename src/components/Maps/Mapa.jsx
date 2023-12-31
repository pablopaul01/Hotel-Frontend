import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({text}) => <div>{text}</div>

const Mapa = () => {
  const defaultProps = {
    center: {
      lat: -26.835982489459123, 
      lng: -65.20719572206849,
    },
    zoom: 15,
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Mapa;

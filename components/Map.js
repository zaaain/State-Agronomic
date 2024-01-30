"use client";
import {useState} from "react";
import MapGl, { Marker, NavigationControl } from "react-map-gl";
import maplibreGl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import Image from "next/image";

const Map = ({ coordinates }) => {

    const [selectedMarker, setSelectedMarker] = useState(null);

    const handleMarkerClick = (marker) => {
        console.log("marker", marker)
        setSelectedMarker(marker);
      };

  return (
    <div className="w-full h-screen bg-blue-200">
      <MapGl
        antialias
        mapLib={maplibreGl}
        style={{
          width: "100%",
          height: "100%",
          //   position: "relative",
          //   borderRadius: "4px",
        }}
        mapStyle="https://demotiles.maplibre.org/style.json"
        initialViewState={{
          latitude: coordinates[0].lat,
          longitude: coordinates[0].lng,
          zoom: 5,
        }}
      >
        {coordinates.map((coord, index) => (
          <Marker
            key={index}
            latitude={coord.lat}
            longitude={coord.lng}
            offsetLeft={-20}
            offsetTop={-10}
            color="#668968"
            // style={{position:"relative"}}
            onClick={() => handleMarkerClick(coord)}
          ></Marker>
        ))}

   {selectedMarker && (
          <div className="z-50 rounded-2xl bg-white shadow-dashboard absolute  bottom-0 left-[50%]   p-2"
        //   style={{
        //     left: "50%",
        //     transform: "translateX(-50%)",
        // }}
          >
            <Image src={selectedMarker.img.default} className="w-[280px] h-[150px] rounded-2xl"/>
            <p className="mt-2 text-[15px] ">{selectedMarker.city}</p>
            <p className="text-[15px] ">Latitude: {selectedMarker.lat}</p>
            <p className="text-[15px] ">Longitude: {selectedMarker.lng}</p>
          </div>
        )}
       
      </MapGl>
      
    </div>
  );
};

export default Map;

// import MapGl, { Layer, Marker, NavigationControl, Source } from 'react-map-gl'
// import maplibreGl from 'maplibre-gl'
// import 'maplibre-gl/dist/maplibre-gl.css'

// export default ({lat, lng}) => {
//     const saturl = 'https://3-aerial-maps.eos.com/{z}/{x}/{y}/256/jpg?apiKey=vFdpBKVUQzxEEpXgepekV0isePWTcOI8vYFp86GL73o'
//     return (
//         <MapGl
//             antialias
//             mapLib={maplibreGl}
//             style={{ width: '100%', height: '100%', position: 'relative', borderRadius: '4px' }}
//             mapStyle="https://demotiles.maplibre.org/style.json"
//             initialViewState={{
//                 latitude: lat,
//                 longitude: lng,
//                 zoom: 5,
//             }}
//         >
//             <Source type="raster" id="satellite" tiles={[saturl]} tileSize={256}>
//                 <Layer type="raster" id="satellite" source="satellite" />
//             </Source>
//             <NavigationControl />
//             <Marker
//                 latitude={lat}
//                 longitude={lng}
//                 offsetLeft={-20}
//                 offsetTop={-10}
//                 color="#cc9441"
//             ></Marker>
//         </MapGl>
//     )
// }

{
  /* <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyCogZPqmrKCXdjhCmBa-SIU5byVniGt7kI"}}
        defaultCenter={coordinates}
        center={coordinates}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={()=>{}}
        onChildClick={()=>{}}
        // className="w-[400px] h-[400px]"
        style={{width:"300px", height:"400px"}}
        > */
}

{
  /* </GoogleMapReact> */
}

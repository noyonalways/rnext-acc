import mapImage from "@/assets/map.png";
import { useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    console.log("zooming...");
    mapRef.current.setZoomLevel(2);
  }, []);

  return (
    <div>
      <div>
        <img ref={mapRef} src={mapImage} alt="World Map" width={400} />
      </div>
    </div>
  );
}

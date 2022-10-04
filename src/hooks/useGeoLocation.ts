import { useEffect, useState } from "react";

export const useGeoLocation = () => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const array = [];
      array.push(position.coords.latitude);
      array.push(position.coords.longitude);
      const result = array.join(",");
      setLocation(result);
    });
  }, []);
  return { location };
};

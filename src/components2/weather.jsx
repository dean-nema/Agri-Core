import ReactWeather, { useOpenWeather } from 'react-open-weather';
import {
    setKey,
    setDefaults,
    setLanguage,
    setRegion,
    fromAddress,
    fromLatLng,
    fromPlaceId,
    setLocationType,
    geocode,
    RequestType,
  } from "react-geocode";

export default function WeatherCOMP(){
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '436903003014090c2f6d1c142b34508d',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  setDefaults({
    key: "", // Your API key here.
    language: "en", // Default language for responses.
    region: "es", // Default region for responses.
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};
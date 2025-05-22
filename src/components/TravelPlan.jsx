import { initialTravelPlan } from "@/data/places";
import { useState } from "react";

function PlaceTree({ place }) {
  const childPlaces = place.childPlaces;
  return (
    <li>
      {place.title}
      {childPlaces.length > 0 && (
        <ol className="ml-3 list-inside list-decimal">
          {childPlaces.map((place) => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </ol>
      )}
    </li>
  );
}

const TravelPlan = () => {
  const [plan, setPlan] = useState(initialTravelPlan);
  const planets = plan.childPlaces;

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Places to visit</h1>
      <ol className="list-inside list-decimal">
        {planets.map((place) => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
    </div>
  );
};

export default TravelPlan;

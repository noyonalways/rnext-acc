import { initialTravelPlanNormalized } from "@/data/places-normalized.js";
import { useState } from "react";

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlanNormalized);

  function handleComplete(parentId, childId) {
    const parent = plan[parentId];
    // Create a new version of the parent place
    // that doesn't include this child ID.
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    // Update the root state object...
    setPlan({
      ...plan,
      // ...so that it has the updated parent.
      [parentId]: nextParent,
    });
  }

  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold text-gray-800">Places to visit</h2>
      <ol className="space-y-4 rounded-lg bg-gray-50 p-6 shadow-sm">
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}

function PlaceTree({ id, parentId, placesById, onComplete }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li className="list-inside list-decimal rounded-md bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <span className="text-lg font-medium text-gray-700">{place.title}</span>
      <button
        className="ml-3 rounded-full bg-green-500 px-4 py-1.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-green-600"
        onClick={() => {
          onComplete(parentId, id);
        }}
      >
        Complete
      </button>
      {childIds.length > 0 && (
        <ol className="mt-3 space-y-2 border-l-2 border-gray-200 pl-6">
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}

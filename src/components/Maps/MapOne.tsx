"use client"; // Ensure this is a client component
import jsVectorMap from "jsvectormap";
import React, { useEffect, useRef } from "react";
import "../../js/us-aea-en";

const MapOne: React.FC = () => {
  // Create a ref to store the map instance
  const vectorMapRef = useRef<typeof jsVectorMap | null>(null);
  const mapElementRef = useRef<HTMLDivElement | null>(null); // Ref for map container

  useEffect(() => {
    const mapElement = document.getElementById("mapOne");

    if (!mapElement) {
      console.error("Map element not found");
      return;
    }

    // Initialize the map and store it in the ref
    vectorMapRef.current = new jsVectorMap({
      selector: "#mapOne",
      map: "us_aea_en",
      zoomButtons: true,
      regionStyle: {
        initial: {
          fill: "#C8D0D8",
        },
        hover: {
          fillOpacity: 1,
          fill: "#3056D3",
        },
      },
      regionLabelStyle: {
        initial: {
          fontFamily: "Satoshi",
          fontWeight: "semibold",
          fill: "#fff",
        },
        hover: {
          cursor: "pointer",
        },
      },
      labels: {
        regions: {
          render(code: string) {
            return code.split("-")[1];
          },
        },
      },
    });

    // Cleanup function to destroy the map instance
    return () => {
      if (vectorMapRef.current) {
        // Delay the destruction of the map to allow DOM updates
        requestAnimationFrame(() => {
          if (mapElement && mapElement.parentNode) {
            vectorMapRef.current.destroy();
          } else {
            console.error("Map element not found during cleanup");
          }
        });
      } else {
        console.error("Vector map instance not found during cleanup");
      }
    };
  }, []);

  return (
    <div className="col-span-12 rounded-[10px] bg-white p-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
      <h4 className="mb-7 text-body-2xlg font-bold text-dark dark:text-white">
        Region labels
      </h4>
      <div className="h-[422px]">
        <div id="mapOne" className="mapOne map-btn" ref={mapElementRef}></div>
      </div>
    </div>
  );
};

export default MapOne;

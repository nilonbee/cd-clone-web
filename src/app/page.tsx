// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import React from "react";

// export default async function Home() {
//   const router = useRouter();
//   const request = await fetch("https://ipinfo.io/json?token=ef23007cda81cb");
//   const jsonResponse = await request.json();

//   console.log(jsonResponse.ip, jsonResponse.country);

//   useEffect(() => {
//     if (router) {
//       router.push(`/${jsonResponse.country}`); // Redirect to Sri Lanka by default
//     }
//   }, [router]);

//   return <></>;
// }
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import fetchLocation from "@/features/ipInfo";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const country = await fetchLocation({
          url: `https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IP_INFO_TOKEN}`,
        });
        console.log(country);
        if (router) {
          router.push(`/${country}`);
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        // Handle errors appropriately
      }
    };

    fetchData();
  }, [router]);

  return <></>;
};

export default Home;

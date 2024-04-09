"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import fetchLocation from "@/utils/ipInfo";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const country = await fetchLocation({
          url: `https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IP_INFO_TOKEN}`,
        });
        if (router) {
          localStorage.setItem("country", country);
          router.push(`/${country.toLowerCase()}`);
        } else {
          console.error("Router is not defined, redirecting to /LK");
          // router?.push("/LK");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        // router?.push("/LK");
      }
    };

    fetchData();
  }, [router]);

  return <></>;
};

export default Home;

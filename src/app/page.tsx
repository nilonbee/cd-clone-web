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
          router.push(`/${country}`);
        } else {
          console.error("Router is not defined, redirecting to /LK");
          // router.push("/LK");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchData();
  }, [router]);

  return <></>;
};

export default Home;

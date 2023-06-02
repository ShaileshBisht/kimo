import HeroBanner from "@/component/HeroBanner";
import axios from "axios";
import React, { useEffect } from "react";
import CatergorySection from "@/component/CatergorySection";
import Footer from "@/component/Footer";

const ActivityTitle = ({ activity }) => {
  useEffect(() => {
    console.log("activity :>> ", activity);
  }, [activity]);

  return (
    <div>
      <HeroBanner title={activity.name} imgScr={activity.image} disc={activity.description} />
      <CatergorySection categories={activity.activities} stopClickFlow={true} />
      <Footer />
    </div>
  );
};

export default ActivityTitle;

// This function tells Next.js which dynamic routes should be pre-rendered
export async function getStaticPaths() {
  // Fetch the data from an API or any other data source
  // const response = await fetch('https://api.example.com/posts');
  let posts;

  await axios
    .get(`https://web-dev.dev.kimo.ai/v1/highlights`)
    .then(async (response) => {
      posts = response.data;
    })
    .catch((error) => {
      posts = ["Error"];
      console.log("Error Highlights  :/paths", { ...error });
    });

  // Generate an array of paths based on the data
  const paths = posts.map((post) => ({
    params: { slug: post.title },
  }));

  // Return the paths to Next.js
  // The paths array should contain objects with the "params" key
  // Each object represents a dynamic route that will be pre-rendered
  return { paths, fallback: true };
  // return {
  //   paths,
  //   fallback: false, // Set to "false" to return a 404 if the path is not found
  // };
}

export async function getStaticProps({ params }) {
  let activity;

  const { slug } = params;
  // Fetch the data for the specific dynamic route
  await axios
    .get(`https://web-dev.dev.kimo.ai/v1/activities/${slug}`)
    .then(async (response) => {
      activity = response.data;
    })
    .catch((error) => {
      activity = { ...error };
      console.log("params :>> ", params);
      console.log("Error Highlights  :/activities/[activityId]", { ...error });
    });

  console.log("activity :>> ", activity);

  // Return the data as props
  return {
    props: {
      activity,
    },
  };
}

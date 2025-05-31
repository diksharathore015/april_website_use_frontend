import AboutUs from "@/components/aboutus/AboutUs";
import Head from "next/head";
import React from "react";

export default function page() {
  return (
    <div className="md:mt-24">
      <Head>
        <title>About Us - Roal Defence Academy</title>
        <meta
          name="description"
          content="Roal Defence Academy offers top-notch sainik school coaching, military school coaching, RMS preparation, hostel coaching, and the best coaching for sainik school near you."
        />
        <meta
          name="keywords"
          content="sainik school coaching, military school coaching, RMS, Rashtriya Military School preparation, hostel coaching, best coaching sainik school near me"
        />
      </Head>
      <AboutUs />
    </div>
  );
}

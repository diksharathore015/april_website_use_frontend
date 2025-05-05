/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { get } from "@/app/actions/actions";
import { Constants } from "@/app/constants/urls";
import CourseDetail from "@/components/courses/CourseDetail";
import Breadcrumbs from "@/components/home/Breadcrumbs";
import React from "react";
export async function generateMetadata({ params, searchParams }: any) {
  const seo = await get(Constants.seo);
  // console.log("seo123", seo);
  const slug = params.slug;
  const param = await params.slug[0];

  const location = slug[1] || "";
  const courseData = await get(`${Constants.course}/?slug=${param}`);
  const findMatchingState = () => {
    const matchedState = courseData[0]?.state?.find(
      (item: any) =>
        decodeURIComponent(item?.state_name.toLowerCase()).replace(" ", "") ===
        location
    );
    if (matchedState)
      return {
        type: "state",
        matchedItem: matchedState,
        title: matchedState.state_name,
      };
    const matchedCity =
      courseData &&
      courseData[0]?.city?.find(
        (item: any) =>
          decodeURIComponent(item?.city_name.toLowerCase()).replace(" ", "") ===
          location
      );
    // if (matchedCity) return { type: "city", matchedItem: matchedCity };
    if (matchedCity) {
      // Find the state that corresponds to this city.
      // It is assumed that matchedCity.state holds the state ID.
      const correspondingState = courseData[0]?.state.find(
        (state: any) => state.id === matchedCity.state
      );

      return {
        type: "city",
        matchedItem: matchedCity,
        title: `${matchedCity.city_name} ${
          correspondingState ? `, ${correspondingState.state_name}` : null
        }  `,
        stateName: correspondingState ? correspondingState.state_name : null,
      };
    }

    const matchedLocality: any = courseData[0]?.locality.find(
      (item: any) =>
        decodeURIComponent(item?.locality_name.toLowerCase())
          .replace(" ", "")
          .replace("%20", "") ===
        decodeURIComponent(
          location.toLowerCase().replace(" ", "").replace("%20", "")
        )
    );

    if (matchedLocality) {
      // Assume each locality object has a "city" property containing the city ID
      const correspondingCity = courseData.city.find(
        (city: any) => city.id == matchedLocality.city
      );
      // console.log("correspondingCity", correspondingCity);
      // Then find the state corresponding to the found city
      const correspondingState = correspondingCity
        ? courseData[0]?.states?.find(
            (state: any) => state.id === correspondingCity.id
          )
        : null;

      // console.log("correspondingstate", correspondingCity);
      return {
        type: "locality",
        matchedItem: matchedLocality,
        cityName: correspondingCity ? correspondingCity.title : null,
        stateName: correspondingState ? correspondingState.title : "",
        title: `${matchedLocality.title} ${
          correspondingCity ? `, ${correspondingCity.city_name}` : null
        } ${correspondingState ? `, ${correspondingState.state_name}` : ""}`,
      };
    }

    return {
      type: "none",

      title: "india",
    }; // Return null if no match is found
  };

  const locationdata: any = findMatchingState();
  console.log("testlocation", locationdata);
  console.log("courseseo", courseData);

  return {
    title: ` ${courseData[0]?.title.replaceAll(
      /(?:\{location\}|\{Location\})/g,
      locationdata.title || `india`
    )}`,
    description: courseData[0]?.description.replaceAll(
      /(?:\{location\}|\{Location\})/g,
      locationdata.title || `india`
    ),
    keywords: courseData[0]?.meta_keywords.replaceAll(
      /(?:\{location\}|\{Location\})/g,
      locationdata.title || `india`
    ),
    charset: "utf-8",
    logo: {
      "@type": "ImageObject",
      url: courseData[0]?.slider_images[0], // Replace with the correct logo URL
      width: 512, // Optional, provide actual dimensions if available
      height: 512, // Optional, provide actual dimensions if available
    },

    openGraph: {
      title: courseData[0]?.title.replaceAll(
        /(?:\{location\}|\{Location\})/g,
        locationdata.title || `india`
      ),
      description: courseData[0]?.description.replaceAll(
        /(?:\{location\}|\{Location\})/g,
        "india"
      ),
      url: "https://www.royaldefenceacademy.com/",
      siteName: `Home- ${courseData[0]?.title.replaceAll(
        /(?:\{location\}|\{Location\})/g,
        locationdata.title || `india`
      )}`,
      type: "website", // or 'article', 'product', etc.
      images: [
        {
          url: courseData[0]?.slider_images[0],
          width: 1200,
          height: 630,
          alt:
            courseData[0]?.title.replaceAll(
              /(?:\{location\}|\{Location\})/g,
              locationdata.title || `india`
            ) || "Default OG Image Alt",
        },
      ],
    },

    twitter: {
      card: "summary large card",
      title: courseData[0]?.title.replaceAll(
        /(?:\{location\}|\{Location\})/g,
        locationdata.title || `india`
      ),
      description:
        courseData[0]?.description.replaceAll(
          /(?:\{location\}|\{Location\})/g,
          locationdata.title || `india`
        ) || "Default OG Image Alt",
      images: [courseData[0]?.slider_images[0]],
    },

    viewport: "width=device-width, initial-scale=1.0",
    robots: {
      index: true, // or false
      follow: true, // or false
    },

    alternates: {
      canonical:
        seo[0]?.canonical_url || "https://www.royaldefenceacademy.com/", // Replace with your default canonical URL
    },
  };
}
export default async function Page({ params }: { params: { slug: string[] } }) {
  const param = await params.slug[0];
  const slug = params.slug;
  const courseData = await get(`${Constants.course}/?slug=${param}`);
  const allCourses = await get(`${Constants.courses_title}`);
  const reviewData = await get(
    `${Constants.review}/?course_id=${courseData[0].id}`
  );
  // console.log("courseData", courseData);

  // Extract organization data
  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: courseData[0].created_by || "Royal Defence Academy",
    description:
      courseData[0].description ||
      "Best coaching for RIMC and Sainik School preparations",
    url: "https://yourwebsite.com", // Replace with your actual website URL
    logo: courseData[0].slider_images[0], // Using first slider image as logo
    address: {
      "@type": "PostalAddress",
      addressLocality: courseData[0].locality[0]?.locality_name || "Khatipura",
      addressRegion: courseData[0].state[0]?.state_name || "Rajasthan",
      addressCountry: "India",
    },
    telephone: courseData[0].contact_number || "6377871603",
    sameAs: [
      courseData[0].facebook_link,
      courseData[0].instagram_link,
      courseData[0].youtube_link,
    ].filter(Boolean),
    priceRange: courseData[0].price ? `₹${courseData[0].price}` : "₹5000",
    offers: {
      "@type": "Offer",
      price: courseData[0].price || "5000",
      priceCurrency: "INR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5", // Assuming based on student reviews
      reviewCount: courseData[0].student_list.length.toString(),
    },
    review: courseData[0].student_list.map((student: any) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: student?.rating || "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: student?.name,
      },
      reviewBody: student?.review || student?.detail,
    })),
  };

  return (
    <div>
      {/* <Breadcrumbs
          location={newLocation}
          imagearr={data?.images}
          coursemaintitle={data?.title}
          coursepagemetatitle={coursepagemetatitle}
          title={randomTitle
            .replaceAll(
              /(?:\{location\}|\{Location\}|\{royal defence \})/g,
              `${locationType?.matchedItem?.title ? newLocation : "india"}`
            )
            .replaceAll(
              /(?:\{State\}|\{state\}|\{royal defence \})/g,

              `${locationType.cityName || ""} ${
                (locationType.type != "locality" && locationType.stateName) ||
                ""
              }` ||
                "" ||
                ""
            )}
        /> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <CourseDetail
        slug={slug}
        course={courseData[0]}
        allCourses={allCourses}
        reviewData={reviewData}
      />
    </div>
  );
}

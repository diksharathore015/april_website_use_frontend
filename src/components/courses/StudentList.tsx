"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import ItemCard from "./ItemCard";

const StudentList = ({ data, locationdata }: any) => {
  console.log("firstlocationdatadatadata", data);
  const richSnippets = data?.map((item: any) => {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Royal Defence Academy",
      image: item?.image?.[0]?.file,
      url: `https://rdajaipur.in/${item?.slug}`,
      telephone: item?.contact_number,
      address: {
        "@type": "PostalAddress",
        addressLocality: locationdata.title,
        addressRegion: locationdata.stateName || locationdata.title || "IN",
        addressCountry: "IN",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: item?.rating || "5",
        reviewCount: "1",
      },
      review: {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: item?.name,
        },
        reviewBody: item?.review,
      },
      description:
        item?.detail || "Best Sainik School, RIMC and RMS coaching center.",
      sameAs: [item?.youtube_link, item?.facebook_link, item?.instagram_link],
    };
  });

  console.log(JSON.stringify(richSnippets, null, 2));
  return (
    <div className="px-2 w-[100%] bg-white shadow-sm">
      {richSnippets?.map((item: any, i: any) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
      <div className="space-y-4">
        {data?.map((item: any , i:any) => (
          <div key={i}>
            <ItemCard item={item} locationdata={locationdata} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;

// Usage Example
// Pass the data as a prop to the component
/*
<StudentsAlsoBought data={[
  {
    id: 4,
    name: "ram",
    image: [
      {
        id: 8,
        alternative_test: "alternative_test",
        title: "title",
        caption: "caption",
        description: "description",
        file: "http://127.0.0.1:8000/media/media/maharastra_vr8t3gm.jpg",
      },
    ],
    courses: [{ id: 4, title: "rimc update 2" }],
    detail: "good",
    rating: "5",
  },
]} />
*/

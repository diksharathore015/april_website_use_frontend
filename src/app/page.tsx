/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Banner from "@/components/home/Banner";
import OurCourses from "@/components/home/OurCourses";
import Students from "@/components/home/Students";
import apiDataController from "@/controllers/RequestController";
import { constants } from "buffer";
import Image from "next/image";
import { Constants } from "./constants/urls";
import { get } from "./actions/actions";
import HomePage from "@/components/home/HomePage";
export async function generateMetadata({ params, searchParams }: any) {
  const seo = await get(Constants.seo);
  // console.log("seo123", seo);

  // console.log("firstfirstfirstfirstfirst",seoData[0])
  return {
    title: ` ${seo[0]?.title}`,
    description: seo[0]?.description,
    keywords: seo[0]?.keywords,
    charset: "utf-8",
    logo: {
      "@type": "ImageObject",
      url: seo[0]?.logo, // Replace with the correct logo URL
      width: 512, // Optional, provide actual dimensions if available
      height: 512, // Optional, provide actual dimensions if available
    },

    openGraph: {
      title: seo[0]?.title.replaceAll(
        /(?:\{location\}|\{Location\})/g,
        `india`
      ),
      description: seo[0]?.description.replaceAll(
        /(?:\{location\}|\{Location\})/g,
        "india"
      ),
      url: "https://www.royaldefenceacademy.com/",
      siteName: `Home- ${seo[0]?.title.replaceAll(
        /(?:\{location\}|\{Location\})/g,
        `india`
      )}`,
      type: "website", // or 'article', 'product', etc.
      images: [
        {
          url: seo[0]?.logo,
          width: 1200,
          height: 630,
          alt:
            seo[0]?.title.replaceAll(
              /(?:\{location\}|\{Location\})/g,
              `india`
            ) || "Default OG Image Alt",
        },
      ],
    },

    twitter: {
      card: "summary large card",
      title: seo[0]?.title.replaceAll(
        /(?:\{location\}|\{Location\})/g,
        `india`
      ),
      description: seo[0]?.description,
      images: [seo[0]?.logo],
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

export default async function Home() {
  const homepageCourse = await get(Constants.course);
  const homepagestudents = await get(
    `${Constants.studentslist}/?homepage=true`
  );

  const bannersdata = await get(Constants.banners);
  const faqs = await get(Constants.faqs);
  const instructors = await get(Constants.instructors);
  const facilities = await get(Constants.facilities);
  const homepagedata = await get(Constants.homepagedata);
 
  const reviewsnippt = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: homepagestudents.map((testimonial: any, index: any) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: testimonial.name,
        },
        reviewBody: testimonial.review,
        reviewRating: {
          "@type": "Rating",
          ratingValue: testimonial.rating,
        },
        image: testimonial.image.map((img: any) => ({
          "@type": "ImageObject",
          contentUrl: img.file,
          caption: img.caption,
          description: img.description,
          alternateName: img.alternative_test,
        })),
        url: testimonial.youtube_link,
      },
    })),
  };
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: homepageCourse.map((course: any, index: number) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.title.replace("{location}", ""),
        description: course.description.replace("{location}", ""),
        provider: {
          "@type": "Organization",
          name: course.created_by || "Royal Defence Academy",
          sameAs: [
            course.youtube_link,
            course.facebook_link,
            course.instagram_link,
          ].filter(Boolean),
        },
        ...(course.price && {
          offers: {
            "@type": "Offer",
            price: course.price,
            priceCurrency: "INR",
          },
        }),
        duration: course.duration,
        ...(course.slider_images?.length > 0 && {
          image: course.slider_images[0],
        }),
        ...(course.student_list?.length > 0 && {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5", // Using highest rating from your data
            ratingCount: course.student_list.length.toString(),
          },
          review: course.student_list.map((student: any) => ({
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: student.rating,
              bestRating: "5",
            },
            author: {
              "@type": "Person",
              name: student.name,
            },
            reviewBody: student.review,
          })),
        }),
      },
    })),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq: any) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsnippt) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <Banner data={bannersdata} />

      <HomePage
        review={homepagestudents}
        instructors={instructors}
        faqs={faqs}
        facilities={facilities}
        homepagedata={homepagedata}
      />

      <OurCourses data={homepageCourse} />

      <Students data={homepagestudents} />
    </div>
  );
}

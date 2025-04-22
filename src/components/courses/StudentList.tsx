/* eslint-disable @typescript-eslint/no-explicit-any */

import ItemCard from "./ItemCard";

const StudentList = ({ data ,locationdata }: any) => {
  return (
    <div className="px-2 w-[100%] bg-white     shadow-sm">
      <div className="space-y-4">
        {data.map((item: any) => (
          <div key={item.id}>
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

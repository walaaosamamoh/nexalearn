import { useQuery } from "@apollo/client/react";
import { GET_COURSES } from "../../graphql/queries/courses";
import type { GetCoursesData } from "../../graphql/types";
import CourseCard from "../../components/courses/courseCard";
import { useState } from "react";

export default function Courses() {
  const { data, loading, error } = useQuery<GetCoursesData>(GET_COURSES);

  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <p className="text-center text-slate-400">Loading courses...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <p className="text-center text-red-400">Failed to load courses.</p>
      </section>
    );
  }

  const categories = [
    ...new Set(data?.courses.map((course) => course.category)),
  ];

  const filteredCourses = data?.courses.filter((course) => {
    const matchesCategory = category === "" || course.category === category;
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* filter */}
        <div>
          <span>Category: </span>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 border border-white/10 outline-none bg-slate-900 rounded-lg"
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {/* search */}
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search course..."
            className="border border-white/10 outline-none  focus:border-violet-400 rounded-lg px-4 py-2"
          />
        </div>
      </div>
      {/* courses list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {filteredCourses?.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}

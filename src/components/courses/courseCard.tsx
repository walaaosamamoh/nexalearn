import { Link } from "react-router-dom"

interface CourseCardProps {
  id: string
  title: string
  category: string
  instructor: string
  level: string
  duration: string
  image: string
}

export default function CourseCard({
  id,
  title,
  category,
  instructor,
  level,
  duration,
  image,
}: CourseCardProps) {
  return (
    <Link to={`/courses/${id}`} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40">
      {/* Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-sm font-medium text-violet-400">
          {category}
        </p>

        <h3 className="mt-2 text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          {instructor}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-slate-400">
          <span>{level}</span>
          <span>{duration}</span>
        </div>
      </div>
    </Link>
  )
}
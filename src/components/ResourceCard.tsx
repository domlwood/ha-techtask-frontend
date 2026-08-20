import { memo } from 'react'
import { useAverageColor } from '../hooks/useAverageColor'
import type { Resource } from '../types/resource'
import { Button } from './Button'
import { Tag } from './Tag'

interface ResourceCardProps {
  resource: Resource
}

const ResourceCardComponent = ({ resource }: ResourceCardProps) => {
  const backgroundColor = useAverageColor(resource.thumbnail)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-900/5 transition-shadow duration-300 hover:shadow-xl">
      <div
        className="relative overflow-hidden"
        style={{ '--card-color': backgroundColor } as React.CSSProperties}
      >
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className="aspect-3/4 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(to_bottom,rgb(0_0_0/0.35),transparent)]" />
        <div className="absolute top-0 left-0 flex flex-wrap gap-1 p-3">
          {resource.tags.slice(0, 3).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 flex flex-col">
          <div className="h-10 bg-[linear-gradient(to_bottom,transparent,var(--card-color))]" />
          <div className="bg-(--card-color) p-4 pt-0">
            <h3 className="text-lg font-semibold text-white">
              {resource.title}
            </h3>
            <p className="mt-1 line-clamp-3 min-h-15 text-sm text-white/75">
              {resource.description}
            </p>
            <Button className="mt-2">
              <svg
                className="h-4 w-4 fill-(--card-color)"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="text-(--card-color) text-sm font-bold">
                {resource.duration} min
              </span>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}

export const ResourceCard = memo(ResourceCardComponent)

import { Navigate, useParams } from 'react-router-dom'
import { LegacyInlinePage } from '~/components/ui/LegacyInlinePage'
import { blogs } from '~/data/blogs'

export default function BlogSlugRoute() {
  const { slug } = useParams()
  const matchedBlog = blogs.find((blog) => blog.slug === slug)

  if (!matchedBlog) {
    return <Navigate to="/blogs" replace />
  }

  return <LegacyInlinePage src={matchedBlog.source} />
}

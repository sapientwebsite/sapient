import { Navigate, useParams } from 'react-router-dom'

/** Old URLs used `/blogs/:slug`; Framer expects `/blog/:slug` for hydration. */
export function RedirectBlogFromBlogs() {
  const { slug } = useParams()
  return <Navigate to={`/blog/${slug ?? ''}`} replace />
}

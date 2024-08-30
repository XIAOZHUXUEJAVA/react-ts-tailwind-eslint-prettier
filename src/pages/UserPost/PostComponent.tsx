import React, { useState } from 'react'
import { fetchData } from '../../services/NewApiWithEnv'
import { Button } from '@/components/ui/button'
interface ArticleResponse {
  id: number
}

interface CreatePostRequest {
  title: string
  body: string
  userId: number
}

const PostComponent: React.FC = () => {
  const [postId, setPostId] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const createPost = async () => {
    try {
      const response = await fetchData<ArticleResponse, CreatePostRequest>({
        method: 'POST',
        endpoint: 'posts',
        data: { title, body, userId: 1 }
      })
      setPostId(response.data.id)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred')
    }
  }

  return (
    <div>
      <h2 className="text-2xl">Create a Post</h2>
      <div>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Body:
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </label>
      </div>
      <Button onClick={createPost}>Create Post</Button>
      {error && <div>Error: {error}</div>}
      {postId && <div>Post created with ID: {postId}</div>}
    </div>
  )
}

export default PostComponent

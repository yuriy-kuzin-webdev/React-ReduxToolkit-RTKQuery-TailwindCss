import React from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'

function HomePage() {
    const {isLoading, isError, data} = useSearchUsersQuery('kuzin')

    
  return (
    <div>HomePage</div>
  )
}

export default HomePage
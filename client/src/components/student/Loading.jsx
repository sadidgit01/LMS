import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="text-lg font-medium text-gray-600 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  )
}

export default Loading
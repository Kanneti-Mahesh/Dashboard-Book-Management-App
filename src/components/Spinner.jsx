import React from 'react'

export default function Spinner() {
    return (
        <div className="flex justify-center items-center h-40">
            <div className="w-20 h-20 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
    )
}

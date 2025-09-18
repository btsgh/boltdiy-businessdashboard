import React from 'react'

export const Chart: React.FC = () => {
  return (
    <div className="bg-surface rounded-xl p-5 shadow-md">
      <h3 className="text-lg font-semibold text-text mb-4">Sales Trend</h3>
      <svg viewBox="0 0 100 40" className="w-full h-32 text-primary">
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          points="0,30 10,20 20,25 30,15 40,20 50,10 60,15 70,5 80,10 90,8 100,12"
        />
      </svg>
    </div>
  )
}

import React from 'react'

export const Chart: React.FC = () => {
  // Sample data for the last 12 months
  const salesData = [
    { month: 'Jan', value: 15000, label: 'Jan' },
    { month: 'Feb', value: 23000, label: 'Feb' },
    { month: 'Mar', value: 18000, label: 'Mar' },
    { month: 'Apr', value: 32000, label: 'Apr' },
    { month: 'May', value: 28000, label: 'May' },
    { month: 'Jun', value: 45000, label: 'Jun' },
    { month: 'Jul', value: 38000, label: 'Jul' },
    { month: 'Aug', value: 52000, label: 'Aug' },
    { month: 'Sep', value: 47000, label: 'Sep' },
    { month: 'Oct', value: 55000, label: 'Oct' },
    { month: 'Nov', value: 48000, label: 'Nov' },
    { month: 'Dec', value: 45200, label: 'Dec' }
  ]

  // Chart dimensions and margins
  const chartWidth = 600
  const chartHeight = 300
  const margin = { top: 20, right: 30, bottom: 60, left: 80 }
  const innerWidth = chartWidth - margin.left - margin.right
  const innerHeight = chartHeight - margin.top - margin.bottom

  // Calculate scales
  const maxValue = Math.max(...salesData.map(d => d.value))
  const minValue = Math.min(...salesData.map(d => d.value))
  const valueRange = maxValue - minValue
  const padding = valueRange * 0.1 // 10% padding

  const yScale = (value: number) => {
    return innerHeight - ((value - minValue + padding) / (valueRange + 2 * padding)) * innerHeight
  }

  const xScale = (index: number) => {
    return (index / (salesData.length - 1)) * innerWidth
  }

  // Generate path for the line
  const pathData = salesData
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${margin.left + xScale(i)} ${margin.top + yScale(d.value)}`)
    .join(' ')

  // Y-axis ticks
  const yTicks = 5
  const yTickValues = Array.from({ length: yTicks }, (_, i) => {
    return minValue + (valueRange / (yTicks - 1)) * i
  })

  return (
    <div className="bg-surface rounded-xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-text">Sales Trend</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-text opacity-70">Monthly Revenue</span>
          </div>
        </div>
      </div>
      
      <div className="w-full overflow-x-auto">
        <svg 
          width={chartWidth} 
          height={chartHeight} 
          className="w-full"
          style={{ minWidth: '600px' }}
        >
          {/* Chart background */}
          <rect
            x={margin.left}
            y={margin.top}
            width={innerWidth}
            height={innerHeight}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="1"
          />

          {/* Grid lines */}
          {yTickValues.map((value, i) => (
            <g key={i}>
              <line
                x1={margin.left}
                y1={margin.top + yScale(value)}
                x2={margin.left + innerWidth}
                y2={margin.top + yScale(value)}
                stroke="#f3f4f6"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
            </g>
          ))}

          {/* Y-axis */}
          <line
            x1={margin.left}
            y1={margin.top}
            x2={margin.left}
            y2={margin.top + innerHeight}
            stroke="#6b7280"
            strokeWidth="2"
          />

          {/* X-axis */}
          <line
            x1={margin.left}
            y1={margin.top + innerHeight}
            x2={margin.left + innerWidth}
            y2={margin.top + innerHeight}
            stroke="#6b7280"
            strokeWidth="2"
          />

          {/* Y-axis labels */}
          {yTickValues.map((value, i) => (
            <g key={i}>
              <line
                x1={margin.left - 5}
                y1={margin.top + yScale(value)}
                x2={margin.left}
                y2={margin.top + yScale(value)}
                stroke="#6b7280"
                strokeWidth="1"
              />
              <text
                x={margin.left - 10}
                y={margin.top + yScale(value)}
                textAnchor="end"
                dy="0.35em"
                fontSize="12"
                fill="#6b7280"
              >
                ${(value / 1000).toFixed(0)}K
              </text>
            </g>
          ))}

          {/* X-axis labels */}
          {salesData.map((d, i) => (
            <g key={i}>
              <line
                x1={margin.left + xScale(i)}
                y1={margin.top + innerHeight}
                x2={margin.left + xScale(i)}
                y2={margin.top + innerHeight + 5}
                stroke="#6b7280"
                strokeWidth="1"
              />
              <text
                x={margin.left + xScale(i)}
                y={margin.top + innerHeight + 20}
                textAnchor="middle"
                fontSize="12"
                fill="#6b7280"
              >
                {d.label}
              </text>
            </g>
          ))}

          {/* Area under the curve */}
          <path
            d={`${pathData} L ${margin.left + xScale(salesData.length - 1)} ${margin.top + innerHeight} L ${margin.left + xScale(0)} ${margin.top + innerHeight} Z`}
            fill="rgba(59, 130, 246, 0.1)"
          />

          {/* Main line */}
          <path
            d={pathData}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {salesData.map((d, i) => (
            <g key={i}>
              <circle
                cx={margin.left + xScale(i)}
                cy={margin.top + yScale(d.value)}
                r="4"
                fill="#3b82f6"
                stroke="#ffffff"
                strokeWidth="2"
              />
              {/* Hover tooltip placeholder */}
              <circle
                cx={margin.left + xScale(i)}
                cy={margin.top + yScale(d.value)}
                r="8"
                fill="transparent"
                className="hover:fill-blue-500 hover:fill-opacity-20 cursor-pointer"
              >
                <title>{`${d.month}: $${d.value.toLocaleString()}`}</title>
              </circle>
            </g>
          ))}

          {/* Axis labels */}
          <text
            x={margin.left + innerWidth / 2}
            y={chartHeight - 10}
            textAnchor="middle"
            fontSize="14"
            fill="#374151"
            fontWeight="500"
          >
            Month
          </text>

          <text
            x={20}
            y={margin.top + innerHeight / 2}
            textAnchor="middle"
            fontSize="14"
            fill="#374151"
            fontWeight="500"
            transform={`rotate(-90, 20, ${margin.top + innerHeight / 2})`}
          >
            Revenue ($)
          </text>
        </svg>
      </div>

      {/* Summary stats */}
      <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">
            ${Math.max(...salesData.map(d => d.value)).toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">Highest Month</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">
            ${Math.round(salesData.reduce((sum, d) => sum + d.value, 0) / salesData.length).toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">Average</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">
            {salesData.length}
          </div>
          <div className="text-sm text-gray-500">Months Tracked</div>
        </div>
      </div>
    </div>
  )
}
import { LucideIcon } from 'lucide-react'
import React, { useState } from 'react'

interface MetricCardProps {
  title: string
  value: string
  icon: LucideIcon
  change?: string
  positive?: boolean
}

interface DetailData {
  period: string
  value: string
  change: string
}

const getDetailData = (title: string): DetailData[] => {
  switch (title) {
    case 'Revenue':
      return [
        { period: 'This Week', value: '$12,400', change: '+8.2%' },
        { period: 'This Month', value: '$45,200', change: '+12%' },
        { period: 'This Quarter', value: '$134,600', change: '+15.3%' },
        { period: 'This Year', value: '$432,800', change: '+22.1%' }
      ]
    case 'Orders':
      return [
        { period: 'Today', value: '47', change: '+12%' },
        { period: 'This Week', value: '324', change: '+5%' },
        { period: 'This Month', value: '1,320', change: '+8%' },
        { period: 'This Quarter', value: '3,890', change: '+14%' }
      ]
    case 'Customers':
      return [
        { period: 'New Today', value: '12', change: '+15%' },
        { period: 'New This Week', value: '87', change: '+7%' },
        { period: 'Total Active', value: '890', change: '+2%' },
        { period: 'Total Lifetime', value: '2,340', change: '+18%' }
      ]
    case 'Growth':
      return [
        { period: 'Daily Growth', value: '1.2%', change: '+0.3%' },
        { period: 'Weekly Growth', value: '5.8%', change: '+1.1%' },
        { period: 'Monthly Growth', value: '8.4%', change: '+1.2%' },
        { period: 'Quarterly Growth', value: '24.7%', change: '+4.8%' }
      ]
    default:
      return []
  }
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon: Icon,
  change,
  positive,
}) => {
  const [showDetails, setShowDetails] = useState(false)
  const detailData = getDetailData(title)

  return (
    <div className="bg-surface rounded-xl shadow-lg border border-border transition-all duration-300 hover:shadow-xl hover:border-primary">
      {/* Main Card */}
      <div 
        className="p-5 cursor-pointer flex items-center justify-between"
        onClick={() => setShowDetails(!showDetails)}
      >
        <div>
          <p className="text-sm text-textSecondary">{title}</p>
          <h3 className="text-2xl font-semibold text-text">{value}</h3>
          {change && (
            <p className={`text-sm mt-1 ${positive ? 'text-success' : 'text-error'}`}>
              {positive ? '+' : '-'}
              {change} from last week
            </p>
          )}
        </div>
        <div className="flex flex-col items-center">
          <Icon className="w-8 h-8 text-primary" />
          <span className="text-xs text-textSecondary mt-1">
            {showDetails ? '▲' : '▼'} Click for details
          </span>
        </div>
      </div>

      {/* Expandable Details */}
      {showDetails && (
        <div className="border-t border-border p-4 bg-gray-50 dark:bg-gray-800 rounded-b-xl">
          <h4 className="text-sm font-semibold text-text mb-3">Detailed Breakdown</h4>
          <div className="space-y-2">
            {detailData.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-1">
                <span className="text-sm text-textSecondary">{item.period}</span>
                <div className="text-right">
                  <span className="text-sm font-medium text-text">{item.value}</span>
                  <span className={`text-xs ml-2 ${item.change.startsWith('+') ? 'text-success' : 'text-error'}`}>
                    {item.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-600">
            <button className="text-xs text-primary hover:text-primary-dark font-medium">
              View Full Report →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

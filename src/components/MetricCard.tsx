import { LucideIcon } from 'lucide-react'
import React from 'react'

interface MetricCardProps {
  title: string
  value: string
  icon: LucideIcon
  change?: string
  positive?: boolean
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon: Icon,
  change,
  positive,
}) => {
  return (
    <div className="bg-surface rounded-xl p-5 shadow-lg flex items-center justify-between hover:shadow-xl transition-shadow duration-300 border border-border hover:border-primary">
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
      <Icon className="w-8 h-8 text-primary" />
    </div>
  )
}

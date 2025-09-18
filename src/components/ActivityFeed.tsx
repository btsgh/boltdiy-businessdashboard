import React from 'react'

const activities = [
  { user: 'Alice', action: 'purchased', item: 'Smartwatch', time: '2h ago' },
  { user: 'Bob', action: 'added', item: 'Bluetooth Speaker', time: '4h ago' },
  { user: 'Clara', action: 'reviewed', item: 'Gaming Mouse', time: '6h ago' },
]

export const ActivityFeed: React.FC = () => {
  return (
    <div className="bg-surface rounded-xl p-5 shadow-md">
      <h3 className="text-lg font-semibold text-text mb-4">Recent Activity</h3>
      <ul className="space-y-3">
        {activities.map((a, idx) => (
          <li key={idx} className="text-textSecondary">
            <span className="text-text font-medium">{a.user}</span> {a.action} <span className="text-text font-medium">{a.item}</span> - {a.time}
          </li>
        ))}
      </ul>
    </div>
  )
}

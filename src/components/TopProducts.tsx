import React from 'react'

const products = [
  { name: 'Wireless Headphones', sales: '$12,300' },
  { name: 'Smartwatch', sales: '$9,800' },
  { name: 'Bluetooth Speaker', sales: '$7,450' },
  { name: 'Gaming Mouse', sales: '$6,200' },
]

export const TopProducts: React.FC = () => {
  return (
    <div className="bg-surface rounded-xl p-5 shadow-md">
      <h3 className="text-lg font-semibold text-text mb-4">Top Products</h3>
      <ul className="space-y-3">
        {products.map((product, idx) => (
          <li key={idx} className="flex justify-between text-textSecondary">
            <span>{product.name}</span>
            <span className="text-text font-medium">{product.sales}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

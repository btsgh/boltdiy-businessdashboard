import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
} from 'lucide-react'
import React from 'react'
import { MetricCard } from '../components/MetricCard'
import { Chart } from '../components/Chart'
import { TopProducts } from '../components/TopProducts'
import { ActivityFeed } from '../components/ActivityFeed'

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-surface to-background text-text p-6 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Revenue" value="$45,200" icon={DollarSign} change="12%" positive />
        <MetricCard title="Orders" value="1,320" icon={ShoppingCart} change="5%" positive />
        <MetricCard title="Customers" value="890" icon={Users} change="2%" positive />
        <MetricCard title="Growth" value="8.4%" icon={TrendingUp} change="1.2%" positive />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Chart />
        </div>
        <TopProducts />
      </div>

      <ActivityFeed />

      <div className="mt-10">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1200"
          alt="Team working"
          className="rounded-xl shadow-xl w-full object-cover h-64 border-4 border-primary"
        />
      </div>
    </div>
  )
}

import React from 'react';
import Link from 'next/link';
import AdminLayout from '@/components/admin/AdminLayout';
import DashboardStats from '@/components/admin/DashboardStats';
import RecentOrders from '@/components/admin/RecentOrders';
import SalesChart from '@/components/admin/SalesChart';
import TopProducts from '@/components/admin/TopProducts';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="py-6">
        <div className="mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            {/* Stats cards */}
            <DashboardStats />
            
            {/* Charts */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Sales Overview</h2>
                <SalesChart />
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Top Selling Products</h2>
                <TopProducts />
              </div>
            </div>
            
            {/* Recent Orders */}
            <div className="mt-8 bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">Recent Orders</h2>
                <Link href="/admin/orders" className="text-sm text-blue-600 hover:text-blue-800">
                  View all
                </Link>
              </div>
              <RecentOrders />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
} 
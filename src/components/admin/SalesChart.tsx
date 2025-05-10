import React from 'react';

export default function SalesChart() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center">
            <div className="text-2xl font-semibold text-gray-900">$24,521</div>
            <span className="ml-2 px-2.5 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              +12.5%
            </span>
          </div>
          <div className="mt-1 text-sm text-gray-500">Revenue this month</div>
        </div>
        <div>
          <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last 12 months</option>
          </select>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 h-64 flex items-end justify-between">
        {/* This is a simplified chart visualization - in a real app, you would use a chart library */}
        {[30, 45, 25, 60, 75, 45, 65, 35, 55, 40, 70, 85].map((height, index) => (
          <div key={index} className="w-full mx-0.5">
            <div 
              className="bg-blue-500 rounded-t-sm" 
              style={{ height: `${height}%` }}
            ></div>
          </div>
        ))}
      </div>
      
      <div className="mt-3 grid grid-cols-12 text-xs text-gray-500">
        <div className="text-center">Jan</div>
        <div className="text-center">Feb</div>
        <div className="text-center">Mar</div>
        <div className="text-center">Apr</div>
        <div className="text-center">May</div>
        <div className="text-center">Jun</div>
        <div className="text-center">Jul</div>
        <div className="text-center">Aug</div>
        <div className="text-center">Sep</div>
        <div className="text-center">Oct</div>
        <div className="text-center">Nov</div>
        <div className="text-center">Dec</div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white rounded-md shadow px-4 py-3">
          <div className="text-sm font-medium text-gray-500">Orders</div>
          <div className="mt-1 flex items-baseline">
            <div className="text-xl font-semibold text-gray-900">982</div>
            <span className="ml-2 text-sm font-medium text-green-600">+8.1%</span>
          </div>
        </div>
        <div className="bg-white rounded-md shadow px-4 py-3">
          <div className="text-sm font-medium text-gray-500">Avg. Order Value</div>
          <div className="mt-1 flex items-baseline">
            <div className="text-xl font-semibold text-gray-900">$24.97</div>
            <span className="ml-2 text-sm font-medium text-green-600">+4.3%</span>
          </div>
        </div>
        <div className="bg-white rounded-md shadow px-4 py-3">
          <div className="text-sm font-medium text-gray-500">Conversion Rate</div>
          <div className="mt-1 flex items-baseline">
            <div className="text-xl font-semibold text-gray-900">3.5%</div>
            <span className="ml-2 text-sm font-medium text-green-600">+2.7%</span>
          </div>
        </div>
      </div>
    </div>
  );
} 
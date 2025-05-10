"use client";

import React from 'react';

export default function DashboardStats() {
  // Sample data - in a real app, this would come from an API or database
  const stats = [
    {
      id: 1,
      name: 'Total Revenue',
      value: '$24,521.00',
      change: '+14.2%',
      changeType: 'increase',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
    },
    {
      id: 2,
      name: 'Total Orders',
      value: '982',
      change: '+7.3%',
      changeType: 'increase',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
    },
    {
      id: 3,
      name: 'Total Customers',
      value: '1,682',
      change: '+12.9%',
      changeType: 'increase',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
    },
    {
      id: 4,
      name: 'Refund Rate',
      value: '1.2%',
      change: '-0.5%',
      changeType: 'decrease',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div key={item.id} className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className={`flex-shrink-0 ${item.bgColor} rounded-md p-3`}>
                <span className={`h-6 w-6 ${item.textColor}`} aria-hidden="true">📊</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">{item.value}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <span 
                className={`font-medium ${
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                } mr-1`}
              >
                {item.change}
              </span>
              <span className="text-gray-500">from last month</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 
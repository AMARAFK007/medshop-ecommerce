"use client";

import React from 'react';
import Link from 'next/link';

interface Order {
  id: string;
  orderNumber: string;
  customer: {
    name: string;
    email: string;
  };
  date: string;
  total: number;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: number;
}

export default function RecentOrders() {
  // Sample order data - in a real app, this would come from an API or database
  const orders: Order[] = [
    {
      id: 'o1',
      orderNumber: 'ORD-2023-5487',
      customer: {
        name: 'John Smith',
        email: 'john.smith@example.com',
      },
      date: '2023-07-12T10:35:00Z',
      total: 78.95,
      status: 'delivered',
      items: 3,
    },
    {
      id: 'o2',
      orderNumber: 'ORD-2023-5486',
      customer: {
        name: 'Lisa Johnson',
        email: 'lisa.johnson@example.com',
      },
      date: '2023-07-12T09:12:00Z',
      total: 124.50,
      status: 'shipped',
      items: 5,
    },
    {
      id: 'o3',
      orderNumber: 'ORD-2023-5485',
      customer: {
        name: 'Michael Brown',
        email: 'michael.brown@example.com',
      },
      date: '2023-07-11T16:48:00Z',
      total: 43.25,
      status: 'processing',
      items: 2,
    },
    {
      id: 'o4',
      orderNumber: 'ORD-2023-5484',
      customer: {
        name: 'Emily Davis',
        email: 'emily.davis@example.com',
      },
      date: '2023-07-11T14:22:00Z',
      total: 165.80,
      status: 'processing',
      items: 7,
    },
    {
      id: 'o5',
      orderNumber: 'ORD-2023-5483',
      customer: {
        name: 'David Wilson',
        email: 'david.wilson@example.com',
      },
      date: '2023-07-11T11:05:00Z',
      total: 97.30,
      status: 'cancelled',
      items: 4,
    },
  ];

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(date);
  };

  // Helper function to get status badge color
  const getStatusBadgeClasses = (status: Order['status']) => {
    switch (status) {
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Items
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href={`/admin/orders/${order.id}`} className="text-blue-600 hover:text-blue-900">
                        {order.orderNumber}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{order.customer.name}</div>
                      <div className="text-sm text-gray-500">{order.customer.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(order.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.items}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${order.total.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClasses(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href={`/admin/orders/${order.id}`} className="text-blue-600 hover:text-blue-900">
                        View details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 
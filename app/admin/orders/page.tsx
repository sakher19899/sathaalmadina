"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Eye } from "lucide-react"

// محاكاة بيانات الطلبات للإدارة
const mockAdminOrders = [
  {
    id: "12345",
    customerName: "أحمد محمد",
    customerPhone: "0501234567",
    status: "on_way",
    pickupLocation: "حي العوالي، المدينة المنورة",
    destination: "حي الحرة الشرقية، المدينة المنورة",
    orderTime: "2024-01-15 14:30",
    estimatedArrival: "15 دقيقة",
    priority: "عادي",
    price: "150 ريال",
    driver: {
      name: "محمد أحمد السعدي",
      phone: "0530001368",
      truckType: "سطحة هيدروليك",
    },
  },
  {
    id: "67890",
    customerName: "فاطمة علي",
    customerPhone: "0509876543",
    status: "arrived",
    pickupLocation: "طريق الملك عبدالعزيز، المدينة المنورة",
    destination: "ورشة النور للسيارات",
    orderTime: "2024-01-15 15:00",
    estimatedArrival: "وصل السائق",
    priority: "عاجل",
    price: "200 ريال",
    driver: {
      name: "عبدالله محمد الأنصاري",
      phone: "0530001368",
      truckType: "سطحة عادية",
    },
  },
  {
    id: "11111",
    customerName: "سعد الأحمدي",
    customerPhone: "0551234567",
    status: "confirmed",
    pickupLocation: "حي النخيل، المدينة المنورة",
    destination: "جدة - حي الروضة",
    orderTime: "2024-01-15 16:00",
    estimatedArrival: "في انتظار التخصيص",
    priority: "عادي",
    price: "800 ريال",
    driver: null,
  },
]

const statusConfig = {
  confirmed: { label: "مؤكد", color: "bg-blue-500", variant: "default" as const },
  dispatched: { label: "تم الإرسال", color: "bg-yellow-500", variant: "secondary" as const },
  on_way: { label: "في الطريق", color: "bg-orange-500", variant: "destructive" as const },
  arrived: { label: "وصل", color: "bg-green-500", variant: "outline" as const },
  completed: { label: "مكتمل", color: "bg-gray-500", variant: "default" as const },
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState(mockAdminOrders)
  const [filteredOrders, setFilteredOrders] = useState(mockAdminOrders)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState<any>(null)

  useEffect(() => {
    let filtered = orders

    if (searchTerm) {
      filtered = filtered.filter(
        (order) =>
          order.id.includes(searchTerm) ||
          order.customerName.includes(searchTerm) ||
          order.customerPhone.includes(searchTerm),
      )
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((order) => order.status === statusFilter)
    }

    setFilteredOrders(filtered)
  }, [searchTerm, statusFilter, orders])

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)))
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "عاجل":
        return "text-red-600 bg-red-100"
      case "عادي":
        return "text-blue-600 bg-blue-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">إدارة الطلبات</h1>
          <p className="text-gray-600">تتبع وإدارة جميع طلبات السطحة</p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="البحث برقم الطلب، اسم العميل، أو رقم الهاتف..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="all">جميع الحالات</option>
                  <option value="confirmed">مؤكد</option>
                  <option value="dispatched">تم الإرسال</option>
                  <option value="on_way">في الطريق</option>
                  <option value="arrived">وصل</option>
                  <option value="completed">مكتمل</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {orders.filter((o) => o.status === "confirmed").length}
              </div>
              <div className="text-sm text-gray-600">طلبات جديدة</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">
                {orders.filter((o) => o.status === "on_way").length}
              </div>
              <div className="text-sm text-gray-600">في الطريق</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {orders.filter((o) => o.status === "completed").length}
              </div>
              <div className="text-sm text-gray-600">مكتملة اليوم</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">{orders.length}</div>
              <div className="text-sm text-gray-600">إجمالي الطلبات</div>
            </CardContent>
          </Card>
        </div>

        {/* Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>قائمة الطلبات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-right p-3">رقم الطلب</th>
                    <th className="text-right p-3">العميل</th>
                    <th className="text-right p-3">الموقع</th>
                    <th className="text-right p-3">الحالة</th>
                    <th className="text-right p-3">الأولوية</th>
                    <th className="text-right p-3">السعر</th>
                    <th className="text-right p-3">الوقت</th>
                    <th className="text-right p-3">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-mono">#{order.id}</td>
                      <td className="p-3">
                        <div>
                          <div className="font-medium">{order.customerName}</div>
                          <div className="text-sm text-gray-600">{order.customerPhone}</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">
                          <div className="font-medium">من: {order.pickupLocation}</div>
                          <div className="text-gray-600">إلى: {order.destination}</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <Badge variant={statusConfig[order.status as keyof typeof statusConfig].variant}>
                          {statusConfig[order.status as keyof typeof statusConfig].label}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(order.priority)}`}
                        >
                          {order.priority}
                        </span>
                      </td>
                      <td className="p-3 font-medium">{order.price}</td>
                      <td className="p-3 text-sm text-gray-600">{order.orderTime}</td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => setSelectedOrder(order)}>
                            <Eye className="w-4 h-4" />
                          </Button>
                          <select
                            value={order.status}
                            onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                            className="text-xs px-2 py-1 border rounded"
                          >
                            <option value="confirmed">مؤكد</option>
                            <option value="dispatched">تم الإرسال</option>
                            <option value="on_way">في الطريق</option>
                            <option value="arrived">وصل</option>
                            <option value="completed">مكتمل</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Order Details Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>تفاصيل الطلب #{selectedOrder.id}</span>
                  <Button variant="outline" size="sm" onClick={() => setSelectedOrder(null)}>
                    إغلاق
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">معلومات العميل</h4>
                    <p>
                      <strong>الاسم:</strong> {selectedOrder.customerName}
                    </p>
                    <p>
                      <strong>الهاتف:</strong> {selectedOrder.customerPhone}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">تفاصيل الطلب</h4>
                    <p>
                      <strong>الوقت:</strong> {selectedOrder.orderTime}
                    </p>
                    <p>
                      <strong>السعر:</strong> {selectedOrder.price}
                    </p>
                    <p>
                      <strong>الأولوية:</strong> {selectedOrder.priority}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">المواقع</h4>
                  <p>
                    <strong>من:</strong> {selectedOrder.pickupLocation}
                  </p>
                  <p>
                    <strong>إلى:</strong> {selectedOrder.destination}
                  </p>
                </div>

                {selectedOrder.driver && (
                  <div>
                    <h4 className="font-semibold mb-2">معلومات السائق</h4>
                    <p>
                      <strong>الاسم:</strong> {selectedOrder.driver.name}
                    </p>
                    <p>
                      <strong>الهاتف:</strong> {selectedOrder.driver.phone}
                    </p>
                    <p>
                      <strong>نوع السطحة:</strong> {selectedOrder.driver.truckType}
                    </p>
                  </div>
                )}

                <div className="flex gap-2 pt-4">
                  <Button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900">تحديث الحالة</Button>
                  <Button variant="outline">اتصال بالعميل</Button>
                  <Button variant="outline">اتصال بالسائق</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

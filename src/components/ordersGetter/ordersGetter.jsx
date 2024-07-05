import { getAllOrders, getAllUsers } from '@/lib/action';
import Orders from '../orders/orders';

export default async function OrdersGetter() {
  const orders = await getAllOrders();
  const users = await getAllUsers();
  return(<Orders orders={orders} users={users} />
  )
}

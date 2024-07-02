import { getAllOrders } from '@/lib/action';
import Orders from '../orders/orders';

export default async function OrdersGetter() {
  const orders = await getAllOrders();
  return(<Orders orders={orders}>
  </Orders>)
}

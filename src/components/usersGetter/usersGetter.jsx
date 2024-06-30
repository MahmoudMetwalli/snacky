import { getAllUsers } from '@/lib/action';
import Users from '../users/users';

export default async function UsersGetter() {
  const users = await getAllUsers();
  return(<Users users={users}>
  </Users>)
}

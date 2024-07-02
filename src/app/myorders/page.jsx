
import MyOrdersGetter from '@/components/myOrdersGetter/myOrdersGetter';
import { redirect } from 'next/navigation';
import { auth } from '../../../auth';

export default async function MyOrdersPagePage() {
	const session = await auth();
	if (!session) {
		redirect('/login');
	}
	return (
	  <MyOrdersGetter/>
  );
}

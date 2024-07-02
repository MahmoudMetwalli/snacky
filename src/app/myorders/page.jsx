
import MyOrdersGetter from '@/components/myOrdersGetter/myOrdersGetter';
import styles from './myorders.module.css';
import { auth } from '../../../auth';

export default async function MyOrdersPagePage() {
	const session = await auth();
	if (!session) {
		redirect('/login');
	}
	return (
	  <div className={styles.container}><MyOrdersGetter/></div>
  );
};


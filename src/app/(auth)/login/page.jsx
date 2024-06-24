import LogInForm from '@/components/logInForm/logInForm';
import styles from './login.module.css';
import { cookies } from "next/headers";

export default function LogInPage() {
	const cookieStore = cookies();
	console.log(cookieStore);

	return (
		<div className={styles.container}>
			<h1>Sign in</h1>
			<LogInForm />
		</div>
	)
};

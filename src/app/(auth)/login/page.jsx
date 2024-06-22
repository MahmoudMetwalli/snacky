import LogInForm from '@/components/logInForm/logInForm';
import styles from './login.module.css';

export default function LogInPage() {
	return (
		<div className={styles.container}>
			<h1>Sign in</h1>
			<LogInForm />
		</div>
	)
};

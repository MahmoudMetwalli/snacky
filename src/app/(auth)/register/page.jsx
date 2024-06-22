import styles from './register.module.css';
import RegisterForm from '@/components/registerForm/registerForm';

export default function RegisterPage() {
	return (
		<div className={styles.container}>
			<h1>Create your acount</h1>
			<RegisterForm />
		</div>
	)
};

import styles from './register.module.css';

export default function Register() {
	return (
		<div className={styles.container}>
			<h1>Create your acount</h1>
			<form className={styles.form} action="">
				<input type="text" placeholder="User Name" name="username"/>
				<input type="text" placeholder="E-Mail Address" name="email"/>
				<input type="text" placeholder="Password" name="password"/>
				<input type="text" placeholder="Retype password" name="repassword"/>
				<button>Register</button>
			</form>
		</div>
	)
};

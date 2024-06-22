'use client';

import styles from './registerForm.module.css';
import { register } from '@/lib/action';
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from 'react';

export default function RegisterForm() {

  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  useEffect(() => {
		state?.success && router.push("/");
	  }, [state?.success, router]);
  return (<form className={styles.form} action={formAction}>
	<input type="text" placeholder="User Name" name="userName"/>
	<input type="text" placeholder="E-Mail Address" name="email"/>
	<input type="password" placeholder="Password" name="passWord"/>
	<input type="password" placeholder="Retype password" name="rePassWord"/>
	{ state?.error }
	<button>Register</button>
	</form>)
}

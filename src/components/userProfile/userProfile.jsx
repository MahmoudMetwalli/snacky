import Link from 'next/link';
import styles from './userProfile.module.css';

export default async function UserProfile({ session }) {
	return (
		<div className={styles.container}>
			<div className={styles.profile}>
				<div className={styles.photo}>
					<img src={session.user.photo || '/User1.png'} alt="User Photo" className={styles.avatar} />
					<form className={styles.uploadForm}>
						<label htmlFor="file-upload" className={styles.uploadLabel}>Upload Photo</label>
						<input id="file-upload" type="file" accept="image/*" className={styles.fileInput} />
						<button type="submit" className={styles.uploadButton}>Upload</button>
					</form>
				</div>
				<div className={styles.info}>
					<div><strong>User Name:</strong> {session.user.username}</div>
					<div><strong>User Email Address:</strong> {session.user.email}</div>

					<div><strong>First Name:</strong> {session.user.firstName}</div>
					<div><strong>Last Name:</strong> {session.user.lastName}</div>
					<div className={styles.updateField}>
						<strong>Phone Number:</strong>
						<form className={styles.updateForm}>
							<input type="text" placeholder={session.user.phone_number || 'Update phone number'} name="phone_number" />
							<button type="submit" className={styles.updateButton}>Update</button>
						</form>
					</div>
					<div className={styles.updateField}>
						<strong>Address:</strong>
						<form className={styles.updateForm}>
							<input type="text" placeholder={session.user.address || 'Update address'} name="address" />
							<button type="submit" className={styles.updateButton}>Update</button>
						</form>
					</div>
				</div>
			</div>
			<Link href="/orderhistory">
				<button className={styles.orderHistoryButton}>Order History</button>
			</Link>
		</div>
	);
}

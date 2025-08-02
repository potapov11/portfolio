import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import TelegramIcon from '@mui/icons-material/Telegram';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import '../index.css';

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
	<label className="flex flex-col">
		<span className="text-white font-medium mb-4">{label}</span>
		<input
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
		/>
	</label>
);

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);
	const [emailError, setEmailError] = useState('');
	const [nameError, setNameError] = useState('');
	const [confirmation, setConfirmation] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const validateEmail = (email) => {
		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return regex.test(email);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setEmailError('');
		setNameError('');
		setConfirmation('');

		if (!validateEmail(form.email)) {
			setEmailError('Please enter a valid email address.');
			return;
		}

		if (!form.name.trim()) {
			setNameError('Name is required.');
			return;
		}

		setLoading(true);

		emailjs
			.send(
				'service_r2i0by4',
				'template_mf5x3bh',
				{
					from_name: form.name,
					to_name: 'Cергей Потапов',
					from_email: form.email,
					to_email: 's.potapov11@yandex.ru',
					message: form.message,
				},
				'p-gXzzyvEhPaJ0XA-',
			)
			.then(() => {
				setLoading(false);
				setConfirmation('Thank you! I will get back to you as soon as possible.');

				setForm({
					name: '',
					email: '',
					message: '',
				});
			})
			.catch((error) => {
				setLoading(false);
				console.error(error);
				setConfirmation('Something went wrong. Please try again. :/');
			});
	};

	return (
		<div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
			<motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
				{/* <p className={styles.sectionSubText}>Get in touch</p> */}
				<h3 className={styles.sectionHeadText}>Связаться</h3>
				<div>
					<div>
						<span style={{ fontSize: '26px' }}>Написать емайл</span>
						<a href="mailto:s.potapov11@yandex.ru" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-block', marginLeft: '10px' }}>
							<ForwardToInboxIcon fontSize="large" />
						</a>
					</div>
					<div>
						<span style={{ fontSize: '26px' }}>Написать в ТГ</span>
						<a href="https://t.me/Serzh11Potapov" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-block', marginLeft: '10px' }} target="_blank" rel="noopener noreferrer">
							<TelegramIcon fontSize="large" />
						</a>
					</div>
				</div>
			</motion.div>

			<motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, 'contact');

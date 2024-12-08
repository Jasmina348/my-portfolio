import { motion } from 'framer-motion';
import ContactForm from '../components/contactForm';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
const Contact = () => {


const contacts = [
	{
		id: 1,
		name: '1121 Avenue L North, Saskatoon, Canada',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'jasmina.kunwar@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '416 931 5585',
		icon: <FiPhone />,
	},
];
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
		>
			<ContactForm />
            <div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
		</motion.div>
	);
};

export default Contact;
import {
	ts,
	c,
	python,
	java,
	cpp,
	javascript,
	html,
	css,
	reactjs,
	tailwind,
	nodejs,
	git,
	edunet,
	weatherpedia,
	termpw,
	payloadmaster,
	threejs,
	mhft,
	sketcher,
	mathwork,
	CompileVortex,
	eduskill,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

export const services = [
	{ title: 'HTML', icon: html },
	{ title: 'JavaScript', icon: javascript },
	{ title: 'TS', icon: ts },
];

export const technologies = [
	{ name: 'HTML 5', icon: html },
	{ name: 'CSS 3', icon: css },
	{ name: 'JavaScript', icon: javascript },
	{ name: 'Rect JS', icon: reactjs },
	{ name: 'Tailwind CSS', icon: tailwind },
	{ name: 'Node JS', icon: nodejs },
	{ name: 'Three JS', icon: threejs },
	{ name: 'git', icon: git },
];

export const experiences = [
	{
		title: 'Верстальщик',
		company_name: 'Веб студия Азимут',
		icon: eduskill,
		iconBg: '#161329',
		date: 'Сентябрь 2021 - Ноябрь 2023',
		points: [
			'Верстка сайтов и лендингов. Применение продвинутых техник этого направления - Mobile First, Pixel Perfect.',
			'Разработка интерактивных элементов - аккордеоны, слайдеры, dropdowns.',
			'Оптимизация производительности сайтов для быстрого загрузки.',
			'Кроссбраузерное тестирование и исправление ошибок отображения.',
			'Адаптивная верстка для различных устройств и экранов.',
			'Работа с графикой и оптимизация изображений для веба.',
			'Соблюдение стандартов HTML/CSS и лучших практик кодирования.',
		],
	},
	{
		title: 'Frontend-разработчик',
		company_name: 'ОАО Птицефабрика Северная',
		icon: mathwork,
		iconBg: '#161329',
		date: 'Ноябрь 2023 - по настоящее время',
		points: [
			'Разработка пользовательских интерфейсов с использованием React.',
			'Внедрение и настройка линтеров и инструментов для обеспечения качества кода - ESLint, husky,     Prettier',
			'Внедрение микрофронтендов для улучшения модульности и масштабируемости приложений.',
			'Проведение код-ревью для повышения качества кода и соблюдения стандартов.',
			'Оптимизация производительности приложений и улучшение времени загрузки.',
			'Работа с RESTful API и интеграция с бэкенд-сервисами.',
			'Создание и поддержка документации по проектам и компонентам.',
		],
	},
];

export const projects = [
	{
		name: 'WeatherPedia',
		description: 'Web-based platform that allows users to access weather information for their location by entering it in the search field',
		tags: [
			{ name: 'Javascript', color: 'blue-text-gradient' },
			{ name: 'HTML', color: 'green-text-gradient' },
			{ name: 'bootstrap 5.3.0', color: 'pink-text-gradient' },
			{ name: 'Weather API by API Ninjas', color: 'yellow-text-gradient' },
		],
		image: weatherpedia,
		source_code_link: 'https://github.com/lohitkolluri/WeatherPedia',
	},
	{
		name: 'Terminal Like Portfolio Website',
		description: 'A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.',
		tags: [
			{ name: 'HTML', color: 'blue-text-gradient' },
			{ name: 'css', color: 'green-text-gradient' },
			{ name: 'Javascript', color: 'pink-text-gradient' },
		],
		image: termpw,
		source_code_link: 'https://github.com/lohitkolluri/lohitkolluri.github.io',
	},
	{
		name: 'Mental Health Fitness Tracker',
		description: 'ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.',
		tags: [
			{ name: 'Machine Learning', color: 'blue-text-gradient' },
			{ name: 'Jupyter Notebook', color: 'green-text-gradient' },
			{ name: 'Regression Algorithms', color: 'pink-text-gradient' },
		],
		image: mhft,
		source_code_link: 'https://github.com/lohitkolluri/mental_health_fitness_tracker',
	},
	{
		name: 'PayloadMaster',
		description: 'Tool to automate payload creation using the Metasploit framework',
		tags: [{ name: 'shell', color: 'blue-text-gradient' }],
		image: payloadmaster,
		source_code_link: 'https://github.com/lohitkolluri/PayloadMaster',
	},
	{
		name: 'CompileVortex',
		description: 'Tool to automate payload creation using the Metasploit framework',
		tags: [
			{ name: 'Javascript', color: 'blue-text-gradient' },
			{ name: 'CSS', color: 'green-text-gradient' },
			{ name: 'HTML', color: 'pink-text-gradient' },
		],
		image: CompileVortex,
		source_code_link: 'https://github.com/lohitkolluri/CompileVortex',
	},
	{
		name: 'Sketcher',
		description: 'Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.',
		tags: [
			{ name: 'OpenCV', color: 'blue-text-gradient' },
			{ name: 'Matplotlib', color: 'green-text-gradient' },
			{ name: 'Python', color: 'pink-text-gradient' },
		],

		image: sketcher,
		source_code_link: 'https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App',
	},
];

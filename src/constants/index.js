import {
	ts,
	javascript,
	html,
	css,
	reactjs,
	tailwind,
	nodejs,
	git,
	payloadmaster,
	threejs,
	mhft,
	sketcher,
	mathwork,
	CompileVortex,
	eduskill,
	arenda,
	burger,
	irvas,
	severnaya,
	nasha,
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
		name: 'Страница объявлений с арендой жилья',
		description: 'Платформа для мокового размещения объявлений по аренде жилья',
		tags: [
			{ name: 'Javascript', color: 'blue-text-gradient' },
			{ name: 'HTML', color: 'green-text-gradient' },
			{ name: 'SCSS', color: 'pink-text-gradient' },
			{ name: 'Leaflet_Maps', color: 'yellow-text-gradient' },
		],
		image: arenda,
		source_code_link: 'https://search-flat-project.vercel.app/',
	},
	{
		name: 'Космическая бургерная',
		description: 'Сайт бургерной. Использовались в работе - React, Redux, TS, Vitest, WebSockets, JwtTokens',
		tags: [
			{ name: 'React', color: 'blue-text-gradient' },
			{ name: 'Redux', color: 'green-text-gradient' },
			{ name: 'TS', color: 'pink-text-gradient' },
			{ name: 'Vitest', color: 'blue-text-gradient' },
			{ name: 'WebSockets', color: 'green-text-gradient' },
		],
		image: burger,
		source_code_link: 'https://space-burger-cafe.vercel.app/',
	},
	{
		name: 'Ирвас окна',
		description: 'Лендинг с интерактивным калькуляторм подсчета стоимости',
		tags: [
			{ name: 'Javascript', color: 'blue-text-gradient' },
			{ name: 'HTML', color: 'green-text-gradient' },
			{ name: 'SCSS', color: 'pink-text-gradient' },
		],
		image: irvas,
		source_code_link: 'https://potapov11.github.io/window-page/',
	},
	{
		name: 'Корпоративный сайт Severnaya.ru',
		description: 'Основной сайт компании. Переверстка и оптимизация сайта, перевод с легаси на современный стек',
		tags: [
			{ name: 'Javascript', color: 'blue-text-gradient' },
			{ name: 'HTML', color: 'green-text-gradient' },
			{ name: 'SCSS', color: 'pink-text-gradient' },
		],
		image: severnaya,
		source_code_link: 'https://severnaya.ru/',
	},
	{
		name: 'Интернет магазин с высокой посещаемостью и загрузкой',
		description: 'Оптимизация работы, внедрение нового функционала, работа со сторонними apiб разработка дизайна',
		tags: [
			{ name: 'Javascript', color: 'blue-text-gradient' },
			{ name: 'HTML', color: 'green-text-gradient' },
			{ name: 'SCSS', color: 'pink-text-gradient' },
			{ name: 'Vue', color: 'blue-text-gradient' },
		],
		image: nasha,
		source_code_link: 'https://nasha.severnaya.ru/',
	},
];

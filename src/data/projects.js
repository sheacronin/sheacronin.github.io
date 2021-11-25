function importAll(targetContext) {
    const files = {};
    targetContext.keys().forEach((item) => {
        files[item.replace(/.\/|.jpg|.png/gi, '')] =
            targetContext(item).default;
    });
    return files;
}

const desktopImagesContext = require.context(
    '../img/projects/desktop',
    false,
    /\.png$/
);
const desktopImages = importAll(desktopImagesContext);

const mobileImagesContext = require.context(
    '../img/projects/mobile',
    false,
    /\.jpg$/
);
const mobileImages = importAll(mobileImagesContext);

const PROJECTS = [
    {
        title: "Where's Meryl?",
        description:
            "A Where's Waldo-inspired game that times the user as they search for characters from the movie Mamma Mia.",
        tech: ['React', 'Firebase', 'JavaScript'],
        learningGoals: ['Integrating with a Backend', 'Managing Stored Data'],
        images: {
            desktop: desktopImages['wheres-meryl'],
            mobile: mobileImages['wheres-meryl-m'],
        },
        links: {
            github: 'https://github.com/sheacronin/wheres-meryl',
            live: 'https://wheres-meryl.web.app/',
        },
    },
    {
        title: 'BattleBug',
        description:
            'An insect-themed Battleship game that can be played against a computer or another human.',
        tech: ['JavaScript'],
        learningGoals: [
            'Test Driven Development',
            'Object-Oriented Programming',
            'Single Responsibility Principle',
        ],
        images: {
            desktop: desktopImages['battlebug'],
            mobile: mobileImages['battlebug-m'],
        },
        links: {
            github: 'https://github.com/sheacronin/battleship',
            live: 'https://sheacronin.github.io/battleship/',
        },
    },
    {
        title: 'Shopping Cart',
        description:
            'Uses PokéAPI to display categories of items and items within those categories. The user can add items to their cart and then view those items.',
        tech: ['React', 'JavaScript'],
        learningGoals: ['Routing', 'Handling State in React', 'Using APIs'],
        images: {
            desktop: desktopImages['battlebug'],
            mobile: mobileImages['shopping-cart-m'],
        },
        links: {
            github: 'https://github.com/sheacronin/shopping-cart',
            live: 'https://sheacronin.github.io/shopping-cart/',
        },
    },
    {
        title: 'Memory Card Game',
        description:
            'A memory card game with a Degrassi theme. The user attempts to click on a unique character each round.',
        tech: ['React', 'JavaScript'],
        learningGoals: [
            'Handling State in React',
            'React Hooks',
            'Responsive Design',
        ],
        images: {
            desktop: desktopImages['memory-card'],
            mobile: mobileImages['memory-card-m'],
        },
        links: {
            github: 'https://github.com/sheacronin/memory-card',
            live: 'https://sheacronin.github.io/memory-card/',
        },
    },
    {
        title: 'Weather App',
        description:
            'Displays the weather of an inputted location using the OpenWeatherMap API.',
        tech: ['JavaScript'],
        learningGoals: [
            'Asynchronous Programming',
            'Using APIs',
            'Processing JSON Data',
        ],
        images: {
            desktop: desktopImages['weather'],
            mobile: mobileImages['weather-m'],
        },
        links: {
            github: 'https://github.com/sheacronin/weather',
            live: 'https://sheacronin.github.io/weather/',
        },
    },
    {
        title: 'CV Maker',
        description:
            'Allows the user to enter their information to create a formatted CV in the form of a PDF.',
        tech: ['React', 'JavaScript'],
        learningGoals: [
            'Handling State in React',
            'Refactoring Class Components to Functional Components',
            'Creating Custom Hooks',
        ],
        images: {
            desktop: desktopImages['cv'],
            mobile: mobileImages['cv-m'],
        },
        links: {
            github: 'https://github.com/sheacronin/cv',
            live: 'https://sheacronin.github.io/cv/',
        },
    },
    // {
    //     title: 'Todo List',
    //     description:
    //         'A Todo List application in which the user can create custom projects and tasks within those projects, including information such as due date and priority.',
    //     tech: ['JavaScript'],
    //     learningGoals: [
    //         'Object-Oriented Programming',
    //         'Local Storage',
    //         'Mobile-First Design',
    //     ],
    //     images: {
    //         desktop: desktopImages['todo'],
    //         mobile: mobileImages['todo-m'],
    //     },
    //     githubLink: 'https://github.com/sheacronin/todo',
    //     liveLink: 'https://sheacronin.github.io/todo/',
    // },
];

export default PROJECTS;

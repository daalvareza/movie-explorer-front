const config = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(swiper|some-other-module)/)', // Add 'swiper' here
    ],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
};

export default config;  
module.exports = function(api) {
    api.cache(true);
    return {
        presents: ['babel-preset-expo'],
        plugins: ['react-narive-reanimated/plugin'],
    };
};
module.exports = {
    verbose: true,
    roots: [ 'src' ],
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/"
    ],
    setupTestFrameworkScriptFile: "<rootDir>/enzyme.config.js"
}

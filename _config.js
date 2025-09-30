var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://sa:YThR0KHfZgnx5gb7@martincluster.aeap0q4.mongodb.net/darkroom?retryWrites=true&w=majority&appName=martincluster',
    development: 'mongodb+srv://sa:YThR0KHfZgnx5gb7@martincluster.aeap0q4.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=martincluster',
    test: 'mongodb+srv://sa:YThR0KHfZgnx5gb7@martincluster.aeap0q4.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=martincluster',
}

module.exports = config;
//
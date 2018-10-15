# Phonies

A very simple list view of some modern mobile phones.

To run locally:

```bash
$ npm install
$ npm start:server # launches the API at port :3001
$ npm start # launch the dev-server for the frontend at :3000
```

You can also run the application using the provided Dockerfile.

```bash
$ docker build -t mklinga/phonies .
$ docker run -ti mklinga/phonies 
```

The Dockerfile launches the server in the background and attaches to the process of the frontend dev-server. The port :3000 is exposed for the application.


## Code quality

You can run the unit tests and linter with following commands:

```bash
$ npm run test
$ npm run lint
```


# Tools

I bootstrapped the project with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\

### `npm test`

Launches the test runner. Helpers are covered with unit tests, they can be checked in /helpers/tests directory. Jest included into CRA by default, so I utilized it for unit tests.

## Other tools

State is managed locally. Considering that we only need to keep info about:

1. matches fetched
2. current persona

local state seemed like a reasonable option. I though of implementing state through useReducer, but then decided that state logic is not complex enough for this decision.

For coping with React keys I picked `nanoid` library - it's very lightweight (has no dependencies) and easily utilized.

For styling I chose MaterialUI - it's well-optimized and provides nice-looking, accessible CSS components out of the box. It allowed me to spend less time on styling in favor of a logic layer.

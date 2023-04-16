# Events Travel Frontend assignment

Completed assignment with all required features and minor improvements to the codebase.

## Environment Setup

Duplicate the `.env.sample` file and modify the variables to suit the application environment (i.e. `env.local`). More info can be found [here](https://create-react-app.dev/docs/adding-custom-environment-variables/)

## Libraries Used

- [React Hook Form](https://react-hook-form.com/)
- [Mantine UI](https://mantine.dev/)
- [Redux toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/en/main)
- [Zod](https://zod.dev/) (Used instead of the recommended Yup library for better typesafety adn better DX)

## Setup

1. Install the required modules in both the `/frontend` and `/api` directories using `yarn`
2. Use `yarn start` on each directory to start the respective application

## Extra

The [cors](https://github.com/expressjs/cors) package has been used on the API project in favour of proxy to make the project more production ready.

### Potential Improvements

Move away from using redux to store and dispatch data to and from the API in favour of React Query for a more concise codebase and the exposure of more features such as caching.
# UNIVERSE Test Project

The project is a combination of a Backend part based on Strapi and a Frontend part developed using Astro.
For introductory purposes, a small database with three records and .env file is initially added to the project.

## Project Structure

The project consists of two main parts:

1. **Backend part (Strapi):**

   - To set up only Strapi, follow these steps:
     1. Navigate to the `apps/backend` folder.
     2. Install dependencies by running `yarn install`.
     3. Start the Strapi server using `yarn develop`.
   - Open [http://localhost:1337] in your browser to access the Strapi admin panel and create a test entity.

2. **Frontend part (Astro):**
   - To set up only Astro, follow these steps:
     1. Navigate to the `apps/frontend` folder.
     2. Install dependencies by running `yarn install`.
     3. Start the local Astro development server with `yarn dev`.
   - Open [http://localhost:3000] in your browser to see an example page that displays data from the Backend (Strapi).

## Usage Instructions

1. **Creating a test entity:**

   - Go to the Strapi admin panel at [http://localhost:1337].
   - Go to Content Manager => Collection Types => Car => Create new entry.
   - Fill in the required fields to create records.

1. **Displaying data in Astro:**
   - Visit [http://localhost:3000] to see an example page displaying cards from Strapi.

## Additional Tools

This project also includes some additional tools to enhance development:

- **Linters:** The project is configured with prettier.
- **Preprocessors:** The project uses the Tailwind CSS.
- **Scripts for Project Launch:** NX with convenient scripts are added to easily launch the project.

## Running the Project

To run the project locally, follow these steps:

1. In the main directory run `yarn` to install dependencies.
2. Then run `yarn dev` to start frontend and backend in dev mode.

## Dependencies

The project uses the following main dependencies:

- Strapi for the Backend part: [https://strapi.io](https://strapi.io)
- Astro for the Frontend part: [https://astro.build](https://astro.build)

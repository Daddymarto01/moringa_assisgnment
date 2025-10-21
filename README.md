**DEV 11 IP 1 (GALLERY)**
=============================================================

This is a class a Moring IP 1 project.
**Description**

This project began as an application developed in mid-2020 and has since evolved through multiple phases, including major changes such as the introduction of Jenkins CI/CD pipelines, debugging deployment on Render
, and updates to the MongoDB connection logic.

Recent development efforts (October 2025) have focused on resolving deployment issues on Render, particularly debugging the MongoDB connection string.

**Milestones**

Initial Commit (June 2020) – Project scaffolded

MongoDB Configuration (Aug 2020) – _config.js created and updated

Milestone 1 to 4 Completed – Core functionality delivered

Jenkins CI/CD Integration – Jenkinsfile added and moved to repo root

Deployment Debugging (Oct 2025) – Multiple commits to test and roll back MongoDB connection string changes

Setup Instructions

To run the project locally:

# Clone the repo
https://github.com/Daddymarto01/moringa_assisgnment.git
cd moringa_assisgnment

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Then fill in your MongoDB URI and any other required secrets in the .env file

# Start the server
npm run start

**Deployment**

The project is deployed (or intended to be deployed) on Render.

**Notes**:

If experiencing issues connecting to MongoDB on Render, ensure your MongoDB URI allows external connections and the Render service has access to the database IP.

**Testing**

To run tests

npm run test

**Contributing**

Fork the repo

Create your feature branch (git checkout -b feature/test)

Commit your changes (git commit -m 'Any new feature you've added')

Push to the branch (git push origin feature/YourFeature)

Open a Pull Request

**Contributors**

@jonnygovish – Initial setup

@brianmarete – Configuration updates

@Daddymarto01 – Major development, CI/CD integration, Render deployment, milestone implementations

**Timeline
**Date	Event / Commit Summary
Jun 2020	Initial commit and app creation
Aug 2020	Configuration files added
Sep 2025	Milestone features completed
Oct 2025	Jenkins integration and debugging deployment issues

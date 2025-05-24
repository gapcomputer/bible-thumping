# GitHub Actions CI/CD Pipeline

## Overview
This repository uses GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD).

## Workflow Details
- **Triggers**: Push and Pull Requests to `main` and `develop` branches
- **Jobs**:
  1. `test`: Runs linting and tests
     - Uses Node.js 16.x and 18.x
     - Installs dependencies
     - Runs linter
     - Runs test suite
  2. `build`: Builds the project after tests pass
     - Builds project artifacts
     - Optionally uploads build artifacts

## Running Locally
- Install dependencies: `npm ci`
- Run tests: `npm test`
- Lint code: `npm run lint`
- Build project: `npm run build`
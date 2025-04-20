# React + Azure Functions Project Documentation
## Architecture
![alt text](https://raw.githubusercontent.com/PoojaMgr/shiny-octo-infotech/refs/heads/develop/Architecture.jpg)
## Project Overview

This project is a full-stack web application built using:

* Frontend: React.js

* Backend: Azure Functions (Node.js)

* Authentication: Azure Active Directory (Azure AD)

* Hosting: Azure Web App (Frontend) + Azure Function App (API)

* CI/CD: GitHub Actions

## Development Setup

Prerequisites
| Tool |  Version |
|:-----|:--------:|
| Node.js   | 20.x|
| npm   |  9.x  | 
| Azure Cli   | v2.53+ | 
| Git | Latest |



## Installation Steps

Clone the repository

* git clone https://github.com/PoojaMgr/shiny-octo-infotech

Install Frontend Dependencies

* cd front-end
* npm install

Run Locally

* npm start

Run Azure Functions Locally

* cd azure-functions-api
* npm install
* func start

⚠️ Ensure CORS is enabled for http://localhost:3000 on your Function App in Azure Portal.

Authentication

* Azure AD authentication is implemented using MSAL.js.

* Users are redirected to Azure login, and roles are included in the token.

* Role-based UI rendering is used for access control.


## Testing

Frontend Unit Tests

* npm test

## Deployment (CI/CD)

GitHub Actions

* Frontend: .github/workflows/frontend.yml

* Backend: .github/workflows/backend.yml

Both are triggered on develop branch push and automatically deploy to Azure.

## Contribution Guidelines

* Fork & Clone the repo

* Create a feature branch

* git checkout -b feature/your-feature

* Add meaningful commit messages

* Push & Create a Pull Request

* Write tests for new logic or components

## Support

Raise issues via GitHub Issues tab.


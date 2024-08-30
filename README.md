# FitnessTracker

FitnessTracker is a simple fitness tracking application with a backend built using .NET 8 and the ABP framework, and a frontend developed with Angular 17. The database used is SQL Server.
![Screenshot 2024-08-29 230754](https://github.com/user-attachments/assets/177da0f1-2a8c-41c0-bd4b-9f72ed30584e)

## Prerequisites

- .NET 8 SDK
- Node.js (version 18 or later)
- SQL Server
- Angular CLI (version 17 or later)
- ABP CLI

## Getting Started

### 1. Update Connection Strings

Before running the application, you need to update the connection strings in both the host and migration projects.

1. **Host Project:**
   - Open the `appsettings.json` file located in the `src\FitnessTracker.HttpApi.Host` directory.
   - Update the connection string under the `ConnectionStrings` section to point to your SQL Server instance.
2. **Migration Project**
    - Open the `appsettings.json` file located in the `src\FitnessTracker.DbMigrator` directory.
   - Update the connection string under the `ConnectionStrings` section to point to your SQL Server instance.

### 2. Run Db Migrator
1. Set the FitnessTracker.DbMigrator as the default start-up project. Then run/start to execute the db migrator.

### 3. Angular App
1. Run npm install

### 3. Running the application
1. run the .net core project by setting the FitnessTracker.HttpApi.Host as the default project.
2. When the .net core app is loaded to the browser, go to the angular, in the command line run "ng serve -o" to run the angular application

### SWAGGER
![api-endpoints](https://github.com/user-attachments/assets/eea74fe2-4da0-4229-8a25-a4e16e27ede5)

### UNIT TEST
![uni-test](https://github.com/user-attachments/assets/0c9f30de-1218-411d-9e55-7cb9c20d103d)



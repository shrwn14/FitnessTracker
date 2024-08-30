# FitnessTracker

FitnessTracker is a simple fitness tracking application with a backend built using .NET 8 and the ABP framework, and a frontend developed with Angular 17. The database used is SQL Server.

![FitnessTracker](https://github.com/user-attachments/assets/2c07c104-ecc9-4cb5-a4d1-59e2969c7d75)

## Prerequisites

- .NET 8 SDK
- Node.js (version 18 or later)
- SQL Server
- Angular CLI (version 17 or later)
- Typescript 5.2

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

### 4. Running the application
1. run the .net core project by setting the FitnessTracker.HttpApi.Host as the start-up project.
2. When the .net core app is loaded to the browser, go to the angular, in the command line run "ng serve -o" to run the angular application
3. Username = admin, Password = 1q2w3E*
### SWAGGER
![api-endpoints](https://github.com/user-attachments/assets/eea74fe2-4da0-4229-8a25-a4e16e27ede5)

### UNIT TEST
![uni-test](https://github.com/user-attachments/assets/0c9f30de-1218-411d-9e55-7cb9c20d103d)

### Logging using Serilog (can be improved in the future to use open telemetry with seq)
![image](https://github.com/user-attachments/assets/8b6dbfa5-43a2-4c89-8a04-ba70187ac7be)


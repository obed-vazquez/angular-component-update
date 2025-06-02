# Angular Component Update Playground

This repository serves as a playground to practice Angular development and solve common issues that arise in Angular projects. It focuses on testing Angular functionalities and component interactions.

## 1) What is this repository for?

### 1.1) Quick summary
Version: `1.0.0`

This is an Angular playground project designed to practice and test Angular functionalities, particularly focusing on:
- Dynamic data loading from JSON files
- PrimeNG components (p-table, p-overlayPanel)
- Recursive component rendering
- Component communication and data binding

## 2) How do I get set up?

### 2.1) Summary of set up
The technologies this project uses:

#### 2.1.1) Development environment
- [Node.js](https://nodejs.org/) version: `18+`
- [Angular CLI](https://angular.io/cli)
- [PrimeNG](https://primeng.org/) - UI components library

#### 2.1.2) Project Dependencies
This project uses:
- **Angular 17+** - Frontend framework
- **PrimeNG** - UI component library for tables and overlays
- **TypeScript** - Programming language
- **RxJS** - Reactive programming
- **JSON** - Static data files for simulation


### 2.2) Configuration Steps
#### 2.2.1) Environment Configuration
_Please execute the `main-protection-win.bat` file in the root directory of the project
to protect the main branch from being corrupted unintentionally._

You will need Node.js and Angular CLI installed on your system.

Install Angular CLI globally:
```bash
npm install -g @angular/cli
```

#### 2.2.2) Project Setup
1. Clone the repository
2. Navigate to project directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   ng serve
   ```

The application will be available at `http://localhost:4200/`

## 3) How to Deploy?

### Development Server
Run the development server:
```bash
ng serve
```
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

### Build
Run the build command to create a production build:
```bash
ng build
```
The build artifacts will be stored in the `dist/` directory.

### Running Tests
Execute unit tests:
```bash
ng test
```

Execute end-to-end tests:
```bash
ng e2e
```
## 4) Project Structure and Features

### 4.1) Main Features
This playground demonstrates:
- **Dynamic JSON Data Loading**: Loading static JSON files that simulate dynamic data
- **PrimeNG Table (p-table)**: Displaying data in a responsive table format
- **Overlay Panels (p-overlayPanel)**: Pop-up panels triggered by button clicks
- **Recursive Components**: Components that can render themselves within overlay panels
- **Multiple Overlays**: Support for opening several pop-ups simultaneously

### 4.2) Component Architecture
The main component includes:
- A primary table displaying JSON data
- Action buttons in table cells that trigger overlay panels
- Overlay panels containing recursive instances of the same component
- Subsection data filtering for nested components

## 5) Who do I talk to?

<table>
<thead><tr><th><b>Role</b></th> <th><b>Contact</b></th></tr></thead>
<tr><td>Owner/admin</td><td>current main developer: <a href='mailto:obed.vazquez@gmail.com'>obed.vazquez@gmail.com</a></td></tr>
<tr><td>Supporters</td><td> We have supporters with knowledge of the setup process of the project only</td></tr>
<tr><td>Community</td><td> send us a message in <a href='https://discord.gg/NPY5XcrKE4'>our Discord Server</a></td></tr>
</table>

>Please, contact me if you want to help; In general, I'm developing, maintaining, and supporting this project
on my own with no help or support from anyone; any tip, comment, change, or help in general is well-received.


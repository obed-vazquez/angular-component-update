# Modern Web Development Platform
This repository serves as a comprehensive development platform with broader objectives for modern web application development, advanced component architectures, and scalable solutions. **Initially, we are focusing on Angular component updates and recursive component implementations** to establish a solid foundation for future enhancements.

_The current implementation demonstrates recursive p-table and p-overlayPanel components with PrimeNG integration, serving as the first milestone in our development roadmap._

## 1) What is this repository for?

### 1.1) Quick summary
Version: `0.1.0`

**Initial Focus: Angular Component Development**

Initially, we are focusing on Angular playground project featuring recursive components, PrimeNG integration, and dynamic data visualization as our first milestone.

### 1.2) Disclosure
_We hereby certify that, to the best of our knowledge,
neither we nor any individual or entity with whom or which I have a significant working
relationship have (has) received something of value from a commercial party related directly or
indirectly to the subject of this project._

## 2) How do I get set up?

### 2.1) Summary of set up
The technologies the project is using.

#### 2.1.1) Development environment
- [Node.js](https://nodejs.org/) version: `20.9.x or higher` (minimum requirement for Angular 17)
- [Angular CLI](https://angular.io/cli): `^17.3.10`
- [TypeScript](https://www.typescriptlang.org/): `~5.4.2`

#### 2.1.2) Project Dependencies
This Angular application uses:
- **Angular 17** - Stable Angular framework with Node.js compatibility
- **PrimeNG** - UI component library for Angular
  - **PrimeIcons** - Icon set for PrimeNG
- **RxJS** - Reactive programming library
- **TypeScript** - Type-safe JavaScript superset
- **SCSS** - CSS preprocessor
- **Karma & Jasmine** - Testing framework

### 2.2) Configuration Steps
#### 2.2.1) Environment Configuration
_Please execute the `main-protection-win.bat` file in the root directory of the project
to protect the main branch from being corrupted unintentionally._

You will require Node.js and Angular CLI in your development environment.

An IDE with Angular/TypeScript support is suggested for you to make any modifications to the code.

#### 2.2.2) Installation
Install dependencies using npm:

    npm install --legacy-peer-deps

## 3) How to Build and Run?

### 3.1) Development Server
Start the development server:
    
    npm start
    # or
    ng serve

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### 3.2) Build
Build the project for production:

    npm run build
    # or
    ng build

The build artifacts will be stored in the `dist/` directory.

### 3.3) Testing
Run unit tests:

    npm test
    # or
    ng test
## 4) Features Implemented

### 4.1) Recursive Components
- **DataTableComponent**: A recursive component that displays hierarchical data
- **Three-level hierarchy**: Product Groups → Items → Details
- **Dynamic loading**: Components adapt to different data levels

### 4.2) PrimeNG Integration
- **p-table**: Responsive data tables with pagination
- **p-overlayPanel**: Pop-up panels for detailed views
- **PrimeIcons**: Professional icon set

### 4.3) Data Management
- **DataService**: Service for loading and filtering JSON data
- **TypeScript interfaces**: Type-safe data structures
- **Hierarchical JSON**: Sample data with multiple levels

## 5) Project Structure
```
src/
├── app/
│   ├── components/
│   │   └── data-table/        # Recursive table component
│   ├── services/
│   │   └── data.service.ts    # Data management service
│   ├── models/
│   │   └── data.models.ts     # TypeScript interfaces
│   └── app.component.ts       # Main application component
├── assets/
│   └── sample-data.json       # Hierarchical sample data
└── styles.scss               # Global styles
```

## 6) What are the Contribution guidelines?

#### 6.1) Writing tests
- Unit tests using Jasmine and Karma
- Component testing for recursive behavior
- Service testing for data loading

#### 6.2) Code review
Request if needed.

#### 6.3) Other guidelines
Please ask for the code standard to use as a guideline and reflect it in the project.

## 7) Who do I talk to?

<table>
<thead><tr><th><b>Role</b></th> <th><b>Contact</b></th></tr></thead>
<tr><td>Owner/admin</td><td>current main developer: <a href='mailto:obed.vazquez@gmail.com'>obed.vazquez@gmail.com</a></td></tr>
<tr><td>Supporters</td><td> We have supporters with knowledge of the setup process of the project only</td></tr>
<tr><td>Community</td><td> send us a message in <a href='https://discord.gg/NPY5XcrKE4'>our Discord Server</a></td></tr>
</table>

>Please, contact me if you want to help; In general, I'm developing, maintaining, and supporting this project
on my own with no help or support from anyone; any tip, comment, change, or help in general is well-received.


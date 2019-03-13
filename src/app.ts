import { exec } from "child_process";

class App {

    constructor() {
        exec('npm run electron');
    }
    
}

new App();
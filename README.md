# Docs

## Setup

1. Install Node.js

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
    source ~/.bashrc
    ```

2. Install the latest LTS version of npm
    
    ```bash
    nvm install v18.12.1
    ```

3. Install dependencies
    
    ```bash
    npm install
    ```

## Run

```bash
npm run start
```

## Tools

1. To resize images, use `imagemagick` on Linux
    
    ```bash
    sudo apt install imagemagick-6.q16
    ```

    Resize all images in a folder

    ```bash
    convert "*.jpg[800x]" -set filename:base "%[basename]" "%[filename:base].jpg"
    ```

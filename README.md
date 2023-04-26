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
    
3. Install yarn
   ```bash
    npm install --global yarn
    ```
    
4. Install dependencies
    
    ```bash
    yarn
    ```

## Run

```bash
yarn start
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

## Formatting

1. Maintain a correct order of the headings. Use `H1` for page titles, `H2` for sections and `H3` for subsections. Don't
   jump from `H1` to `H3` without an `H2` in between.

2. Resize the images to ideally to a width of **800px** maintaining the aspect ratio.

3. Use `Code` (\`Code\`) blocks for text that makes direct reference to a component in the software. E.g., `Done`
   button.

4. Use **Bold** (\*\*Bold\*\*) characters to highlight important words or phrases.

5. Use *Italics* (\*Italics\*) for names of 3rd party products and items.

6. Avoid having one single long line of text and add a newline after 120 characters.

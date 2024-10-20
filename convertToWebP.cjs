const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Define common image extensions
const imageExtensions = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff'];

// Function to check if a file is an image
const isImageFile = (file) => {
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.includes(ext);
};

// Function to convert an image to WebP
const convertToWebp = async (filePath) => {
    const outputFilePath = `${filePath.replace(path.extname(filePath), '')}.webp`;
    try {
        await sharp(filePath).toFile(outputFilePath);
        console.log(`Converted: ${filePath} -> ${outputFilePath}`);
    } catch (err) {
        console.error(`Error converting ${filePath}:`, err);
    }
};

// Recursive function to search for images and convert them
const convertImagesInDirectory = async (dir) => {
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await convertImagesInDirectory(fullPath); // Recurse into subdirectory
        } else if (isImageFile(fullPath)) {
            await convertToWebp(fullPath);
        }
    }
};

// Start the conversion from the current directory
convertImagesInDirectory(process.cwd())
    .then(() => console.log('Conversion completed.'))
    .catch((err) => console.error('Error during conversion:', err));

const fs = require('fs');
const path = require('path');

// Define common image extensions that are not WebP
const imageExtensions = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff'];

// Function to check if a file is an image that should be deleted
const isDeletableImage = (file) => {
	const ext = path.extname(file).toLowerCase();
	return imageExtensions.includes(ext);
};

// Function to recursively search and delete non-WebP images
const deleteNonWebpImagesInDirectory = (dir) => {
	const items = fs.readdirSync(dir);

	for (const item of items) {
		const fullPath = path.join(dir, item);
		const stat = fs.statSync(fullPath);

		if (stat.isDirectory()) {
			deleteNonWebpImagesInDirectory(fullPath); // Recurse into subdirectory
		} else if (isDeletableImage(fullPath)) {
			fs.unlinkSync(fullPath); // Delete the file
			console.log(`Deleted: ${fullPath}`);
		}
	}
};

// Start the deletion process from the current directory
deleteNonWebpImagesInDirectory(process.cwd());
console.log('Deletion completed.');

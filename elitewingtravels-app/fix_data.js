const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'src', 'lib', 'data.ts');
let content = fs.readFileSync(dataFile, 'utf8');

// Update Kitulgala
content = content.replace(
    'image: "/destinations/kithulgala.jpg",',
    'image: "/Locations/Kitulgala/Kitulgala_1.jpg",'
);
content = content.replace(
    'gallery: ["/destinations/kithulgala.jpg", "/destinations/kithulgala-2.jpg", "/destinations/kithulgala-3.jpg"],',
    `gallery: [
            "/Locations/Kitulgala/Kitulgala_1.jpg",
            "/Locations/Kitulgala/Kitulgala_2.jpg",
            "/Locations/Kitulgala/Kitulgala_3.jpg",
            "/Locations/Kitulgala/Kitulgala_4.jpg"
        ],`
);

// Update Tangalle (tamgalle)
content = content.replace(
    'image: "/destinations/tamgalle.jpg",',
    'image: "/Locations/Tangalle/Tangalle_1.jpg",'
);
content = content.replace(
    'gallery: ["/destinations/tamgalle.jpg", "/destinations/tamgalle-2.jpg", "/destinations/tamgalle-3.jpg"],',
    `gallery: [
            "/Locations/Tangalle/Tangalle_1.jpg",
            "/Locations/Tangalle/Tangalle_2.jpg",
            "/Locations/Tangalle/Tangalle_3.jpg",
            "/Locations/Tangalle/Tangalle_4.jpg"
        ],`
);

fs.writeFileSync(dataFile, content, 'utf8');
console.log('data.ts updated successfully with target images');

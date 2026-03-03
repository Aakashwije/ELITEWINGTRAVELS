# EliteWing Travels Assets

This folder is created for you to drop in your final pictures and videos for the website.

## How to use these assets in the code

Since this is a Next.js project, anything placed inside the `public` folder can be referenced directly using a forward slash `/`.

For example, if you place a video in `public/assets/videos/hero-bg.mp4`, you can reference it in your code as:
`/assets/videos/hero-bg.mp4`

If you are updating the tour destinations or the testimonials, you'll want to either:
1. Place images into the already referenced folders (`public/destinations`, `public/testimonials`, `public/tours`).
2. Put everything inside this `public/assets` folder, and update the file paths in `src/lib/data.ts` to point to the new location (e.g., `/assets/images/sigiriya.jpg`).

### Recommended Structure:
- `public/assets/images/` - For logos, general website graphics, and photos.
- `public/assets/videos/` - For background videos (like the hero section).
- `public/destinations/` - For destination cards (Sigiriya, Galle, etc.).
- `public/tours/` - For tour package thumbnails.
- `public/testimonials/` - For user avatar images.

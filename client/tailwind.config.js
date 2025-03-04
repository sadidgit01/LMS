/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'course-details-heading-small': ['26px', '36px'],
        'course-details-heading-large': ['36px', '44px'],
        'home-heading-small': ['28px', '34px'],
        'home-heading-large': ['48px', '56px'],
        'default': ['15px', '21px'],
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'                           
        // to make the grid (in whichever grid we use the 'auto') responsive according to the screen size. E.g. in the "CourseSection" compo, we used this custom class 'auto'. so the course card grid in home page will be responsive according to the screen size
      },
    },
  },
  plugins: [],
}
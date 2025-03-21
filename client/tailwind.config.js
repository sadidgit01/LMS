/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {                           // to create custom font sizes
        'course-details-heading-small': ['26px', '36px'],
        'course-details-heading-large': ['36px', '44px'],
        'home-heading-small': ['28px', '34px'],
        'home-heading-large': ['48px', '56px'],
        'default': ['15px', '21px'],
      },
      gridTemplateColumns: {                 // to create custom grid template columns
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',                           
        // to make the grid (in whichever grid we use the 'auto') responsive according to the screen size. E.g. in the "CourseSection" compo, we used this custom class 'auto'. so the course card grid in home page will be responsive according to the screen size
      },
      spacing: {                             // to create custom spacing
        'section-height': '500px',
      },

      maxWidth: {
        'course-card': '424px',
      },

      boxShadow: {
        'custom-card': '0px 4px 15px 2px rgba(0, 0, 0, 0.1)',
      },

    },
  },
  plugins: [],
}
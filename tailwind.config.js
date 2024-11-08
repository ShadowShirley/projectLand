/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale:{
        '102':'1.02',
        '65':'0.65',
        '175':'1.75',
      },
      borderWidth:{
        '1':'1px',
        '3':'3px',
      },
      borderColor:{
        'cardRate' : 'from-violet-bright_dark to-violet-light'
      },
      dropShadow:{
        'card': '0px 16px 6px rgba(0, 0, 0, 0.25)',

      },
      fontSize:{
        'xxs': '10px',
        '3xs': '8px'
      },
      padding:{
        '6px': '6px',
        '14px': '14px',
        '18px': '18px',
        '19px': '19px',
        '20px': '20px',
        '24px': '24px',
        '30px': '30px',
        '34px': '34px',
        '37.5px':'37.5px',
        '40px':'40px',
        '44px':'44px',
        '41px': '41px',
        '72px': '72px',
      },
      lineHeight:{
        '14':'56px',
        '12':'48px'
      },
      borderRadius:{
        '4xl': '30px',
        '48': '48px',
        '20': '20px',
      },
      screens:{
        '1920': '1920px',
        '1200': '1200px',
        '1024': '1024px',
        '768': '768px',
        '343': '343px',
        '320': '320px',
      },
      margin:{
        'hvw': '1vw',
        '7px':'7px',
        '18': '72px',
        '37.5':'37.5px',
        '74': '74px',
        '109': '109px',
        '320m': '10px',
        '768m': '52px',
        '1200m': '82px',
        '1920m': '374px',
      },
      keyframes: {
          "accordion-down": {
              from: { height: "0" },
              to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
              from: { height: "var(--radix-accordion-content-height)" },
              to: { height: "0" },
          },
      },
      animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors:{
        'orange':{
          DEFAULT:'#FFCE00',
        },
        'yellow':{
          'bright': '#F0BB21',
          'light': '#FEF0C7',
        },
        'black': {
          DEFAULT: '#1D2939',
          'light_black': '#344054',
        },
        'grey':{
          DEFAULT: '#D0D5DD',
          dark: '#667085',
          light_grey: '#EAECF0',
          lighter_grey: '#F2F4F7',
          lightest_grey: '#FBFBFB',
        },
        'white':'#FFFFFF',

        'violet':{
          Default: '#7F56D9',
          darker: '#20184E',
          darkest: '#53389E',
          dark: '#6941C6',
          bright: '#5925DC',
          bright_dark: '#7A5AF8',
          light:'#9E77ED',
          bright_light:'#7241D9',
        },

        'blue':{
          darkest: '#363F72',
          dark: '#175CD3',
          bright: '#2E90FA',
          blue: '#EFF8FF',
          lightest: '#F8F9FC',
        },

        'indigo':{
          darkest: '#4E5BA6',
          dark: '#6172F3',
          light: '#F0F9FF',
          default: '#3538CD',
        },
        'pink':{
          grey: '#D6BBFB',
        },

        'cyan':{
          default: '#026AA2',
          bright: '#0BA5EC',
          light: '#F0F9FF',
        },
      },
      fontFamily: {
        geometria: ['var(--font-geometria)']
      },
      },
    },
  };


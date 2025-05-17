/** @type {import('tailwindcss').Config} */
module.exports = {
    // Tailwind 3.x: JIT 엔진 내장, content 필드는 glob 배열
    content: [
      "./packages/ui/**/*.{ts,tsx}",
      "./apps/**/*.{ts,tsx,html}"
    ],
    theme: {
      extend: {}
    },
    plugins: []
  };
  
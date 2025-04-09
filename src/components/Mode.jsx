import { useState } from 'react';

const Mode = ({ theme, setTheme }) => {
  const daisyThemes = [
    'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave',
    'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua',
    'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula',
    'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee',
    'winter', 'dim', 'nord', 'sunset'
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Theme Switcher</h1>
      <select
        className="select select-bordered mt-4"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        {daisyThemes.map((themeName) => (
          <option key={themeName} value={themeName}>
            {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
          </option>
        ))}
      </select>

      {/* Test the theme */}
    </div>
  );
};

export default Mode;
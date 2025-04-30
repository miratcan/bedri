export const MAX_PIXEL_SIZE = 1000000;
export const MAX_ACTIVE_WORKERS = navigator.hardwareConcurrency || 4;

export const WEB_SAFE_FONTS = [
  'Arial',
  'Verdana',
  'Tahoma',
  'Trebuchet MS',
  'Times New Roman',
  'Georgia',
  'Garamond',
  'Courier New',
  'Brush Script MT'
];

export const USE_TYPES = [
  { value: 'lines', label: 'Lines' },
  { value: 'words', label: 'Words' }
];

export const DEFAULT_BLOCKS = `
Lorem ipsum dolor sit amet
consectetur adipiscing elit
sed do eiusmod tempor
incididunt ut labore
et dolore magna aliqua
Ut enim ad minim veniam
quis nostrud exercitation
ullamco laboris nisi
ut aliquip ex ea commodo
consequat Duis aute irure
dolor in reprehenderit
in voluptate velit esse
cillum dolore eu fugiat
nulla pariatur Excepteur
sint occaecat cupidatat
non proident sunt in
culpa qui officia deserunt
mollit anim id est laborum
`.trim(); 
export interface Project {
  id: number;
  name: string;
  summary: string;
  description: string;
  thumbnail: string;
  images: Array<string>;
  source: string;
}

export const projects = [
  {
    id: 1,
    name: 'Image Filter',
    summary: 'An image manipulation application written in C++.',
    description:
      'A C++ application using the OpenCV and Magick++ libraries to manipulate image files. Currently capable of' +
      ' neon-laser outline, laser-etched wood, and glass-cut effects.',
    thumbnail: 'assets/thumbnails/filter_thumb.png',
    images: [
      'assets/projects/filter/Darth_Vader.jpg',
      'assets/projects/filter/wood.png',
      'assets/projects/filter/glass3.png',
      'assets/projects/filter/neon.jpg'
    ],
    source: 'https://github.com/sigiltenebrae/Trench-3'
  },
  {
    id: 2,
    name: 'Custom DBMS',
    summary: 'A miniature SQL clone written in Java',
    description: 'An ACID compliant DBMS capable of handling variable-length records and B+ Tree parsing. ' +
      'Implements a page buffer for faster access time and writes all data to disk for persistent storage. Written in ' +
      'Java.',
    thumbnail: '',
    images: [],
    source: ''
  },
  {
    id: 3,
    name: 'Automated Garden',
    summary: 'Garden management utility on a Raspberry Pi',
    description: 'A python script running on a Raspberry Pi that uses sensors to determine when to automatically water ' +
      'plants. Connects to OpenWeather API to get the weekly weather forecast and cancel hydration if rain is ' +
      'predicted.',
    thumbnail: '',
    images: [],
    source: 'https://github.com/sigiltenebrae/AutoGarden'
  },
  {
    id: 4,
    name: 'Home Lab',
    summary: 'A home server running Proxmox.',
    description: 'A Dell r710 running Proxmox hosting 14 VMs and over 30 Docker containers. Routes home internet using pfSense. ' +
      'Hosts a BitWarden password manager, BookStacks wiki, NextCloud storage, and a set of DBMS\'s. ',
    thumbnail: 'assets/thumbnails/proxmox_thumbnail.png',
    images: [
      'assets/projects/homelab/proxmox_screen.png',
      'assets/projects/homelab/portainer_screen.png',
    ],
    source: ''
  },
  {
    id: 5,
    name: '3D Printers',
    summary: 'Machines that print in 3D',
    description: '',
    thumbnail: '',
    images: [],
    source: ''
  },
  {
    id: 6,
    name: 'CAD Projects',
    summary: 'Misc Designs',
    description: '',
    thumbnail: '',
    images: [],
    source: ''
  },
  {
    id: 7,
    name: 'M.A.M.E.',
    summary: 'Multiple Arcade Machine Emulator',
    description: 'A Raspberry Pi 3 based arcade emulator running RetroPie, with custom side panels, housing, ' +
      'and splash screen. Wired in functional buttons and joysticks, with USB controller support as well.',
    thumbnail: 'assets/thumbnails/mame_thumb.png',
    images: ['assets/projects/mame/mame.png'],
    source: ''
  },
  {
    id: 8,
    name: 'Angular WebApp',
    summary: 'Node.JS & Angular Web Server',
    description: '',
    thumbnail: '',
    images: [],
    source: ''
  },
];

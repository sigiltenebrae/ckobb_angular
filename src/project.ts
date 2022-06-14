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
      'An image manipulation application written in C++.',
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
    summary: '',
    description: '',
    thumbnail: '',
    images: [],
    source: ''
  },
  {
    id: 3,
    name: 'Automated Garden',
    summary: '',
    description: '',
    thumbnail: '',
    images: [],
    source: ''
  },
  {
    id: 4,
    name: 'Home Lab',
    summary: '',
    description: '',
    thumbnail: '',
    images: [],
    source: ''
  },
  {
    id: 5,
    name: '3D Printers',
    summary: '',
    description: '',
    thumbnail: '',
    images: [],
    source: ''
  },
  {
    id: 6,
    name: 'Multiple Arcade Machine Emulator',
    summary: '',
    description: '',
    thumbnail: '',
    images: [],
    source: ''
  },
];

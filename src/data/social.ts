export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconName: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/Rabie-khashaba',
    iconName: 'Github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rabie-khashaba/',
    iconName: 'Linkedin',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:khashabarabie@gmail.com',
    iconName: 'Mail',
  },
];

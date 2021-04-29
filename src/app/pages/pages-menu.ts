import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
    home: true,
  },
  {
    title: 'Fonctionnalités',
    group: true,
  },
  {
    title: 'Utilisateur',
    icon: 'person-outline',
    children: [
      {
        title: 'Ajouter un utilisateur',
        link: '/pages/utilisateur/add',
      },
      {
        title: 'Liste des utilisateurs',
        link: '/pages/utilisateur/list',
      },
    ],
  },
  {
    title: 'Contact',
    icon: 'people-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Ajouter un contact',
        link: '/pages/contact/add',
      },
      {
        title: 'Importer des contacts',
        link: '/pages/contact/add',
      },
      {
        title: 'List des contact',
        link: '/pages/contact/list',
      },
    ],
  },
  {
    title: 'Liste de diffusion',
    icon: 'file-text-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Créer une liste de diffusion',
        link: '/pages/contact/add',
      },
      {
        title: 'Liste des listes de diffusion',
        link: '/pages/contact/list',
      },
    ],
  },
  {
    title: 'Campagne',
    icon: 'message-circle-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Créer une campagne',
        link: '/pages/campagne/add',
      },
      {
        title: 'Liste des campagne',
        link: '/pages/campagne/list',
      },
    ],
  },
  {
    title: 'Canal Envoie',
    icon: 'paper-plane-outline',
    children: [
      {
        title: 'Ajouter un canal',
        link: '/pages/canalenvoi/add',
      },
      {
        title: 'Liste des canaux',
        link: '/pages/canalenvoi/list',
      },
    ],
  },
];

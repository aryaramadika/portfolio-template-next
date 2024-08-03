import { NavLink, Social } from "@/interfaces/data";
import Strings from "./strings";

export const socialList: Social[] = [
  { href: "https://github.com/aryaramadika", icon: "mdi:github" },

  {
    href: "https://www.instagram.com/aryaramadikaa",
    icon: "ri:instagram-fill",
  },
  {
    href: "https://www.linkedin.com/in/arya-ramadika-utama-82b518172/",
    icon: "mdi:linkedin",
  },
];

export const homeIcon: string[] = [
  "logos:react",
  "file-icons:nextjs",
  "logos:typescript-icon",
  "logos:ethereum",
  "logos:flutter",
  "vscode-icons:file-type-tailwind",
];

export const portfolios = [
  {
    name: "e.id Digital Identity WebApp",
    img: "img/e.id.png",
    link: "https://e.id/",
    // github: "https://github.com/langgamrhapsody",
  },
  {
    name: "e.id Admin Panel",
    img: "img/e.idadmin.png",
    link: "https://admin-e.pandi.id/",
  },
  {
    name: "Mandalachain",
    img: "img/mandala.png",
    link: "https://www.mandalachain.io/",
  },
  {
    name: "Republik DAO",
    img: "img/republikdao.png",
    link: "https://republikdao.io/",
  },
  {
    name: "Republik DAO Mint",
    img: "img/republikdaomint.png",
    link: "https://mint.republikdao.io/",
  },
  {
    name: "Guruku",
    img: "img/guruku.png",
    link: "https://guruku.com/",
  },
  {
    name: "Vacaba",
    img: "img/vacaba.png",
    link: "https://vacaba.id/",
  },
  {
    name: "Dhatu",
    img: "img/dhatu.png",
    link: "https://dhatu.io/",
  },
  {
    name: "Bali Blockchain Summit",
    img: "img/bbs.png",
    link: "https://www.baliblockchainsummit.com/",
  },
];

export const contacts = [
  {
    href: "https://wa.me/082144365203",
    icon: "ic:baseline-phone",
    text: "+62 821 443 65203",
  },
  {
    href: "mailto:aryaramadika78@gmail.com",
    icon: "mdi:email-fast-outline",
    text: "aryaramadika78@gmail.com",
  },
  {
    href: "https://www.google.com/maps/dir//Denpasar,+Denpasar+City,+Bali/@-8.6703711,115.1714297,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd2409b0e5e80db:0xe27334e8ccb9374a!2m2!1d115.2126293!2d-8.6704582?entry=ttu",
    icon: "mdi:location",
    text: "Bali, Indonesia",
  },
];

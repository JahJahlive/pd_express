import React from 'react';
import EmblaCarousel from './EmblaCarousel';


const OPTIONS = { loop: false }
const SLIDE_COUNT = 5
const SLIDES = [
  {
    id: 1,
    title: 'SERVICE RAPIDE',
    description: "Obtenez une réponse moins de 5 minutes après votre soumission. Consultez nos services et prix ici !",
    target: "target"
  },
  {
    id: 2,
    title: 'MEILLEURS PRIX EN VILLE',
    description: "Nous envoyons votre soumission à différents transporteurs et uniquement ceux qui ont les meilleurs prix vous contacteront.",
    target: "target 2"
  },
  {
    id: 3,
    title: 'SERVICE PROFESSIONNEL',
    description: "Nos transporteurs sont professionnels et nous faisons le suivi avec vous pour que vous soyez satisfaits. Demandez un devis gratuit ici !",
    target: "target 3"
  },
  {
    id: 4,
    title: 'SERVICE FLEXIBLE',
    description: "En cas d’imprévu, il est facile de changer la date de votre transport. Même pour les transports de dernières minutes, nous pouvons vous accommoder.",
    target: "target 4"
  }
]

const Hero = (props) => {
  // let { t } = useTranslation();

  return (
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
)};

export default Hero;
import React from 'react';
import { BlogCard, CardInfo, AboutInfo, Img, P } from './AboutStyles';
import useTranslation from "next-translate/useTranslation";

const About = () => {
  let { t, lang } = useTranslation();

  return (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', padding: '0 2%' }} id="projects">
    <BlogCard>
      <CardInfo>
        <h1 style={{color: "black" }}>A propos de Petit Déménagement Express.</h1>
      
        <p>Petit Déménagement Express est une agence de transport basée à Montréal et
spécialisée dans les déménagements et transports de marchandises. Nous
desservons aussi dans les autres villes comme Montreal, Toronto, Ottawa et même Québec.</p>
      <br />
      <p>Notre proactivité nous rend prompts à répondre à vos besoins dès que vous
nous contactez afin de traiter sans délai votre demande. Notre efficacité nous
pousse à trouver non seulement le prix le plus juste pour tous mais surtout le
plus compétitif du marché.</p>
        <br />
        <p>Choisir  Petit Déménagement Express, c’est s’assurer de travailler avec une
        agence de transport:</p>
        <br />
        <ul style={{ padding: "0 10px 0 50px"}}>
          <li>Disponible : 7J/7, de 8h à 20h pour répondre à vos besoins.</li> 
          <li>Fiable :nous ne transportons pas seulement vos biens, nous veillons à ce qu’ils arrivent bien en nombre et en qualité.</li> 
          <li>Expérimentée : pendant 5 ans, nous avons cumulé beaucoup de succès mais aussi tiré des leçons qui nous permettent de mieux vous apporter satisfaction.</li> 
          <li>Flexible : nous nous adaptons à vos contraintes et exigences pour vous donner la solution la plus adéquate à votre besoin.</li> 
        </ul>
      </CardInfo>
      <Img src='/images/transport-express-demenagemen-van-2-1.jpg' />
    </BlogCard>
    <AboutInfo>
      <P>
      Vous prévoyez d’effectuer un déménagement ou le transport de vos marchandises ?  Contactez Petit Déménagement Express dès maintenant et obtenez immédiatement un devis !
      </P>
      <P>
      Nous mettons à votre disposition des déménageurs expérimentés et efficaces. Pour avoir des informations supplémentaires sur nos services,
      composez le +1 514 799 4194 ou remplissez le formulaire de contact ci-des
      </P>
    </AboutInfo>
  </div>
)};

export default About;
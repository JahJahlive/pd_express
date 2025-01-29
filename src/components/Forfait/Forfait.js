import React, { useEffect, useState } from 'react';
import { FormCard, FooterWrapper, Slogan, Title, ForfaitTable, ForfaitItem } from './ForfaitStyles';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {ColorRing} from "react-loader-spinner";
import toastr from "toastr";

const Forfait = () => {
  return (
    <div>
      <FooterWrapper>
        <Title>Services offerts et prix</Title>
        <Slogan>
          Nos services s’adressent à toute personne physique 
          ou morale désireuse de transporter 
          ses biens ou marchandises d’un lieu 
          à un autre sans que cela soit une source de stress, 
          de préoccupations ou d’insécurité.
           Vous décidez de ce que vous payez 
           en fonction de votre budget et de vos besoins.
        </Slogan>
      </FooterWrapper>
      <FormCard>
        <p style={{ margin: '5rem', fontSize: '2.5rem', fontWeight: '800' }}>Nos services standards de déménagement à petit prix</p>
        <ForfaitTable>
          <ForfaitItem>
            <h2>Livraison a porte</h2><br />
            <p>
              Chez Petit Déménagement express, nous sommes conscients que le déménagement occasionne de grosses dépenses. 
              Pour vous alléger la tâche, nous mettons à votre disposition l’équipement dont vous 
              avez besoin pour vous permettre d’organiser vous-mêmes le transport de vos biens.
            </p>
            <h1>$60CAD/h</h1>
            <button class="btnForfait">
              <span>Demander un devis</span>
            </button>
          </ForfaitItem>
          <ForfaitItem style={{ backgroundColor: 'whitesmoke' }}>
            <h2>Avec aide du chauffeur</h2><br />
            <p>
              Vous souhaitez déménager et avez besoin de l’aide d’un chauffeur pour vous conduire ? 
              Envie d’être accompagné lors de votre départ ? 
              Notre service de déménagement avec aide du chauffeur est fait pour vous. 
              Contactez-nous pour obtenir une idée précise de combien cela va vous couter.
            </p>
            <h1>$80CAD/h</h1>
            <button class="btnForfait">
              <span>Demander un devis</span>
            </button>
          </ForfaitItem>
          <ForfaitItem>
            <h2>Chauffeur + 1 déménageur</h2><br />
            <p>
              Besoin de gros bras pour déménager ? Vous sollicitez l’aide d’un professionnel pour charger et décharger vos objets fragiles ? 
              Profitez de notre offre de location de matériel avec chauffeur dès maintenant et bénéficiez de l’expertise de nos agents déménageurs le jour J.
            </p>
            <h1>$120CAD/h</h1>
            <button class="btnForfait">
              <span>Demander un devis</span>
            </button>
          </ForfaitItem>
        </ForfaitTable>
      </FormCard>
    </div>

  );
};

export default Forfait;

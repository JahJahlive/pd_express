import React, { useEffect, useState } from 'react';
import { FormCard, FooterWrapper, Slogan, Title } from './CotationStyles';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {ColorRing} from "react-loader-spinner";
import toastr from "toastr";

const schema = yup.object().shape({
  dateDepart: yup.string(),
  nomcomplet: yup.string().required(),
  email: yup.string().email().required(),
  telephone: yup.string().required(),
  budget: yup.string().required(),
  typeproprietedepart: yup.string().required(),
  typeproprietedestination: yup.string().required(),
  obstacledepart: yup.string().required(),
  obstacledestination: yup.string().required(),
  adressedepart: yup.string().required(),
  adressedestination: yup.string().required(),
  message: yup.string()
}).required();

const Cotation = () => {
  const minDate = new Date().toISOString().split("T")[0];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    dateDepart: '',
    nomcomplet: '',
    email: "",
    telephone: "",
    budget: '',
    typeproprietedepart: "",
    typeproprietedestination: "",
    obstacledepart: "",
    obstacledestination: "",
    adressedepart: "",
    adressedestination: "",
    message: ""
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormState((formState) => {
        return {
            ...formState,
            [name]: value
        }});
};

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
   const response = await fetch('api/send', {
    method: 'POST',
    body: JSON.stringify({
      ...data,
      message: formState.message
    }),
    headers: {
      'Content-Type': 'application/json'
    }
   });

   const dataResponse = await response;

   if (dataResponse.status === 200) {
    toastr.success("Nous vous contactons dans quelques instants.", "Soumission reussie.");
   } else {
    toastr.error("Veuillez reessayer dans quelques instants ou appelez nous.", "Probleme pendant la soumission");
   }

   setIsSubmitting(false);
  };

  return (
    <div>
      <FooterWrapper>
        <Title>Demande de cotation</Title>
        <Slogan>Recevez une estimation dans les 30 prochaines minutes</Slogan>
      </FooterWrapper>
      <FormCard>
        <h2>Remplissez le formulaire </h2><br /> <br />
        <form  onSubmit={handleSubmit(onSubmit)} method="post" class="wpcf7-form init" aria-label="Formulaire de contact">
          <div className="flexBloc" style={{ display: "flex", justifyContent: 'space-around', gap: '10px' }}>
            <div className="block" style={{ textAlign: 'left'}}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div>
                  <label><input type="radio" name="typetransport" value="Transport/Livraison" checked="checked" />
                  <span class="wpcf7-list-item-label">Transport/Livraison</span></label>
                </div>
                <div>
                  <label><input type="radio" name="typetransport" value="Petit Déménagement"/>
                  <span class="wpcf7-list-item-label">Petit Déménagement</span>
                  </label>
                </div>
              </div>
              <br />
              <label> Date de depart (30 Jrs max)<br />
                <input 
                {...register("dateDepart")}
                onChange={handleChange} 
                value={formState.dateDepart} type="date" 
                min={minDate} name="dateDepart"
                 /><br />
                <p>{errors.dateDepart?.message}</p>
              </label>
              <br />
              <label>Date flexible : </label> 
              <label style={{ margin: "0 10px"}}>
                <input type="radio" name="dateflexible" value="Oui" checked="checked" />
                <span class="wpcf7-list-item-label">Oui</span>
              </label>
              <label>
                <input type="radio" name="dateflexible" value="Non" />
                <span class="wpcf7-list-item-label">Non</span>
              </label>
              <input 
                value={formState.nomcomplet}
                size="30"  
                className={errors.nomcomplet ? 'error' : ''}
                aria-required="true" aria-invalid="false" type="text"
                name="nomcomplet"
                placeholder='Nom complet' 
                {...register("nomcomplet")}
                onChange={handleChange}
              />
                <input
                  {...register("email")}
                  onChange={handleChange}
                  value={formState.email}
                  className={errors.email ? 'error' : ''} 
                  placeholder='E-mail'
                  type="email" name="email"
                />
                <br />
                <input 
                  {...register("telephone")}
                  onChange={handleChange}
                  className={errors.telephone ? 'error' : ''}
                   value={formState.telephone} 
                  type="tel" name="telephone" 
                  placeholder="Telephone" 
                />
              <input 
                {...register("budget")}
                onChange={handleChange}
                className={errors.budget ? 'error' : ''}
                
                value={formState.budget} 
                type="text" name="budget" 
                placeholder='Budget ($)' 
              />
            </div>
            <div className="block" ><br />
              <select 
                onChange={handleChange}
                {...register("typeproprietedepart")} className={errors.typeproprietedepart ? 'error' : ''}  aria-required="true" aria-invalid="false" name="typeproprietedepart"  {...register("typeproprietedepart")}>
                  <option value="">—Type de propriété départ—</option>
                  <option value="Appartement loué">Appartement loué</option>
                  <option value="Maison Louée">Maison Louée</option>
                  <option value="Condo Propriétaire">Condo Propriétaire</option>
                  <option value="Maison Propriétaire">Maison Propriétaire</option>
                  <option value="Bureau Commercial">Bureau Commercial</option>
                  <option value="Chalet">Chalet</option>
                  <option value="Entrepôt">Entrepôt</option>
                  <option value="Autres">Autres</option>
              </select>
              <select 
                onChange={handleChange}
                {...register("typeproprietedestination")} className={errors.typeproprietedestination ? 'error' : ''}  {...register("typeproprietedestination")} class="" aria-required="true" aria-invalid="false" name="typeproprietedestination">
                  <option value="">—Type de propriété destination—</option>
                  <option value="Appartement loué">Appartement loué</option>
                  <option value="Maison Louée">Maison Louée</option>
                  <option value="Condo Propriétaire">Condo Propriétaire</option>
                  <option value="Maison Propriétaire">Maison Propriétaire</option>
                  <option value="Bureau Commercial">Bureau Commercial</option>
                  <option value="Chalet">Chalet</option>
                  <option value="Entrepôt">Entrepôt</option>
                  <option value="Autres">Autres</option>
              </select>
             
              <input 
                {...register("adressedepart")}
                onChange={handleChange}
                value={formState.adressedepart}  
                className={errors.adressedepart ? 'error' : ''} 
                type="text" 
               name="adressedepart" placeholder='Adresse de départ' />
              <input 
                {...register("adressedestination")}
                onChange={handleChange}
                value={formState.adressedestination}  className={errors.adressedestination ? 'error' : ''} size="30" aria-required="true" aria-invalid="false" type="text" name="adressedestination" placeholder='Adresse de destination' />
              <select 
                 {...register("obstacledepart")}
              onChange={handleChange}
               className={errors.obstacledepart ? 'error' : ''} aria-required="true" aria-invalid="false" name="obstacledepart">
                  <option value="">—Obstacles au départ—</option>
                  <option value="Escaliers (Préciser nombre de marches en commentaires)">Escaliers (Préciser nombre de marches en commentaires)</option>
                  <option value="Ascenseur">Ascenseur</option>
                  <option value="Aucun - Rez de chaussée">Aucun - Rez de chaussée</option>
              </select>
              <select
                {...register("obstacledestination")}
                onChange={handleChange}
                className={errors.obstacledestination ? 'error' : ''} class="" aria-required="true" aria-invalid="false" name="obstacledestination">
                  <option value="">—Obstacles à destination—</option>
                  <option value="Escaliers (Préciser nombre de marches en commentaires)">Escaliers (Préciser nombre de marches en commentaires)</option>
                  <option value="Ascenseur">Ascenseur</option>
                  <option value="Aucun - Rez de chaussée">Aucun - Rez de chaussée</option>
              </select>
            </div>
            <div  className="block" style={{ textAlign: 'right'}}><br />
                <textarea 
                onChange={handleChange}
                cols="40" rows="10" s
                placeholder="Précisez vos besoins - Liste d'objets à déménager, objets délicats, besoin de déménageurs, nombre de marches d'escalier, etc." 
                name="message">{formState.message}</textarea>
            </div>
          </div>
          <button class="wpcf7-form-control wpcf7-submit has-spinner" type="submit">
            <span>Soumettre</span>
            {
              isSubmitting && 
              <ColorRing
                visible={true}
                height="30"
                width="30"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['white', 'white', 'white', 'white', 'white']}
                />
            }
          </button>
        </form>
      </FormCard>
    </div>

  );
};

export default Cotation;

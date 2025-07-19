'use client';
import InfosHouse from '@/components/AddHouseSteps/InfosHouse/InfosHouse';
import Localisation from '@/components/AddHouseSteps/Localisation/Localisation';
import Options from '@/components/AddHouseSteps/Options/Options';
import Photos from '@/components/AddHouseSteps/Photos/Photos';
import Price from '@/components/AddHouseSteps/Price/Price';
import Texts from '@/components/AddHouseSteps/Texts/Texts';
import TypeLogement from '@/components/AddHouseSteps/TypeLogement/TypeLogement';
import useStepper from '@/store/StepperStore';
import { IHouseForm } from '@/utils/types/house.types';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { Snackbar, Alert } from '@mui/material';

import './Add.css';
import { createHouse } from '@/api/house';

const AddHouseForm = () => {
  const [open, setOpen] = useState(false);
  const {
    currentStep,
    goNextStep,
    setTotalSteps,
    goPreviousStep,
    resetStepper,
  } = useStepper();
  const methods = useForm<IHouseForm>({
    defaultValues: {
      type: '',
      localisation: '',
      coordinates: [0, 0],
      superficie: 0,
      chambres: 0,
      lits: 0,
      sdb: 1,
      cuisine: 1,
      options: [],
      photos: [],
      titre: '',
      desc: '',
      price: 0,
    },
  });
  const watched = useWatch({ control: methods.control });

  const handleNextStep = async () => {
    if (currentStep === 7) {
      console.log(methods.getValues());
      createHouse(methods.getValues()).then((response) => {
        console.log(response);
      });
      return;
    }
    const isValid = await methods.trigger();

    if (isValid) {
      goNextStep();
    } else {
      const errors = methods.formState.errors;
      console.log(errors);
      // displayFormError(errors);
    }
  };

  useEffect(() => {
    setTotalSteps(7);
  }, []);

  const getStep = (step: number) => {
    switch (step) {
      case 1:
        return <TypeLogement />;
      case 2:
        return <Localisation />;
      case 3:
        return <InfosHouse />;
      case 4:
        return <Options />;
      case 5:
        return <Photos />;
      case 6:
        return <Texts />;
      case 7:
        return <Price />;
      default:
        return (
          <div>
            <p>error</p>
          </div>
        );
    }
  };

  const getTitle = (step: number) => {
    switch (step) {
      case 1:
        return 'Parmi les propositions suivantes, laquelle décrit le mieux votre logement ?';
      case 2:
        return 'Où est situé votre logement ?';
      case 3:
        return 'Donnez les informations principales concernant votre logement';
      case 4:
        return 'Indiquez a vos clients quels sont les équipements de votre logement';
      case 5:
        return 'Ajoutez quelques photos de votre logements ';
      case 6:
        return 'À présent, donnez un titre & une description a votre annonce';
      case 7:
        return 'À présent, définissez un prix de votre bien';
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return !!watched.type;
      case 2:
        return (
          !!watched.localisation &&
          watched.coordinates?.length === 2 &&
          watched.coordinates.every((c: number) => typeof c === 'number')
        );
      case 3:
        return (
          !!watched.superficie &&
          watched.superficie > 0 &&
          !!watched.chambres &&
          watched.chambres >= 0 &&
          !!watched.lits &&
          watched.lits >= 0 &&
          !!watched.sdb &&
          watched.sdb >= 0 &&
          !!watched.cuisine &&
          watched.cuisine >= 0
        );
      case 4:
        return Array.isArray(watched.options);
      case 5:
        return watched.photos && watched.photos.length > 0;
      case 6:
        return !!watched.titre && !!watched.desc;
      case 7:
        return !!watched.price && watched.price > 0;
      default:
        return false;
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="add-form-container">
        <h3>Étape 0{currentStep}</h3>
        <h2>{getTitle(currentStep)}</h2>
        <div style={{ width: '100%', flexGrow: 1, paddingTop: 10 }}>
          {getStep(currentStep)}
        </div>
        <div className="form-footer">
          {currentStep == 1 ? (
            <div></div>
          ) : (
            <button onClick={goPreviousStep} className="back">
              Retour
            </button>
          )}

          <div
            onClick={() => {
              if (!isStepValid()) {
                setOpen(true); // Show snackbar
              } else {
                handleNextStep(); // Proceed
              }
            }}
            style={{ display: 'inline-block', cursor: 'pointer' }}
          >
            <button
              disabled={!isStepValid()}
              style={{
                backgroundColor: !isStepValid() ? '#7E7E7E' : 'black',
                pointerEvents: 'none', // Disable pointer inside button
              }}
              className="continue"
            >
              Suivant
            </button>
          </div>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            severity="warning"
            onClose={() => setOpen(false)}
            sx={{ width: '100%' }}
          >
            Veuillez remplir tous les champs requis ou cliquer au moins sur un
            des choix avant de continuer.
          </Alert>
        </Snackbar>
      </div>
    </FormProvider>
  );
};

export default AddHouseForm;

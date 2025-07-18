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
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import './Add.css';
import { Divider } from 'antd';

const AddHouseForm = () => {
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
      coordinates: [],
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

  const handleNextStep = async () => {
    if (currentStep === 7) {
      console.log(methods.getValues());
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
            <button onClick={goPreviousStep}>Retour</button>
          )}

          <button onClick={handleNextStep}>Suivant</button>
        </div>
      </div>
    </FormProvider>
  );
};

export default AddHouseForm;

import type { StateCreator } from "zustand";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Store {
  currentStep: number;
  enquiryData: {
    applications: any[];
    uploadDocuments: any[];
    refusedDoc: string;
    personalData: any;
    addressData: any;
    educationData: {
      detailsOne: any;
      detailsTwo: any;
      diplomaDetails: any;
      graduateDetails: any;
      postGraduateDetails: any;
      phdDetails: any;
    };
    ieltsData: any;
  };
}

interface Action {
  setCurrentStep: (step: number) => void;
  setEnquiryData: (data: any) => void;
  resetData: () => void;
}

export const useApplicationStore = create<Store & Action>(
  persist(
    devtools((set) => ({
      currentStep: 1,
      enquiryData: {
        applications: [],
        uploadDocuments: [],
        refusedDoc: "",
        personalData: {},
        addressData: {},
        educationData: {
          detailsOne: {},
          detailsTwo: {},
          diplomaDetails: {},
          graduateDetails: {},
          postGraduateDetails: {},
          phdDetails: {},
        },
        ieltsData: {},
      },
      setCurrentStep: (step) => set({ currentStep: step }),
      setEnquiryData: (data) => set({ enquiryData: data }),
      resetData: () =>
        set({
          currentStep: 1,
          enquiryData: {
            applications: [],
            uploadDocuments: [],
            refusedDoc: "",
            personalData: {},
            addressData: {},
            educationData: {
              detailsOne: {},
              detailsTwo: {},
              diplomaDetails: {},
              graduateDetails: {},
              postGraduateDetails: {},
              phdDetails: {},
            },
            ieltsData: {},
          },
        }),
    })),
    {
      name: "CD-APPLICATION-STORE",
    },
  ) as StateCreator<Store & Action, [], []>,
);

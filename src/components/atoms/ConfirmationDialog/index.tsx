"use client";
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MainButton } from "..";

interface ConfirmationDialogProps {
  isOpen: boolean;
  closeModal: () => void;
  onConfirm?: () => void;
  title?: string;
  description: string;
}

export const ConfirmationDialog = ({
  isOpen,
  closeModal,
  onConfirm,
  title,
  description,
}: ConfirmationDialogProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-textColor"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-textColor">{description}</p>
                </div>

                <div className="mt-6 flex gap-2 text-center justify-center">
                  <MainButton
                    label="Cancel"
                    btnStyle="Secondary"
                    btnSize="Medium"
                    onClick={closeModal}
                  />
                  <MainButton
                    label="Log out"
                    btnStyle="Primary"
                    btnSize="Medium"
                    onClick={onConfirm}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

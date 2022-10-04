import { Dialog, Transition } from "@headlessui/react";
import { Fragment, PropsWithChildren } from "react";
import FSDFooter from "./Footer";
import FSDHeader from "./Header";

interface IFullScreenDialogProps {
  open: boolean;
  className?: string;
  onClose: () => void;
}

const FullScreenDialog = (
  props: PropsWithChildren<IFullScreenDialogProps>,
): JSX.Element => {
  const { open, children, className = "" } = props;

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto z-100"
        onClose={() => {}}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300 "
          enterFrom="opacity-0 scale-90 transform"
          enterTo="opacity-100 scale-100 transform"
          leave="ease-in duration-200 transform"
          leaveFrom="opacity-100 scale-100 transform"
          leaveTo="opacity-0 scale-90 transform"
        >
          <div
            className={`inset-0  bg-primary-3 w-full h-full overflow-y-auto ${className}`}
          >
            {children}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

FullScreenDialog.Header = FSDHeader;

FullScreenDialog.Footer = FSDFooter;

export default FullScreenDialog;

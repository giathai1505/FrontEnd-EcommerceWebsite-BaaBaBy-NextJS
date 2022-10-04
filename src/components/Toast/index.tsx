import { ToastContainer } from "react-toastify";
interface IToast {}

const Toast: React.FC<IToast> = ({ children }) => {
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </>
  );
};

export default Toast;

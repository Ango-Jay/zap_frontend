import { toggleIsModalOpen } from '@/store/appSlice';
import { UseAppState } from '@/store/appSlice/useAppState';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';

interface Props {
  children: React.ReactNode;
  closeModal?: () => void;
  uniqueKey?: string;
}
export const ModalTransition = ({ children, closeModal, uniqueKey }: Props) => {
  const dispatch = useAppDispatch();
  const { isModalOpen } = UseAppState();

  useEffect(() => {
    if (!isModalOpen) {
      dispatch(toggleIsModalOpen(true));
    }
    return () => {
      dispatch(toggleIsModalOpen(false));
    };
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={uniqueKey ? uniqueKey : 'modal'}
        className="w-full min-w-[100vw] min-h-[100vh] fixed top-0 left-0 flex justify-center items-center z-[999]"
        variants={{
          visible: {
            opacity: 1,
          },
          hidden: {
            opacity: 0,
          },
        }}
        initial="hidden"
        animate="visible"
        exit={'hidden'}
      >
        {children}
        <div
          className="w-full h-full fixed top-0 left-0 z-[200] bg-black/20 blur-lg"
          onClick={closeModal}
        />
      </motion.div>
    </AnimatePresence>
  );
};

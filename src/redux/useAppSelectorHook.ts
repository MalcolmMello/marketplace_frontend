import { useAppSelector } from "../hooks";

const useResponsibleState = () => {
    const responsible = useAppSelector((state) => state.responsible);

    return responsible;
};

export default useResponsibleState;
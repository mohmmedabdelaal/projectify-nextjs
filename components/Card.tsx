import clsx from "clsx";
import {checkIsOnDemandRevalidate} from "next/dist/server/api-utils";

const Card = ({className,children}) => {
    return (
        <div className={clsx('rounded-3xl py-4 drop-shadow-xl bg-white',className)}>
            {children}
        </div>
    );
};

export default Card;

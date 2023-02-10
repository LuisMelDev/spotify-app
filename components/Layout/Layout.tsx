import { FC, useEffect, useState } from "react";
import { Navbar } from "../Navbar";

export const Layout: FC<any> = ({ children }) => {
    const [isHydrated, setIsHydrated] = useState(false);

    //Wait till NextJS rehydration completes
    useEffect(() => {
        setIsHydrated(true);
    }, []);

    return (
        <>
            {isHydrated ? (
                <>
                    <Navbar />
                    <main style={{ paddingBottom: "1.5rem" }}>{children}</main>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};

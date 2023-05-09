import '@/styles/global.css'
import GlassPane from "@/components/glassPane";
import {checkIsOnDemandRevalidate} from "next/dist/server/api-utils";


const AuthRootLayout = ({children}) => {
    return (
        <html lang="en">
            <head/>
        <body className='h-screen w-screen rainbow-mesh p-6'>
            <GlassPane className="w-full h-full flex items-center justify-center">
                {children}
            </GlassPane>
        </body>
        </html>
    );
};

export default AuthRootLayout;

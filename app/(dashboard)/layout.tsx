import '@/styles/global.css'
import GlassPane from "@/components/GlassPane";

const DashboardRootLayout = ({children}) => {
    return (
        <html>
            <head/>
            <body lang='en' className='h-screen w-screen rainbow-mesh p-6'>
                <GlassPane className="w-full h-full flex items-center justify-center">

                </GlassPane>
            </body>
        </html>
    );
};

export default DashboardRootLayout;

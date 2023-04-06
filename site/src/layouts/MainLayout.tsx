import { ReactNode } from "react"
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../lib/theme';
import Head from 'next/head';
import { CustomizeIconContext } from '../components/CustomizeIconContext';
import { MobileNavigationProvider } from '../components/MobileNavigationProvider';
import PageLayout from "./PageLayout";
import MobileMenu from "src/components/MobileMenu";
import HeadingNavigationProvider from "src/components/HeadingNavigationProvider";

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Lucide</title>
      </Head>
      <ChakraProvider theme={customTheme}>
        <MobileNavigationProvider>
          <CustomizeIconContext>
            <HeadingNavigationProvider>
              <MobileMenu />
              <PageLayout>
                {children}
              </PageLayout>
            </HeadingNavigationProvider>
          </CustomizeIconContext>
        </MobileNavigationProvider>
      </ChakraProvider>
    </>
  )
}

export default MainLayout

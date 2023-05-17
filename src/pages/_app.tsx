import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@/components/global'
import { theme, darkTheme } from "@/theme"
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [useDarkTheme, setUseDarkTheme] = useState(false)

  const toggleTheme = () => setUseDarkTheme(!useDarkTheme)

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : theme}>
      <GlobalStyle/>
      <Component {...pageProps} toggleTheme={toggleTheme}/>
    </ThemeProvider>
  )
}

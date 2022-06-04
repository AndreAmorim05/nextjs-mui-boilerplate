import React from 'react'
import { makeStyles } from '@material-ui/core'
import Head from 'next/head'
import styled from 'styled-components'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#2d2d2d',
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    width: '100vw'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}))

// theme.pallet.background.dark

const App = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

`

const DashLayout = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  background-color: bisque;
  grid-template-columns: 11rem auto 20rem;
  overflow: hidden;
`

function Layout({children, title}) {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8'/>
        <meta name='viewport' content='initial-scale-1.0, width-device-witdth'/>
      </Head>
      <App>
        <DashLayout>
          <h1>Sidebar</h1>
          <div>
            {children}
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nemo veritatis quas reprehenderit. Dignissimos quaerat officiis eum vitae doloremque nesciunt sunt, cum delectus neque itaque corporis corrupti eaque iusto consectetur.</p>
          </div>
          <h2>Rightbar</h2>
        </DashLayout>
      </App>
    </>
  )
}

export default Layout

{/* <div className={classes.root}>
        <div>Sidebar</div>
        <div>Navbar</div>
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              {children}
            </div>
          </div>
        </div> */}
import { useState } from "react";
import {
  makeStyles,
  Hidden,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Avatar,
  Divider,
  Typography,
  Button
} from '@material-ui/core'
import HomeIcon from '@mui/icons-material/Home'
import { borderRight } from "@mui/system";


const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 240,
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: 'calc(100% -64px)',
    borderRight: 'none'
  },
  avatar: {
    cursor: 'pointer',
    width: 24,
    height: 24
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3)
  },
  listItemText: {
    fontSize: 14
  }
}))


function Sidebar() {
  const classes = useStyles()

  const content = (
    <Box height="100%" display="flex" flexDirection="colum">
      
    </Box>
  )
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar
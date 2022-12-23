import React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
// import Carousel from "../../Carousel";
import EpisodeList from '../EpisodeList'
import MoiveList from '../MovieList'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

function Categories({eps}) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <div className="bg-[#f5f5f5] pt-2 md:mt-6 md:pt-4">
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            centered
            aria-label="basic tabs example"
          >
            <Tab label="Tập" {...a11yProps(0)} />
            <Tab label="Xem thêm" {...a11yProps(1)} />
          </Tabs>
        </Box>
      </div>
      <div className="flex justify-center">
        <div className=" w-full md:bg-[#f5f5f5] md:mt-6 md:w-[770px] md:rounded-2xl">
          <TabPanel value={value} index={0}>
            <EpisodeList eps ={eps}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <MoiveList />
          </TabPanel>
        </div>
      </div>
    </Box>
  )
}

export default Categories

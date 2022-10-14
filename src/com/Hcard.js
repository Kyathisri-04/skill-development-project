import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const villa = [
  {
    imgPath:'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGFzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    imgPath:'https://img.freepik.com/premium-photo/interior-home-design-living-room-with-open-kitchen-loft-house_41487-613.jpg',
  },
  {
    imgPath:'https://s3-ap-southeast-1.amazonaws.com/static-pages-test/static-pages/img/full-house/villa/master-bedroom.jpg',
  },
];
const medium = [
  {
    imgPath:'https://www.homepictures.in/wp-content/uploads/2015/08/Capture31.png'
  },
  {
    imgPath:'https://i.pinimg.com/736x/a3/a9/39/a3a9395ec44ac3407754db1f69c01d55.jpg'
  },
  {
    imgPath:'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/02/25113145/PM_UC-2_1.jpg'
  }
]

const small = [
  {
    imgPath:'https://engineeringdiscoveries.com/wp-content/uploads/2021/07/196468882_329618705333209_253316553476040020_n.jpg'
  },
  {
    imgPath:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-space-design-stenkullava-gen-44-06-1561396687.jpg'
  },
  {
    imgPath:'https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/nine-small-house-interior-design-hacks/two-seater-couches-and-wall-mounts-design-hack.jpg'
  },
]

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = villa.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{villa[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {villa.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>

    
  );
}

export default SwipeableTextMobileStepper;

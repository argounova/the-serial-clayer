import { useState } from 'react'
import { motion } from 'framer-motion'
import { ContactStyles } from './style'
import { 
  Box,
  Button,
  TextField,
  Typography
} from '@mui/material'
import emailjs from '@emailjs/browser'


export const Contact = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showContactForm, setShowContactForm] = useState(true)
  const [showLoading, setShowLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showFail, setShowFail] = useState(false)
  const templateParams = {
    user_name: userName,
    user_email: userEmail,
    message: message
  }

  const handleSendMessage = () => {
    setShowContactForm(false)
    setShowLoading(true)
    emailjs.send('service_l8xkawv', 'turn17media_contact', templateParams, 'd-nj0U9pmkBW1-kef')
    .then(function(response) {
        console.log(response)
        setShowLoading(false)
        setShowSuccess(true)
      }, function(error) {
        console.log(error)
        setShowFail(true)
      })
  }

  return (
    <ContactStyles>
      <Box>
        <Typography
          variant='h5'
          align='center'
          gutterBottom
        >
          Thank you for visiting our site.  Please bear with us during construction.  Feel free to visit our <span><a href="https://theserialclayer.etsy.com" target="_blank">Etsy</a></span> shop or contact us below with any questions.
        </Typography>
      </Box>
        { showContactForm && (
            <div className='contact-form'>
                <TextField
                    fullWidth
                    required
                    id="name"
                    label="Name"
                    variant="outlined"
                    color="error"
                    onChange={(e) => setUserName(e.target.value)}
                    sx={{ m: 1 }}
                />
                <TextField
                    fullWidth
                    required
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    color="error"
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ m: 1 }}
                />
                <TextField
                    fullWidth
                    required
                    id="message"
                    label="Message"
                    variant="outlined"
                    color="error"
                    onChange={(e) => setMessage(e.target.value)}
                    multiline
                    minRows={5}
                    sx={{ m: 1 }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ m: 1 }}
                    style={{ backgroundColor: 'var(--red1)' }}
                    onClick={handleSendMessage}
                >Send</Button>   
            </div>
        )}
        { showLoading && (
          <div className='contact-form' style={{ justifyContent: 'center' }}>
            <h2 style={{ fontFamily: 'fascinate' }}>SENDING...</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350">
              <motion.g>
                <motion.circle
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  }}
                  cx="175"
                  cy="175"
                  r="100"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                </motion.circle>
              </motion.g>
            </svg>
          </div>
        )}
        { showSuccess && (
            <div className='contact-form' style={{ justifyContent: 'center' }}>
                <h2 style={{ textAlign: 'center' }}>Thank you for contacting us.</h2>
                <h4 style={{ textAlign: 'center' }}>We will get back to you within 2-3 business days!</h4>
            </div>
        )}
        { showFail && (
            <div className='contact-form' style={{ justifyContent: 'center' }}>
                <h2 style={{ textAlign: 'center' }}>Something went wrong...</h2>
                <h4 style={{ textAlign: 'center' }}>Please email us at info@theserialclayer.com</h4>
            </div>
        )}     
    </ContactStyles>
  )
}
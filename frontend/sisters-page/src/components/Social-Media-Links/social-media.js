import styled from 'styled-components'

import SpotifyIcon from '../../assets/images/social-media/black-version/spotify.svg'
import InstagramIcon from '../../assets/images/social-media/black-version/instagram.svg'
import YouTubeIcon from '../../assets/images/social-media/black-version/youtube.svg'
import LinkedinIcon from '../../assets/images/social-media/black-version/linkedin.svg'

const SocialMedia = () => {
  return (
    <Wrapper>
      <IconContainer>
        <Icon href='https://www.instagram.com'>
          <img src={InstagramIcon} alt='instagram icon' target='_blank' />
        </Icon>
        <Icon href='https://www.spotify.com'>
          <img src={SpotifyIcon} alt='spotify icon' target='_blank' />
        </Icon>
        <Icon href='https://www.youtube.com'>
          <img src={YouTubeIcon} alt='youtube icon' target='_blank' />
        </Icon>
        <Icon href='https://www.linkedin.com'>
          <img src={LinkedinIcon} alt='linkedin icon' target='_blank' />
        </Icon>
      </IconContainer>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  justify-content: center;
  display: flex;
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  //justify-content:end;
`
const Icon = styled.a`
  width: 100px;
  height: 100px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export default SocialMedia

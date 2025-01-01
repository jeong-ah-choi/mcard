import { css } from '@emotion/react'
import { Link, useLocation } from 'react-router-dom'
import { signOut } from 'firebase/auth'

import { colors } from '@/styles/colorPalette'
import Flex from './Flex'
import Button from './Button'
import useUser from '@hooks/auth/useUser'
import { useCallback } from 'react'
import { auth } from '@remote/firebase'

function Navbar() {
  const location = useLocation()
  const showSignButton =
    ['/signup', 'signin'].includes(location.pathname) === false

  const user = useUser()

  const handleLogout = useCallback(() => {
    signOut(auth)
  }, [])

  const renderButton = useCallback(() => {
    if (user != null) {
      return (
        <Button
          onClick={() => {
            handleLogout()
          }}
        >
          로그아웃
        </Button>
      )
    }

    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button>로그인/회원가입</Button>
        </Link>
      )
    }

    return null
  }, [user, showSignButton])

  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to="/">홈</Link>
      {renderButton()}
    </Flex>
  )
}

const navbarContainerStyles = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.grey};
`

export default Navbar

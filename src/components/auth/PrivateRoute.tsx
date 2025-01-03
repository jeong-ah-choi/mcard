import { Navigate } from 'react-router-dom'

import useUser from '@hooks/auth/useUser'

// 유저의 정보를 토대로 어떤 페이지로 보낼지 결정하는 라우트
function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = useUser()

  if (user == null) {
    return <Navigate to="/signin" replace={true} />
  }

  return <>{children}</>
}

export default PrivateRoute

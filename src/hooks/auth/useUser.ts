import { useRecoilValue } from 'recoil'
import { userAtom } from '@/atoms/User'

function useUser() {
  return useRecoilValue(userAtom)
}

export default useUser

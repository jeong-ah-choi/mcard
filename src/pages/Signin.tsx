import { useCallback } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '@/remote/firebase'
import { FirebaseError } from 'firebase/app'

import Form from '@/components/signin/Form'
import { FormValues } from '@/models/signin'
import { useAlertContext } from '@/contexts/AlertContext'

function SigninPage() {
  const { open } = useAlertContext()
  const navigate = useNavigate()

  const handleSubmit = useCallback(async (formValues: FormValues) => {
    const { email, password } = formValues

    try {
      await signInWithEmailAndPassword(auth, email, password)

      navigate('/')
    } catch (e) {
      // 파이어베이스 에러
      if (e instanceof FirebaseError) {
        if (e.code === 'auth/wrong-password') {
          open({
            title: '계정의 정보를 다시 확인해주세요.',
            onButtonClick: () => {},
          })
        }
      }

      // 일반적인 에러
      open({
        title: '잠시 후 다시 시도해주세요.',
        onButtonClick: () => {},
      })
    }
  }, [])

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SigninPage

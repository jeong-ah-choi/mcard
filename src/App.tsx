import React from 'react'
import logo from './logo.svg'
import './App.css'
import Text from './components/shared/Text'
import Input from './components/shared/Input'
import TextField from './components/shared/TextField'
import Alert from './components/shared/Alert'

import { useAlertContext } from '@contexts/AlertContext'
import Button from './components/shared/Button'

function App() {
  const { open } = useAlertContext()

  return (
    <div>
      <Text typography="t1">t1</Text>
      <Text typography="t2">t2</Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text>t5</Text>

      <Input />
      <Input aria-invalid={true} />

      <TextField label="아이디" />
      <TextField label="패스워드" hasError={true} />

      {/* <Alert
        open={true}
        title="알림"
        description="안녕"
        onButtonClick={() => {}}
      /> */}

      <Button
        onClick={() => {
          open({
            title: '카드신청완료',
            description: '내역페이지에서 확인해주세요',
            onButtonClick: () => {},
          })
        }}
      >
        Alert 오픈
      </Button>
    </div>
  )
}

export default App

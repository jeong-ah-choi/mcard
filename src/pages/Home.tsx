import { Suspense } from 'react'

import AdBanners from '@/components/home/AdBanners'
import CardList from '@/components/home/CardList'
import Button from '@/components/shared/Button'
import Top from '@/components/shared/Top'
import ListRow from '@/components/shared/ListRow'

function HomePage() {
  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택이 좋은 카드를 모아봤어요"
      />
      <Button>안녕</Button>
      <AdBanners />
      <Button>안녕</Button>
      <Suspense
        fallback={[...new Array(10)].map((_, idx) => (
          <ListRow.Skeleton key={idx} />
        ))}
      >
        <CardList />
      </Suspense>
      <Button>안녕</Button>
    </div>
  )
}

export default HomePage

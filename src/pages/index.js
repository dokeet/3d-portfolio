import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import Go from '@/components/dom/go'

const Sphere = dynamic(() => import('@/components/canvas/Sphere'), {
  ssr: false,
})

const Page = ({ title }) => {
  useStore.setState({ title })
  return (
    <div className='h-screen'>
      <Sphere r3f />
      <Go />
    </div>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Sphere',
    },
  }
}

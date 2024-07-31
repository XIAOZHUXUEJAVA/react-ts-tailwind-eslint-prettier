import BearButton from './BearButton'
import useBearStore from './BearStore'

const BearCounter: React.FC = () => {
  const bears = useBearStore().bears
  return (
    <div className="flex justify-center">
      <span className="text-lg font-bold mr-3">The counts of bears: {bears}</span>
      <BearButton></BearButton>
    </div>
  )
}

export default BearCounter

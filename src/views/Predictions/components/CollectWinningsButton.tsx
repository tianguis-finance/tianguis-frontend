import React from 'react'
import { Button, ButtonProps, useModal } from '@tianguis-finance/uikit'
import CollectRoundWinningsModal from './CollectRoundWinningsModal'

interface CollectWinningsButtonProps extends ButtonProps {
  hasClaimed: boolean
  onSuccess?: () => Promise<void>
}

const CollectWinningsButton: React.FC<CollectWinningsButtonProps> = ({ hasClaimed, onSuccess, children, ...props }) => {
  const [onPresentCollectWinningsModal] = useModal(<CollectRoundWinningsModal onSuccess={onSuccess} />, false)

  return (
    <Button onClick={onPresentCollectWinningsModal} disabled={hasClaimed} {...props}>
      {children}
    </Button>
  )
}

export default CollectWinningsButton

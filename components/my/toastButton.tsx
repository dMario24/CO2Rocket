'use client'

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"
import { Button } from '@/components/ui/button'

export const ToastButton = () => {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "로켓 발사",
          description: "10 9 8 7 6 5 ...",
          action: <ToastAction altText="발사 취소">발사 취소</ToastAction>,
        })
      }}
    >
      countdown
    </Button>
  )
}

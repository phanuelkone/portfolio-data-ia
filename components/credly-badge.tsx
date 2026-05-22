'use client'

import { useEffect } from 'react'

const credlyBadgeId = 'c0069127-cda3-40b9-b911-7732e1541e0b'

export const credlyBadgeUrl = `https://www.credly.com/badges/${credlyBadgeId}/public_url`

export function CredlyBadge() {
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-credly-embed="true"]',
    )

    if (existingScript) {
      return
    }

    const script = document.createElement('script')
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js'
    script.async = true
    script.dataset.credlyEmbed = 'true'
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <div
      className="min-h-[270px] min-w-[150px]"
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id={credlyBadgeId}
      data-share-badge-host="https://www.credly.com"
    />
  )
}

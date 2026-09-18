import { company } from '@/data/company'
import { cdn } from '@/lib/img'

/**
 * The Business Guide Services badge.
 *
 * `mark` is the circular swirl on its own, for light surfaces where the white
 * curved wordmark would disappear. `full` is the complete badge — English and
 * Arabic wordmarks included — with its royal-blue plate removed so it sits
 * cleanly on navy.
 */
export function Logo({
  variant = 'mark',
  className = '',
}: {
  variant?: 'mark' | 'full'
  className?: string
}) {
  if (variant === 'full') {
    return (
      <img
        src={cdn('/img/logo-on-dark.png', { w: 340 })}
        alt={`${company.name} logo`}
        width={329}
        height={395}
        loading="lazy"
        className={className}
      />
    )
  }

  return (
    <img
      src={cdn('/img/logo-mark.png', { w: 128 })}
      alt={`${company.name} logo`}
      width={236}
      height={236}
      className={className}
    />
  )
}

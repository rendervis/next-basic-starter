import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createUrl(
  pathname: string,
  params: URLSearchParams
) {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`
  return `${pathname}${queryString}`
}

export function pluralString(
  count: number | undefined,
  singular: string,
  plural: string
): string {
  if (!count) {
    return ''
  } else if (count === 1) {
    return singular
  } else {
    return plural
  }
}

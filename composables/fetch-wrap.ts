export interface FetchWrapOptions {
  disabled?: MaybeRefOrGetter<boolean>
}

export async function useFetchWrap<T>(cb: () => Promise<T> | T, options?: FetchWrapOptions) {
  const { disabled } = options || {}

  if (!toValue(disabled))
    return await cb()
  return Promise.resolve(null)
}

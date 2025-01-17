export function useOwService() {
  const config = useRuntimeConfig()

  function useCitySearch(name: Ref<string>, options?: FetchWrapOptions) {
    return useAsyncData(
      `city-search${name}`,
      () => useFetchWrap(() => owApi.searchCity(config.public.owApiSecret, name.value), options),
      { watch: [name, () => options?.disabled] },
    )
  }

  function useCityDetail(lat: MaybeRefOrGetter<string>, lon: MaybeRefOrGetter<string>, options?: FetchWrapOptions) {
    return useAsyncData(
      `city-detail${lat}${lon}`,
      () => useFetchWrap(() => owApi.getCityDetail(
        config.public.owApiSecret,
        toValue(lat),
        toValue(lon),
      ), options),
      { watch: [() => toValue(lat), () => toValue(lon), () => options?.disabled] },
    )
  }

  return {
    useCitySearch,
    useCityDetail,
  }
}

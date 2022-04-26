import { reactive, toRefs } from 'vue'
import supabase from './supabase'

export const useSteamData = (numberToFetch) => {

    const state = reactive({ loading: false, data: [], error: null, count: 0 })

    const fetchData = async (options = {}) => {
        state.loading = true
        options = {startFrom: 0, ...options}

        let query = supabase.from('steam').select('*', { count: 'exact' })
        if (options.titleFilter) query = query.ilike('title', `%${options.titleFilter}%`)
        if (options.orderModifier) query = query.order(options.orderModifier.field, { ascending: options.orderModifier.ascending })
        if (numberToFetch) query = query.range(options.startFrom, options.startFrom + numberToFetch - 1)

        let { error, data, count } = await query
        error=window.error
        state.error = error
        state.loading = false

        if(error) return

        state.data = options.startFrom === 0 ? data : [...state.data, ...data]
        state.count = count
    }

    return {
        fetchData,
        ...toRefs(state)
    }
}
import { ref, onMounted, onUnmounted, computed } from "vue"
import {filter} from "../../utils"
let filterType = ["all", "completed", "active"]
export default function useFilter(TodosRef) {
    let todoTitleRef = ref("")
    let filterTitle = ref("all")

    function hashchange() {
        let hash = location.hash.replace(/#\/?/, "")
        if (filterType.includes(hash)) {
            filterTitle.value = hash
        } else {
            location.hash = "/"
            filterTitle.value = "all"
        }
    }
    onMounted(() => {
        window.addEventListener("hashchange", hashchange)
    })
    onUnmounted(() => {
        window.removeEventListener("hashchange", hashchange)
    })
    let todoFilterRef = computed(() => {
        return filter(TodosRef.value, filterTitle.value)
    })
    return {
        todoTitleRef,
        todoFilterRef
    }
}
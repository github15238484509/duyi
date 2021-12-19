import { computed, watch, ref } from "vue";
const colors = ["red", "blue", "green", "pink", "yellow", "gray"]
import gsap from "gsap"

function changenum(obj, opstion = {}) {
    let timer = null
    let speed = 0.5
    let count = Object.keys(opstion).length

    timer = setInterval(() => {
        var allcount = 0
        for (const key in opstion) {
            if (Object.hasOwnProperty.call(opstion, key)) {
                var current = obj[key]
                if (current < opstion[key]) {
                    current = obj[key] + speed
                } else {
                    allcount++
                    current = opstion[key]
                    if (allcount == count) {
                        clearInterval(timer)
                    }
                }
                obj[key] = current;
            }
        }
    }, 60)
}

export function getRightLists(dataRef, size) {
    console.log(dataRef);
    let maxValue = computed(() => {
        return Math.max(...dataRef.value.map(it => it.value))
    })

    let newResult = computed(() => {
        return dataRef.value.map((it, i) => {
            return {
                ...it,
                color: colors[(i % colors.length)],
                size: it.value / maxValue.value * size
            }
        })
    })

    let result = ref([])
    watch(newResult, () => {
        for (let i = 0; i < newResult.value.length; i++) {
            if (!result.value[i]) {
                result.value[i] = {
                    ...newResult.value[i],
                    size: 0,
                    value: 0
                }
            }
            gsap.to(result.value[i], {
                size: newResult.value[i].size,
                value: newResult.value[i].value
            })
        }
    })


    return result
}

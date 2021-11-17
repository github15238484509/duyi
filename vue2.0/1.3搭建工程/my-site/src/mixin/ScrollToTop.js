import Events from "@/Event";
import { throttle } from "@/utils"
export default function ScrollToTop(ref = "container") {
    return {
        data() {
            return {
                _MainScrollEvent: null
            }
        },
        methods: {
            mainScrollToTop() {
                this.$refs[ref].scrollTop = 0;
            },
            MainScrollEvent(e) {
                Events.$emit("commentScroll",e.target.scrollTop)
            }
        },
        beforeDestroy() {
            this.$refs[ref].removeEventListener("scroll", this._MainScrollEvent)
            Events.$off("scrollMainTop", this.mainScrollToTop);
        },
        mounted() {
            this._MainScrollEvent = throttle(this.MainScrollEvent,50)
            this.$refs[ref].addEventListener("scroll", this._MainScrollEvent)


            Events.$on("scrollMainTop", this.mainScrollToTop);
        }
    }
}
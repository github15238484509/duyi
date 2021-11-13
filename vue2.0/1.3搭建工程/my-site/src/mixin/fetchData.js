export default function (defaultDataType = []) {
    return {
        data() {
            return {
                lists: defaultDataType,
                isLoading: true
            }
        },
        async created() {
            this.lists = await this.getData()
            this.isLoading = false
        }
    }
}
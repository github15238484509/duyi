<template>
    <div class="test-container">
            <Loading/>
    </div>
</template>

<script>
import Loading from "./"
export default {
    components:{
        Loading
    }
}
</script>

<style>
.test-container{
    width: 400px;
    height: 400px;
    border: 1px solid red;
    position: relative;
}
</style>